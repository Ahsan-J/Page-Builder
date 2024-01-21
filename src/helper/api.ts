import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { setAuthUser } from '../redux/auth/auth.action';
import { AppThunkDispatch, RootState } from '../redux';
import { urlRegex } from "./regex";
import { getFormData } from './utility';

const API_URL = `${process.env.NEXT_PUBLIC_BASE_URL || ""}`;

export interface IApiParam {
  path?: AxiosRequestConfig['url'];
  method?: AxiosRequestConfig['method'];
  data?: AxiosRequestConfig['data'];
  params?: AxiosRequestConfig['params'];
  cancelToken?: AxiosRequestConfig['cancelToken'],
  onUploadProgress?: AxiosRequestConfig['onUploadProgress'],
  onDownloadProgress?: AxiosRequestConfig['onDownloadProgress'],
  headers?: AxiosRequestConfig['headers'],
  responseType?: 'arraybuffer' | 'document' | 'json' | 'text' | 'stream' | 'blob'
}

export const apiCall = (params: IApiParam & { [key in string]: any }, onSuccess?: Function, onFailure?: Function) => new Promise<AxiosResponse['data']>((resolve, reject) => {

  if (params.method?.toUpperCase() == "POST") {
    if (!params.data) params.data = {}

    if (!(params.data instanceof FormData)) {
      params.data = getFormData(params.data);
    }
  }

  const requestingObject: AxiosRequestConfig = {
    url: getURL(params),
    headers: params.headers,
    method: params.method ? params.method : 'GET',
    data: params.data || undefined,
    params: params.params ? params.params : undefined,
    responseType: params.responseType || "json",
  };

  if (params.cancelToken)  // injecting the cancel token
    requestingObject.cancelToken = params.cancelToken


  if (params.onUploadProgress)
    requestingObject.onUploadProgress = params.onUploadProgress


  if (params.onDownloadProgress)
    requestingObject.onDownloadProgress = params.onDownloadProgress


  return axios(requestingObject)
    .then((response: AxiosResponse) => {
      // OnSuccess common validations

      if (response.data instanceof Blob) {
        response.data = new File([response.data], params.path?.substring(params.path?.lastIndexOf('/') + 1) || "", {
          type: response.headers['content-type']
        })
      }

      if (onSuccess) onSuccess(response.data, params);
      else console.log("onSuccess", requestingObject.url, response.data)
      resolve(response.data);
    })
    .catch((err: AxiosError) => {
      // onFailure common validations
      if (onFailure) onFailure(err, params);
      else console.log("onFailure", requestingObject.url, err, err.response?.data)
      reject(err);
    });
});

export const dispatchAPI = (params: IApiParam & { [key in string]: any }, onSuccess?: Function, onFailure?: Function) => (dispatch: AppThunkDispatch, getState: () => RootState) => {
  params.headers = dispatch(getHeaders(params));

  return apiCall(params).then((response: any) => {
    if (onSuccess) dispatch(onSuccess(response, params));
    return response;
  }).catch((e: AxiosError) => {
    if (e.response?.status == 401) {
      dispatch(setAuthUser(null))
    }
    if (onFailure) dispatch(onFailure(e, params));
    throw e;
  })
}

const getURL = (params: IApiParam) => {
  if (params.path) {
    if (urlRegex.test(params.path)) {
      return params.path
    }
    return `${API_URL}/${params.path}`;
  }
  else
    throw new Error('Path is undefined');

};

const getHeaders = (params: IApiParam) => (dispatch: AppThunkDispatch, getState: () => RootState) => {
  if (urlRegex.test(params.path || "")) return {}
  const access_token = getState().auth.user?.token;
  const a: { [key in string]: string } = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  if (access_token) {
    a['token'] = `${access_token}`;
  }

  if (Object.keys(a).length > 0)
    return a;
  return undefined;
};