import AboutUs from "../layouts/HomePage/AboutUs";
import LandHome from "../layouts/HomePage/LandHome";
import { Fragment } from "react";
import Services from "../layouts/HomePage/Services";
import Objectives from "../layouts/HomePage/Objectives";
import LetsTalk from "../layouts/HomePage/LetsTalk";
import Footer from "../layouts/Footer";

const HomePage = () => {
    return (
        <Fragment>
            <LandHome />
            <AboutUs />
            <Services />
            <Objectives />
            <LetsTalk/>
            <Footer/>
        </Fragment>
    );
}

export default HomePage;