import React, { useEffect, useState } from "react";
import CurrencyInput from "../currency-input/currency-input";
import CurrencyService from "../../services/currency-service";
import "./converter.scss";

const Converter = () => {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [firstSelect, setFirstSelect] = useState("uah");
  const [secondSelect, setSecondSelect] = useState("usd");
  const [firstInputValue, setFirstInputValue] = useState("1");
  const [secondInputValue, setSecondInputValue] = useState("");
  const [upDownConversion, setUpDownConversion] = useState(true);

  const currencyService = new CurrencyService();

  useEffect(() => {
    currencyService
      .getResource(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json`
      )
      .then((data) => {
        const conversionRates = data.eur;

        const currency = Object.keys(conversionRates);
        setCurrencyOptions([...currency]);

        const rate =
          conversionRates[secondSelect] / conversionRates[firstSelect];
        if (upDownConversion) {
          setSecondInputValue(+(firstInputValue * rate).toFixed(2));
        } else {
          setFirstInputValue(+(secondInputValue / rate).toFixed(2));
        }
      });
  }, [
    firstInputValue,
    secondInputValue,
    firstSelect,
    secondSelect,
    upDownConversion,
  ]);

  const onFirstInputChange = (value) => {
    setFirstInputValue(value);
    setUpDownConversion(true);
  };
  const onSecondInputChange = (value) => {
    setSecondInputValue(value);
    setUpDownConversion(false);
  };

  return (
    <div className="converter">
      <CurrencyInput
        amount={firstInputValue}
        onAmountChange={onFirstInputChange}
        currencyOptions={currencyOptions}
        selectCurr={firstSelect}
        onChangeCurr={(e) => setFirstSelect(e.target.value)}
      />
      <CurrencyInput
        amount={secondInputValue}
        onAmountChange={onSecondInputChange}
        currencyOptions={currencyOptions}
        selectCurr={secondSelect}
        onChangeCurr={(e) => setSecondSelect(e.target.value)}
      />
    </div>
  );
};

export default Converter;
