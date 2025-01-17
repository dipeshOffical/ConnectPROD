import { Fragment } from "react";
import Navbar from "../layouts/Navbar";
import HeaderTheme from "../layouts/HeaderTheme";
import AboutUs from "../layouts/HomePage/AboutUs";
import About from "../layouts/AboutPage/About";
import OurObjectives from "../layouts/AboutPage/OurObjectives";
import Footer from "../layouts/Footer";

const AboutUsPage = () => {
    return (
        <Fragment>
            <Navbar theme="bg-white"/>
            <HeaderTheme title="About Us"/>
            <AboutUs discover={0}/>
            <About/>
            <OurObjectives/>
            <Footer/>
        </Fragment>
    );
}

export default AboutUsPage;