import React from "react";
import { BsCart4 } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
import { RiMenuLine } from "react-icons/ri";
import { IoMdHeartEmpty } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <div className=" shadow-md flex justify-between items-center bg-green-950 text-white p-4 px-10 font-semibold ">
        <div className="flex justify-between items-center gap-2">
          <RiMenuLine className=" text-2xl  cursor-pointer sm:hidden flex " />

          <div className="capitalize text-3xl ">Logo</div>
        </div>
        <div className="flex justify-center items-center gap-6 ">
          <div className="flex justify-between items-center gap-3  cursor-pointer sm:flex hidden ">
            Login
            <div>Register</div>
          </div>
          <div className="flex justify-between items-center sm:gap-3 gap-2 sm:text-1xl text-2xl  ">
            <div className="flex justify-between items-center ">
              <input
              
                type="text"
                placeholder=" Search "
                className="px-2 sm:flex hidden font-normal text-xl sea  text-black rounded-md "
              />
              <IoSearchSharp className=" text-2xl bg-green-950 text-white   cursor-pointer" />
            </div>
            <IoMdHeartEmpty className=" text-2xl  cursor-pointer" />
            <BsCart4 className=" text-2xl  cursor-pointer" />
          </div>
        </div>
      </div>


      
    </>
  );
};

export default Navbar;
