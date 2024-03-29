import { observer } from "mobx-react-lite";
import { Horizontal } from "../../components/";
import { pluralize } from "../../common/utils";
import cartStore from "../../stores/CartStore";

import "./Cart.css";

export const Cart = observer(() => {
  return (
    <>
      <h1 className="text-center">{`My Cart (${pluralize(
        cartStore.length,
        "item"
      )})`}</h1>
      {cartStore.length > 0 && (
        <p
          style={{ marginTop: "1rem" }}
        >{`Total Price: ${cartStore.totalPrice}`}</p>
      )}
      {cartStore.cart.map((item) => (
        <Horizontal key={item.id} item={item} />
      ))}
      {cartStore.length === 0 && (
        <p className="text-center" style={{ marginTop: "5rem" }}>
          :( Your Cart is empty! Please add some items.
        </p>
      )}
    </>
  );
});
