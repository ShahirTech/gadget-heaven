import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Gadgets = () => {
  
  const [gadgets, setGadgets] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  useEffect(() => {
    fetch("/gadgets.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);

  const filteredGadgets =
    selectedCategory === "All Products"
      ? gadgets
      : gadgets.filter((gadget) => gadget.category === selectedCategory);

  const getButtonClass = (category) => {
    return selectedCategory === category
      ? "btn w-48 px-10 rounded-full bg-purple-500 text-white"
      : "btn w-48 px-10 rounded-full";
  };
  return (
    <>
      <h1 className="text-xl md:text-3xl font-bold">Explore Cutting-Edge Gadgets</h1>
      <section className="flex flex-col lg:flex-row justify-center md:justify-between items-center md:items-start pt-14 gap-10">
        <div className="w-full md:w-[95%] md:mx-auto md:px-5 lg:px-0 lg:w-[19%] grid justify-items-center md:grid-cols-3 lg:grid-cols-1 items-center gap-6 rounded-2xl bg-white py-6 border border-gray-50">
          <button
            className={getButtonClass("All Products")}
            onClick={() => setSelectedCategory("All Products")}
          >
            All Products
          </button>
          <button
            className={getButtonClass("Computers")}
            onClick={() => setSelectedCategory("Computers")}
          >
            Laptop
          </button>
          <button
            className={getButtonClass("Phones")}
            onClick={() => setSelectedCategory("Phones")}
          >
            Phones
          </button>
          <button
            className={getButtonClass("Smart Watches")}
            onClick={() => setSelectedCategory("Smart Watches")}
          >
            Smart Watches
          </button>
          <button
            className={getButtonClass("Power Banks")}
            onClick={() => setSelectedCategory("Power Banks")}
          >
            Power Banks
          </button>
          <button
            className={getButtonClass("Chargers")}
            onClick={() => setSelectedCategory("Chargers")}
          >
            Chargers
          </button>
          <button
            className={getButtonClass("HeadPhones")}
            onClick={() => setSelectedCategory("HeadPhones")}
          >
            HeadPhones
          </button>
        </div>
        <div className="mx-auto lg:w-[80%] grid md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center gap-6 lg:gap-4">
          {filteredGadgets.length > 0 ? (
            filteredGadgets.map((gadget) => (
              <div
                key={gadget.product_id}
                className="card bg-base-100 w-80 lg:w-72 shadow-xl transform hover:scale-105 transition duration-300 ease-in-out md:h-[496px]"
              >
                <figure className="w-72 h-72 m-auto px-4 pt-4">
                  <img
                    src={gadget.product_image}
                    alt={gadget.product_title}
                    className="rounded-xl w-full h-full"
                  />
                </figure>
                <div className="card-body flex-grow items-center text-center">
                  <h2 className="card-title">{gadget.product_title}</h2>
                  <p className="text-[#09080F99]">Price: ${gadget.price}</p>
                  <div className="card-actions">
                    <Link to={`/productdetails/${gadget.product_id}`}>
                    <button className="btn hover:bg-purple-500 hover:border-none btn-outline rounded-full border-purple-500 border-2 hover:text-white text-purple-500 font-bold" >
                      View details
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No gadgets found for this category.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Gadgets;