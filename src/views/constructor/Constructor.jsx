import React, { useEffect, useState } from "react";
import "../../assets/scss/_constructor.scss";

const Constructor = () => {
  const [tab, setTab] = useState(1);

  const handleTitle = () => {
    let fieldTitle;
    if (tab === 1) {
      fieldTitle = "Выберите размер";
    }
    return fieldTitle;
  };

  useEffect(() => {
    handleTitle();
  }, [tab]);

  const handleNext = () => {
    setTab((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (tab <= 1) {
    } else {
      setTab((prev) => prev - 1);
    }
  };

  return (
    <div className="constructor">
      <div className="bigline">
        <div className="bigline-text">Большая</div>
      </div>
      <div className="standartline">
        <div className="standartline-text">Средняя</div>
      </div>
      <div className="smallline">
        <div className="smallline-text">Маленькая</div>
      </div>
    </div>
  );
};

export default Constructor;
