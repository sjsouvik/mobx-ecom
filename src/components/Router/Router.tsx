import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { Cart } from "../../pages/Cart/Cart";
import { ROUTES } from "../../helper/constants";

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<Home />} />
      <Route path={ROUTES.cart} element={<Cart />} />
      <Route path="*" element="" />
    </Routes>
  );
};
