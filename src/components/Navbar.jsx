import React from "react";
import { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CartContext } from "../features/ContextProvider";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="">
      <div className="w-full h-[10%] flex justify-between items-center bg-[#50a5c3] py-3 px-12">
        <Link to="/" className="font-semibold text-2xl text-white">
          Shop
        </Link>
        <div className="relative">
          <Link to="/cart">
            <FaCartShopping
              size={25}
              className="text-[#f31818] duration-500 hover:scale-[1.3] hover:text-[#c70000]"
            />
          </Link>
          <div className="absolute right-[-7px] top-[-7px] px-1 text-xs bg-yellow-500 rounded-full">{cart.length}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
