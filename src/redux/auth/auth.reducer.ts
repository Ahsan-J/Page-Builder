import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "@/model/user";
import { HYDRATE } from 'next-redux-wrapper';

export interface IAuthReducer {
    user?: IUser | null
}

const initialState: IAuthReducer = {}

const { reducer, actions } = createSlice({
    name: "AuthSlice",
    initialState,
    reducers: {
        setAuthUser: (state, action: PayloadAction<IAuthReducer['user']>) => {
            state.user = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(HYDRATE, (state, {payload}: any) => {
            return {
                ...state,
                ...payload.auth,
            }
        })
    },
});

export const authActions = actions;
export default reducer;