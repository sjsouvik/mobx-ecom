import { Product } from "../../pages/Home/Home";
import cartStore from "../../stores/CartStore";

export const Horizontal = (props: { item: Product }) => {
  const { item } = props;

  return (
    <div
      key={item.id}
      style={{
        border: "1px solid black",
        padding: "1rem",
        margin: "1rem",
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
        onClick={() => cartStore.removeFromCart(item.id)}
      >
        REMOVE
      </button>
    </div>
  );
};
