import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import promiseMiddleware from "redux-promise";
import thunk from "redux-thunk";

import Routes from "./Routes";
import rootReducer from "./reducers";

const storeWithMiddleware = createStore(
  rootReducer,
  compose(
    applyMiddleware(promiseMiddleware, thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

ReactDOM.render(
  <Provider store={storeWithMiddleware}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
