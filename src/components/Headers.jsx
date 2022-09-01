import React from "react";

const Headers = ({ image, header, body }) => {
  return (
    <div className="flex pb-14">
      <img src={image} alt="" className="h-[100px] w-[100px]"/>
      <div>
        <p className="text-metal text-2xl font-bold">{header}</p>
        <p className="text-metal text-base font-medium">{body}</p>
      </div>
    </div>
  );
};

export default Headers;
