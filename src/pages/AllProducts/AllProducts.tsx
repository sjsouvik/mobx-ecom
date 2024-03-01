import { useState, useEffect } from "react";
import { Product } from "../Home/Home";
import { Vertical } from "../../components";

export const AllProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    };

    loadProducts();
  }, []);

  return (
    <ul className="products">
      {products.map((product) => (
        <Vertical key={product.id} item={product} />
      ))}
    </ul>
  );
};
