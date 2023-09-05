import Container from "../components/Container";
import Header from "../components/Header";
import Info from "../components/Info";
import LeftSide from "../components/LeftSide";
import About from "../components/About";
import Certificate from "../components/Certificate";
import Rating from "../components/Rating";
import Comment from "../components/Comment";
const Profile = () => {
    return (
        <>
            <Header></Header>
            <main>
                <Info/>

                <section className="mt-20">
                    <Container>
                        <div className="FlexContainer flex justify-between sm:flex-wrap">
                            <LeftSide/>

                            <div className="RightSide w-3/4 ml-16 sm:w-full sm:ml-0">
                                <About/>
                                <Certificate></Certificate>

                                <div id="Rating" className="mt-10">
                                    <Rating/>
                                    <Comment/>
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