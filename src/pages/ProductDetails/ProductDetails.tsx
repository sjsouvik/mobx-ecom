import { useEffect, useState } from "react";
import { Product } from "../Home/Home";
import { useParams } from "react-router-dom";

import "./ProductDetails.css";

export const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState<Product | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const loadDetails = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProductDetails(data);
    };

    loadDetails();
  }, [id]);

  if (productDetails === null) {
    return <p className="text-center">Loading details...</p>;
  }

  return (
    <div className="product-details">
      <img src={productDetails.thumbnail} height={200} width={200} alt="" />
      <p>{productDetails.title}</p>
      <p>{productDetails.price}</p>
    </div>
  );
};
