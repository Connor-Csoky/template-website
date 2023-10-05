import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./HomeGrid.css";

export default function HomeGrid() {
  const [products, setproducts] = useState("empty");

  useEffect(() => {
    fetch("http://localhost:3000/home", {
      method: "post",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((product) => {
        setproducts(product);
      });
  }, []);

    console.log(products)

    return (
      <div className="home-grid-wrapper">
        {Object.keys(products).map(function(index) {
          return(
            <Product key={products[index].product_id} id={products[index].product_id} price={products[index].price} name={products[index].product_name}  path={process.env.PUBLIC_URL + products[index].image_path}/>
          )
        })}
     
      </div>
    );

}
