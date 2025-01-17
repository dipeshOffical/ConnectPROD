import { Fragment } from "react";
import Navbar from "../layouts/Navbar";
import HeaderTheme from "../layouts/HeaderTheme";
import NewsAndEvents from "../layouts/NewsAndEventsPage/NewsAndEvents";
import Footer from "../layouts/Footer";
import Sidebar from "../layouts/NewsAndEventsPage/Sidebar";
import Wrapper from "../components/Wrapper";

const NewsAndEventsPage = () => {
    return (
        <Fragment>
            <Navbar theme="bg-white" />
            <HeaderTheme title="News & Events" />
            <Wrapper className="grid lg:grid-cols-7 py-20 gap-20">
                <NewsAndEvents />
                <Sidebar />
            </Wrapper>
            <Footer />
        </Fragment>
    );
}

export default NewsAndEventsPage;