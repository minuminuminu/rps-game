import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Admin from "./pages/Admin";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App socket={socket} />}>
          <Route
            path="admin"
            element={<Admin socket={socket} name={"test"} />}
          />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
    <GlobalStyle />
  </>
  // </React.StrictMode>
);
