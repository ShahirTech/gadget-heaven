import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

// eslint-disable-next-line react-refresh/only-export-components
export const GadgetContext = createContext();

const Root = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => [...prevWishlist, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.product_id !== productId));
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) => prevWishlist.filter((product) => product.product_id !== productId));
  };

  return (
    <GadgetContext.Provider
      value={{
        cart,
        setCart,
        wishlist,
        setWishlist,
        addToCart,
        addToWishlist,
        removeFromCart,
        removeFromWishlist,
      }}
    >
      <div className="bg-gray-50">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </GadgetContext.Provider>
  );
};

export default Root;