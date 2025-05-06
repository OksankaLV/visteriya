import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { Bouquet, bouquets } from "../../data/bouquets";
import { useNavigate } from "react-router-dom";
import "./ProductPage.scss";

function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product: Bouquet | undefined = bouquets.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return <div>Товар не знайдено</div>;
  }
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-page">
      <button onClick={() => navigate(-1)} className="back-button">
        {" "}
        Назад{" "}
      </button>
      <h1>{product.name}</h1>

      <div className="product-page__description">
        <img className="product-page__image" src={product.image} alt="foto" />
        <p>{product.description}</p>
      </div>
      <p>Орієнтовна вартість: {product.price} грн</p>
      <button className="button" onClick={handleAddToCart}>
        Замовити
      </button>
    </div>
  );
}

export default ProductPage;
