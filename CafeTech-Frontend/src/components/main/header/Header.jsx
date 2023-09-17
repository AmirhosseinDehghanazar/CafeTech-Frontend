import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* big text */}
      <div>
        <div className=" text-center text-white">
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
      </div>

      {/* text */}
      <div>
        <p></p>
      </div>

      {/* buttons */}
      <div></div>
    </div>
  );
};

export default Header;
