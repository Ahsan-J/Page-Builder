import { AppThunkDispatch } from "..";
import { IAuthReducer, authActions } from "./auth.reducer";

export const setAuthUser = (payload: IAuthReducer['user']) => (dispatch: AppThunkDispatch) => {
    const { setAuthUser } = authActions;
    return dispatch(setAuthUser(payload));
}