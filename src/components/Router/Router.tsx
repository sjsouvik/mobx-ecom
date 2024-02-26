import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import Cart from "../../pages/Cart/Cart";

export const ROUTES = {
  home: "/",
  cart: "/cart",
};

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<Home />} />
      <Route path={ROUTES.cart} element={<Cart />} />
      <Route path="*" element="" />
    </Routes>
  );
};

export default Router;
