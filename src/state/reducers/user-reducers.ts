import { UserActionType, UserRegisterType } from "../action-types/user";
import { UserAction, UserRegisterAction } from "../action/user";

export const userLoginReducer = (state = {}, action: UserAction) => {
  switch (action.type) {
    case UserActionType.USER_LOGIN_REQUEST:
      return { loading: true };
    case UserActionType.USER_LOGIN_SUCCESS:
      return { loading: false, userDetails: action.payload };
    case UserActionType.USER_LOGIN_FAILED:
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
