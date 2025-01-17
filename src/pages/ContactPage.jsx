import { Fragment, useEffect } from "react";
import Navbar from "../layouts/Navbar";
import HeaderTheme from "../layouts/HeaderTheme";
import Contact from "../layouts/ContactPage/Contact";
import OtherBranch from "../layouts/ContactPage/OtherBranch";
import Footer from "../layouts/Footer";
import { useLocation, useNavigate } from "react-router";

const ContactPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === "/contact") {
            navigate('/contact/australia');
        }
    }, [location.pathname, navigate]);
    
    return (
        <Fragment>
            <Navbar theme="bg-white" />
            <HeaderTheme title="Contact Us" />
            <Contact />
            <OtherBranch />
            <Footer />
        </Fragment>
    );
}

export default ContactPage;