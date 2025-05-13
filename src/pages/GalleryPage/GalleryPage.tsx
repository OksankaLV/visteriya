import { useState } from "react";
import { categories } from "../../data/categories";
import "./GalleryPage.scss";
import { toggleCart } from "../../redux/cartSlice";
import { bouquets } from "../../data/bouquets";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { Link } from "react-router-dom";

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const dispatch = useDispatch();

  function handleFilterClick(category: string): void {
    if (category === "Усі") {
      setSelectedCategory([]);
    } else {
      setSelectedCategory((prev) =>
        prev.includes(category)
          ? prev.filter((c) => c !== category)
          : [...prev, category]
      );
    }
  }

  function handleAddToCart(product: any) {
    dispatch(addToCart(product));
    dispatch(toggleCart());
  }

  const filter = categories.map((category) => (
    <button
      key={category}
      onClick={() => handleFilterClick(category)}
      className={
        selectedCategory.includes(category) ||
        (category === "Усі" && selectedCategory.length === 0)
          ? "active"
          : ""
      }
    >
      {category}
    </button>
  ));

  const filteredBouquets =
    selectedCategory.length === 0
      ? bouquets
      : bouquets.filter((bouquet) =>
          //           bouquet.categories.some((category)=>selectedCategory.includes(category))
          selectedCategory.every((selected) =>
            bouquet.categories.includes(selected)
          )
        );

  return (
    <section className="gallery-page">
      <h1>Галерея букетів</h1>
      <div className="gallery-page__filters">{filter}</div>
      <div className="gallery-page__gallery">
        {filteredBouquets.map((bouquet) => (
          <Link key={bouquet.id} to={`/product/${bouquet.id}`} className="gallery-page__product">
            <div className="bouquet-card">
              {bouquet.image && <img src={`${import.meta.env.BASE_URL}${bouquet.image}`} alt={bouquet.name} />}
              <h3>{bouquet.name}</h3>
              <p>{bouquet.price}</p>
              <button
                className="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleAddToCart(bouquet);
                }}
              >
                Замовити
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default GalleryPage;
