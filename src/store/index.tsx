import { routerMiddleware } from "connected-react-router";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducers";
import thunk from "redux-thunk";
import { createHashHistory } from "history";

export const history = createHashHistory();

export const store = createStore(
  rootReducer(history),
  compose(
    composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history)))
  )
);

export default store;
