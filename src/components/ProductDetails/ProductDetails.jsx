import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { GadgetContext } from "../Root/Root";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  useEffect(() => {
    document.title = "Product Details - Gadget Heaven";
  }, []);

  const { id } = useParams();
  const data = useLoaderData();
  const { addToCart, addToWishlist, cart, wishlist } = useContext(GadgetContext);

  const [isItemInCart, setIsItemInCart] = useState(false);
  const [isItemInWishlist, setIsItemInWishlist] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = data.find((product) => product.product_id === id);

  const {
    product_title,
    product_image,
    price,
    description,
    specification,
    availability,
    rating,
  } = product;

  useEffect(() => {
    const itemInCart = cart.some((item) => item.product_id === id);
    setIsItemInCart(itemInCart);
    const itemInWishlist = wishlist.some((item) => item.product_id === id);
    setIsItemInWishlist(itemInWishlist);
  }, [cart, wishlist, id]);

  const handleAddToCart = () => {
    if (isItemInCart) {
      toast.error("This item is already in your cart!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    } else {
      addToCart(product);
      toast.success("Item successfully added to your cart!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
  };

  const handleAddToWishlist = () => {
    if (isItemInWishlist) {
      toast.error("This item is already in your wishlist!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    } else {
      addToWishlist(product);
      toast.success("Item successfully added to your wishlist!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
  };

  // render stars dynamically
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Number of full stars
    const halfStars = rating % 1 !== 0 ? 1 : 0; // Half star if there's a decimal
    const emptyStars = 5 - fullStars - halfStars; // Remaining stars are empty

    let stars = [];

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <i key={`full-${i}`} className="fa-solid fa-star text-yellow-500"></i>
      );
    }

    // Add half star if any
    if (halfStars === 1) {
      stars.push(
        <i key="half" className="fa-solid fa-star-half text-yellow-500"></i>
      );
    }

    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <i key={`empty-${i}`} className="fa-solid fa-star text-gray-300"></i>
      );
    }

    return stars;
  };

  return (
    <>
      <section className="w-full mt-5 h-[420px] bg-[#9538E2] flex items-center justify-center text-center flex-col gap-8 py-10">
        <h1 className="text-2xl mt-[-100px] md:mt-[-200px] md:text-3xl font-bold text-white">
          Product Details
        </h1>
        <p className="text-white text-sm md:text-base w-[60%] mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </section>
      <section className="mt-[-100px] md:mt-[-200px]">
        <div className="w-[75%] md:w-[75%] bg-white mx-auto border-2 p-3 md:p-10 border-white rounded-[32px] flex lg:flex-row flex-col md:justify-evenly items-center gap-8">
          <figure className="md:w-[500px]">
            <img src={product_image} alt={product_title} />
          </figure>
          <div className="space-y-5">
            <h2 className="font-semibold text-2xl pr-3">{product_title}</h2>
            <h2 className="font-semibold text-xl">Price: ${price}</h2>
            <h2
              className={`w-fit p-2 text-sm border-2 rounded-full ${
                availability
                  ? "text-[#309C08] border-[#309C08] bg-[#309C081A]"
                  : "text-red-500 border-red-600 bg-red-200"
              }`}
            >
              {availability ? "In-Stock" : "Out-of-Stock"}
            </h2>
            <h2 className="text-[#09080F99]">{description}</h2>
            <h1 className="text-lg font-bold">Specifications:</h1>
            <ul className="list-decimal pl-5 text-[#09080F99]">
              {specification.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <h1 className="text-lg font-bold">Rating:</h1>
            <div className="flex items-center font-medium gap-5">
              <div className="rating rating-md rating-half">
                {/* Render the dynamic stars */}
                {renderStars(rating)}
              </div>
              <p className="bg-[#09080F0D] rounded-full p-2 text-sm">{rating}</p>
            </div>
            <div className="flex justify-start items-center gap-6">
              <button
                onClick={handleAddToCart}
                className={`btn bg-purple-500 text-white rounded-full border-none ${!availability ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={!availability} // Disable if the item is out of stock
              >
                Add to Cart{" "}
                <i
                  className="fa-duotone fa-cart-shopping"
                  style={{
                    "--fa-primary-color": "#FFFFFF",
                    "--fa-secondary-color": "#FFFFFF",
                  }}
                ></i>
              </button>

              <button
                onClick={handleAddToWishlist}
                className={`btn bg-purple-500 text-white border-none rounded-full ${!availability ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={!availability || isItemInWishlist} // Disable if the item is out of stock or already in whishlist
              >
                <i
                  className="fa-solid fa-duotone fa-circle-heart fa-lg"
                  style={{ color: "#FFFFFF" }}
                ></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Toast Container for global toast rendering */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default ProductDetails;