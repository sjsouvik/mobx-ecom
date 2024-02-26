import { observer } from "mobx-react-lite";
import { Layout } from "../../components";
import { Horizontal } from "../../components/";
import { pluralize } from "../../helper/utils";
import cartStore from "../../stores/CartStore";

export const Cart = observer(() => {
  return (
    <Layout>
      <h1>{`My Cart (${pluralize(cartStore.length, "item")})`}</h1>
      {cartStore.length > 0 && (
        <p
          style={{ marginTop: "1rem" }}
        >{`Total Price: ${cartStore.totalPrice}`}</p>
      )}
      {cartStore.cart.map((item) => (
        <Horizontal key={item.id} item={item} />
      ))}
      {cartStore.length === 0 && (
        <p style={{ marginTop: "5rem" }}>
          :( Your Cart is empty! Please add some items.
        </p>
      )}
    </Layout>
  );
});
