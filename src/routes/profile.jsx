import React from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import CoachInfo from "../components/CoachInfo";
import LeftSideCoachPage from "../components/LeftSideCoachPage";
import AboutCoachingPage from "../components/AboutCoachingPage";
import CertificateCoachPage from "../components/CertificateCoachPage";
import RatingCoachPage from "../components/RatingCoachPage";
import CommentCoachPage from "../components/CommentsCoachPage";
const Profile = () => {
return (

<>
    <Header></Header>
    <main>
        <CoachInfo/>

        <section className="mt-20">
            <Container>
                <div className="FlexContainer flex justify-between sm:flex-wrap">
                    <LeftSideCoachPage/>

                    <div className="RightSide w-3/4 ml-16 sm:w-full sm:ml-0">
                        <AboutCoachingPage/>
                        <CertificateCoachPage></CertificateCoachPage>

                        <div id="Rating" className="mt-10">
                            <RatingCoachPage/>
                            <CommentCoachPage/>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    </main>
</>

);
};

export default Profile;