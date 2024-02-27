import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { Cart } from "../../pages/Cart/Cart";
import { ProductDetails } from "../../pages/ProductDetails/ProductDetails";
import { AllProducts } from "../../pages/AllProducts/AllProducts";
import { ROUTES } from "../../helper/constants";

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<Home />} />
      <Route path={ROUTES.products} element={<AllProducts />} />
      <Route path={ROUTES.productDetails} element={<ProductDetails />} />
      <Route path={ROUTES.cart} element={<Cart />} />
      <Route path="*" element="" />
    </Routes>
  );
};
