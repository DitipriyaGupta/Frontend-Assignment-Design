import React,{useState} from "react";

const Features = () => {
  const [animationFinished, setAnimationFinished] = useState(false)
  const onAnimationEnd = () => {
    // Callback when the animation ends
    setAnimationFinished(true);
  };
  return (
    <div>
      <div className="relative flex flex-col items-center justify-center py-32 font-jakarta font-semibold animation-fadeInUp">
        <button className="rounded-full bg-zinc-200 px-8 py-1 text-md text-zinc-800 mb-8">
          Our main features 🦸🏼
        </button>
        <div className="font-jakarta   text-zinc-800">
          <p className="text-[60px]">Discover your new superpowers </p>
        </div>
        <div className="flex w-[1200px] mt-24 ml-12 ">
          <div className="w-[550px] animation-fadeInUp ">
            <button className="rounded-full bg-orange-200 px-8 py-1 text-md text-zinc-800 mb-8">
              Seamless Scheduling
            </button>
            <div className="font-jakarta text-zinc-800 space-y-2">
              <p className="text-[40px]">Focus on what matters most for you</p>
              <p className="text-[20px] text-zinc-400">
                Effortlessly plan your day with our intuitive drag-and-drop
                interface. Sync with multiple calendar platforms, import events
                from emails, and add participants with just a few clicks.
              </p>
            </div>
            <div>
              <div className="flex items-end mt-6">
                <div className="flex flex-col  text-md max-w-xs mx-2 order-2 items-start ">
                  <div className="px-2 py-2 space-y-2 rounded-2xl inline-block rounded-bl-md bg-zinc-800 text-gray-300 mb-10">
                    <span>
                      I tested many calendar apps. This app is the best of all!
                      It saves me hours of time.
                    </span>
                    <p className="text-zinc-400">Carla, Head of Finance</p>
                  </div>
                </div>
                <img
                  src="https://framerusercontent.com/images/Pm9TTOkN341IYtePLdPGmhG0E.png"
                  alt="My profile"
                  className="w-24 h-24 rounded-full order-1"
                />
              </div>
            </div>
          </div>
          <div className= {`tada-animation ${animationFinished ? "no-animation" : ""} w-[650px]`}
      onAnimationEnd={onAnimationEnd}
    >
            <img
              src="https://framerusercontent.com/images/KsZ6wO13QZewZKHzx7JNgFn88.png?scale-down-to=512"
              className="h-[600px] "
            />
          </div>
        </div>
        <div className="flex w-[1200px] mt-24 ml-12">
          <div className="w-[650px]">
            <img
              src="https://framerusercontent.com/images/EgCwW6bpD4t2JQoyjgySRkUXc.png"
              className="h-[600px]"
            />
          </div>
          <div className="w-[550px]">
            <button className="rounded-full bg-sky-200 px-8 py-1 text-md text-zinc-800 mb-8">
              Smart Reminders & Task
            </button>
            <div className="font-jakarta text-zinc-800 space-y-2">
              <p className="text-[40px]">
                Never miss an important deadline or event again
              </p>
              <p className="text-[20px] text-zinc-400">
                Never miss an important deadline again with our AI-driven
                notifications. Our app intelligently analyzes your schedule to
                prioritize what's most important, keeping you on track and
                ensuring your day is productive and stress-free.
              </p>
            </div>
            <div>
              <div className="flex items-end justify-end mt-6">
                <div className="flex flex-col  text-md max-w-xs mx-2 order-1 items-end ">
                  <div className="px-2 py-2 space-y-2 rounded-2xl inline-block rounded-bl-md bg-zinc-800 text-gray-300 mb-10">
                    <span>
                      I love how user-friendly this app is! It's so easy to add
                      events and set reminders!
                    </span>
                    <p className="text-zinc-400">Adam, entrepreneur</p>
                  </div>
                </div>
                <img
                  src="https://framerusercontent.com/images/CPGgYEBeFy4gDXe5dDzh1qjQG1w.png"
                  alt="My profile"
                  className="w-24 h-24 rounded-full order-1"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[1200px] mt-24 ml-12">
          <div className="w-[600px]">
            <button className="rounded-full bg-sky-100 px-8 py-1 text-md text-zinc-800 mb-8">
              Seamless Scheduling
            </button>
            <div className="font-jakarta text-zinc-800 space-y-2">
              <p className="text-[40px]">Focus on what matters most for you</p>
              <p className="text-[20px] text-zinc-400">
                Effortlessly plan your day with our intuitive drag-and-drop
                interface. Sync with multiple calendar platforms, import events
                from emails, and add participants with just a few clicks.
              </p>
            </div>
            <div>
              <div className="flex items-end mt-6">
                <div className="flex flex-col  text-md max-w-xs mx-2 order-2 items-start ">
                  <div className="px-2 py-2 space-y-2 rounded-2xl inline-block rounded-bl-md bg-zinc-800 text-gray-300 mb-7">
                    <span>
                      I've tried a lot of calendar apps, but this one is by far
                      the best! It's so intuitive and customizable, and it has
                      all the features I need.
                    </span>
                    <p className="text-zinc-400">Annie, Designer</p>
                  </div>
                </div>
                <img
                  src="https://framerusercontent.com/images/1OwzdZHx9ElDw1ZAavs6WGWBSw.png"
                  alt="My profile"
                  className="w-24 h-24 rounded-full order-1"
                />
              </div>
            </div>
          </div>
          <div className="w-[650px]">
            <img
              src="https://framerusercontent.com/images/xjG69OjCFt0Z3YQvNa3HNBBP5G0.png"
              className="h-[600px]"
            />
          </div>
        </div>
        <div className="flex w-[1200px] mt-24 ml-12">
          <div className="w-[650px]">
            <img
              src="https://framerusercontent.com/images/ow5cq9Ercs5KlWFqhMUsdUkCl8.png"
              className="h-[600px]"
            />
          </div>
          <div className="w-[550px]">
            <button className="rounded-full bg-sky-200 px-8 py-1 text-md text-zinc-800 mb-8">
              Smart Reminders & Task
            </button>
            <div className="font-jakarta text-zinc-800 space-y-2">
              <p className="text-[40px]">
                Never miss an important deadline or event again
              </p>
              <p className="text-[20px] text-zinc-400">
                Never miss an important deadline again with our AI-driven
                notifications. Our app intelligently analyzes your schedule to
                prioritize what's most important, keeping you on track and
                ensuring your day is productive and stress-free.
              </p>
            </div>
            <div>
              <div className="flex items-end justify-end mt-6">
                <div className="flex flex-col  text-md max-w-xs mx-2 order-1 items-end ">
                  <div className="px-2 py-2 space-y-2 rounded-2xl inline-block rounded-bl-md bg-zinc-800 text-gray-300 mb-10">
                    <span>
                      I've recommended this app to all my friends and
                      colleagues!
                    </span>
                    <p className="text-zinc-400">Karl, CTO of a cool startup</p>
                  </div>
                </div>
                <img
                  src="https://framerusercontent.com/images/lKaaStgbmdIe8TfrIkFlKzHazV0.png"
                  alt="My profile"
                  className="w-24 h-24 rounded-full order-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center py-32 font-jakarta ">
        <button className="rounded-full bg-zinc-200 px-8 py-1 text-md text-zinc-800 mb-8 font-semibold">
          And so much more... 💼
        </button>
        <div className="font-jakarta   text-zinc-800 font-semibold">
          <p className="text-[60px]">Our features to make your life easier</p>
        </div>
        <div className="flex w-[1200px] mt-24 justify-center align">
          <div className="grid lg:grid-cols-3">
            <div className="max-w-md mx-4 mb-4 rounded-lg ">
              <div className="py-12 flex justify-center rounded-lg bg-gray-100">
                <img
                  className="w-[50%] rounded-lg"
                  src="https://framerusercontent.com/images/psdpn17XuwZ0NdeAgqZ1B9jIs.svg"
                  alt="product"
                />
              </div>
              <div className="px-6 py-4">
                <div className="mb-3 font-semibold">
                  <button className="rounded-full bg-gray-100 px-8 py-1 text-md text-zinc-800 mb-8">
                    Cross-Device Sync
                  </button>
                </div>
                <p className="leading-normal  text-gray-500">
                  Keep your schedule in sync across all your devices, ensuring
                  seamless access to your calendar, events, and tasks wherever
                  you go.
                </p>
              </div>
            </div>
            <div className="max-w-md mx-4 mb-4 rounded-lg ">
              <div className="py-12 flex justify-center rounded-lg bg-gray-100">
                <img
                  className="w-[67%] rounded-lg"
                  src="https://framerusercontent.com/images/9zLLT2PHM1pdm0cmjDvqVV6u4.svg"
                  alt="product"
                />
              </div>
              <div className="px-6 py-4">
                <div className="mb-3 font-semibold">
                  <button className="rounded-full bg-orange-100 px-8 py-1  text-zinc-800 mb-8">
                    Auto Event Import
                  </button>
                </div>
                <p className="leading-normal text-gray-500">
                  Automatically import events from emails, social media, and
                  other sources, so you never miss a beat or have to manually
                  input details.
                </p>
              </div>
            </div>
            <div className="max-w-md mx-4 mb-4 rounded-lg ">
              <div className="py-12 flex justify-center rounded-lg bg-gray-100">
                <img
                  className="w-[85%] rounded-lg"
                  src="https://framerusercontent.com/images/MnBPtp8lNOwne9QGiLZLBCkZK9k.svg"
                />
              </div>
              <div className="px-6 py-4">
                <div className="mb-3 font-semibold">
                  <div className="mb-3">
                    <button className="rounded-full bg-sky-200 px-8 py-1 text-md text-zinc-800 mb-8">
                    Task Delegation
                    </button>
                  </div>
                </div>
                <p className="leading-normal text-gray-500">
                Easily assign tasks to team members, family, or friends, promoting shared responsibility and seamless collaboration.

                </p>
              </div>
            </div>
            <div className="max-w-md mx-4 mb-4 rounded-lg ">
              <div className="py-12 flex justify-center rounded-lg bg-gray-100">
                <img
                  className="w-[91%] rounded-lg"
                  src="https://framerusercontent.com/images/VFrv8s9Ou5YYTsx7jkOfyXmAm2Y.png?scale-down-to=512"
                  alt="product"
                />
              </div>
              <div className="px-6 py-4">
                <div className="mb-3 font-semibold">
               
                  <div className="mb-3">
                    <button className="rounded-full bg-sky-200 px-8 py-1 text-md text-zinc-800 mb-8">
                    Voice Command Integration

                    </button>
                  </div>
                </div>
                <p className="leading-normal text-gray-500">
               
Quickly create events, set reminders, or reschedule appointments with voice commands, thanks to compatibility with popular virtual assistants
                </p>
              </div>
            </div>
            <div className="max-w-md mx-4 mb-4 rounded-lg ">
              <div className="py-12 flex justify-center rounded-lg bg-gray-100">
                <img
                  className="w-[50%] rounded-lg"
                  src="https://framerusercontent.com/images/l2ZsBz5u7WqpiyCOQ4jeJmYCYIc.png?scale-down-to=512"
                  alt="product"
                />
              </div>
              <div className="px-6 py-4">
              <div className="mb-3 font-semibold">
               
               <div className="mb-3">
                 <button className="rounded-full bg-red-100 px-8 py-1 text-md text-zinc-800 mb-8">
                 Customizable Alerts


                 </button>
               </div>
             </div>
             <p className="leading-normal text-gray-500">
            
             Customizable Alerts

Personalize notification types and timings for events, tasks, and goals, ensuring you stay on track and informed without feeling overwhelmed. 
            </p>
              </div>
            </div>
            <div className="max-w-md mx-4 mb-4 rounded-lg ">
              <div className="py-12 flex justify-center rounded-lg bg-gray-100">
                <img
                  className="w-[58%] rounded-lg"
                  src="https://framerusercontent.com/images/RGak3EPkyg9scIKkezsY8Rn7E.png?scale-down-to=512"
                  alt="product"
                />
              </div>
              <div className="px-6 py-4">
              <div className="mb-3 font-semibold">
               
               <div className="mb-3">
                 <button className="rounded-full bg-violet-400 px-8 py-1 text-md text-zinc-800 mb-8">
                 Privacy Protection

                 </button>
               </div>
             </div>
             <p className="leading-normal text-gray-500">
            
           

Safeguard your personal information and event details with our robust security measures, including end-to-end encryption and optional password protection.            </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex w-[1200px] mt-24 justify-center align">
  <div className="grid lg:grid-cols-3">
    <div className="max-w-md mx-4 mb-4 rounded-lg">
      <div className="py-12 flex justify-center rounded-lg bg-gray-100">
        <img
          className="rounded-lg w-56"
          src="https://framerusercontent.com/images/MnBPtp8lNOwne9QGiLZLBCkZK9k.svg"
          alt="product"
        />
      </div>
      <div className="px-6 py-4">
        <div className="mb-3">
          <button className="text-xl font-semibold rounded-full bg-black text-gray-800 tracking-tight">
            This is the title
          </button>
        </div>
        <p className="leading-normal text-gray-700">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, quibusdam
          facere quo laborum maiores sequi nam tenetur laudantium.
        </p>
      </div>
    </div>

    <div className="max-w-md mx-4 mb-4 rounded-lg">
      <div className="py-12 flex justify-center rounded-lg bg-gray-100">
        <img
          className="rounded-lg w-56"
          src="https://framerusercontent.com/images/9zLLT2PHM1pdm0cmjDvqVV6u4.svg"
          alt="product"
        />
      </div>
      <div className="px-6 py-4">
        <div className="mb-3">
          <button className="text-xl font-semibold rounded-full bg-black tracking-tight text-gray-800">
            This is the title
          </button>
        </div>
        <p className="leading-normal text-gray-700">
          Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium,
          quibusdam facere quo laborum maiores sequi nam tenetur laud.
        </p>
      </div>
    </div>

    <div className="max-w-md mx-4 mb-4 rounded-lg">
      <div className="py-12 flex justify-center rounded-lg bg-gray-100">
        <img
          className="rounded-lg w-56"
          src="https://framerusercontent.com/images/9zLLT2PHM1pdm0cmjDvqVV6u4.svg"
          alt="product"
        />
      </div>
      <div className="px-6 py-4">
        <div className="mb-3">
          <button className="text-xl font-semibold rounded-full bg-black tracking-tight text-gray-800">
            This is the title
          </button>
        </div>
        <p className="leading-normal text-gray-700">
          Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium,
          quibusdam facere quo laborum maiores sequi nam tenetur laud.
        </p>
      </div>
    </div>
  </div>
</div> */}
        {/* <div className="flex w-[1200px] mt-24 justify-center align">
  <div className="grid lg:grid-cols-3">
    <div className="max-w-md mx-4 mb-4 rounded-lg">
      <div className="py-12 flex justify-center rounded-lg bg-gray-100">
        <img
          className="rounded-lg w-4/6"
          src="https://framerusercontent.com/images/MnBPtp8lNOwne9QGiLZLBCkZK9k.svg"
          alt="product"
        />
      </div>
      <div className="px-6 py-4">
        <div className="mb-3">
          <button className="text-xl font-semibold rounded-full bg-black text-gray-800 tracking-tight">
            This is the title
          </button>
        </div>
        <p className="leading-normal text-gray-700">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, quibusdam
          facere quo laborum maiores sequi nam tenetur laudantium.
        </p>
      </div>
    </div>

    <div className="max-w-md mx-4 mb-4 rounded-lg">
      <div className="py-12 flex justify-center rounded-lg bg-gray-100">
        <img
          className="rounded-lg w-4/6"
          src="https://framerusercontent.com/images/MnBPtp8lNOwne9QGiLZLBCkZK9k.svg"
          alt="product"
        />
      </div>
      <div className="px-6 py-4">
        <div className="mb-3">
          <button className="text-xl font-semibold rounded-full bg-black tracking-tight text-gray-800">
            This is the title
          </button>
        </div>
        <p className="leading-normal text-gray-700">
          Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium,
          quibusdam facere quo laborum maiores sequi nam tenetur laud.
        </p>
      </div>
    </div>

    <div className="max-w-md mx-4 mb-4 rounded-lg">
      <div className="py-12 flex justify-center rounded-lg bg-gray-100">
        <img
          className="rounded-lg w-4/6"
          src="https://framerusercontent.com/images/9zLLT2PHM1pdm0cmjDvqVV6u4.svg"
          alt="product"
        />
      </div>
      <div className="px-6 py-4">
        <div className="mb-3">
          <button className="text-xl font-semibold rounded-full bg-black tracking-tight text-gray-800">
            This is the title
          </button>
        </div>
        <p className="leading-normal text-gray-700">
          Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium,
          quibusdam facere quo laborum maiores sequi nam tenetur laud.
        </p>
      </div>
    </div>
  </div>
</div> */}
      </div>
    </div>
  );
};

export default Features;
