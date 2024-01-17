import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { ProductAdd } from "../pages/ProductAdd";
import { ProductDetails } from "../pages/ProductDetails";
import { ProductEdit } from "../pages/ProductEdit";
import { Orders } from "../pages/Orders";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductAdd />} />
      <Route path="/products/details/:id" element={<ProductDetails />} />
      <Route path="/products/edit/:id" element={<ProductEdit />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  );
}
