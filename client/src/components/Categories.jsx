import { categories } from "../data.js";
import "../styles/Categories.scss"
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <h1>Explorez les principales catégories</h1>
      <p>
      Explorez notre vaste sélection de locations de vacances, conçue pour satisfaire tous les types de voyageurs. 
      Immergez-vous dans la culture locale, profitez du confort de votre propre chez-soi, 
      et créez des souvenirs inoubliables dans la destination de vos rêves.
      </p>

      <div className="categories_list">
        {/* La méthode "slice" est utilisée pour obtenir une partie du tableau. 
        *  slice(1, 7) : renvoie les éléments de l'indice 1 à l'indice 6, excluant l'indice 0. Cela permet de ne pas afficher la première catégorie. */}
        {categories?.slice(1, 7).map((category, index) => (
          <Link to={`/properties/category/${category.label}`}>
            <div className="category" key={index}>
              <img src={category.img} alt={category.label} />
              <div className="overlay"></div>
              <div className="category_text">
                <div className="category_text_icon">{category.icon}</div>
                <p>{category.label}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;