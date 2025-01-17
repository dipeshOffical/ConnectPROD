import Heading from "../../components/Heading";
import aus from "../../assets/aus.png";
import point from "../../assets/point.png";
import { whyStudy } from "../../static-data";
import { IoManOutline } from "react-icons/io5";
import Wrapper from "../../components/Wrapper";

const WhyStudy = () => {
  return (
    <div className="py-20">
      <Wrapper className="text-center">
        <Heading title="Why Study In Australia" />
        <div className="flex justify-center mt-3">
          <p className="w-[80%]">
            Australia is a top destination for international students, known for
            its world-class education system, vibrant multicultural society, and
            stunning natural landscapes. At Connect Australian Education and
            Visa Services.
          </p>
        </div>
      </Wrapper>
      <div className="relative lg:mt-20 mt-12 pb-12">
        <div className="light-bg back absolute top-0 left-0 right-0 bottom-0 z-[-1]">
          <span className="invisible">Connect</span>
        </div>
        <Wrapper className="grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-8">
          <div className="md:flex md:justify-center lg:block">
            <img src={aus} alt="australia-img" />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-3">
            {whyStudy.map((study, index) => {
              return (
                <div
                  className="border text-center py-6 px-4 bg-white text-color-main hover:bg-[#141E6B] hover:text-white"
                  key={index}
                >
                  <div className="flex justify-center text-4xl">
                    <IoManOutline />
                  </div>
                  <div className="mt-3 font-semibold">
                    <h5>{study.r}</h5>
                  </div>
                  <div className="text-sm leading-relaxed mt-1">
                    <p>{study.info}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default WhyStudy;
