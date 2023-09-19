import { format } from "date-fns-jalali";
import "./about.css";
import { currentEvent } from "./currentEvent";
import { CustomNumeralNumericFormat } from "../../numeric";

const About = () => {
  const eventImg = {
    backgroundImage: `linear-gradient(90deg ,rgb(51, 51, 69, 0.92),  #333345), url(${currentEvent.img})`,
    borderRadius: "15px",
  };

  return (
    <div className="mb-10 flex flex-col justify-center items-center gap-10 lg:flex-row">
      {/* event */}
      {/* -> this border needs to hide in lg & ++ <-*/}
      <div className="lg:border-0 lg:bg-transparent max-w-[716px] lg:flex lg:flex-col-reverse lg:gap-6">
        {/* about cafeTech */}
        <div className="lg:border lg:border-[#4B4B6A] lg:p-6 lg:rounded-[25px] lg:bg-[#23232E]">
          <div className="flex items-center gap-2 mb-6">
            <p className="text-white text-[22px] lg:text-[34px] font-bol">
              درباره کافه تک بیشتر بدانید
            </p>
            <div className="about_bg-think-face" />
          </div>
          <div className="text-[#C5C5C8] text-[16px] lg:text-[18px]">
            <p>
              در کافه تک با دورهمی‌هایی که برگزار می‌کنیم به برنامه نویس‌ها کمک
              می‌کنیم تا در فضایی دوستانه به انتقال تجربه و ارتباط سازی
              بپردازند.
            </p>
            <p>ما اینجاییم تا قدمی فراتر از کد برداریم! </p>
          </div>
        </div>

        {/* div below needs to hide in lg */}
        <div className="dvider my-6 lg:hidden"></div>

        {/* about event */}
        <div className="lg:border lg:border-[#4B4B6A] lg:p-6 lg:rounded-[25px] lg:bg-[#23232E]">
          {/* texts */}
          <div className="flex items-center justify-between">
            <p className="font-bold text-[22px] text-[#ddd]">ایونت در جریان</p>
            <a href="#" className="flex items-center gap-2">
              <p className="text-secondary">مشاهده ایونت ها</p>
              <div className="about_bg-arrow" />
            </a>
          </div>

          {/* current event */}
          <div style={eventImg} className="my-6 p-3">
            <p className="text-lg text-white/90">{currentEvent.title}</p>
            <div className="text-secondary flex flex-col lg:flex-row lg:gap-10 text-[16px]">
              <div className="flex gap-10">
                <div>
                  زمان:{" "}
                  <CustomNumeralNumericFormat value={currentEvent.start} /> الی{" "}
                  <CustomNumeralNumericFormat value={currentEvent.end} />
                </div>
                <p>ساعت: {format(currentEvent.date, "hh:mm")}</p>
              </div>
              <p>لوکیشن: {currentEvent.location}</p>
            </div>
          </div>

          {/* buttons */}
          <div className="flex flex-col max-w-sm lg:max-w-md w-full  lg:flex-row-reverse gap-6 items-center justify-center text-center">
            <a
              href="#"
              className="w-full flex  lg:w-auto justify-between items-center gap-3 bg-linear px-7 py-4 rounded-2xl"
            >
              <p className="text-white">مشاهده رویداد ها</p>
              <div className="bg-arrow-white bg-img" />
            </a>
            <a
              href="#"
              className="flex justify-between border w-full lg:w-auto border-secondary items-center gap-3 px-7 py-4 rounded-2xl"
            >
              <p className="text-secondary whitespace-nowrap">همکاری با ما</p>
              <div className="bg-arrow-dark bg-img" />
            </a>
          </div>
          {/* buttons end here */}
        </div>
      </div>

      {/* video */}
      <video className="rounded-[25px] about_video" autoPlay controls>
        <source src="src/assets/test-video.mp4" />
      </video>
    </div>
  );
};

export default About;
