import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "../src/style/navbar.css";
import "../src/style/dashboard.css";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import AppRoutes from "./Components/AppRoutes/AppRoutes";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap-grid.min.css"; // Grid System Only
import "bootstrap/dist/css/bootstrap-utilities.min.css"; // Utility Classes Only

function App() {
  return (
    <>
      <AppRoutes></AppRoutes>
    </>
  );
}

export default App;
