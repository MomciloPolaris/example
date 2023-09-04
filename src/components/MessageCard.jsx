import React from 'react'
import Button from './Button'

const MessageCard = ({text, textMessage}) => {
  return (
    <div className="max-w-[1080px] px-5 py-10 mb-20 sm:mx-auto mx-4 drop-shadow-xl bg-gradient-to-r from-[#0F766E] to-[#FF9F1C] text-center rounded-3xl">
      <p className='text-xl sm:text-4xl font-bold pb-10'>{text}</p>
      <p className='sm:text-8xl text-3xl pb-10 text-white'>{textMessage}</p>
      <Button color={"black"} text={"GET STARTED"} />
    </div>
  );
}

export default MessageCard