import { combineReducers } from "redux";

import { userLoginReducer } from "./user-reducers";

export const reducers = combineReducers({
  userLogin: userLoginReducer,
});

export type State = ReturnType<typeof reducers>;
