import React, { useEffect, useState } from "react";
import style from "./header.module.scss";
import CurrencyService from "../../services/currency-service";

const Header = () => {
  const currencyService = new CurrencyService();

  const [currencyExchangeEur, setCurrencyExchangeEur] = useState(null);
  const [currencyExchangeUsd, setCurrencyExchangeUsd] = useState(null);

  useEffect(() => {
    const { getCurrentExchange } = currencyService;
    getCurrentExchange("eur").then((curr) => {
      setCurrencyExchangeEur(+curr.uah.toFixed(2));
    });
    getCurrentExchange("usd").then((curr) => {
      setCurrencyExchangeUsd(+curr.uah.toFixed(2));
    });
  }, []);

  return (
    <div className={style.container}>
      <div className={style.exchange}>
        <h3>USD to UAH</h3>
        <p>{currencyExchangeUsd}</p>
      </div>
      <div>
        <h3>EURO to UAH</h3>
        <p>{currencyExchangeEur}</p>
      </div>
    </div>
  );
};

export default Header;
