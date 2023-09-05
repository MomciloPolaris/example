
import Container from "./Container";

const Info = () => {
return (
<section className="w-full">
    <Container>
        <div className="FlexContainer flex justify-between sm:flex-wrap">
            <div className="ImageWrapper relative sm:w-60 sm:order-1 sm: sm:mb-8 sm:ml-0">
                <div
                    className="absolute rounded-2xl inset-0 bg-gradient-b from-transparent to-black opacity-0 transition duration-500 ease-in-out hover:opacity-100 cursor-pointer">
                </div>
                <img className="rounded-2xl" src="src/assets/images/ProfileImage.png" alt="Profile Image" />
            </div>
            <div className="About sm:order-3 sm:m-auto sm:mb-6">
                <p id="Name" className="font-bold text-2xl inline-block mr-3 mb-4">Jelena Markovic</p>
                <p id="Location" className="inline-block text-sm font-bold leading-4 text-custom-gray text-customGray">
                    <img className="inline-block mr-1 mb-1" src="src/assets/images/Vector.png"
                        alt="Location Vector" />Serbia</p>
                <div id="Jobs" className="flex justify-between">
                    <p
                        className="JobDescription bg-[#ff9f1c40] text-[#FF9F1C] w-28 text-center rounded-3xl font-bold">
                        Life Coach</p>
                    <p
                        className="JobDescription w-32 text-center font-bold text-[#0F766E] bg-[#0f766e40] rounded-3xl">
                        Business Coach</p>
                </div>
                <div id="Rating">
                    <p className="w-14 font-bold  leading-4 text-customGray mt-6">RATING</p>
                    <p id="StarRate" className="text-sm font-bold h-3.5 mb-3 mt-4 inline-block"><img
                            className="inline-block mr-2" src="src/assets/images/Star 1.png" alt="Star" />4.95
                    </p>
                    <p id="Reviews" className="inline-block ml-5 font-sm text-[#737373]">• 73 Reviews</p>
                </div>
                <div id="Starting" className="flex justify-between">
                    <p className="text-sm mt-2 font-bold w-70 inline-block">STARTING AT:</p>
                    <p id="Coins" className="inline-block text-xxl font-bold mt-1">499 <img className="inline-block"
                            src="src/assets/images/Coins.png" alt="Coins" /></p>
                </div>
                <button
                    className="w-64 h-12 bg-[#0F766E] text-[#f8fafc] font-bold text-lg rounded-lg mt-5 hover:scale-95 ease-in-out duration-300">Book
                    a
                    session</button>
            </div>
            <div id="Coaching" className="sm:order-4 sm:m-auto">
                <div id="Title">
                    <p className="text-base font-bold text-[#737373] mb-6 inline-block">COACHING</p>
                    <p className="font-bold text-[#B9B9B9] inline-block float-right cursor-pointer"></p>
                        
                </div>
                <div className="FlexBox flex">
                    <div id="Skills">
                        <p className="Skill w-38 mb-5">Leadership Coaching </p>
                        <p className="Skill w-38 mb-5">Sales/Marketing Coaching </p>
                        <p className="Skill w-38 mb-5">Relationship Coaching </p>
                        <p className="Skill w-38 mb-5">Health & Wellnes Coaching </p>
                    </div>
                    <div id="Correct" className=" ml-6">
                        <img className="mb-5" src="src/assets/images/GreenCorrect.png" alt="Correct" />
                        <img className="mb-5" src="src/assets/images/GreenCorrect.png" alt="Correct" />
                        <img className="mb-5" src="src/assets/images/OrangeCorrect.png" alt="Correct" />
                        <img className="mb-5" src="src/assets/images/OrangeCorrect.png" alt="Correct" />
                    </div>
                </div>
            </div>
            <div id="Bookmark" className="sm:order-9 sm:mr-90">
                <p className=" sm:mt-1 text-[#737373] font-bold text-sm cursor-pointer"><img
                        className="inline-block mr-2 hover:scale-90 ease-in-out duration-300"
                        src="src/assets/images/Bookmark.png" alt="" /> Bookmark</p>
            </div>
        </div>
    </Container>
</section>
);
};

export default Info;