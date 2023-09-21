import "./header.css";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-6 mb-20 ">
      {/* big text */}

      <div className=" text-center text-white mb-12 md:mt-20">
        <div className="text-6xl header-big-text bg-text-blue bg-blue-text-full">
          <span className="relative">
            ما اینجاییم تا قدمی فراتر از {"{کد}"} برداریم
            {/* fire */}
            <div className="absolute bg-fire bg-img rounded-full" />
            {/* sparks */}
            <div className="absolute bg-sparkle bg-img" />
          </span>
        </div>
      </div>

      {/* text */}
      <div className="mb-10">
        <p className="text-xl text-center text-linear-dark max-w-[290px] md:max-w-xl">
          کافه تک، رسانه تخصصی و کامیونیتی برنامه نویسان و علاقه‌مندان به
          تکنولوژی و برگزار کننده رویدادهای حضوری و آنلاین جذاب.
        </p>
      </div>

      {/* buttons */}
      <div className="flex flex-col max-w-sm lg:max-w-md w-full  lg:flex-row-reverse gap-6 items-center justify-center text-center">
        <button className="w-full flex  lg:w-auto justify-between items-center gap-3 bg-linear px-7 py-4 rounded-2xl">
          <p className="text-white">مشاهده رویداد ها</p>
          <div className="bg-arrow-white bg-img" />
        </button>
        <button className="flex justify-between border w-full lg:w-auto border-secondary items-center gap-3 px-7 py-4 rounded-2xl">
          <p className="text-secondary whitespace-nowrap">همکاری با ما</p>
          <div className="bg-arrow-dark bg-img" />
        </button>
      </div>
    </div>
  );
};

export default Header;
