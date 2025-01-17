import ListItem from "./ListItem";
import { chooseIELTSClas, howIELTSWorks, twoTypesTest } from "../static-data";
import ielts from "../assets/ielts.png";
import Accordion from "./Accordion";
import Heading from "./Heading";

const AboutTraining = () => {
    return (
        <div className="lg:col-span-5 text-color-black">
            <div>
                <p className="font-medium">Welcome to Connect Australian Education and Visa Services' IELTS Preparation Classes—a dedicated program designed to help you achieve your desired IELTS score and unlock your potential for studying, working, or migrating to Australia.</p>
                <div className="pt-8 pb-6"><Heading title="Why Choose Our IELTS Classes?" /></div>
                <div>
                    <ul style={{ listStyle: 'disc' }}>
                        {chooseIELTSClas.map((ielts, index) => {
                            return (
                                <ListItem title={ielts.title} desc={ielts.desc} key={index} />
                            );
                        })}
                    </ul>
                </div>
                <div className="w-full mt-4 pb-16"><img src={ielts} alt="connect-ielts" className="w-full" /></div>
                <Heading title="IELTS constitutes two types of tests: Academic and General." />
                <div className="py-2">
                    {twoTypesTest.map((ielts, index) => {
                        return (
                            <ListItem title={ielts.title} desc={ielts.desc} key={index} descInfo={ielts.desc?.descInfo} listStyle={0} />
                        );
                    })}
                </div>
                <div className="py-5"><Heading title="How does the IELTS test work?" /></div>
                <div>
                    <div className="pb-2">The IELTS test format is conducted with the following approach:</div>
                    {howIELTSWorks.map((ielts, index) => {
                        return (
                            <ListItem title={ielts.title} desc={ielts.desc} key={index} />
                        );
                    })}
                </div>
                <div className="mt-12"><Accordion /></div>
            </div>
        </div>
    );
}

export default AboutTraining;