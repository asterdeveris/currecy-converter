import React, { useEffect, useState } from "react";
import CurrencyInput from "../currency-input/currency-input";
import CurrencyService from "../../services/currency-service";
import "./converter.scss";

const Converter = () => {
  const [inputValue, setInputValue] = useState("");
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [firstInputAmount, setFirstInputAmount] = useState();
  const [secondInputAmount, setsecondInputAmount] = useState();

  useEffect(() => {
    const currencyService = new CurrencyService();
    currencyService
      .getResource(
        "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
      )
      .then((data) => {
        setCurrencyOptions([...Object.keys(data)]);
      });
  }, []);

  const onAmountChange = (value) => {
    setInputValue(value);
  };

  return (
    <div className="converter">
      <CurrencyInput
        // amount={firstInputAmount}
        onAmountChange={onAmountChange}
        currencyOptions={currencyOptions}
      />
      <CurrencyInput
        // amount={secondInputAmount}
        onAmountChange={onAmountChange}
        currencyOptions={currencyOptions}
      />
    </div>
  );
};

export default Converter;
