import React from "react";
import { v4 } from "uuid";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import Cart from "../../components/cart/Cart";
import Navbar from "../../layouts/navbar/Navbar";

const Product = () => {
  return (
    <>
      <Navbar name="Пиццы" />
      <div className="content">
        <BreadCrumb link="/" />
        <div className="grid-template">
          {[...Array(20)].map(() => (
            <Cart key={v4()} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
