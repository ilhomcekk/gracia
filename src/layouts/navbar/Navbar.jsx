import React from "react";
import "../../assets/scss/_navbar.scss";
import ConstructorImage from "../../assets/images/navConstructor.svg";
import BasketImage from "../../assets/images/navBasket.svg";
import Title from "../../components/title/Title";
import { useNavigate } from "react-router-dom";

const Navbar = ({ name }) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-title">{<Title name={name} />}</div>
      <div className="navbar-icons">
        <div
          onClick={() => navigate("/constructor")}
          className="nav-icon constructor-image"
        >
          <img src={ConstructorImage} alt="" />
          <div className="icon-title">Конструктор</div>
        </div>
        <div className="nav-icon basket-image">
          <span className="count">1</span>
          <img src={BasketImage} alt="" />
          <div className="icon-title">Корзина</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
