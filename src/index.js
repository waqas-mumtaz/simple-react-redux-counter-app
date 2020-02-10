import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import counterReducer from "./store/reducers/counter";
import resultReducer from "./store/reducers/result";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

// *** PURPOSE : REDUX DEV TOOL ****
// const logger = store => (
//     next => (
//         action => {
//             console.log('[middleware] dispatching', action);
//             const result = next(action);
//             console.log('[middleware] dispatching', store.getState());
//             return result
//         }
//     )
// )
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
