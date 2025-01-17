import { Fragment, useEffect } from "react";
import Navbar from "../layouts/Navbar";
import HeaderTheme from "../layouts/HeaderTheme";
import SideBar from "../layouts/IeltsTrainingPage/SideBar";
import AboutTraining from "../layouts/IeltsTrainingPage/AboutTraining";
import Footer from "../layouts/Footer";
import Wrapper from "../components/Wrapper";
import { useLocation, useNavigate } from "react-router";

const IeltsTrainingPage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === "/ielts") {
            navigate('/ielts/all');
        }
    }, [location.pathname, navigate]);

    return (
        <Fragment>
            <Navbar theme="bg-white" />
            <HeaderTheme title="IELTS Training" />
            <Wrapper className="lg:py-24 py-20">
                <div className="grid lg:grid-cols-7 lg:gap-20 gap-12">
                    <SideBar />
                    <AboutTraining />
                </div>
            </Wrapper>
            <Footer />
        </Fragment>
    );
}

export default IeltsTrainingPage;