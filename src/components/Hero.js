import React from 'react'

const Hero = () => {
  return (
    <div className='relative flex flex-col items-center justify-center py-32 font-jakarta '>
    <button className='rounded-full bg-zinc-100 px-8 py-1 text-sm '>An other way to manage time️</button>
  
    <div className='text-center'>
      <div className='font-jakarta  flex flex-col text-zinc-800 font-semibold'>
        <p className='text-[80px]'>Your new favorite </p>
        <p className='text-[70px]'>calendar🗓️ app</p>
    </div>
   
<div className='text-zinc-500 pt-5 columns-1 w-[650px]'>
  <p className='text-[20px]'>
    Here you should explain how cool your app is. Remember, focus on the benefits for your users, not on the features.
  </p>
  
</div>

    </div> 

  </div>
  
  )
}

export default Hero