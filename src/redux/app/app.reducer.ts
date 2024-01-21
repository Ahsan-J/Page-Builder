import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILayout, ITrackingParameters } from "@/model/app";
import { HYDRATE } from 'next-redux-wrapper';

export interface IAppReducer {
    layout: ILayout | null,
    interacted: boolean,
    splash: boolean,
    utmTracks: ITrackingParameters | null,
    mixpanelInit: boolean,
    shouldShowFlutter: boolean,
}

const initialState: IAppReducer = {
    layout: null,
    interacted: false,
    splash: true,
    utmTracks: null,
    mixpanelInit: false,
    shouldShowFlutter: false
}

const { reducer, actions } = createSlice({
    name: "appSlice",
    initialState,
    reducers: {
        setLayoutPropsAction: (state, action: PayloadAction<IAppReducer['layout']>) => {
            state.layout = action.payload;
        },
        setInteractionState: (state, action: PayloadAction<IAppReducer['interacted']>) => {
            state.interacted = action.payload;
        },
        setSplashState: (state, action: PayloadAction<IAppReducer['splash']>) => {
            state.splash = action.payload;
        },
        setUTMTracks: (state, action: PayloadAction<IAppReducer['utmTracks']>) => {
            state.utmTracks =  action.payload;
        },
        setMixpanelInit: (state, action: PayloadAction<IAppReducer['mixpanelInit']>) => {
            state.mixpanelInit = action.payload;
        },
        setFlutterAppVisibility: (state, action: PayloadAction<IAppReducer['shouldShowFlutter']>) => {
            state.shouldShowFlutter = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(HYDRATE, (state, {payload}: any) => {
            return {
                ...state,
                ...payload.app,
            }
        })
    },
});

export const authActions = actions;
export default reducer;
