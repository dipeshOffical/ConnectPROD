import { Fragment } from "react";
import Navbar from "../layouts/Navbar";
import HeaderTheme from "../layouts/HeaderTheme";
import Association from "../layouts/AssocCollegePage/Association";
import Footer from "../layouts/Footer";

const AssocCollegePage = () => {
    return (
        <Fragment>
            <Navbar theme="bg-white" />
            <HeaderTheme title="Associate Colleges" />
            <Association />
            <Footer />
        </Fragment>
    );
}

export default AssocCollegePage;