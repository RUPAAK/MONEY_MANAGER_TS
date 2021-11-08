import { Dispatch } from "redux";
import { instance } from "../../axios";
import { UserActionType, UserRegisterType } from "../action-types/user";
import { UserAction, UserRegisterAction } from "../action/user";
import { UserLoginResponse, UserRegisterResponse } from "../payload-types/user";

type UserLogin = {
  email: string;
  password: string;
};

type UserRegisterField = UserLogin & { name: string };

const userLogin = () => {};
const userRegister =
  ({ name, email, password }: UserRegisterField) =>
  async (dispatch: Dispatch<UserRegisterAction>, getState: any) => {
    try {
      dispatch({
        type: UserRegisterType.USER_REGISTER_REQUEST,
        payload: null,
      });

      const response: { data: UserRegisterResponse } = await instance.post(
        "/auth/signup",
        {
          name,
          email,
          password,
        }
      );

      dispatch({
        type: UserRegisterType.USER_REGISTER_SUCCESS,
        payload: response.data.data,
      });

      await localStorage.setItem(
        "accessToken",
        JSON.stringify(response.data.accessToken)
      );
    } catch (error) {
      dispatch({
        type: UserRegisterType.USER_REGISTER_FAILED,
        payload: (error as Error).message
          ? (error as Error).message
          : "Registration Failed",
      });
    }
  };

export { userLogin, userRegister };
