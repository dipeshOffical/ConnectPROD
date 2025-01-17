import { Fragment } from "react";
import Navbar from "../layouts/Navbar";
import HeaderTheme from "../layouts/HeaderTheme";
import Message from "../layouts/ChairmanPage/Message";
import Footer from "../layouts/Footer";

const ChairmanMessagePage = () => {
    return (
        <Fragment>
            <Navbar theme="bg-white"/>
            <HeaderTheme title="Message From Chairman"/>
            <Message/>
            <Footer/>
        </Fragment>
    );
}

export default ChairmanMessagePage;