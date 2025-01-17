import React, { useEffect, useRef } from "react";
import s1 from "../../assets/s1.jpg";
import s2 from "../../assets/s2.jpg";
import s3 from "../../assets/s3.jpg";
import s4 from "../../assets/s4.jpg";
import s5 from "../../assets/s5.jpg";
import s6 from "../../assets/s6.jpg";
import chat from "../../assets/chat.png";
import team from "../../assets/team.png";
import { Link } from "react-router-dom";
import "./LandHome.css"; // Ensure this CSS file contains the necessary styles

const LetsTalk = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-pop-up");
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of the element is visible
        );

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);

    return (
        <div className="md:pt-44 lg:pb-40 py-20 md:max-w-[1300px] max-w-[500px] mx-auto bg-gradient-to-r from-white via-orange-50 to-white px-8">
            <div className="grid lg:grid-cols-2">
                <div className="md:max-w-[500px] md:mx-auto lg:max-w-full lg:mx-0">
                    <div className="hidden md:block">
                        <div className="relative">
                            <div className="flex">
                                <div className="z-[50]"><img src={team} alt="connect-team-img" /></div>
                                <div className="z-[50]"><img src={chat} alt="connect-team-img" /></div>
                            </div>
                            <div className="absolute -top-16 left-12"><img src={s1} alt="connect-student-1" className="rounded-[50%] w-[80px] h-[86px] object-cover" /></div>
                            <div className="absolute top-[10rem] -left-12"><img src={s2} alt="connect-student-1" className="rounded-[50%] w-[90px] h-[96px] object-cover" /></div>
                            <div className="absolute top-[20rem] left-6"><img src={s3} alt="connect-student-1" className="rounded-[50%] w-[60px] h-[66px] object-cover" /></div>
                            <div className="absolute top-[25rem] left-32"><img src={s3} alt="connect-student-1" className="rounded-[50%] w-[60px] h-[66px] object-cover" /></div>
                            <div className="absolute top-[24rem] left-[60%]"><img src={s4} alt="connect-student-1" className="rounded-[50%] w-[70px] h-[76px] object-cover" /></div>
                            <div className="absolute top-[10rem] left-[70%]"><img src={s5} alt="connect-student-1" className="rounded-[50%] w-[100px] h-[106px] object-cover" /></div>
                            <div className="absolute -top-16 left-[60%]"><img src={s6} alt="connect-student-1" className="rounded-[50%] w-[60px] h-[66px] object-cover" /></div>
                        </div>
                    </div>
                </div>
                <div className="place-self-center md:mt-32 lg:mt-0">
                    <div className="flex justify-center">
                        <h2
                            ref={textRef}
                            className="pop-up-text md:text-4xl text-3xl font-semibold text-color-main text-center md:leading-relaxed leading-relaxed md:w-[80%]">
                            Join 1000s of students who have already applied through us. Your journey starts here.
                        </h2>
                    </div>
                    <div className="flex justify-center">
                        <Link to="/ielts">
                            <button className="animated-button">
                                Let's Talk
                                <span className="arrow-icon"></span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LetsTalk;
