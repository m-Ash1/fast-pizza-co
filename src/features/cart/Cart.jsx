import { useDispatch, useSelector } from "react-redux";
import Button from "../../UI/Button";
import LinkButton from "../../UI/LinkButton";
import CartItem from "./CartItem";
import { clearCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";
function Cart() {
  const shoppingCart = useSelector((store) => store.cart.shoppingCart);
  const username = useSelector((store) => store.user.username);
  const dispatch = useDispatch();
  function handleClear() {
    dispatch(clearCart());
  }
  if (shoppingCart.length === 0) return <EmptyCart />;
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {shoppingCart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button onClick={handleClear} type="secondary">
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
