import React from "react";
import { v4 } from "uuid";
import Category from "../../components/category/Category";
import Title from "../../components/title/Title";
import Navbar from "../../layouts/navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar name="Меню" />
      <div className="content">
        <div className="grid-template">
          {[...Array(9)].map(() => (
            <Category key={v4()} />
          ))}
        </div>
        <Title name="Барное меню" className="mt mb" />
        <div className="grid-template">
          {[...Array(5)].map(() => (
            <Category key={v4()} />
          ))}
        </div>
        <Title name="Дессерты" className="mt mb" />
        <div className="grid-template">
          {[...Array(3)].map(() => (
            <Category key={v4()} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
