import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Button = () => {
  return (
    <div className="flex justify-center items-center py-7 text-white bg-light-green rounded-lg w-[380px] shadow-button hover:border-2 hover:border-light-green hover:bg-white hover:text-light-green"> 
      <button className=" text-xl text-center font-bold">
        GET STARTED NOW
      </button>
      <MdKeyboardArrowRight className="text-4xl"/>
    </div>
  );
};

export default Button;
