import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const Product = (props) => {
  const { product } = props;

  const { cart, setCart } = useContext(CartContext);

  const handaleAddToCart = (e, product) => {
    e.preventDefault();
    // create a copy on cart
    let _cart = { ...cart };
    if (!_cart.items) {
      //craete a empty object
      _cart.items = {};
    }
    // check product is alredy exists in cart
    if (_cart.items[product.id]) _cart.items[product.id] += 1;
    else _cart.items[product.id] = 1;

    // totail items check
    if (!_cart.totaitItem) {
      _cart.totaitItem = 0;
    }

    _cart.totaitItem += 1;
    setCart(_cart);
  };
  return (
    <Link to={`/product/${product.id}`}>
      <div>
        <img src={product.image} alt="pizza" className="h-[150px] m-auto " />
        <div className="text-center">
          <h2 className="text-lg font-bold py-2">
            {" "}
            {product.title.slice(0, 15)}
          </h2>
          <span className="bg-gray-200 py-1 rounded-full text-sm px-4">
            {product.category}
          </span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span>$ {product.price}</span>
          <button
            className="bg-yellow-500 px-4 py-1 rounded-full text-white font-bold"
            onClick={(e) => handaleAddToCart(e, product)}
          >
            ADD
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Product;
