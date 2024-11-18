import { useContext } from "react";
import { GadgetContext } from "../Root/Root";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlist, cart, addToCart, setWishlist } = useContext(GadgetContext);

  const handleAddToCart = (product) => {
    const isProductInCart = cart.some((item) => item.product_id === product.product_id);

    if (isProductInCart) {
      toast.error("This product is already in your cart.");
    } else {
      addToCart(product);
      toast.success("Product successfully added to cart!");
      product.addedToCart = true;
    }
  };

  const handleRemoveFromWishlist = (product) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.product_id !== product.product_id));
    toast.success("Product removed from wishlist!");
  };

  return (
    <>
      <section className="w-[75%] mx-auto my-12">
        <div className="flex justify-start items-center">
          <h2 className="text-lg md:text-2xl font-bold">WishList</h2>
        </div>
      </section>

      <section className="w-[95%] md:w-[75%] mx-auto pb-32">
        {wishlist.map((product, idx) => (
          <div key={idx} className="h-48 md:h-[256px] w-full border rounded-2xl flex justify-between items-center px-7 bg-[#1313131A] shadow-xl mb-12">
            <div className="flex items-center gap-6">
              <Link to={`/productdetails/${product.product_id}`}>
              <img
                className="border w-28 h-28 md:w-[274px] md:h-[192px] rounded-2xl"
                src={product.product_image}
                alt={product.product_title}
              />
              </Link>
              <div className="grid gap-5">
                <h2 className="font-semibold text-sm md:text-base lg:text-2xl">
                  {product.product_title}
                </h2>
                <p className="text-[#13131399] lg:block hidden">
                  Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display.
                </p>
                <p className="text-[#13131399] text-xs md:text-base">Price: ${product.price}</p>
                <div className="flex gap-3">
                  <button
                    className="btn rounded-3xl text-white bg-[#9538E2] text-xs md:text-base w-fit"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="btn bg-transparent md:hidden"
                    onClick={() => handleRemoveFromWishlist(product)}
                  >
                    <i className="text-[#ff0000] fa-solid fa-trash-xmark fa-lg"></i>
                  </button>
                </div>
              </div>
            </div>
            <button
              className="btn bg-transparent hidden md:block"
              onClick={() => handleRemoveFromWishlist(product)}
            >
              <i className="text-[#ff0000] fa-solid fa-trash-xmark fa-xl"></i>
            </button>
          </div>
        ))}
      </section>

      {/* Toastify Container for global toast rendering */}
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

export default Wishlist;