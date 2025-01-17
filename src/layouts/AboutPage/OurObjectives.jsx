import ObjectiveItem from "../../components/ObjectiveItem";
import { objectiveDetails } from "../../static-data";
import student from "../../assets/student.png";
import flag from "../../assets/flag.png";

const OurObjectives = () => {
    return (
        <div className="lg:py-28 py-20">
            <div className="grid lg:grid-cols-7">
                <div className="lg:col-span-5 lg:max-w-[1200px] md:max-w-[800px] max-w-[500px] mx-auto px-8 xl:px-0">
                    {objectiveDetails.map((objective, index) => {
                        return (
                            <ObjectiveItem title={objective.title} objectives={objective.objectives} key={index}/>
                        );
                    })}
                </div>
                <div className="relative lg:col-span-2 mt-12 lg:mt-0 md:max-w-[800px] max-w-[500px] mx-auto lg:mx-0 px-8 xl:px-0">
                    <div className="lg:absolute lg:top-[50%] lg:translate-y-[-50%]">
                        <div className="relative">
                            <img src={flag} alt="connect-aus-flag" className="" />
                            <div className="absolute bottom-0 lg:-left-44"><img src={student} alt="connect-student-img" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurObjectives;