import { Fragment } from "react";
import Navbar from "../layouts/Navbar";
import HeaderTheme from "../layouts/HeaderTheme";
// import StartJourney from "../layouts/StudentServicePage/StartJourney";
import Review from "../layouts/TestimonialPage/Review";
import Footer from "../layouts/Footer";
import TestimonialDescription from "../layouts/TestimonialPage/TestimonialDescription";

const TestimonialPage = () => {
    return (
        <Fragment>
            <Navbar theme="bg-white" />
            <HeaderTheme title="Testimonial" />
            <TestimonialDescription />
            <Review />
            <Footer />
        </Fragment>
    );
}

export default TestimonialPage;