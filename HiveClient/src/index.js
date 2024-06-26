import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StoreContext, store } from "./app/stores/store.ts";
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-calendar/dist/Calendar.css';
import 'react-datepicker/dist/react-datepicker.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StoreContext.Provider value={store}>
    <React.StrictMode> 
      <App />
    </React.StrictMode>
  </StoreContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
