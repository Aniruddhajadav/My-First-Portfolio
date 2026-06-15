import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";

import "./index.css";

import HomePage from "./landing_page/home/HomePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
);
