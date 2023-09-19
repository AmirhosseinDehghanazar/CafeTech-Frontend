import Slider from "react-slick";
import { segmentData } from "./segData";
import "./segment.css";
import { useState } from "react";
import { useEffect } from "react";

const Segment = () => {
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 801) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1065) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1343) {
        setSlidesToShow(3);
      } else if (window.innerWidth < 1543) {
        setSlidesToShow(4);
      } else if (window.innerWidth < 1724) {
        setSlidesToShow(5);
      } else if (window.innerWidth > 1724) {
        setSlidesToShow(6);
      }
    });
  }, [window.innerWidth]);

  const settings = {
    arrows: false,
    swipe: window.innerWidth < 1724 ? true : false,
    dots: window.innerWidth < 1724 ? true : false,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
  };
  return (
    <div className="text-center ">
      <Slider swe {...settings}>
        {segmentData.map((seg, i) => (
          <div
            key={i}
            className="w-[268px] h-[268px] max-w-[268px] max-h-[268px]  p-4 border border-[#4B4B6A] rounded-[25px] bg-[#23232E] text-center"
          >
            <div
              className={`${seg.emojiClass} bg-img mx-auto my-5 w-[70px] h-[70px]`}
            />
            <div>
              <p className="text-white text-xl font-bold mb-2"> {seg.title}</p>
              <p className="text-secondary text-lg">{seg.description} </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Segment;
