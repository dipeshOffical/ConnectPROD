import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import chairman from "../../assets/chairman.png";
import Heading from "../../components/Heading";
import Wrapper from "../../components/Wrapper";
import { FaWhatsapp } from "react-icons/fa6";

const Message = () => {
    return (
        <Wrapper className="lg:py-28 py-20">
            <div className="grid lg:grid-cols-2 gap-12"> {/* Increased gap here */}
                
                {/* Left Section - Text and contact details */}
                <div className="slide-in-left">
                    <Heading title="Devraj Kandel | Executive Chairman" />
                    <div className="mt-2"><span>QEAC NO: L458 IEAA Member, ISO Certified

Justice of the Peace #32823 | Education Consultant since 2012</span></div>
                    <div className="flex items-center py-2 gap-3">
                        <span className="text-yellow-500"><FaEnvelope /></span>
                        <span>ceo@connectforstudy.com.au</span>
                    </div>
                    <div className="flex items-center pt-2 gap-3">
                        <span className="text-yellow-500"><FaPhone /></span>
                        <span>+61477587568</span>
                    </div>
                    <div>
                        <p className="py-6 leading-relaxed text-sm"> {/* Reduced font size */}
                            We'd like to welcome you to Connect For Study. You've chosen the right place for your Australian education plans. Congratulations! Many of you may not have a clue about choosing the right destination or a suitable program and that's ok and completely normal.
                        </p>
                        <p className="pb-6 leading-relaxed text-sm"> {/* Reduced font size */}
                            There are so many great study destinations to choose from, in Australia. You have many dreams in life yet to come true. One of the most important decisions in your life would be when you're thinking about going to Australia for your further studies.
                        </p>
                        <p className="leading-relaxed text-sm"> {/* Reduced font size */}
                            In today's world, gaining higher education from universities at home is sometimes not enough in the global job market. Why not be one of the ever-increasing international students who study at the world's top institutions? This can lead to a rewarding career far beyond your expectations!
                        </p>
                    </div>
                </div>

                {/* Right Section - Image and Social Media Icons */}
                <div className="relative slide-in-right ml-[90px]"> {/* Updated left margin to create a gap of 90px */}
                    <img src={chairman} alt="Devraj Kandel" className="w-full rounded-lg shadow-md" />
                    
                    {/* Social Media Icons on the left side */}
                    <div className="absolute top-0 left-[-70px] h-full flex flex-col justify-center items-center gap-8 bg-blue-900 text-white py-6 px-4 rounded-l-lg">
                        <a href="https://www.facebook.com/devrajkandel880" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-4xl hover:text-yellow-500 transition duration-300" />
                        </a>
                        <a href="https://www.instagram.com/devraj_kan/?igsh=MXYxajl2M2IwNTR4MQ%3D%3D" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-4xl hover:text-yellow-500 transition duration-300" />
                        </a> 
                        <a href="https://www.linkedin.com/in/devraj-kandel-ieaa-054117246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-4xl hover:text-yellow-500 transition duration-300" />
                        </a>
                        <a href="https://wa.me/61477587568" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className="text-4xl hover:text-yellow-500 transition duration-300" />
                        </a>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Message;