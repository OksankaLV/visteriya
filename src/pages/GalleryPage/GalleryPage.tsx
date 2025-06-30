import { useEffect, useState } from "react";
//import { categories } from "../../data/categories";
import "./GalleryPage.scss";
import { toggleCart } from "../../redux/cartSlice";
import { Bouquet, Category } from "../../data/bouquets";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { Link } from "react-router-dom";
import { getBouquets } from "../../api/getBouquets";
import { urlFor } from "../../imageUrl";
import  { getCategories } from '../../api/getCategories';


const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const dispatch = useDispatch();

  const [bouquets, setBouquets] = useState<Bouquet[]>([])
  const [categories, setCategories]=useState<Category[]>([])

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

  const filter = [
    <button
      key="Усі"
      onClickCapture={()=>handleFilterClick("Усі")}
      className={selectedCategory.length === 0 ? 'active' : ""}>
        Усі
      </button>,
        ...categories.map((category) => (
          <button
      key={category._id}
      onClick={() => handleFilterClick(category.title)}
      className={
        selectedCategory.includes(category.title)
          ? "active"
          : ""
      }
    >
      {category.title}
    </button>
  ))];

  const filteredBouquets =
    selectedCategory.length === 0
      ? bouquets
      : bouquets.filter((bouquet) =>
          //           bouquet.categories.some((category)=>selectedCategory.includes(category))
          selectedCategory.every((selected) =>
            
            bouquet.categories?.some(cat => cat.title === selected)
          )
        );


      useEffect(()=>{
        getBouquets().then(setBouquets).catch((err)=>{console.error("помилка завантаження із Sanity", err )})
        getCategories().then(setCategories).catch((err)=>{console.log("не вдалося отримати категорії", err)})
        // catch(()=>{
        //   import('../../data/bouquets').then((mod)=>{
        //     setBouquets(mod.bouquets)
        //   })
        // })  
      }, [])

  return (
    <section className="gallery-page">
      <h1>Галерея букетів</h1>
      <div className="gallery-page__filters">{filter}</div>
      <div className="gallery-page__gallery">
        {filteredBouquets.map((bouquet) => (
          <Link key={bouquet._id} to={`/product/${bouquet._id}`} className="gallery-page__product">
            <div className="bouquet-card">
              {bouquet.image && <img src={urlFor(bouquet.image).url()} alt={bouquet.name} />}
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
