import React from "react";
import { useNavigate } from "react-router-dom";

export default function Product({ id, path, name, price }) {
  const navigate = useNavigate();

  const redirect = (name, id) => () => {
    navigate(`/product/${name}`);
  };

  return (
    <div onClick={redirect(name, id)} className="product-wrapper">
      <div className="product-image-div">
        <img className="product-image" src={path} alt="product" />
      </div>
      <div className="product-description">
        <p>{name}</p>
        <p>${price}</p>
      </div>
    </div>
  );
}
