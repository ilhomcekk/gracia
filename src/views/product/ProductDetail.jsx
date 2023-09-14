import React from "react";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import Navbar from "../../layouts/navbar/Navbar";
import "../../assets/scss/_detail.scss";
import CategoryImage from "../../assets/images/category.png";
import { IconBasket } from "../../utils/Icons";
import Title from "../../components/title/Title";
import Cart from "../../components/cart/Cart";
import { v4 } from "uuid";

const ProductDetail = () => {
  return (
    <>
      <Navbar name="Пиццы" />
      <div className="content">
        <BreadCrumb link="/products-by-category/1" />
        <div className="detail">
          <div className="gallery">
            <img src={CategoryImage} alt="" />
          </div>
          <div className="detail-info">
            <div className="info-title">Маргарита</div>
            <div className="info-desc">
              Увеличенная порция моцареллы из цельного молока, томаты,
              итальянские травы, томатный соус
            </div>
            <div className="info-character">
              <div>Диаметр</div>
              <div className="dots"></div>
              <div>nule</div>
            </div>
            <div className="info-main-title">Добавить по вкусу</div>
            <div className="info-footer">
              <div>
                <div className="info-main-title">Стоимость</div>
                <div className="cart-price">148.000 сум</div>
              </div>
              <button className="cart-basket">
                <IconBasket />
              </button>
            </div>
          </div>
        </div>
        <Title name="Другое" className="mt mb" />
        <div className="grid-template">
          {[...Array(5)].map(() => (
            <Cart key={v4()} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
