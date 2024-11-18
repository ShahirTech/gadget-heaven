import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { GadgetContext } from "../Root/Root";

const Navbar = () => {
  const { cart, wishlist } = useContext(GadgetContext);
  const location = useLocation();

  const links = (
    <>
      <li>
        <NavLink to="/" activeClassName="text-purple-500">Home</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" activeClassName="text-purple-500">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/statistics" activeClassName="text-purple-500">Statistics</NavLink>
      </li>
      <li>
        <NavLink to="/about" activeClassName="text-purple-500">About Us</NavLink>
      </li>
    </>
  );

  const isHomePage = location.pathname === "/";
  const gadgetHeavenTextColor = isHomePage ? "text-white" : "text-black";

  return (
    <div className="navbar w-[95%] md:w-[75%] pt-10 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost ml-[-20px] lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke={isHomePage ? "white" : "currentColor"}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className={`btn btn-ghost ml-[-22px] text-xl ${gadgetHeavenTextColor}`}>
          Gadget Heaven
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className={`menu menu-horizontal px-1 space-x-4 ${gadgetHeavenTextColor}`}>{links}</ul>
      </div>
      <div className="navbar-end flex pr-3 md:pr-0 items-center gap-4">
        <Link to={`/dashboard/cart`}>
          <div className="indicator">
            <span className="bg-gray-700 text-white text-xs font-medium border-none indicator-item badge badge-secondary">
              {cart.length}
            </span>
            <button className="btn rounded-full">
              <i
                className="fa-duotone fa-cart-shopping"
                style={{
                  "--fa-primary-color": "#9538e2",
                  "--fa-secondary-color": "#9538e2",
                }}
              ></i>
            </button>
          </div>
        </Link>

        <Link to={`/dashboard/whishlist`}>
          <div className="indicator">
            <span className="bg-gray-700 text-xs text-white font-medium border-none indicator-item badge badge-secondary">
              {wishlist.length}
            </span>
            <button className="btn rounded-full border-[2px]">
              <i
                className="fa-solid fa-duotone fa-circle-heart fa-lg"
                style={{ color: "#9538e2" }}
              ></i>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;