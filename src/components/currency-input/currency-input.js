import React from "react";
import "./currency-input.scss";

const CurrencyInput = ({ amount, curr }) => {
  return (
    <fieldset>
      <legend></legend>
      <input value={amount} />
      <select name="currency">
        <option></option>
        <option></option>
        <option></option>
      </select>
    </fieldset>
  );
};

export default CurrencyInput;
