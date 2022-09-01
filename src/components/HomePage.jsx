import React from "react";
import Image01 from "../assets/Group 971.png";
import Image02 from "../assets/Layer_x0020_1.png";
import Image03 from "../assets/global-connection.png";
import Image04 from "../assets/email-marketing.png";
import Image05 from "../assets/sales.png";
import Button from "./Button";

const HomePage = () => {
  return (
    <div>
      <div className="relative">
        <div className="flex items-center justify-between h-[80vh]">
          <div className="w-[60%] flex flex-col justify-center items-center pl-40">
            <div>
              <p className="text-metal text-[60px] font-bold text-start pb-16">
                Organise Your Sales.
                <br /> Build Great Relationships.
                <br /> Save Time.
              </p>
              <Button />
            </div>
          </div>
          <div className="w-[40%]">
            <img src={Image01} alt="" className="h-[80vh]" />
          </div>
        </div>
        <div className="absolute top-[85%]">
          <img src={Image02} alt="" className="w-[180px] h-[300px]" />
        </div>
      </div>

      <div className="mt-10 mb-20">
        <p className="text-metal text-center text-4xl font-bold pb-16">
          How can Wakanda CRM help You Grow your Business?
        </p>
        <div className="flex justify-center items-center">
          <div className="pr-32 flex flex-col items-center">
            <img src={Image03} alt="" />
            <p className="text-metal text-2xl text-center font-bold pt-5">
              Build deeper connections with <br />
              your customers with ease.
            </p>
          </div>
          <div className="pr-32 flex flex-col items-center">
            <img src={Image05} alt="" />
            <p className="text-metal text-2xl text-center font-bold pt-5">
              Manage your sales process.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Image04} alt="" />
            <p className="text-metal text-2xl text-center font-bold pt-5">
              Automate your everyday
              <br /> task and save time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
