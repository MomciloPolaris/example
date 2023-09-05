


/*const LeftSide = () => {
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

export default LeftSide; */



const LeftSide = () => {
  return (
    <div className="flex">
      <div className="w-1/4 mt-2 sm:w-1/2 sm:mb-12">
      <div id="LeftSideTitle" className="-ml-20">
          <p className="text-sm font-bold text-[#D9D9D9] inline-block sm:block sm:mb-2 sm:text-center sm:text-lg -ml-80">
            BADGES
          </p>
          <div className="h-0.5 w-44 bg-[#D9D9D9] inline-block ml-5 sm:block sm:w-4/5 sm:m-auto"></div>
        </div>
        <div id="Badges" className="mt-14 w-44 m-auto">
          <img className="mb-10 -ml-20" src="src/assets/images/Pink.png" alt="PinkBadge" />
          <img className="mb-10 -ml-20" src="src/assets/images/Green.png" alt="GreenBadge" />
          <img className="mb-10 -ml-20" src="src/assets/images/Blue.png" alt="BlueBadge"/>
        </div>
      </div>
      <div className="sm:w-3/4">
        <div id="About" className="sm:w-full">
          <div id="RightSideTitle" className="sm:w-4/5 sm:m-auto">
            <p className="text-xl font-bold text-[#4F4F4F] inline-block ">
              <img className="inline-block mr-1 " src="src/assets/images/Person.png" alt="Person" />About
            </p>
            <div className=" h-0.5 w-full bg-[#D9D9D9] inline-block"></div>
          </div>
          <p id="text" className="mt-10 text-lg sm:w-4/5 sm:m-auto sm:mt-6 sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin semper libero, a dapibus libero facilisis et. Fusce ac justo eu magna rhoncus suscipit. Sed hendrerit metus ac ipsum interdum malesuada.
            <br />
            <br />
            Duis bibendum mi ut urna volutpat, eu tincidunt metus elementum. Vestibulum sollicitudin risus eget quam tincidunt, in ullamcorper mi commodo. Donec sed felis vel leo iaculis sagittis. Suspendisse ac dui odio.
            <br />
            <br />
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque vitae bibendum lacus. Duis in risus et ipsum eleifend tincidunt vel vel nunc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;



