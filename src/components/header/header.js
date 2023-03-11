import React from "react";
import style from "./header.module.scss";

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.exchange}>
        <h3>Dollar to UAH</h3>
        <p>36.65</p>
      </div>
      <div>
        <h3>EURO to UAH</h3>
        <p>40.05</p>
      </div>
    </div>
  );
};

export default Header;
