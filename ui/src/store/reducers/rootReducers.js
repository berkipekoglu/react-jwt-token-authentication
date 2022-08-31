import { combineReducers } from "redux";

import tokenReducer from "./tokenReducer";
import authReducer from "./authReducer";

const reducer = combineReducers({
  auth: authReducer,
  token: tokenReducer
});

export default reducer;
