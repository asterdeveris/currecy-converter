import React from "react";
import CurrencyInput from "../currency-input/currency-input";
import "./converter.scss";

const Converter = () => {
  return (
    <div classList="converter">
      <CurrencyInput />
      <CurrencyInput />
    </div>
  );
};

export default Converter;
