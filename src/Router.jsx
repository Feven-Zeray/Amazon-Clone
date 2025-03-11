import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Auth from "./pages/Auth/Auth";
import Cart from "./pages/Cart/Cart";
import Orders from "./pages/Orders/Orders";
import Payment from "./pages/Payment/Payment";
import Results from "./pages/Results/Results";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./Component/ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe(
  "pk_test_51R0fqBJMM5bvjfAJb0MDAeaCEakiYZRqeQFwtH9WJ4PtYv772twPl3FQcEElgl7W85Jl1b6qqQuCFDi1DkkBAY0E00Om2AdJQ9"
);
function Routing() {

  return (
    <div>
      <BrowserRouter basename="/Amazon-Clone">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/orders"
            element={
              <ProtectedRoute
                msg={"you must log in to access your orders"}
                redirect={"/orders"}
              >
                <Orders />
              </ProtectedRoute>
            }
          />
          <Route
            path="/payment"
            element={
              <ProtectedRoute
                msg={"you must login to pay"}
                redirect={"/payment"}
              >
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
              </ProtectedRoute>
            }
          />
          {/* <Route path="/productDetail" element={<ProductDetail />} /> */}
          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing;
