import Navbar from "../Navbar";
import ausLogo from "../../assets/australia_flag.png";
import ExpItem from "../../components/ExpItem";
import { experience } from "../../static-data";
import Button from "../../components/Button";
import Wrapper from "../../components/Wrapper";
import { Link } from "react-router-dom";
import "./LandHome.css"; // Import the CSS file for pop-up and button animation

const LandHome = () => {
    return (
        <div>
            <div className="text-color-white">
                <div className="relative">
                    <div className="absolute w-full bg-[rgba(0,0,0,0.3)]"><Navbar /></div>
                    <div className="home-bg h-screen">
                        <div className="absolute w-full top-[55%] lg:top-[50%] translate-y-[-50%]">
                            <Wrapper>
                                <div className="text-5xl font-semibold leading-tight">
                                    <h1 className="popup-text">Begin your Australian</h1>
                                    <h1 className="flex items-center gap-4 popup-text">
                                        <span>Dream with Us</span>
                                        <span className="hidden md:block"><img src={ausLogo} alt="connect-aus-logo" className="md:w-[5rem]" /></span>
                                    </h1>
                                </div>
                                <div className="md:w-[43%] mt-6 leading-relaxed popup-text">
                                    <p>Build your dream career in Australia with Connect. From choosing the right course to settling in, we're here to support you every step of the way.</p>
                                </div>
                                {/* Button positioned slightly below the text */}
                                <Link to="/ielts">
                                    <button className="animated-button">
                                        Let's Get Started
                                        <span className="arrow-icon"></span>
                                    </button>
                                </Link>
                            </Wrapper>
                        </div>
                    </div>
                </div>
                <div className="bg-color">
                    <Wrapper>
                        <div className="grid md:grid-cols-4 grid-cols-1 md:py-24 py-20">
                            {experience.map((exp, index) => {
                                return <ExpItem quantity={exp.quantity} title={exp.title} key={index} />
                            })}
                        </div>
                    </Wrapper>
                </div>
            </div>
        </div>
    );
}

export default LandHome;