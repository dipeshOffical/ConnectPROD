import aboutPhoto from "../../assets/aboutphoto.jpg";
import Button from "../../components/Button";
import thumb from "../../assets/thumb.png";
import Heading from "../../components/Heading";
import Wrapper from "../../components/Wrapper";
import { Link } from "react-router-dom";
import "./LandHome.css"; // Import the CSS file for button animation

const AboutUs = ({discover}) => {
    return (
        <Wrapper className="lg:mt-28 mt-20">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-16">
                <div className="relative">
                    <img src={aboutPhoto} alt="connect-about-img" className="lg:h-full object-cover" />
                    <div className="absolute -top-4 -left-4"><img src={thumb} alt="connect-thumb-icon" /></div>
                </div>
                <div className="text-color-black">
                    <Heading title="Giving students the ability to pursue their dreams" />
                    <p className="pt-6 pb-4">In our commitment to student empowerment, we believe that everyone deserves the chance to pursue their dreams. Our approach begins with personalized guidance, ensuring each student's unique aspirations are understood and supported.</p>
                    <p>We provide access to top-notch education, a holistic support system covering academics and well-being, and a diverse array of opportunities in various fields. Our global exposure initiatives and skill development programs equip students for success. Through community collaboration, we create an environment where dreams can flourish, turning aspirations into tangible achievements. Join us on this transformative journey of empowerment, where dreams are not just envisioned but realized.</p>
                    {discover === 0 || (
                        <Link to="/about">
                            <button className="animated-button">
                                Discover More
                                <span className="arrow-icon"></span>
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </Wrapper>
    );
}

export default AboutUs;