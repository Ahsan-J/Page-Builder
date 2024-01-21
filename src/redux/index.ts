import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import { createWrapper } from 'next-redux-wrapper'

export const createReduxStore = (preloadedState = {}) => {
    return configureStore({
        reducer,
        preloadedState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                immutableCheck: false,
                serializableCheck: false,
            }),
        devTools: process.env.NODE_ENV === 'development',
    });
};

export type AppStore = ReturnType<typeof createReduxStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppThunkDispatch = AppStore["dispatch"];
export const wrapper = createWrapper<AppStore>(createReduxStore, { debug: false });