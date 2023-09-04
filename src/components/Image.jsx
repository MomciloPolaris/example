import React from 'react'
import Button from './Button';

const Image = () => {
  return (
    <section className="font-[Roboto]">
      <div className="h-screen flex flex-col bg-[url('./img/kanc1.png')] justify-end overflow-clip bg-center bg-cover bg-no-repeat">
        <div className="max-w-[1080px] mx-auto my-auto">
          <div className="flex-col sm:w-1/2 w-full">
            <p
              id="head"
              className="sm:text-6xl text-4xl sm:text-start font-[500] sm:px-0 px-2 text-white leading-[90%] sm"
            >
              "To dare,
              <br /> that is the price of progress." <br />
              <span className="text-4xl">-Victor Hugo</span>
            </p>
            <p
              id="paragraph"
              className="text-white py-8 px-2 sm:px-0 text-s text-justify mx-auto sm:text-start"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto soluta tempora ratione corrupti reiciendis molestias
              sunt recusandae fugit harum consequuntur sed voluptate earum enim
              quidem eos, repudiandae beatae voluptas quod labore.
            </p>
            <div className="flex sm:gap-9 gap-6 flex-row sm:justify-start justify-center">
              <Button color={"white"} text={"GET STARTED"} />
              <Button color={"transparent"} text={"LEARN MORE"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Image