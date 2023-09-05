
import React from "react";

const Button = ({ text, color, large }) => {
  let btnColor;
  if (color === "green") btnColor = "bg-[#0F766E] text-white";
  if (color === "orange") btnColor = "bg-[#FF9F1C] text-white";
  if (color === "white") btnColor = "bg-white text-black";
  if (color === "black") btnColor = "bg-black text-white";
  if (color === "transparent")
    btnColor =
      "bg-transparent text-white outline outline-2 outline-white hover:bg-white hover:text-black ease-in duration-150";
  return (
    <button
      className={`${btnColor} ${
        large ? "w-1/2" : "w-auto"
      } font-bold px-5 sm:px-10 rounded-full py-3 sm:text-2xl text-xl inline`}
    >
      {text}
    </button>
  );
};

export default Button;
