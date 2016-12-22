import {
  applyMiddleware,
  combineReducers,
  createStore as createReduxStore
} from "redux";
import {
  routerMiddleware as createRouterMiddleware,
  routerReducer
} from "react-router-redux";

const createStore = (history) => {
  const routerMiddleware = createRouterMiddleware(history);

  const middlewares = applyMiddleware(
    routerMiddleware
  );

  const rootReducer = combineReducers({
    routing: routerReducer
  });

  return createReduxStore(rootReducer, middlewares);
};

export default createStore;
