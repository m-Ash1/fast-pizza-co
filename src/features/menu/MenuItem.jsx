/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import Button from "../../UI/Button";
import { formatCurrency } from "../../utils/helpers";
import {
  addItem,
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
} from "../cart/cartSlice";
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const shoppingCart = useSelector((store) => store.cart.shoppingCart);
  const dispatch = useDispatch();
  function handleAdd() {
    const pizzaItem = {
      pizzaId: id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice,
    };
    dispatch(addItem(pizzaItem));
  }

  function handleDelete() {
    dispatch(deleteItem(id));
  }
  function handleAddOne() {
    dispatch(increaseItemQuantity(id));
  }
  function handleDeleteOne() {
    dispatch(decreaseItemQuantity(id));
  }
  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? `opacity-70 grayscale` : ``}`}
      />
      <div className="flex flex-grow flex-col pt-0.5 text-sm sm:text-base">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex flex-row items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {!soldOut &&
            (shoppingCart.find((item) => item.pizzaId === id) ? (
              <div className="flex gap-3 sm:gap-8">
                <div className="flex items-center gap-2 md:gap-3">
                  <Button onClick={handleDeleteOne} type="circle">
                    -
                  </Button>
                  <span className="text-sm font-medium">
                    {shoppingCart.find((item) => item.pizzaId === id).quantity}
                  </span>
                  <Button onClick={handleAddOne} type="circle">
                    +
                  </Button>
                </div>
                <Button onClick={handleDelete} type="small">
                  Delete
                </Button>
              </div>
            ) : (
              <Button onClick={handleAdd} type="small">
                Add to cart
              </Button>
            ))}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
