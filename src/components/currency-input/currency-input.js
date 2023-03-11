import React from "react";
import "./currency-input.scss";

const CurrencyInput = ({ amount, curr }) => {
  return (
    <fieldset>
      <legend></legend>
      <input value={amount} />
      <select name="currency">
        <option value="eur">EUR</option>
        <option value="pln">PLN</option>
        <option value="usd">USD</option>
      </select>
    </fieldset>
  );
};

export default CurrencyInput;
