import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./layouts/MainLayout";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./assets/scss/Theme.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
