import React from "react";
import { Link } from "react-router-dom";
import { IconBasket } from "../../utils/Icons";
import "../../assets/scss/_carts.scss";
import CategoryImage from "../../assets/images/category.png";

const Cart = () => {
  return (
    <div className="cart">
      <Link to="/product/1" className="cart-image">
        <img src={CategoryImage} alt="" />
      </Link>
      <div className="cart-body">
        <Link to="/product/1" className="cart-title">
          Маргарита
        </Link>
        <div className="cart-desc">
          Увеличенная порция моцареллы из цельного молока, томаты, итальянские
          травы, томатный соус
        </div>
        <div className="cart-footer">
          <div className="cart-price">от 48.000 сум</div>
          <button className="cart-basket">
            <IconBasket />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
