import React, { useState } from "react";
import FAQs from "./FAQs";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center sm:py-24 md:py-32 font-jakarta font-semibold animation-fadeInUp ">
      <button className="rounded-full bg-zinc-100 px-9 py-4 md:text-md sm:text-md  bottom-2 ">
        An other way to manage time️
      </button>

      <div className="text-center">
        <div className="font-jakarta  flex flex-col text-zinc-800 font-semibold">
          <p className="text-[80px]">Your new favorite </p>
          <p className="text-[70px]">calendar🗓️ app</p>
        </div>

        <div className="text-zinc-500 pt-5 columns-1 w-[650px]">
          <p className="text-[20px]">
            Here you should explain how cool your app is. Remember, focus on the
            benefits for your users, not on the features.
          </p>
        </div>
      </div>
      <div>
        <a
          href="/sign-up"
          className="mt-8 block w-full bg-[#2E2E2E] rounded-xl py-4 px-6 text-sm font-semibold text-white text-center"
        >
           Started, it's free
        </a>
        <p className="text-center text-sm text-gray-600">
          Free 14 days trials,no credit card needed
        </p>
      </div>
      <div>
        <div className="flex space-x-2 mt-5 ">
          <div class="flex -space-x-2 ">
            <img
              class="inline-block h-8 w-8  rounded-full ring-2 ring-white "
              src="https://myspringring.com/wp-content/uploads/2022/05/4-Blog-image1-5.png"
              alt=""
            />
            <img
              class="inline-block h-8 w-8 rounded-full ring-2 ring-white"
           src="https://myspringring.com/wp-content/uploads/2022/05/5-Blog-image2-4.png"/>
            <img
              class="inline-block h-8 w-8  rounded-full ring-2 ring-white"
src="https://myspringring.com/wp-content/uploads/2022/05/9-Blog-image6.png"              alt=""
            />
           
              <img
              class="inline-block h-8 w-8 rounded-full ring-2 ring-white"
           src="https://myspringring.com/wp-content/uploads/2022/05/5-Blog-image2-4.png"/>
            <img
              class="inline-block h-8 w-8  rounded-full ring-2 ring-white"
src="https://myspringring.com/wp-content/uploads/2022/05/9-Blog-image6.png"              alt=""
            />
          </div>
          
          <div>
            <div className="flex space-x-1">
              <p>⭐⭐⭐⭐⭐</p>
              <p className="font-jakarta">5.0</p>
            </div>
            <p className="font-jakarta text-gray-500  text-sm font-medium ">
              From 200+ happy users
            </p>
          </div>
        </div>
        
      </div>
      <div className="w-[1200px] h-[600px] pt-7">
          <img src="https://framerusercontent.com/images/eOkQipcAuByHjPvicAhsR8PzC0.png?scale-down-to=2048"/>
        </div>
        <div className="space-y-2 z-20 top-0 start-0">
        <button  className="fixed bottom-24 p-3 right-14 text-black bg-gray-100 rounded-xl shadow-md " >Buy this template for $49</button>
        <button size={41} className="fixed bottom-9 p-3 right-14 text-black bg-gray-100 rounded-xl shadow-md  " >Made in Framer</button>
   </div> </div>
  );
};

export default Hero;
