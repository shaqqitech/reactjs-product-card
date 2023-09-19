import React, { useEffect, useState } from "react";
import Shoe1 from "../assets/shoe1.png";
import Shoe2 from "../assets/shoe2.png";
import Shoe3 from "../assets/shoe3.png";

const Card = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productQuantities, setProductQuantities] = useState({});

  useEffect(() => {
    setSelectedProduct(products.find((product) => product.id === 1));
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const increment = () => {
    if (selectedProduct) {
      setProductQuantities((prevQuantities) => ({
        ...prevQuantities,
        [selectedProduct.id]: (prevQuantities[selectedProduct.id] || 1) + 1,
      }));
    }
  };

  const decrement = () => {
    if (selectedProduct) {
      if (productQuantities[selectedProduct.id] > 1) {
        setProductQuantities((prevQuantities) => ({
          ...prevQuantities,
          [selectedProduct.id]: prevQuantities[selectedProduct.id] - 1,
        }));
      }
    }
  };

  const products = [
    {
     id: 1,
     name: "White & Gray Sneaker",
     description: "The Best Shoe for Men's Business",
     price: "100",
     rating: "4.7",
     src: Shoe1,
   },
   {
     id: 2,
     name: "Air Force Nike Sneaker",
     description: "The Best Shoe for Men's Sports",
     price: "200",
     rating: "4.5",
     src: Shoe2,
   },
   {
     id: 3,
     name: "Nike Air Max Sneakers",
     description: "The Best Shoe for Men's Walking",
     price: "300",
     rating: "4.8",
     src: Shoe3,
   },
 ];

  return (
    <main className="min-h-screen bg-gradient-to-r from-emerald-400 to-cyan-400 p-8 flex flex-col  md:justify-center items-center">
      <section className="w-full md:w-3/4 lg:w-2/3 xl:w-2/3 p-4 shadow-2xl rounded-lg relative border-4 border-white flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 lg:bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-lg">
          <img
            src={selectedProduct ? selectedProduct.src : ""}
            alt={selectedProduct ? selectedProduct.name : ""}
            className="w-full max-h-48 md:h-96 lg:h-auto rounded-xl object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-4 text-white">
          <div>
            <p className="font-semibold text-black">Name:</p>
            <h1 className="text-3xl font-Poppins">
              {selectedProduct ? selectedProduct.name : ""}
            </h1>
          </div>
          <div>
            <p className="font-semibold text-black">Description:</p>
            <p className="text-3xl font-Poppins">
              {selectedProduct ? selectedProduct.description : ""}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-black">Rating:</p>
              <p className="text-2xl font-Poppins">
                {selectedProduct ? selectedProduct.rating : ""}
              </p>
            </div>
            <div className="flex text-3xl space-x-4">
              <p className="cursor-pointer" onClick={decrement}>
                -
              </p>
              <p>{productQuantities[selectedProduct?.id] || 1}</p>
              <p className="cursor-pointer" onClick={increment}>
                +
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-black">Price:</p>
              <p className="text-2xl font-Poppins">
                $ {selectedProduct ? selectedProduct.price : ""}
              </p>
            </div>
            <div className="w-32 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full cursor-pointer hover:bg-white hover:border-2 hover:border-black hover:text-black flex justify-center items-center shadow-xl">
              <button type="button">Add To Cart</button>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col items-center w-full md:w-1/2 mt-8 md:flex-row md:justify-center md:space-x-5">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 h-24 lg:h-36 rounded-xl cursor-pointer hover:rotate-6 duration-300 flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 shadow-xl mb-4"
              onClick={() => handleProductClick(product)}
            >
              <img
                src={product.src}
                alt={product.name}
                className="hover:-rotate-12 duration-500 w-32"
              />
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Card;
