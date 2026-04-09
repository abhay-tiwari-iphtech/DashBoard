import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import DashBoard1 from "./components/dashboard/DashBoard1";
import { SidebarProvider } from "./components/dashboard/SIdeBarContent";

const App = () => {
  return (

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/dashboard" element={<DashBoard1 />} />
      </Routes>
  );
};

export default App;