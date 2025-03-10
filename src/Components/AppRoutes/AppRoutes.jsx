import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "../Home";
import Dashboard from "../Dashboard";
import Refferal from "../Refferal";
import Community from "../Community";
import DownLine from "../DownLine";

function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/refferal" element={<Refferal />} />
          <Route path="/community" element={<Community />} />
          <Route path="/downline" element={<DownLine />} />
        </Routes>
      </Router>
    </>
  );
}

export default AppRoutes;
