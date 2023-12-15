import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/ProductPage";
import SigleProduct from "./pages/SingleProductPage";
import Cart from "./pages/Cart";
import { CartContext } from "./contexts/CartContext";
const App = () => {
  // Get cart data from local storage on initial render
  const [cart, setCart] = useState(() => {
    const storedCart = window.localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : {};
  });

  // store cart data in local storage
  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<SigleProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartContext.Provider>
  );
};

export default App;
