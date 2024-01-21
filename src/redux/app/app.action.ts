import { AppThunkDispatch } from "..";
import { IAppReducer, authActions } from "./app.reducer";

export const setLayoutProps = (payload: IAppReducer['layout']) => (dispatch: AppThunkDispatch) => {
    const { setLayoutPropsAction } = authActions;
    return dispatch(setLayoutPropsAction(payload))
}
