import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./HomeGrid.css";

export default function HomeGrid({search}) {
  const [products, setproducts] = useState([]);
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

  const filtered = products.filter((product) => {
    return product.product_name.toLowerCase().includes(search);
  })

  return (
    <div className="home-grid-wrapper">
      {filtered.map(function ({product_id, price, product_name, image_path}) {
        return (
          <Product
            key={product_id}
            id={product_id}
            price={price}
            name={product_name}
            path={process.env.PUBLIC_URL + image_path}
          />
        );
      })}
    </div>
  );
}
