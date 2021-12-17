import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

function PrivateRoute({ children }) {
  const auth = localStorage.getItem("userName");
  return auth ? children : <Navigate to="/" />;
}

const AppRouter = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/Home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
