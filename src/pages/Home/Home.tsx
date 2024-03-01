import { useEffect, useState } from "react";
import { Vertical } from "../../components";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../helper/constants";

import "./Home.css";

export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

export const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const loadProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products.slice(0, 10));
    };

    loadProducts();
  }, []);

  return (
    <>
      <h1>Trending products</h1>
      <ul className="products">
        {products.map((product) => (
          <Vertical key={product.id} item={product} />
        ))}
      </ul>
      <button onClick={() => navigate(ROUTES.products)}>
        Browse all products
      </button>
    </>
  );
};
