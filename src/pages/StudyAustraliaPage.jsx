import { Fragment } from "react";
import Navbar from "../layouts/Navbar";
import HeaderTheme from "../layouts/HeaderTheme";
import StartJoruney from "../layouts/StudentServicePage/StartJourney";
import WhyStudy from "../layouts/StudyAustraliaPage/WhyStudy";
import StudyDestination from "../layouts/StudyAustraliaPage/StudyDestination";
import HowItWorks from "../layouts/StudyAustraliaPage/HowItWorks";
import Footer from "../layouts/Footer";

const StudyAustraliaPage = () => {
    return (
        <Fragment>
            <Navbar theme="bg-white" />
            <HeaderTheme title="Study In Australia" />
            <StartJoruney />
            <WhyStudy />
            <StudyDestination />
            {/* <HowItWorks /> */}
            <Footer />
        </Fragment>
    );
}

export default StudyAustraliaPage;