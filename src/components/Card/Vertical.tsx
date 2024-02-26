import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { isProductInCart } from "../../helper/utils";
import cartStore from "../../stores/CartStore";
import { ROUTES } from "../Router/Router";
import { Product } from "../../pages/Home/Home";

const Vertical = ({ item }: { item: Product }) => {
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
    <div
      key={item.id}
      style={{
        border: "1px solid black",
        padding: "1rem",
        borderRadius: "0.5rem",
      }}
    >
      <p>{item.title}</p>
      <p style={{ margin: "1rem" }}>{`Price: ${item.price}`}</p>
      <button
        style={{
          padding: "0.25rem",
          cursor: "pointer",
        }}
        onClick={(e) => addToCartHandler(e, item)}
      >
        {isProductInCart(cartStore.cart, item.id)
          ? "GO TO CART"
          : "ADD TO CART"}
      </button>
    </div>
  );
};

export default observer(Vertical);
