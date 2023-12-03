import React,{useState} from 'react'
import {PlusIcon,MinusIcon } from "@heroicons/react/24/solid"
const FAQs = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = (index) => {
      setIsOpen((prevIndex) => (prevIndex === index ? null : index));
      
      }
      const accordionData = [
        {
          question: "Can I cancel my subscription?",
          answer: "When your trial period ends, your account will automatically be downgraded to our free plan...",
        },
        {
          question: "What happens when my trial ends?",
          answer: "When your trial period ends, your account will automatically be downgraded to our free plan, with limited features and functionality. To continue enjoying the full benefits of our service, you can upgrade to one of our paid plans at any time during or after the trial. Your data and settings will be preserved, ensuring a seamless transition as you move forward with our SaaS platform.",
        },
        {
          question: "What payment methods do you offer?",
          answer: "We aim to provide a seamless experience for our customers. We accept a variety of payment methods, including major credit cards (Visa, MasterCard, American Express, and Discover), PayPal, and bank transfers.",
        },
        {
          question: "What is your refund policy?",
          answer: "Our refund policy is designed with customer satisfaction in mind. If you are not satisfied with our service, you can request a full refund within 30 days of your initial purchase. To initiate the refund process, please contact our support team through the 'Help' section in your account or email us at support@Milton.com, and we'll be happy to assist you.",
        },
        {
          question: "Do you offer discounts to educational institutions ?",
          answer: "Yes, we are happy to support educational institutions by offering special discounts on our SaaS platform. Please reach out to our sales team at sales@Milton.com with your institution's details, and we will provide you with more information on our exclusive educational pricing options.",
        },
       
      ];
    
  
  return (
    
    <div className='relative flex flex-col items-center justify-center py-32 font-jakarta animation-fadeInUp'>
       <button className="rounded-full bg-zinc-200 px-8 py-1 text-md text-zinc-800 mb-8 font-semibold">
       Relevant stuff, bla bla 📣
        </button>
        <div className="font-semibold  text-zinc-800">
          <p className="text-[60px]">Frequently asked questions</p>
        </div>
      <div className="w-full sm:w-2/3 md:w-4/6 lg:w-1/2 xl:w-1/2 mx-auto mt-8 space-y-8">
        {accordionData.map((item,index)=>(
           
    <div className="mb-2 rounded-lg bg-[#F1F2F4] p-3 font-jakarta">
    <div
      className="flex items-center justify-between p-3 cursor-pointer"
      onClick={ () => toggle(index)}
    >
      <h2 className="text-lg font-semibold">{item.question}</h2>
      {isOpen===index?(<MinusIcon className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full p-1"/>):(<PlusIcon className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full p-1"/>)}
     
    </div>
    {isOpen===index && (
      <div className="p-3">
        <p className="text-gray-600"> {item.answer}
  </p>
      </div>
    )}

  </div>
  ))}
  </div>
  </div>
  
  
 
 
  
  )
}

export default FAQs

