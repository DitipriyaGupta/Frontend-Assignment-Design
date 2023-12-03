import React from 'react'

const LastCTA = () => {
  return (
    <div className='relative flex flex-col items-center justify-center py-32 font-jakarta animation-fadeInUp'>
       <button className="rounded-full bg-zinc-200 px-8 py-1 text-md text-zinc-800 mb-8 font-semibold">
       Last call Baby! 🚀

        </button>
        <div className="font-semibold  text-zinc-800">
          <p className="text-[60px]">

Ready to start?</p>
        </div>
        <div className="text-zinc-500 pt-5  columns-1 w-[590px]">
          <p className="text-[20px]">
          Here is your last chance to explain how cool your app is. Focus on the benefits for your users, not on the features. 
          </p>
        </div>
        <a
          href="/sign-up"
          className="mt-8 block  bg-[#2E2E2E] rounded-xl py-4 px-8 text-sm font-semibold text-white text-center"
        >
           Get Started, it's free
        </a>
        <div className="flex items-end mt-6 mx-10">
                <div className="flex flex-col  text-md max-w-md mx-2 order-2 items-start ">
                  <div className="px-2 py-2 space-y-2 rounded-2xl inline-block rounded-bl-md bg-[#FEE9CB] text-gray-700 mb-10">
                    <span>
                    I never missed a call again, the AI-drivenfeature is a game changer for me! 



                    </span>
                    <p className="text-zinc-500">
Adam, Solo founder

</p>
                  </div>
                </div>
                <img
src="https://framerusercontent.com/images/BRu6MhHhp9NjldqU9TTCEAEoGKg.png"                  alt="My profile"
                  className="w-24 h-24 rounded-full order-1"
                />
              </div>
        </div>
  )
}

export default LastCTA