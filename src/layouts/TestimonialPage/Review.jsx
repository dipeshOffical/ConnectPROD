import quot from "../../assets/quot.png";
import quot1 from "../../assets/quot1.png";
import Heading from "../../components/Heading";
import reviewer from "../../assets/reviewer.png";
import { reviews } from "../../static-data";
import Wrapper from "../../components/Wrapper";

const Review = () => {
    return (
        <Wrapper className="pt-20 pb-40">
            <div className="text-center"><Heading title="Real Stories, Real Success: Hear How Connect Helped Students Achieve Their Study Abroad Dreams" /></div>
            <div className="grid lg:grid-cols-2 gap-x-10 gap-y-32 mt-12">
                {reviews.map((review, index) => {
                    return (
                        <div key={index} className="flex bg-white shadow-lg lg:px-12 px-4 py-16 gap-4 relative rounded-md">
                            <div><img src={quot} alt="connect-quotation-img" width={150} /></div>
                            <div className="text-center"><p>{review.review}</p></div>
                            <div className="self-end"><img src={quot1} alt="connect-quotation-img" width={150} /></div>
                            <div className="absolute -bottom-6 left-[50%] translate-x-[-50%]">
                                <img src={review.image} alt="connect-reviewer-img" className="w-[4rem] rounded-full" />
                            </div>
                            <div className="absolute lg:-bottom-20 -bottom-24 left-[50%] translate-x-[-50%] text-center text-sm">
                                <div className="text-color-main font-semibold">{review.name}</div>
                                <div>{review.location}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Wrapper>
    );
}

export default Review;