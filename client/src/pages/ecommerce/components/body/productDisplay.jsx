import React from "react";

const ProductDisplay = ({ product, onAction }) => {
  return (
    <div>
      <img src={product.imgUrl} alt={product.name} />
      <div>{product.name}</div>
      <div>${product.price}</div>
    </div>
  );
};

export default ProductDisplay;
