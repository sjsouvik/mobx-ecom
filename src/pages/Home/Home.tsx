import { useEffect, useState } from "react";
import { Vertical } from "../../components";

import "./Home.css";

export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

export const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products.slice(0, 10));
    };

    loadProducts();
  }, []);

  return (
    <ul className="products">
      {products.map((product) => (
        <li key={product.id}>
          <Vertical item={product} />
        </li>
      ))}
    </ul>
  );
};
