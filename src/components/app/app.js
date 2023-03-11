import React from "react";
import Converter from "../converter/converter";
import Header from "../header/header";
import "./app.scss";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Converter />
    </div>
  );
};

export default App;
