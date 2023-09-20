import { format } from "date-fns-jalali";
import "./event.css";
import { eventsData } from "./eventsData";

const Event = () => {
  return (
    <div>
      {/* top texts */}
      <div className="flex flex-col md:flex-row mb-6 gap-2 md:gap-0 items-center justify-center text-center md:justify-around lg:justify-between">
        <div className="text-[32px] lg:text-[36px] bg-blue-text-full text-white">
          <span> &#123; ایونت های کافه تک &#125;</span>
        </div>
        <a href="#" className="flex items-center gap-2">
          <p className="text-secondary">مشاهده ایونت ها</p>
          <div className="about_bg-arrow" />
        </a>
      </div>

      {/* all in:map data below and add slick above all */}
      <div className="relative event_event-parent rounded-[25px] h-[368px]">
        <div>
          <p></p>
        </div>
        {/* event data */}
        <div className="event_eventdata w-[90%] border p-4 border-[#4B4B6A] rounded-[25px]">
          {/* title and isDone */}
          <div className="flex items-center justify-between">
            <p className="text-[22px] font-bold text-white mb-2">
              {eventsData[0].title}
            </p>
            {eventsData[0].done && (
              <div className="text-white/80 py-1 px-2 text-[14px] rounded-[27px] bg-[#4B4B6A]">
                برگذار شده
              </div>
            )}
          </div>

          <div className="text-[14px] flex flex-col gap-2">
            <div className="flex flex-col gap-1.5 md:flex-row">
              {/* event time */}
              <div className="flex gap-2 items-center">
                <div className="bg-clock w-[20px] h-[20px]" />
                <p className="text-[#B3B3D0]">زمان: </p>
                <p className="text-white/80">
                  {format(eventsData[0].date, "dd MMMM")} ساعت{" "}
                  {eventsData[0].start} الی {eventsData[0].end}
                </p>
              </div>
              {/* event location */}
              <div className="flex gap-2 items-center">
                <div className="bg-location w-[21px] h-[20px]" />
                <p className="text-[#B3B3D0]">مکان: </p>
                <p className="text-white/80">{eventsData[0].location}</p>
              </div>
            </div>
            {/* event description */}
            <p className="text-[#B3B3D0]">{eventsData[0].description}</p>
          </div>
        </div>
        {/* event data element end here */}
      </div>
    </div>
  );
};

export default Event;
