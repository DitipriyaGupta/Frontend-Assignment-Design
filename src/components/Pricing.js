import React,{useState} from "react";

const monthly = [
  {
    name:"Free",
    description: "So you can see how incredible our tool is.",
    price: "$0",
    features: [
      "1 landing page included",
      "1,000 visits/mo",
      "Access to all UI blocks",
      "50 conversion actions included",
      "5% payment commission",
      "Real-time analytics",
    ],
    type:"Free for ever",
  },
  {
    name:"Starter",
    description: "So you can see how incredible our tool is. ",
    price: "$19",
    features: [
      "All Free features",
      "5 landing pages included",
      "50,000 visits/mo",
      "1,000 conversion actions included",
      "1% payment commission",
    ],
 type:"Billed monthly",
  },
  {
    name: "Pro",
    description: "So you can see how incredible our tool is. ",
    price: "$49",
    features: [
      "All Standard features",
      "20 landing pages included",
      "200,000 visits/mo",
      "5,000 conversion actions included",
      "No payment commission",
    ],
    h1:"Free",
  },
];
const yearly = [
    {
      name:"Free",
      description: "So you can see how incredible our tool is.",
      price: "$0",
      features: [
        "1 landing page included",
        "1,000 visits/mo",
        "Access to all UI blocks",
        "50 conversion actions included",
        "5% payment commission",
        "Real-time analytics",
      ],
      h1:"Free",
    },
    {
      name:"Starter",
      description: "So you can see how incredible our tool is. ",
      price: "$15",
      features: [
        "All Free features",
        "5 landing pages included",
        "50,000 visits/mo",
        "1,000 conversion actions included",
        "1% payment commission",
      ],
      h1:"Free",
    },
    {
      name: "Pro",
      description: "So you can see how incredible our tool is. ",
      price: "$45",
      features: [
        "All Standard features",
        "20 landing pages included",
        "200,000 visits/mo",
        "5,000 conversion actions included",
        "No payment commission",
      ],
      type:"Billed monthly",
    },
  ];
  
  const MonthlyBill=()=>{
    return (
        <div className="sm:flex sm:flex-col sm:align-center p-10 font-jakarta">
      
          <div className="mt-12 space-y-9 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 md:max-w-5xl md:mx-auto xl:grid-cols-3">
            {monthly.map((plan, index) => (
              <div key={index} className="border border-slate-200 rounded-lg shadow-sm">
                <div className="p-6 relative">
                {index === 1 ? (
 <p className="top-0 right-0 absolute -translate-y-1/2 bg-[#2E2E2E] px-3 py-2 text-sm text-white font-semibold tracking-wide rounded-full shadow-md">Best deal 🔥</p>
              ):null}
                  <button className={`text-xl leading-6 font-semibold text-slate-800  px-6 py-2 tracking-wider ${index === 0 ? "bg-gray-100 border-slate-50 rounded-full":null} ${index === 1 ? "bg-orange-100 border-slate-50 rounded-full":null} ${index === 2 ? "bg-red-100 border-slate-50 rounded-full":null}`}>{plan.name}</button>
                  <p className="mt-2 text-base text-slate-700 leading-tight">{plan.description}</p>
                  <p className="mt-8">
                    <span className="text-5xl font-bold text-slate-900 tracking-tighter">{plan.price}</span>
                    <span className="text-base font-medium text-slate-500">/mo</span>
                  </p>
    
                  <p className="text-black">{plan.h1}</p>
                  <a
                    href="/sign-up"
                    className="mt-8 block w-full bg-[#2E2E2E] rounded-xl py-4 text-sm font-semibold text-white text-center"
                  >
                    Get Started
                  </a>
                </div>
                <div className="pt-6 pb-8 px-6">
                  <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">What's included</h3>
                  <ul role="list" className="mt-4 space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex space-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 h-5 w-5 text-gray-400"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                        <span className="text-base text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
  }
  const YearlyBill=()=>{
    return (
        <div className="sm:flex sm:flex-col sm:align-center p-10 font-jakarta">

    
          <div className="mt-12 space-y-9 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 md:max-w-5xl md:mx-auto xl:grid-cols-3">
            {yearly.map((plan, index) => (
              <div key={index} className="border border-slate-200 rounded-lg shadow-sm">
                <div className="p-6">
                {/* <button className="top-12 bg-emerald-500 px-3 py-5 text-sm font-semibold tracking-wide rounded-full shadow-md">Most Popular</button> */}
                  <button className={`text-xl leading-6 font-semibold text-slate-800  px-6 py-2 tracking-wider ${index === 0 ? "bg-gray-100 border-slate-50 rounded-full":null} ${index === 1 ? "bg-orange-100 border-slate-50 rounded-full":null} ${index === 2 ? "bg-red-100 border-slate-50 rounded-full":null}`}>{plan.name}</button>
                  <p className="mt-2 text-base text-slate-700 leading-tight">{plan.description}</p>
                  <p className="mt-8">
                    <span className="text-5xl font-bold text-slate-900 tracking-tighter">{plan.price}</span>
                    <span className="text-base font-medium text-slate-500">/mo</span>
                  </p>
    
                  <p>Free for ever</p>
                  <a
                    href="/sign-up"
                    className="mt-8 block w-full bg-[#2E2E2E] rounded-xl py-4 text-sm font-semibold text-white text-center"
                  >
                    Get Started
                  </a>
                </div>
                <div className="pt-6 pb-8 px-6">
                  <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">What's included</h3>
                  <ul role="list" className="mt-4 space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex space-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 h-5 w-5 text-gray-400"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                        <span className="text-base text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
  }
const Pricing = () => {
     const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
return(
    <div>
      <div className="flex justify-center mb-4 font-jakarta font-semibold">
      
        <div className="bg-gray-200 px-3 py-1 rounded-xl">
        <button
  className={`${
    isLogin
      ? "bg-white text-black rounded-xl shadow-md"
      : "text-gray-500"
  } px-12 py-2  focus:outline-none focus:shadow-outline`}
  onClick={toggleForm}
>
  Monthly
</button>

<button
  className={`${
    !isLogin
      ? "bg-white text-black shadow-md"
      : " text-gray-500"
  } px-12 py-2 rounded-xl focus:outline-none focus:shadow-outline`}
  onClick={toggleForm}
>
  Anually
</button>

        </div>
        <p className="mt-3 ml-2">✨ save 30%</p>
      </div>
      {isLogin ? <MonthlyBill/> : <YearlyBill />}
    </div>
  )
};

export default Pricing;
