import Heading from "../../components/Heading";
import Wrapper from "../../components/Wrapper";
import { migration } from "../../static-data";

const Migration = () => {
    return (
        <Wrapper className="lg:py-28 py-20">
            <div className="text-center"><Heading title="Migration to Australia" /></div>
            <p className="text-center text-color-black mt-4">Australia is a top destination for study, work, and living, but navigating migration can be overwhelming. Connect Australian Education and Visa Services simplifies the process. Our experienced Registered Migration Agents provide personalized guidance, assess your unique needs, and create tailored migration plans to ensure a smooth journey to Australia.<br/>Our Registered Migration Agents.</p>
            <div className="flex justify-center mt-12">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8">
                    {migration.map((mig, index) => {
                        return (
                            <div className="bg-gray-100 rounded-2xl flex flex-col items-center text-center p-4" key={index}>
                                <img src={mig.image} alt="connect-migration-img" className="w-3/4 rounded-full mb-4" />
                                <span className="text-color-main font-semibold">{mig.name}</span>
                                <div className="text-color-black">Migration Agent: <span>{mig.agent}</span></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Wrapper>
    );
}

export default Migration;