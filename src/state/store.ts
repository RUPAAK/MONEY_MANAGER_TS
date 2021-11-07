import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { userLoginReducer } from "./reducers/user-reducers";

const reducers = combineReducers({
  userLogin: userLoginReducer,
});

const initialState = {};

export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export type State = ReturnType<typeof reducers>;
