import { format } from "date-fns-jalali";
import "./event.css";
import { eventsData } from "./eventsData";
import Slider from "react-slick";
import { useState } from "react";
import { useEffect } from "react";

const Event = () => {
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    window.addEventListener("load", () => {
      if (window.innerWidth < 1024) {
        setSlidesToShow(1);
      } else if (window.innerWidth > 1024) {
        setSlidesToShow(2);
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth < 1024) {
        setSlidesToShow(1);
      } else if (window.innerWidth > 1024) {
        setSlidesToShow(2);
      }
    });
  }, [window.innerWidth]);

  return (
    <div className="mb-20">
      {/* top texts */}
      <div className="flex flex-col md:flex-row mb-6 gap-2 md:gap-0 items-center justify-center text-center md:justify-around lg:justify-between lg:mx-8">
        <div className="text-[32px] lg:text-[36px] bg-blue-text-full text-white">
          <span> &#123; ایونت های کافه تک &#125;</span>
        </div>
        <a href="#" className="flex items-center gap-2">
          <p className="text-secondary">مشاهده ایونت ها</p>
          <div className="about_bg-arrow" />
        </a>
      </div>

      {/* all in:map data below and add slick */}
      <Slider
        slidesToShow={slidesToShow}
        arrows={false}
        dots
        className="text-center "
      >
        {eventsData.map((e, i) => (
          <div
            key={i}
            className="relative text-start event_event-parent rounded-[25px] max-w-[95%] h-[368px] mb-32"
          >
            <div>
              <p></p>
            </div>
            {/* event data */}
            <div className="event_eventdata w-[90%] border p-4 border-[#4B4B6A] rounded-[25px]">
              {/* title and isDone */}
              <div className="flex items-center justify-between">
                <p className="text-[22px] xl:text-[28px] font-bold text-white mb-2">
                  {e.title}
                </p>
                {e.done && (
                  <div className="text-white/80 py-1 px-2 text-[14px] xl:text-[18px] rounded-[27px] bg-[#4B4B6A]">
                    برگذار شده
                  </div>
                )}
              </div>

              <div className="text-[14px] xl:text-[18px] flex flex-col gap-2">
                <div className="flex flex-col gap-1.5 md:flex-row">
                  {/* event time */}
                  <div className="flex gap-2 items-center">
                    <div className="bg-clock w-[20px] h-[20px]" />
                    <p className="text-[#B3B3D0]">زمان: </p>
                    <p className="text-white/80">
                      {format(e.date, "dd MMMM")} ساعت {e.start} الی {e.end}
                    </p>
                  </div>
                  {/* event location */}
                  <div className="flex gap-2 items-center">
                    <div className="bg-location w-[21px] h-[20px]" />
                    <p className="text-[#B3B3D0]">مکان: </p>
                    <p className="text-white/80">{e.location}</p>
                  </div>
                </div>
                {/* event description */}
                <p className="text-[#B3B3D0]">{e.description}</p>
              </div>
            </div>
            {/* event data element end here */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Event;
