import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/config/configStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import GlobalFont from './fonts/globalFont';
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
// yarn add react-is
root.render(
    <>
    <BrowserRouter />
    <Provider store={store}>
      <GlobalFont/>
        <App />
    </Provider>
    </>
);