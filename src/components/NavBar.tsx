import { Link } from "react-router-dom";
import "../styles/NavBar.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { toggleCart } from "../redux/cartSlice";
import Cart from "../pages/Cart/Cart";

const NavBar = () => {
  const dispatch = useDispatch();
  const cartItemsCount = useSelector((state: RootState) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <>
      <nav className="navbar">
        <div className="navbar__links">
          <Link className="navbar__link" to="/">
            {" "}
            Головна{" "}
          </Link>
          <Link className="navbar__link" to="/gallery">
            Галерея
          </Link>
          <Link className="navbar__link" to="/workshops">
            {" "}
            Майстер-класи{" "}
          </Link>
          <button
            className="navbar__link"
            onClick={() => dispatch(toggleCart())}
          >
            Замовлення
            {cartItemsCount > 0 && (
              <span className="navbar__cart-count">{cartItemsCount}</span>
            )}
          </button>
        </div>
      </nav>
      <Cart />
    </>
  );
};

export default NavBar;
