import { useEffect, useState } from "react";
import { Layout, Vertical } from "../../components";

import "./Home.css";

export interface Product {
  id: number;
  title: string;
  price: number;
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
    <Layout>
      <ul className="products">
        {products.map((product) => (
          <li key={product.id}>
            <Vertical item={product} />
          </li>
        ))}
      </ul>
    </Layout>
  );
};
