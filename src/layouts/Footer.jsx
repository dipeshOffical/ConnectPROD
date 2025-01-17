import React from 'react';
import logo from "../assets/logo.png";
import { FiMapPin, FiPhone } from "react-icons/fi";
import { FaRegEnvelope, FaFacebook, FaLinkedin, FaSkype, FaTwitter } from "react-icons/fa";
import FooterItem from "../components/FooterItem";
import { admissionLinks, exploreLinks, policyLinks, supportLinks } from "../static-data";
import Wrapper from "../components/Wrapper";
import "./Footer.css"; // Ensure this CSS file is correctly linked

const Footer = () => {
    return (
        <div className="pt-20 bg-color text-color-white">
            <Wrapper>
                <div className="lg:flex justify-between border-b border-gray-500 pb-8">
                    <div>
                        <div className="md:flex gap-6">
                            <div className="w-[6rem] md:w-none">
                                <div className="bg-white py-6 px-2">
                                    <img src={logo} alt="connect-logo" className="md:w-[7rem]" />
                                </div>
                            </div>
                            <div className="mt-6 md:mt-0">
                                <div className="md:w-[50%]">
                                    <h5>Connect Australian Education and Visa Services is your trusted partner for achieving your dream of studying in Australia</h5>
                                </div>
                                <div className="flex items-center gap-6 md:mt-3 mt-6">
                                    <a href="https://www.linkedin.com/company/connect-australian-education-and-visa-services/" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin className="social-icon" />
                                    </a>
                                    <a href="https://www.facebook.com/connectforstudy" target="_blank" rel="noopener noreferrer">
                                        <FaFacebook className="social-icon" />
                                    </a>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <FaTwitter className="social-icon" />
                                    </a>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <FaSkype className="social-icon" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 lg:mt-0">
                        <div className="flex items-center lg:whitespace-nowrap gap-4">
                            <div className="bg-white p-2 rounded-[50%] text-black icon-hover"><FiMapPin /></div>
                            <div>11/1057 South Road, Melrose Park, SA 5039</div>
                        </div>
                        <div className="flex items-center lg:whitespace-nowrap py-3 gap-4">
                            <div className="bg-white p-2 rounded-[50%] text-black icon-hover"><FaRegEnvelope /></div>
                            <div className="break-all md:break-none">ceo@connectforstudy.com.au</div>
                        </div>
                        <div className="flex items-center lg:whitespace-nowrap py-3 gap-4">
                            <div className="bg-white p-2 rounded-[50%] text-black icon-hover"><FiPhone /></div>
                            <div>0883176091 / 0477587568</div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 md:mt-0">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-20">
                        <FooterItem option="Explore" linkName={exploreLinks} />
                        <FooterItem option="Admission" linkName={admissionLinks} />
                        <FooterItem option="Support" linkName={supportLinks} />
                        <FooterItem option="Policy" linkName={policyLinks} />
                    </div>
                </div>
            </Wrapper>
            <div className="text-center btn-color py-5 mt-2"><span>© 2077 Untitled UI. All rights reserved.</span></div>
        </div>
    );
}

export default Footer;