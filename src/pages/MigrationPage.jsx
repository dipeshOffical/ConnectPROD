import { Fragment } from "react";
import Navbar from "../layouts/Navbar";
import HeaderTheme from "../layouts/HeaderTheme";
import Migration from "../layouts/MigrationPage/Migration";
import Footer from "../layouts/Footer";

const MigrationPage = () => {
    return (
        <Fragment>
            <Navbar theme="bg-white" />
            <HeaderTheme title="Our Migration Agent"/>
            <Migration/>
            <Footer/>
        </Fragment>
    );
}

export default MigrationPage;