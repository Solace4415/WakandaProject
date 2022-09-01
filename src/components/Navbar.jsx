import React from "react";
import NavbarImg from "../assets/Group 315.png";


const Navbar = () => {
  return (
    <div className="relative">
      <img src={NavbarImg} alt="" />
      <div className="flex justify-end items-center absolute right-10 top-[21%] pr-16">
        <div className="flex text-metal text-xl font-bold">
            <p className="pr-10">Features</p>
            <p className="pr-10">Pricing</p>
            <p className="pr-10">FAQs</p>
            <p className="pr-10">Contacts</p>
        </div>
        <button className="text-648b7a text-xl font-bold p-5 bg-white border-2 border-light-green rounded-lg  hover:bg-light-green hover:text-white">LOG IN</button>
        <button className="text-white text-xl font-bold py-6 px-10 bg-light-green rounded-lg ml-5 hover:border-2 hover:border-light-green hover:bg-white hover:text-light-green">GET STARTED</button>
      </div>
    </div>
  );
};

export default Navbar;
