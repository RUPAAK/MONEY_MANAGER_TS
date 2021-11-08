import { UserLoginType, UserRegisterType } from "../action-types/user";
import { UserLoginResponse, UserRegisterResponse } from "../payload-types/user";

/**
 * * LOGIN USER INTERFACE
 */
interface USER_LOGIN_REQUEST {
  type: UserLoginType.USER_LOGIN_REQUEST;
  payload: null;
}

interface USER_LOGIN_SUCCESS {
  type: UserLoginType.USER_LOGIN_SUCCESS;
  payload: UserLoginResponse["data"];
}

interface USER_LOGIN_FAILED {
  type: UserLoginType.USER_LOGIN_FAILED;
  payload: any;
}

export type UserLoginAction =
  | USER_LOGIN_FAILED
  | USER_LOGIN_REQUEST
  | USER_LOGIN_SUCCESS;

/**
 * * REGISTER USER INTERFACE
 */

interface USER_REGISTER_REQUEST {
  type: UserRegisterType.USER_REGISTER_REQUEST;
  payload: null;
}
interface USER_REGISTER_SUCCESS {
  type: UserRegisterType.USER_REGISTER_SUCCESS;
  payload: UserRegisterResponse["data"];
}
interface USER_REGISTER_FAILED {
  type: UserRegisterType.USER_REGISTER_FAILED;
  payload: any;
}

export type UserRegisterAction =
  | USER_REGISTER_REQUEST
  | USER_REGISTER_SUCCESS
  | USER_REGISTER_FAILED;
