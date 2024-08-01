import React from "react";
import { Header, Footer } from "../components";
import { Outlet } from "react-router-dom";

export default function LayoutPage() {
  return (
    <div className="layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
