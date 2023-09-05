


const LeftSide= () => {
return (
<div id="About" className="sm:w-full">
    <div id="RightSideTitle" className="sm:w-4/5 sm:m-auto">
        <p className="text-xl font-bold text-[#4F4F4F] inline-block "><img className="inline-block mr-2 "
                src="src/assets/images/Person.png" alt="Person" />About</p>
        <div className=" h-0.5 w-full bg-[#D9D9D9] inline-block"></div>
    </div>
    <p id="text" className="mt-10 text-lg sm:w-4/5 sm:m-auto sm:mt-6 sm:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin semper
        libero, a dapibus libero facilisis et. Fusce ac justo eu magna rhoncus suscipit. Sed
        hendrerit metus ac ipsum interdum malesuada.
        <br />
        <br />
        Duis bibendum mi ut urna volutpat, eu tincidunt metus elementum. Vestibulum sollicitudin
        risus eget quam tincidunt, in ullamcorper mi commodo. Donec sed felis vel leo iaculis
        sagittis. Suspendisse ac dui odio.
        <br />
        <br />
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Quisque vitae bibendum lacus. Duis in risus et ipsum eleifend tincidunt vel vel nunc.
    </p>
</div>
);
};

export default LeftSide;