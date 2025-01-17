import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaLocationDot, FaPhone, FaTwitter } from "react-icons/fa6";
import InfoWithIcon from "../../components/InfoWithIcon";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Wrapper from "../../components/Wrapper";

const Contact = () => {
    return (
        <Wrapper className="py-20">
            <div className="grid lg:grid-cols-2 shadow-md">
                <div className="bg-color text-white lg:px-12 px-6 pt-8 relative pb-8">
                    <h3 className="text-2xl font-semibold pb-3">Contact Information</h3>
                    <span>Australia Contact Info</span>
                    <div className="mt-20">
                        <InfoWithIcon icon={<FaPhone />} info="0883176091 / 0477587568" className="py-4" />
                        <InfoWithIcon icon={<FaEnvelope />} info="admin@connectforstudy.com.au" className="py-4" />
                        <InfoWithIcon icon={<FaLocationDot />} info="11/1057 South Road, Melrose Park, SA 5039" className="py-4" />
                    </div>
                    <div className="lg:absolute bottom-12 left-12">
                        <div className="flex items-center mt-12 text-2xl">
                        <span className="px-2">
                                <a href="https://www.facebook.com/connectforstudy" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook />
                                </a>
                            </span>
<span className="text-xl">
    <a href="https://www.linkedin.com/company/connect-australian-education-and-visa-services/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
    </a></span>
  <span className="px-2"><FaTwitter /></span>
 <span className="px-2"><FaInstagram /></span>
                        </div>
                    </div>
                </div>
                <div className="lg:px-12 px-6 pt-20 pb-12">
                    <div className="grid grid-cols-2 lg:gap-6 gap-3">
                        <Input type="text" id="fname" label="First Name" placeholder="E.g: John" />
                        <Input type="text" id="lname" label="Last Name" placeholder="E.g: John" />
                        <Input type="email" id="email" label="Email" placeholder="E.g: John@gmail.com" />
                        <Input type="number" id="phone" label="Phone Number" placeholder="E.g: +977 86462683" />
                        <div className="col-span-2">
                            <Input type="text" id="office" label="Nearest office" placeholder="Sydney Australia" />
                        </div>
                        <div className="w-full col-span-2">
                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                            <div className="mt-2"><textarea className="w-full h-32 border border-gray-300 p-3" placeholder="Write your message here..."></textarea></div>
                        </div>
                        <Button title="Send Message" type="contact" />
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Contact;