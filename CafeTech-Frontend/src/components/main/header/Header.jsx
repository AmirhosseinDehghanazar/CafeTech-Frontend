import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* big text */}

      <div className=" text-center text-white mb-12">
        <div className="text-6xl header-big-text">
          <span className="relative">
            ما اینجاییم تا قدمی فراتر از {"{کد}"} برداریم
            {/* fire */}
            <div className="absolute bg-fire bg-img rounded-full">
              <div className="bg-orange-spread flex mx-auto mt-6"></div>
            </div>
            {/* sparks */}
            <div className="absolute bg-sparkle bg-img">
              <div className="bg-orange-spread flex mx-auto mt-6"></div>
            </div>
          </span>
        </div>
      </div>

      {/* text */}
      <div>
        <p className="text-xl text-center header-sec-text max-w-xl">
          کافه تک، رسانه تخصصی و کامیونیتی برنامه نویسان و علاقه‌مندان به
          تکنولوژی و برگزار کننده رویدادهای حضوری و آنلاین جذاب.
        </p>
      </div>

      {/* buttons */}
      <div></div>
    </div>
  );
};

export default Header;
