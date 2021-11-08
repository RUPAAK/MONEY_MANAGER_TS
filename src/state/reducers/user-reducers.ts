import { UserLoginType, UserRegisterType } from "../action-types/user";
import { UserLoginAction, UserRegisterAction } from "../action/user";

export const userLoginReducer = (state = {}, action: UserLoginAction) => {
  switch (action.type) {
    case UserLoginType.USER_LOGIN_REQUEST:
      return { loading: true };
    case UserLoginType.USER_LOGIN_SUCCESS:
      return { loading: false, userDetails: action.payload };
    case UserLoginType.USER_LOGIN_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action: UserRegisterAction) => {
  switch (action.type) {
    case UserRegisterType.USER_REGISTER_REQUEST:
      return { loading: true };
    case UserRegisterType.USER_REGISTER_SUCCESS:
      return { loading: false, userDetails: action.payload };
    case UserRegisterType.USER_REGISTER_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
