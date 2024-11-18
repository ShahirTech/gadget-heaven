import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";



const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashbord - Gadget Heaven";
  }, []);

  const [active, setActive] = useState("");
const getButtonClass = (button) => {
  return active === button
    ? "btn w-28 md:w-48 md:px-10 rounded-full md:text-lg text-purple-500"
    :"btn w-28 md:w-48 md:px-10 rounded-full md:text-lg bg-purple-500 text-white hover:bg-white hover:text-black" ;
};
  return (
    <div className="bg-gray-50">
      <section className="w-full bg-[#9538E2] flex items-center justify-center text-center flex-col gap-8 py-10">
        <h1 className="text-2xl md:text-4xl font-bold text-white">Dashboard</h1>
        <p className="text-white text-sm md:text-base w-[60%] mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex items-center justify-center gap-6">
          <button >
           <NavLink to="/dashboard/cart" className={getButtonClass("cart")}
            onClick={() => setActive("cart")}>Cart</NavLink>
          </button>
          <button >
            <NavLink to="/dashboard/whishlist" className={getButtonClass("whishlist")}
            onClick={() => setActive("whishlist")}>Whishlist</NavLink>
          </button>
        </div>
      </section>
      <Outlet>
      </Outlet>
    </div>
  );
};

export default Dashboard;