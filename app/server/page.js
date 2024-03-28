import axios from "axios";
import React from "react";

export default async function ServerPage() {
  const response = await axios("http://localhost:3000/api/products");
  const products = await response.data;
  return (
    <div>
      <h1>{products.length}</h1>
    </div>
  );
}
