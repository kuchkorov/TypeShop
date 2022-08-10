import React from "react";
import { Route, Routes } from "react-router-dom";

import "./assets/scss/style.css";
import Home from "./components/Home";

function Admin() {
  return (
    <>
      <Routes>
        <Route path='/admin' element={<Home />} />
      </Routes>
    </>
  );
}

export default Admin;
