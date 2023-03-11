import React from "react";
import "./currency-input.scss";

const CurrencyInput = ({
  amount,
  currencyOptions,
  onAmountChange,
  selectCurr,
  onChangeCurr,
}) => {
  const onHandleChange = (e) => {
    onAmountChange(e.target.value);
  };

  const currencies = currencyOptions.map((option) => {
    return (
      <option key={option} value={option}>
        {option.toUpperCase()}
      </option>
    );
  });

  return (
    <fieldset>
      <input type="number" value={amount} onInput={onHandleChange} />
      <select value={selectCurr} name="currency" onChange={onChangeCurr}>
        {currencies}
      </select>
    </fieldset>
  );
};

export default CurrencyInput;
