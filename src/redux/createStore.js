import {
  applyMiddleware,
  combineReducers,
  createStore as createReduxStore
} from "redux";
import {
  routerMiddleware as createRouterMiddleware,
  routerReducer
} from "react-router-redux";
import todos from "./modules/todos";

const createStore = (history, initialState) => {
  const routerMiddleware = createRouterMiddleware(history);

  const middlewares = applyMiddleware(
    routerMiddleware
  );

  const rootReducer = combineReducers({
    routing: routerReducer,
    ...todos
  });

  return createReduxStore(rootReducer, initialState, middlewares);
};

export default createStore;
