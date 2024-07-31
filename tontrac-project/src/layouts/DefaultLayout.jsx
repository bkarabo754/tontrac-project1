// src/layouts/DefaultLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const DefaultLayout = () => {
  return (
    <div className="bg-background overflow-hidden h-screen">
      <Navbar />
      <div className="px-6 md:px-16" style={{ height: "calc(100% - 0px)" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
