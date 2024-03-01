import { observer } from "mobx-react-lite";
import { Link, useNavigate } from "react-router-dom";
import { isProductInCart } from "../../common/utils";
import cartStore from "../../stores/CartStore";
import { Product } from "../../pages/Home/Home";
import { ROUTES } from "../../common/constants";

import "./Card.css";

export const Vertical = observer((props: { item: Product }) => {
  const { item } = props;
  const navigate = useNavigate();

  const addToCartHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    item: Product
  ) => {
    const targetElement = e.target as HTMLElement;
    if (targetElement.textContent === "GO TO CART") {
      return navigate(ROUTES.cart);
    }

    cartStore.addToCart(item);
  };

  return (
    <li className="v-card">
      <Link to={`/products/${item.id}`}>
        <p>{item.title}</p>
        <p style={{ margin: "1rem" }}>{`Price: ${item.price}`}</p>
      </Link>
      <button
        style={{
          padding: "0.25rem",
        }}
        onClick={(e) => addToCartHandler(e, item)}
      >
        {isProductInCart(cartStore.cart, item.id)
          ? "GO TO CART"
          : "ADD TO CART"}
      </button>
    </li>
  );
});
