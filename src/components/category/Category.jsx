import React from "react";
import { Link } from "react-router-dom";
import "../../assets/scss/_carts.scss";
import CategoryImage from "../../assets/images/category.png";

const Category = () => {
  return (
    <Link to="/products-by-category/1" className="category">
      <img src={CategoryImage} alt="" />
      <div className="category-name">Пиццы</div>
    </Link>
  );
};

export default Category;
