import { combineReducers } from "redux";

import tokenReducer from "./tokenReducer";
import authReducer from "./authReducer";
import dataReducer from "./dataReducers";
import modalReducer from "./modalReducer";

const reducer = combineReducers({
  auth: authReducer,
  token: tokenReducer,
  data: dataReducer,
  modal: modalReducer,
});

export default reducer;
