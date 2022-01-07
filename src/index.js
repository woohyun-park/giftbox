import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./styles/Page.css";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules";
import { composeWithDevTools } from "redux-devtools-extension";
import fbase from "./fbase";
import AppContainer from "./containers/AppContainer";

console.log(fbase);

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
