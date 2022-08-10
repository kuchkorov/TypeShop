import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import ProductList from "./components/ProductList";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import ProductDetial from "./components/ProductDetial";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import Admin from "./components/Dashboard/App.js";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/products/:id' element={<ProductDetial />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
