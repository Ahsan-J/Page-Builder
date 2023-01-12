import { dispatchAPI, IApiParam } from "../helper/api";
import { setCountries, setGroupRoutes, setRoles, setRoutes } from "../redux/actions/app";
import { AppThunkDispatch, RootState } from "../redux/types";

export const getPage = (params:IApiParam = {}) => (dispatch: AppThunkDispatch) => {
    params.method = "GET";
    params.path = "api/hello"

    return dispatch(dispatchAPI(params));
};