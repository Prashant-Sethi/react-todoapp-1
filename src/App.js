import React from "react";

import products from "./data/products";
import Product from "./components/Product";

import "./App.css";

function getProductList() {
  const productList = products.map((product) => (
    <Product
      key={product.id}
      name={product.name}
      price={product.price}
      description={product.description}
    />
  ));
  return productList;
}

function App() {
  return <div>{getProductList()}</div>;
}

export default App;
