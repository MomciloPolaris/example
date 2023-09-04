import React from 'react'

const CoachCard = ({text, textP, deleted}) => {
  return ( 
    <div
      className={`max-w[1080px] flex flex-col px-5 text-center rounded-xl drop-shadow-lg bg-white mx-4 sm:mx-0 mt-36 mb-20 ${
        deleted ? "sm:inline hidden" : ""
      }`}
    >
      <img
        className="rounded-full top-[-20%] w-max mx-auto relative drop-shadow-lg"
        src="./img/coucica1.png"
        alt=""
      />
      <p className="text-xl font-bold">{text}</p>
      <p className='py-24'>{textP}</p>
    </div>
  );
}

export default CoachCard