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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// serviceWorker.unregister();
