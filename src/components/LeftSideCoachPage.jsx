import React from "react";


const LeftSideCoachPage = () => {
return (
<div className="LeftSide w-1/4 mt-7 sm:w-full sm:mb-12">
    <div id="LeftSideTitle" className="sm:">
        <p className="text-sm font-bold text-[#D9D9D9] inline-block sm:block sm:mb-2 sm:text-center sm:text-lg">BADGES</p>
        <div className="h-0.5 w-44 bg-[#D9D9D9] inline-block ml-5 sm:block sm:w-4/5 sm:m-auto"></div>
    </div>
    <div id="Badges" className="mt-14 w-44 m-auto">
        <img className="mb-10" src="src/assets/images/Pink.png" alt="PinkBadge" />
        <img className="mb-10" src="src/assets/images/Green.png" alt="GreenBadge" />
        <img src="src/assets/images/Blue.png" alt="BlueBadge" />
    </div>
</div>
);
};

export default LeftSideCoachPage;