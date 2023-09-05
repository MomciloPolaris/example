
import Container from "../components/Container";

const Header = () => {
return (
  
<header className="h-20 border-b-2 mb-10 sm:pl-10 sm:pr-10">
    <Container>
        <div className="FlexContainer flex justify-between">
            <div id="Logo">
                <p className="text-xl font-bold mt-6">Coaching App</p>
            </div>
            <div id="Search" className="">
  <input
    placeholder="Search"
    className="pl-6 pr-6 w-96 border-2 rounded-30 rounded-lg h-8 mt-6"
    type="search"
    id="Search"
    name="Search"
  />
  
</div>

            <nav className="mt-2">
                <ul className="flex justify-between gap-10 sm:gap-6 sm:mt-2">
                    
                    <li id="CoinAmount" className="font-bold mt-6 cursor-pointer"><img className="inline-block mr-2" src="src/assets/images/Coins.png" alt="Coins" /><span>3120</span></li>
                    <li id="Home" className="  text-[#FF9F1C] font-medium text-sm color cursor-pointer"><img className="m-auto mt-4 mb-1" src="src/assets/images/Home.png" alt="Home" /><span>Home</span></li>
                    <li id="Notification" className="font-medium text-sm cursor-pointer"><img className="m-auto mt-4 mb-1" src="src/assets/images/Notification.png" alt="" /><span className="">Notifications</span></li>
                    <li id="Profile" className="font-medium text-sm cursor-pointer"><img className="rounded-full mt-2" src="src/assets/images/coucica 1.png" alt="ProfileIcon" /><span className="">Me</span> <img className="inline-block sm:hidden" src="src/assets/images/Down.png" alt="Down" /></li>
                </ul>
            </nav>
        </div>
    </Container>
</header> 




);

};

export default Header;