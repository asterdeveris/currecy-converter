import React from "react";
import "./currency-input.scss";

const CurrencyInput = ({ amount, currencyOptions, onAmountChange }) => {
  const onHandleChange = (e) => {
    onAmountChange(e.target.value);
  };

  console.log(currencyOptions);
  const currencies = currencyOptions.map((option) => {
    return (
      <option key={option} value={option}>
        {option.toUpperCase()}
      </option>
    );
  });

  return (
    <fieldset>
      <legend></legend>
      <input type="number" value={amount} onInput={onHandleChange} />
      <select name="currency">{currencies}</select>
    </fieldset>
  );
};

export default CurrencyInput;
