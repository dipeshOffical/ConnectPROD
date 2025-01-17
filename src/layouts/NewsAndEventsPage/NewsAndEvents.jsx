import homebg from "../../assets/homebg.jpg";
import Heading from "../../components/Heading";
import { comments } from "../../static-data";
import Comment from "../../components/Comment";
import Input from "../../components/Input";

const NewsAndEvents = () => {
    return (
        <div className="lg:col-span-5">
            <div>
                <span className="text-xs">Posted on: <span className="font-medium">Jan 12, 2024</span></span>
                <div className="mt-2 mb-6"><img src={homebg} alt="connect-home-bg" /></div>
                <Heading title="Heartfelt Congratulations to Priya Pariyar on Successfully Securing Her Australia Student Visa! Wishing You an Incredible Academic Journey Ahead" />
                <p className="pt-6 pb-12">Are you planning to study in Australia but feeling overwhelmed by the visa process? Join us for an exclusive seminar on September 15th, 2024, where our expert consultants will break down everything you need to know about securing your student visa.</p>
            </div>
            <div>
                <div className="text-color-main text-xl font-semibold"><h3>Comments</h3></div>
                <div className="max-w-[500px] mt-2">
                    {comments.map((comment, index) => {
                        return (
                            <Comment key={index} image={comment.image} name={comment.name} date={comment.date} comment={comment.comment} />
                        );
                    })}
                </div>
            </div>
            <div className="max-w-[650px] mt-8">
                <h3 className="text-2xl font-medium">Submit a Comment</h3>
                <p className="text-sm mt-1">Your email address will not be published</p>
                <div className="mt-4">
                    <div className="w-full">
                        <label htmlFor="comment" className="text-sm font-medium">Comment</label>
                        <div className="mt-2"><textarea className="w-full h-32 border border-gray-300 p-3" id="comment" placeholder="Write your message here..."></textarea></div>
                    </div>
                    <Input label="Name" type="text" id="name" placeholder="E.g: John Cena" className="mt-2"/>
                    <Input type="email" id="email" label="Email" placeholder="E.g: johncena@gmail.com" className="mt-4"/>
                    <div className="mt-6"><button type="button" className="px-10 py-2 bg-red-600 text-white rounded-sm">Submit</button></div>
                </div>
            </div>
        </div>
    );
}

export default NewsAndEvents;