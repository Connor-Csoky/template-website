import React, { useEffect } from "react";
import { useParams } from "react-router-dom";


export default function ProductPage() {
  const {name} = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/product`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
  }, []);

  return(
    <div>
      {name}
    </div>
  )
}