import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.scss";
import { RootState } from "../../redux/store";
import {
  toggleCart,
  removeFromCart,
  clearCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../redux/cartSlice";
import { sendOrderToTelegram } from "../../api/telegramApi";

const Cart = () => {
  const { items, isOpen } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const [tel, setTel] = useState("+380");
  const [comment, setComment] = useState("");
  const telReq = /^\+380\d{9}$/;
  const handleSubmitOrder = async () => {
    const orderDetails = {
      items,
      total: totalPrice,
      tel,
      comment,
    };
    if (items.length === 0) {
      alert("Додайте товари в замовлення");
      return;
    }

    if (!telReq.test(tel.trim())) {
      alert("Введіть номер телефону у форматі +380...");
      return;
    }
    try {
      await sendOrderToTelegram(orderDetails);
      alert("Замовлення відправлено, чекайте на дзвінок.");
      dispatch(clearCart());
    } catch {
      alert("Помилка при надсиланні замовлення. Повторіть спробу");
    }
  };

  const isFormValid = telReq.test(tel.trim()) && items.length > 0;

  return (
    <>
      {isOpen && (
        <div className="cart-backdrop" onClick={() => dispatch(toggleCart())} />
      )}
      <div className={`cart ${isOpen ? "open" : ""}`}>
        <div className="cart__header">
          <h2>Ваше замовлення</h2>
        </div>
        <div className="cart__items">
          {items.length === 0 ? (
            <p>Порожньо</p>
          ) : (
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  <p>
                    {item.name}{" "}
                    <button
                      onClick={() => dispatch(decreaseQuantity(item.name))}
                    >
                      -
                    </button>
                    {item.quantity}{" "}
                    <button
                      onClick={() => dispatch(increaseQuantity(item.name))}
                    >
                      +
                    </button>{" "}
                    x {item.price} =
                  </p>
                  <p>
                    {" "}
                    {item.price * item.quantity} грн
                    <button
                      className="button"
                      onClick={() => {
                        dispatch(removeFromCart(item.name));
                      }}
                    >
                      Видалити
                    </button>{" "}
                  </p>
                </li>
              ))}{" "}
            </ul>
          )}
        </div>
        <div className="cart__footer">
          <h4> Загальна сума: {totalPrice} грн</h4>
          <p>
            Увага! Вартість є орієнтовною і може відрізнятися в залежності від
            наповнення виробу.
          </p>
          <label>
            {" "}
            Телефон:{" "}
            <input
              type="tel"
              placeholder="+380..."
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              required
            />
          </label>
          <textarea
            name=""
            id=""
            placeholder="Коментар до замовлення. Ваші побажання щодо наповнення і т.п."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <div className="cart-buttons">
            <button onClick={() => dispatch(clearCart())}>Очистити</button>
            <button onClick={() => dispatch(toggleCart())}>Закрити</button>
          </div>
          <button
            type="submit"
            disabled={!isFormValid}
            onClick={handleSubmitOrder}
          >
            {" "}
            Оформити замовлення{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
