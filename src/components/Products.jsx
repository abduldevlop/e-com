import { useContext, useEffect, useState } from "react";
import Product from "./Product";
import { CartContext } from "../contexts/CartContext";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => {
        console.log(products);
        setProducts(products);
      });
  }, []);

  /// contexts
  const { name } = useContext(CartContext);
  return (
    <div className="container mx-auto pb-24">
      <h1 className="text-lg font-bold my-8">Products {name} </h1>
      <div className="grid grid-cols-5 my-8 gap-24">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
