import React, { useState } from "react";
import homebg from "../../assets/homebg.jpg";
import Heading from "../../components/Heading";
import { comments } from "../../static-data";
import Comment from "../../components/Comment";

const NewsAndEvents = () => {
    const [formData, setFormData] = useState({
        comment: "",
        name: "",
        email: "",
    });

    const [formErrors, setFormErrors] = useState({
        comment: "",
        name: "",
        email: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const validateForm = () => {
        let errors = {};
        if (!formData.comment) errors.comment = "Comment is required.";
        if (!formData.name) errors.name = "Name is required.";
        if (!formData.email) {
            errors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid.";
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        if (validateForm()) {
            // Here we log the form data (you can replace this with your actual submission logic)
            console.log("Form submitted successfully", formData);
            
            // Reset form fields after successful submission
            setFormData({
                comment: "",
                name: "",
                email: "",
            });

            // Optionally reset errors after submission
            setFormErrors({
                comment: "",
                name: "",
                email: "",
            });
        }
    };

    return (
        <div className="lg:col-span-5">
            <div>
                <span className="text-xs">
                    Posted on: <span className="font-medium">Jan 12, 2024</span>
                </span>
                <div className="mt-2 mb-6">
                    <img src={homebg} alt="connect-home-bg" />
                </div>
                <Heading title="Heartfelt Congratulations to Priya Pariyar on Successfully Securing Her Australia Student Visa! Wishing You an Incredible Academic Journey Ahead" />
                <p className="pt-6 pb-12">
                    Are you planning to study in Australia but feeling overwhelmed by the visa process? Join us for an exclusive seminar on September 15th, 2024, where our expert consultants will break down everything you need to know about securing your student visa.
                </p>
            </div>
            <div>
                <div className="text-color-main text-xl font-semibold">
                    <h3>Comments</h3>
                </div>
                <div className="max-w-[500px] mt-2">
                    {comments.map((comment, index) => (
                        <Comment
                            key={index}
                            image={comment.image}
                            name={comment.name}
                            date={comment.date}
                            comment={comment.comment}
                        />
                    ))}
                </div>
            </div>
            <div className="max-w-[650px] mt-8">
                <h3 className="text-2xl font-medium">Submit a Comment</h3>
                <p className="text-sm mt-1">Your email address will not be published</p>
                <form className="mt-4" onSubmit={handleSubmit}>
                    <div className="w-full">
                        <label htmlFor="comment" className="text-sm font-medium">
                            Comment
                        </label>
                        <div className="mt-2">
                            <textarea
                                className={`w-full h-32 border ${
                                    formErrors.comment ? "border-red-500" : "border-gray-300"
                                } p-3`}
                                id="comment"
                                placeholder="Write your message here..."
                                value={formData.comment}
                                onChange={handleChange}
                            />
                            {formErrors.comment && <p className="text-red-500 text-xs mt-1">{formErrors.comment}</p>}
                        </div>
                    </div>

                    <div className="w-full mt-4">
                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                        <div className="w-full mt-2">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className={`border border-gray-300 h-11 w-full p-3 ${formErrors.name ? "border-red-500" : ""}`}
                                placeholder="E.g: John Cena"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                        </div>
                    </div>

                    <div className="w-full mt-4">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <div className="w-full mt-2">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={`border border-gray-300 h-11 w-full p-3 ${formErrors.email ? "border-red-500" : ""}`}
                                placeholder="E.g: johncena@gmail.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                        </div>
                    </div>

                    <div className="mt-6">
                        <button type="submit" className="px-10 py-2 bg-red-600 text-white rounded-sm">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewsAndEvents;
