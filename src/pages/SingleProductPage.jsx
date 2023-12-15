import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleProductPage = () => {
  const [product, setProduct] = useState({});

  const prams = useParams();
  console.log(prams);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${prams.id}`)
      .then((res) => res.json())
      .then((product) => {
        console.log(product);
        setProduct(product);
      });
  }, []);

  return (
    <div className="flex justify-around items-center">
      <img
        src={product.image}
        alt={product.title}
        className="w-[300px] h-[400px]"
      />
      <div>
        <h1 className="text-3xl font-bold w-[700px]">{product.title}</h1>
        <p className="w-[700px] text-gray-400 my-5">{product.description}</p>
        <button className="bg-yellow-500 px-4 py-2 rounded-full text-white font-bold w-[200px] ">
          ADD TO CARD
        </button>
      </div>
    </div>
  );
};

export default SingleProductPage;
