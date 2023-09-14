import React from "react";
import { Link } from "react-router-dom";
import { IconBack } from "../../utils/Icons";
import "../../assets/scss/_components.scss";

const BreadCrumb = ({ link }) => {
  return (
    <Link to={link} className="breadcrumb">
      <IconBack />
      Назад
    </Link>
  );
};

export default BreadCrumb;
