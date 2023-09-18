import React, { useEffect, useState } from "react";
import Shoe1 from "../assets/shoe1.png";
import Shoe2 from "../assets/shoe2.png";
import Shoe3 from "../assets/shoe3.png";
import Shoe4 from "../assets/shoe4.png";

const Card = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Initialize the product quantities in a state object with a default value of 1
  const [productQuantities, setProductQuantities] = useState({});

  useEffect(() => {
    setSelectedProduct(products.find((product) => product.id === 1));
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // Function to increment the quantity of the selected product
  const increment = () => {
    if (selectedProduct) {
      setProductQuantities((prevQuantities) => ({
        ...prevQuantities,
        [selectedProduct.id]: (prevQuantities[selectedProduct.id] || 1) + 1, // Set default value to 1
      }));
    }
  };

  // Function to decrement the quantity of the selected product
  const decrement = () => {
    if (selectedProduct) {
      if (productQuantities[selectedProduct.id] > 1) { // Check if quantity is greater than 1
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
    {
      id: 4,
      name: "Nike Basketball Sneaker",
      description: "The Best Shoe for Men's Sports",
      price: "150",
      rating: "4.4",
      src: Shoe4,
    },
  ];

  return (
    <>
      <main className="w-full h-screen flex justify-center items-center flex-col bg-gradient-to-r from-emerald-400 to-cyan-400">
        <section className="w-2/3 h-3/4 shadow-2xl rounded-lg relative  border-4 border-white">
          <div className="w-full h-full grid grid-cols-2 font-bold">
            <div className="w-full h-full ring-2 flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500">
              <img
                src={selectedProduct ? selectedProduct.src : ""}
                alt={selectedProduct ? selectedProduct.name : ""}
                className="w-80 h-72 ring-2 rounded-xl object-cover bg-cover bg-white"
              />
            </div>
            <div className="w-full h-full flex  flex-col space-y-3 px-7 py-8 text-white">
              <div>
                <p className="font-semibold text-black">Name:</p>
                <h1 className=" text-3xl font-Poppins">
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
                  <p className="cursor-pointer" onClick={decrement}>-</p>
                  <p>{productQuantities[selectedProduct?.id] || 1}</p> {/* Use 1 as the default value */}
                  <p className="cursor-pointer" onClick={increment}>+</p>
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
          </div>
          <div className="flex justify-around items-center space-x-9 w-full absolute -bottom-16 ">
            {products.map((product) => {
              return (
                <div
                  key={product.id}
                  className="border-2 w-40 h-36 bg-white rounded-xl cursor-pointer hover:rotate-6 duration-300 flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 shadow-xl"
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
        </section>
      </main>
    </>
  );
};

export default Card;
