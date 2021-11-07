import { UserActionType } from "../action-types/user";
import { UserAction } from "../action/user";

export const userLoginReducer = (state = {}, action: UserAction) => {
  switch (action.type) {
    case UserActionType.USER_LOGIN_REQUEST:
      return { loading: true, payload: null };
    case UserActionType.USER_LOGIN_SUCCESS:
      return { loading: false, userDetails: action.payload };
    case UserActionType.USER_LOGIN_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
