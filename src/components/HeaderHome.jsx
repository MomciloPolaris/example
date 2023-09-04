import React from 'react'

const Header = () => {
  return (
    <div className=" font-[Outfit] absolute z-30 bg-white w-full text-black">
      <div className="bg-white max-w-[1080px] my-0 sm:mx-auto px-2 sm:px-0 font-outfit text-lg py-4">
        <div className="flex justify-between">
          <div className="text-[24px]">Coaching App</div>
          <div className="sm:hidden">
            <img src="./img/Vector.png" alt="" />
          </div>
          <div className="sm:flex sm:gap-6 hidden">
            <div>About</div>
            <div>Solutions</div>
            <div>Log In</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header