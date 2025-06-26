import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { Bouquet } from "../../data/bouquets";
import { useNavigate } from "react-router-dom";
import "./ProductPage.scss";
import { toggleCart } from "../../redux/cartSlice";
import { useEffect, useState } from "react";
import { getBouquetById } from "../../api/getBouquets";
import { urlFor } from "../../imageUrl";

function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [product, setProduct] = useState<Bouquet>()

  // const product: Bouquet | undefined = bouquets.find(
  //   (p) => p._id === id
  // );
  useEffect(()=>{
  })
    getBouquetById(id).then(data=>setProduct(data[0]));

  if (!product) {
    return <div>Товар не знайдено</div>;
  }
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    dispatch(toggleCart());
  };

  return (
    <div className="product-page">
      <button onClick={() => navigate(-1)} className="back-button">
        {" "}
        Назад{" "}
      </button>
      <h1>{product.name}</h1>

      <div className="product-page__description">
        <img className="product-page__image" src={urlFor(product.image).url()} alt="foto" />
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
