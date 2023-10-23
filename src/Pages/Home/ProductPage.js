import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { name } = useParams();
  const [product, setProduct] = useState([]);
  const { product_id, product_name, image_path } = product;

  useEffect(() => {
    fetch(`http://localhost:3000/product`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
      }),
    })
      .then((response) => response.json())
      .then((data) => setProduct(data[0]));
  }, [name]);
  console.log(product.product_id);

  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper product-container">
        <div className="image-column">
          <div className="outer-column">
            <div className="inner-column">
              <img
                className="column-image"
                src={process.env.PUBLIC_URL + image_path}
                alt=""
              />
            </div>
            <div className="inner-column">
              <img
                className="column-image"
                src={process.env.PUBLIC_URL + image_path}
                alt=""
              />
            </div>
            <div className="inner-column">
              <img
                className="column-image"
                src={process.env.PUBLIC_URL + image_path}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="main-image">
          <img
            className="product-image"
            src={process.env.PUBLIC_URL + image_path}
            alt="product"
          />
        </div>
        <div className="product-info">
          {product_id}, {product_name}
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut tempore,
          tempora doloremque est odio deserunt, dicta hic eveniet distinctio
          animi, ipsam atque aliquam quidem necessitatibus a quasi aspernatur.
          <br />
          <br />
          Commodi ullam voluptatibus quia? Sunt facilis aliquid quae suscipit at
          reprehenderit aperiam voluptatum velit illum pariatur. Voluptates
          similique porro vero id? Vel corrupti error adipisci, qui ullam non at
          cum illum quae iste exercitationem totam, consequuntur ipsa tenetur
          provident earum? Optio dolor tempore culpa ipsam, tempora earum,
          explicabo eius minus eos quidem minima, quo modi accusamus cumque quis
          sit corporis autem alias ducimus suscipit consequatur reprehenderit
          laudantium! Expedita illo aliquid ad repellendus.
        </div>
      </div>
    </div>
  );
}
