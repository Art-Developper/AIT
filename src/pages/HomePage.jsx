import Header from "../components/Header";
import Hero from "../components/Hero";
import MainSection from "../components/MainSection";
import WhyChoose from "../components/Whychose";
import Courses from "../components/Courses";
import Mission from "../components/Mission";
import JoinCTA from "../components/JoinCTA";
import Certificate from "../components/Certificate";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function HomePage(){
    return (
        <>
            <Header/>
            <Hero/>
            <MainSection/>
            <WhyChoose></WhyChoose>
            <Courses></Courses>
            <Mission></Mission>
            <JoinCTA></JoinCTA>
            <Certificate></Certificate>
            <Contact></Contact>
            <Footer></Footer>
        </>
    )
}

export default HomePage