import React from "react";

function Product(props) {
  return (
    <div>
      <h3>Product Nme: {props.name}</h3>
      <p>
        Price:{" "}
        {props.price.toLocaleString("en-IN", {
          style: "currency",
          currency: "INR",
        })}
      </p>
      <p>Description {props.description}</p>
    </div>
  );
}

export default Product;
