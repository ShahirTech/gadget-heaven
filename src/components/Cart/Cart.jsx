import { useContext, useState } from "react";
import { GadgetContext } from "../Root/Root";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import modal from "../../assets/Group.png";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useContext(GadgetContext);
  const navigate = useNavigate();

 
  const [isModalOpen, setIsModalOpen] = useState(false);


  const sortCartDescending = () => {
    setCart((prevCart) => [...prevCart].sort((a, b) => b.price - a.price)); // Sort cart in descending order
  };

 
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.product_id !== productId));
    toast.success("Item removed from cart!", { 
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

 
  const handlePurchase = () => {
    // Show modal and clear the cart
    setIsModalOpen(true);
    setCart([]); // Empty the cart
  };

  //close the modal and redirect to home
  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/");
  }
  // Total cost of the cart
  const totalCost = cart.reduce((total, product) => total + parseFloat(product.price), 0);

  return (
    <>
      <section className="w-[75%] mx-auto my-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-xl md:text-2xl font-bold">Cart</h2>
          <div className="flex flex-col md:flex-row items-center gap-4 py-5">
            <h2 className="md:text-2xl font-bold">Total cost: ${totalCost}</h2>
            <div className="flex justify-center items-center gap-4">
              <button
                className="btn text-[#9538E2] font-bold md:text-lg rounded-3xl"
                onClick={sortCartDescending} 
              >
                Sort <i className="fa-regular fa-filter-circle-dollar" style={{ color: "#9538e2" }}></i>
              </button>
              <button
                className="btn btn-outline bg-[#9538E2] text-white font-bold md:text-lg rounded-3xl"
                disabled={cart.length === 0 || totalCost === 0} // Disable if cart is empty or total cost is 0
                onClick={handlePurchase} 
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-[95%] md:w-[75%] mx-auto pb-32">
        {cart.map((product, idx) => (
          <div
            key={idx}
            className="h-32 md:h-[188px] w-full border rounded-2xl flex justify-between items-center px-7 bg-[#1313131A] shadow-xl mb-12"
          >
            <div className="flex items-center gap-6">
            <Link to={`/productdetails/${product.product_id}`}>
            <img
                className="border w-24 h-24 ob md:w-[200px] md:h-[124px] rounded-2xl"
                src={product.product_image}
                alt={product.product_title}
              />
              </Link>

              <div className="grid gap-5">
                <h2 className="font-semibold text-sm md:text-base lg:text-2xl">{product.product_title}</h2>
                <p className="text-[#13131399] text-xs md:text-base">Price: ${product.price}</p>
              </div>
            </div>
            <button
              className="btn bg-transparent"
              onClick={() => removeFromCart(product.product_id)} // Remove item from cart
            >
              <i className="text-[#ff0000] fa-solid fa-trash-xmark fa-lg md:fa-xl"></i>
            </button>
          </div>
        ))}
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-all duration-300 ease-in-out">
          <div className="bg-white flex flex-col items-center justify-center gap-4 p-10 rounded-xl shadow-lg transition-transform duration-500 ease-in-out transform scale-105">
            <h2 className="text-xl font-semibold">Congratulations!</h2>
            <img src={modal} alt="Modal Success" className="" />
            <p className="text-lg mt-3">Your purchase was successful!</p>
            <p className="text-lg mt-3"></p>
            <div className="mt-5 flex justify-end">
              <button
                className="btn bg-[#9538E2] text-white font-bold rounded-full"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      
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

export default Cart;