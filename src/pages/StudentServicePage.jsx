import { Fragment } from "react";
import Navbar from "../layouts/Navbar";
import HeaderTheme from "../layouts/HeaderTheme";
import StartJourney from "../layouts/StudentServicePage/StartJourney";
import Services from "../layouts/HomePage/Services";
import Footer from "../layouts/Footer";

const StudentServicePage = () => {
    return (
        <Fragment>
            <Navbar theme="bg-white" />
            <HeaderTheme title="Student Service" />
            <StartJourney />
            <Services explore={0}/>
            <div className="mt-28"><Footer /></div>
        </Fragment>
    );
}

export default StudentServicePage;