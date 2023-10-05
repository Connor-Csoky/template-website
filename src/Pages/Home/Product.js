import React from "react";
import { useNavigate } from "react-router-dom";



export default function Product({id, path, name, price}) {
  const navigate = useNavigate();

  const test = (test, id) => (() => {
    // fetch(`http://localhost:3000/product/${test}`, {
    //   method: "post",
    //   headers: { "Content-Type": "application/json" },
    // })
    navigate(`/product/${test}`);
  });

  return(
    <div onClick={test(name, id)} className="product-wrapper">
      <div className="product-image-div">
        <img className="product-image" src={path} alt="product" />
      </div>
      <div className="product-description" >
          <p>{name}</p>
          <p>${price}</p>
      </div>
    </div>
  )
  
}