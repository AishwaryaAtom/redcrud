import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  initializeCart,
  increaseQuantity,
  decreaseQuantity,
} from "./action/cartAction";

const Cart = ({ initialData }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  useEffect(() => {
      dispatch(initializeCart(initialData));
      
  }, [dispatch, initialData]);

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <div style={{marginTop:"10px"}}>
            <span>
              <img src={item.image} alt="img" />
            </span>
            <li key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
              <div className="d-flex align-items-center justify-content-center ">
                <button
                  className="btn btn-primary me-2"
                  style={{ marginRight: "5px" }}
                  onClick={() => dispatch(increaseQuantity(item.id))}
                >
                  +
                </button>
                <button
                  className="btn btn-primary me-2"
                  style={{ marginLeft: "5px" }}
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                >
                  -
                </button>
              </div>
            </li>
          </div>
        ))}
      </ul>
      <div>
        <strong>Total Quantity:</strong> {totalQuantity}
      </div>
      <div>
        <strong>Total Amount:</strong> ${totalAmount.toFixed(2)}
      </div>
    </div>
  );
};

export default Cart;
