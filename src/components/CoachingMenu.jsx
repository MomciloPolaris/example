import React from 'react'

const CoachingMenu = ({text, color}) => {
  let ColorMenu;
  if ((color === "green")) ColorMenu = "hover:border-2 hover:border-[#0F766E]";
  if ((color === "orange")) ColorMenu = "hover:border-2 hover:border-[#FF9F1C]";
  let ColorArrow;
  if ((color === "green")) ColorArrow =
    "text-[#0F766E] color-[#0F766E] group-hover:bg-[#0F766E] group-hover:text-white";
  if ((color === "orange")) ColorArrow =
    "text-[#FF9F1C] color-[#0F766E] group-hover:bg-[#FF9F1C] group-hover:text-white";
  return (
    <div className={`font-bold group box-border flex justify-between py-4 px-5 bg-white ease-in duration-150 border-2 border-transparent rounded-xl shadow-lg mb-2 ${ColorMenu}`}>
      <p className=" flex items-center sm:text-xl text-m">
        {text}
      </p>
      <div className={`bg-white sm:w-[70px] sm:h-[70px]  w-[50px] h-[50px]  flex justify-center ease-in duration-150 items-center rounded-full drop-shadow ${ColorArrow}`}>
        <i className="fa-solid fa-arrow-down fa-2x"></i>
      </div>
    </div>
  );
}

export default CoachingMenu