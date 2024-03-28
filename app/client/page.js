"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ClientPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div>
      <h1>{products?.length ?? 0}</h1>
    </div>
  );
}
