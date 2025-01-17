import AboutItem from "../../components/AboutItem";
import { aboutDescription } from "../../static-data";


const About = () => {
    return (
        <div className="lg:mt-28 mt-20 relative">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-color">
                <div className="about-back-logo h-full opacity-10">Connect</div>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 relative lg:max-w-[1200px] md:max-w-[800px] max-w-[500px] mx-auto lg:py-28 py-20 px-8 xl:px-0">
                <div className="text-color-white">
                    <h2 className="text-4xl lg:w-[70%]">Connect Australian Education And Visa Services</h2>
                    <p className="mt-6 lg:w-[70%] leading-relaxed">Connect Australian Education and Visa Services is your trusted partner for studying in Australia. With a presence in nine countries, we specialize in education and migration consulting. Our team, including registered migration agents and qualified counselors, provides end-to-end support. We've helped thousands of students achieve their academic and career goals through informed decisions, viable study options, and comprehensive counseling.</p>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-8 lg:mt-0 ">
                    {aboutDescription.map((about, index) => {
                        return (
                            <AboutItem title={about.title} icon={about.icon} desc={about.desc} key={index}/>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default About;