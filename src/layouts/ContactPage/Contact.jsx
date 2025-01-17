import React, { useState } from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaLocationDot, FaPhone, FaTwitter } from "react-icons/fa6";
import Wrapper from "../../components/Wrapper";

const Contact = () => {
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        office: "",
        message: "",
    });

    const [formErrors, setFormErrors] = useState({});
    // const [formStatus, setFormStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.fname) errors.fname = "First Name is required.";
        if (!formData.lname) errors.lname = "Last Name is required.";
        if (!formData.email) {
            errors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Invalid email format.";
        }
        if (!formData.phone) errors.phone = "Phone Number is required.";
        if (!formData.message) errors.message = "Message is required.";
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
        } else {
            setFormErrors({});
            setTimeout(() => {
                console.log("Form submitted:", formData);
                // setFormStatus("Thank you for contacting us. We will get back to you soon!");
                setFormData({ fname: "", lname: "", email: "", phone: "", office: "", message: "" });
            }, 1000);
        }
    };

    return (
        <Wrapper className="py-20">
            <div className="grid lg:grid-cols-2 shadow-md">
                <div className="bg-color text-white lg:px-12 px-6 pt-8 relative pb-8">
                    <h3 className="text-2xl font-semibold pb-3">Contact Information</h3>
                    <span>Australia Contact Info</span>
                    <div className="mt-20 space-y-4">
                        <div className="flex items-center">
                            <FaPhone className="mr-2" /> 0883176091 / 0477587568
                        </div>
                        <div className="flex items-center">
                            <FaEnvelope className="mr-2" /> admin@connectforstudy.com.au
                        </div>
                        <div className="flex items-center">
                            <FaLocationDot className="mr-2" /> 11/1057 South Road, Melrose Park, SA 5039
                        </div>
                    </div>
                    <div className="lg:absolute bottom-12 left-12">
                        <div className="flex items-center mt-12 text-2xl space-x-4">
                            <a href="https://www.facebook.com/connectforstudy" target="_blank" rel="noopener noreferrer">
                                <FaFacebook />
                            </a>
                            <a href="https://www.linkedin.com/company/connect-australian-education-and-visa-services/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                            <FaTwitter />
                            <FaInstagram />
                        </div>
                    </div>
                </div>
                <div className="lg:px-12 px-6 pt-20 pb-12">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 lg:gap-6 gap-3">
                            <div className="w-full">
                                <label className="text-sm font-medium block mb-2">First Name</label>
                                <input
                                    type="text"
                                    name="fname"
                                    className="border border-gray-300 rounded h-11 w-full p-3"
                                    placeholder="E.g: John"
                                    value={formData.fname}
                                    onChange={handleChange}
                                />
                                {formErrors.fname && <p className="text-red-500 text-sm mt-1">{formErrors.fname}</p>}
                            </div>
                            <div className="w-full">
                                <label className="text-sm font-medium block mb-2">Last Name</label>
                                <input
                                    type="text"
                                    name="lname"
                                    className="border border-gray-300 rounded h-11 w-full p-3"
                                    placeholder="E.g: Doe"
                                    value={formData.lname}
                                    onChange={handleChange}
                                />
                                {formErrors.lname && <p className="text-red-500 text-sm mt-1">{formErrors.lname}</p>}
                            </div>
                            <div className="w-full">
                                <label className="text-sm font-medium block mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="border border-gray-300 rounded h-11 w-full p-3"
                                    placeholder="E.g: John@gmail.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                            </div>
                            <div className="w-full">
                                <label className="text-sm font-medium block mb-2">Phone Number</label>
                                <input
                                    type="text"
                                    name="phone"
                                    className="border border-gray-300 rounded h-11 w-full p-3"
                                    placeholder="E.g: +977 86462683"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
                            </div>
                            <div className="col-span-2">
                                <label className="text-sm font-medium block mb-2">Nearest Office</label>
                                <input
                                    type="text"
                                    name="office"
                                    className="border border-gray-300 rounded h-11 w-full p-3"
                                    placeholder="Sydney, Australia"
                                    value={formData.office}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-span-2">
                                <label className="text-sm font-medium block mb-2">Message</label>
                                <textarea
                                    name="message"
                                    className="w-full h-32 border border-gray-300 rounded p-3"
                                    placeholder="Write your message here..."
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                                {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
                            </div>
                            <div className="col-span-2 mt-4">
                                <button type="submit" className="btn-color px-2 py-3.5 text-color-white w-[12rem">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                    {/* {formStatus && <p className="mt-4 text-green-600">{formStatus}</p>} */}
                </div>
            </div>
        </Wrapper>
    );
};

export default Contact;
