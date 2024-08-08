import { useDispatch, useSelector } from "react-redux";
import Button from "../../UI/Button";
import { formatCurrency } from "../../utils/helpers";
import {
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
} from "./cartSlice";
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const shoppingCart = useSelector((store) => store.cart.shoppingCart);
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteItem(pizzaId));
  }
  function handleAddOne() {
    dispatch(increaseItemQuantity(pizzaId));
  }
  function handleDeleteOne() {
    dispatch(decreaseItemQuantity(pizzaId));
  }

  return (
    <li className="justify-between py-3 sm:flex sm:items-center">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-3">
        <p className="mr-2 text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <div className="flex gap-3 sm:gap-6">
          <div className="flex items-center gap-2 md:gap-3">
            <Button onClick={handleDeleteOne} type="circle">
              -
            </Button>
            <span className="text-sm font-medium">
              {shoppingCart.find((item) => item.pizzaId === pizzaId).quantity}
            </span>
            <Button onClick={handleAddOne} type="circle">
              +
            </Button>
          </div>
          <Button onClick={handleDelete} type="small">
            Delete
          </Button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
