import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import AllReducers from "../reducers";
import thunk from "redux-thunk";

const store = createStore(
  AllReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
