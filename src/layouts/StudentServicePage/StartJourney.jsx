import { Link } from "react-router-dom";
import s1 from "../../assets/s1.jpg";
import s2 from "../../assets/s2.jpg";
import s3 from "../../assets/s3.jpg";
import s4 from "../../assets/s4.jpg";
import Wrapper from "../../components/Wrapper";

const StartJourney = () => {
    return (
        <div className="bg-color py-20">
            <Wrapper className="lg:flex justify-between text-color-white">
                <div className="lg:w-[70%] xl:w-auto">
                    <h2 className="text-3xl">Ready to make your study abroad dream  a reality?</h2>
                    <p className="mt-3">Explore our tailored student services, and let us guide your every step of the way. Contact us today to start your journey</p>
                    <div className="flex items-center mt-3 gap-4">
                        <div className="flex items-center">
                            <div><img src={s1} alt="connect-student-img" className="rounded-full w-9 h-8 object-cover" /></div>
                            <div><img src={s2} alt="connect-student-img" className="rounded-full w-9 h-8 object-cover" /></div>
                            <div><img src={s3} alt="connect-student-img" className="rounded-full w-9 h-8 object-cover" /></div>
                            <div><img src={s4} alt="connect-student-img" className="rounded-full w-9 h-8 object-cover" /></div>
                        </div>
                        <div className="text-sm"><span>13+ Have already Enroll</span></div>
                    </div>
                </div>
                <div className="mt-6"><Link to="/ielts"><button type="button" className="bg-white text-color-main px-6 py-2">Start Your Journey</button></Link></div>
            </Wrapper>
        </div>
    );
}

export default StartJourney;