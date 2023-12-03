import React,{useState} from "react";
import Logo from "../assets/Logo.PNG";
import { XMarkIcon, Bars4Icon } from "@heroicons/react/24/solid";
const Navbar = () => {
  const [open,setOpen]=useState(false)
  const handleClick=()=>{
    setOpen(!open)
  }
  return (
    <nav className="bg-[#fef9f6] fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
      <div className="relative w-screen flex flex-wrap items-center font-medium justify-around ">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <span className="flex space-x-1 items-center">
            <img
              src={Logo}
              alt="logo"
              className="md:cursor-pointer h-5 rounded"
            />
            <h1 className="font-jakarta font-semibold text-2xl">Milton</h1>
          </span>

          <div className="text-3xl md:hidden" onClick={handleClick}>
          {open ?( <XMarkIcon className="text-black h-5 w-5" />) :( <Bars4Icon className="text-black  h-5 w-5" />)}
          </div>
        </div>
        <ul className="md:flex hidden font-jakarta font-semibold items-center gap-8 font-[Poppins] ">
          <li
            className=" font-semibold text-zinc-400 hover:text-black hover:border-b-2 border-black"
           
          >
            Features
          </li>
          <li className="text-zinc-400 hover:text-black hover:border-b-2 border-black">
            Testimonial
          </li>
          <li className="text-zinc-400 hover:text-black hover:border-b-2 border-black">
            Pricing
          </li>
          <li className="text-zinc-400 hover:text-black hover:border-b-2 border-black">
            FAQs
          </li>
          <li className="text-zinc-400 hover:text-black hover:border-b-2 border-black">
            Blog
          </li>
        </ul>
        <div className="md:block hidden font-jakarta font-semibold space-x-2">
          <button className="hover:scale-75 ease-out duration-500 cursor-pointer bg-zinc-200 text-black rounded-xl px-3 py-2">
            Log in
          </button>
          <button className="bg-black text-white rounded-xl px-4 py-2">
            Get Started
          </button>
        </div>
{ open &&
        <ul
          className={`
        md:hidden w-full h-1/3 align-center bg-[#fef9f6] fixed top-0  overflow-y-auto bottom-0 py-24 pl-4
   flex flex-col items-center border-b font-jakarta font-semibold space-y-3 transition-all duration-500 ease-in overflow-y-auto `}
        >
         <li
            className="text-zinc-400 hover:text-black hover:border-b-2 border-black"
           
          >
            Features
          </li>
          <li className="text-zinc-400 hover:text-black hover:border-b-2 border-black">
            Testimonial
          </li>
          <li className="text-zinc-400 hover:text-black hover:border-b-2 border-black">
            Pricing
          </li>
          <li className="text-zinc-400 hover:text-black hover:border-b-2 border-black">
            FAQs
          </li>
          <li className="text-zinc-400 hover:text-black hover:border-b-2 border-black">
            Blog
          </li>

          <div className="py-3 flex flex-col space-y-4">
          <button className="bg-zinc-200 text-black rounded-xl x-4  w-24 py-2 ml-7">
            Log in
          </button>
          <button className="bg-black text-white rounded-xl px-7 py-2">
            Get Started
          </button>
          </div>
        </ul>
}
      </div>
    </nav>
  );
};

export default Navbar;




