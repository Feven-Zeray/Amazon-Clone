import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Signup from "./pages/Auth/Signup.jsx";
import Cart from "./pages/Cart/Cart";
import Orders from "./pages/Orders/Orders";
import Payment from "./pages/Payment/Payment";
import Results from "./pages/Results/Results";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/payment" element={<Payment />} />
          {/* <Route path="/productDetail" element={<ProductDetail />} /> */}
          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing;
