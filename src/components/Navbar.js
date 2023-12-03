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


// import React, { useState } from "react";

// const Login = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         <h2 className="text-2xl font-semibold mb-4">Login</h2>
//         {/* Your login form fields go here */}
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
//             Username
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="username"
//             type="text"
//             placeholder="Username"
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//             Password
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="password"
//             type="password"
//             placeholder="********"
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="button"
//           >
//             Log In
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// const Signup = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
//         {/* Your signup form fields go here */}
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//             Email
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="email"
//             type="email"
//             placeholder="Email"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//             Password
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="password"
//             type="password"
//             placeholder="********"
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
//             Confirm Password
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="confirmPassword"
//             type="password"
//             placeholder="********"
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="button"
//           >
//             Sign Up
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// const AuthForm = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//   };

//   return (
//     <div>
//       <div className="flex justify-center mb-4">
//         <button
//           className={`${
//             isLogin ? "bg-blue-500" : "bg-gray-300"
//           } text-white py-2 px-4 rounded-l focus:outline-none focus:shadow-outline`}
//           onClick={toggleForm}
//         >
//           Log In
//         </button>
//         <button
//           className={`${
//             !isLogin ? "bg-blue-500" : "bg-gray-300"
//           } text-white py-2 px-4 rounded-r focus:outline-none focus:shadow-outline`}
//           onClick={toggleForm}
//         >
//           Sign Up
//         </button>
//       </div>
//       {isLogin ? <Login /> : <Signup />}
//     </div>
//   );
// };

// export default AuthForm;

