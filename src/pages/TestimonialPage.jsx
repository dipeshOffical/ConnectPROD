import { Fragment } from "react";
import Navbar from "../layouts/Navbar";
import HeaderTheme from "../layouts/HeaderTheme";
import StartJourney from "../layouts/StudentServicePage/StartJourney";
import Review from "../layouts/TestimonialPage/Review";
import Footer from "../layouts/Footer";

const TestimonialPage = () => {
    return (
        <Fragment>
            <Navbar theme="bg-white" />
            <HeaderTheme title="Testimonial" />
            <StartJourney />
            <Review />
            <Footer />
        </Fragment>
    );
}

export default TestimonialPage;