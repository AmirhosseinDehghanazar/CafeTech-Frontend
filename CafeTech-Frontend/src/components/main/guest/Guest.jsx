import "./guest.css";
import data from "./data";

const Guest = () => {
  return (
    <>
      <div className="mb-10 font-bold m-auto text-[32px]">
        <p className="bg-blue-text text-center">
          <span>{"{تیم ها و مهمانان ویژه}"}</span>
        </p>
      </div>
      <div className=" w-[10420px] -mx-6 md:-mx-10 lg:-mx-14 xl:-mx-20">
        {/* people */}
        <div className="flex animation-slide-toleft gap-3 overflow-auto mb-6">
          {/* first one */}
          {data.people.map((person, i) => (
            <div
              key={i}
              className="min-w-[328px] md:min-w-[414px] bg-[#23232E] border border-[#4B4B6A] rounded-[15px] px-4 py-3"
            >
              <div className="flex items-center gap-4 justify-start">
                <img
                  alt=""
                  src={person.img}
                  className="w-[74px] h-[74px] rounded-[10px] md:w-[94px] md:h-[94px]"
                />
                <div className="flex flex-col items-start justify-center gap-2">
                  <p className="text-lg md:text-[22px] font-semibold text-white">
                    {person.name}
                  </p>
                  <p className="text-[14px] md:text-lg text-secondary">
                    {person.job}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* componies */}

        <div className="flex animation-slide-toright gap-3 overflow-auto">
          {data.compony.map((compony, i) => (
            <div
              key={i}
              className="min-w-[328px] md:min-w-[414px] bg-[#23232E] border border-[#4B4B6A] rounded-[15px] px-4 py-3"
            >
              <div className="flex items-center gap-4 justify-start">
                <img
                  alt=""
                  src={compony.img}
                  className="w-[74px] h-[74px] rounded-[10px] md:w-[94px] md:h-[94px]"
                />
                <div className="flex flex-col items-start justify-center gap-2">
                  <p className="text-lg md:text-[22px] font-semibold text-white">
                    {compony.name}
                  </p>
                  <p className="text-[14px] md:text-lg text-secondary">
                    {compony.job}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Guest;
