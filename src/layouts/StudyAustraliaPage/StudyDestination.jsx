// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import Heading from "../../components/Heading";

import sydeny from "../../assets/sydney.png";
import melbourne from "../../assets/melbourne.png";
import brisbane from "../../assets/brisbane.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef } from "react";
import Wrapper from "../../components/Wrapper";

const swiperContent = [
  {
    title: "Sydney",
    img: sydeny,
  },
  {
    title: "Melbourne",
    img: melbourne,
  },
  {
    title: "Brisbane",
    img: brisbane,
  },
  {
    title: "Adelaide",
    img: sydeny,
  }
];

const StudyDestination = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="pb-20">
      <Wrapper className="flex gap-12 justify-end">
        <div className="text-xl text-color-main">
          <button ref={prevRef}>
            <FaArrowLeft />
          </button>
        </div>
        <div className="text-xl text-color-main">
          <button ref={nextRef}>
            <FaArrowRight />
          </button>
        </div>
      </Wrapper>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:mt-6">
        <Wrapper className="xl:w-[50%] lg:w-[80%] place-self-center mt-6 lg:mt-0">
          <Heading title="Popular Study Destinations in Australia" />
          <p className="mt-6">
          Australia is a top destination for international students, known for its world-class education system, vibrant multicultural society, and stunning natural landscapes.
          </p>
        </Wrapper>
        <div className="mt-6">
          <Swiper
            modules={[Navigation]}
            spaceBetween={15}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            loop={true}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
          >
            {swiperContent.map((content, index) => {
              return (
                <SwiperSlide key={index}>
                  <SwiperItemAustralia
                    img={content.img}
                    title={content.title}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export const SwiperItemAustralia = ({ img, title }) => {
  return (
    <div className="text-color-white mt-2 lg:mt-0 flex justify-center">
      <div className="relative max-w-[500px] md:max-w-full">
        <img
          src={img}
          alt="connect-destination-img"
          className="rounded-tr-2xl rounded-tl-2xl"
        />
        <div className="absolute bottom-0 w-full bg-color py-3 opacity-80">
          <div className="flex justify-center">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default StudyDestination;
