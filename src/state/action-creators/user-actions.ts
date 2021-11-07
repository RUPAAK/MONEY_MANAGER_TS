import { Dispatch } from "redux";
import { UserActionType } from "../action-types/user";
import { UserAction } from "../action/user";

type UserLogin = {
  email: string;
  password: string;
};

const userLogin =
  ({ email, password }: UserLogin) =>
  (dispatch: Dispatch<UserAction>, getState: any) => {
    dispatch({
      type: UserActionType.USER_LOGIN_SUCCESS,
      payload: {
        name: "must be string",
        email: "must be string",
        photoUrl: "must be string",
      },
    });
  };

export { userLogin };
