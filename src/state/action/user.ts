import { UserActionType } from "../action-types/user";
import { UserLoginResponse } from "../payload-types/user";

interface USER_LOGIN_REQUEST {
  type: UserActionType.USER_LOGIN_REQUEST;
  payload: null;
}

interface USER_LOGIN_SUCCESS {
  type: UserActionType.USER_LOGIN_SUCCESS;
  payload: UserLoginResponse;
}

interface USER_LOGIN_FAILED {
  type: UserActionType.USER_LOGIN_FAILED;
  payload: any;
}

export type UserAction =
  | USER_LOGIN_FAILED
  | USER_LOGIN_REQUEST
  | USER_LOGIN_SUCCESS;
