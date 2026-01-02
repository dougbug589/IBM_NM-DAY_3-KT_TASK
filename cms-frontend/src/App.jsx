import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />
        <Dashboard />
      </div>
    </>
  );
}

export default App;