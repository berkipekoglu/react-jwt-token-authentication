import { combineReducers } from "redux";

import tokenReducer from "./tokenReducer";
import authReducer from "./authReducer";
import dataReducer from "./dataReducers";

const reducer = combineReducers({
  auth: authReducer,
  token: tokenReducer,
  data: dataReducer,
  
});

export default reducer;
