import NavLink from "../navbar/NavLink";
import { linksData } from "../navbar/linksData";
import "./footer.css";
import techSign from "../../assets/footer/techcafeSign.svg";
const Footer = ({ value, valueHandler }) => {
  return (
    <div className="mb-10">
      <div className="footer  flex flex-col md:flex-row md:items-center md:py-12 gap-4 -mx-6 md:mx-0 mb-12  p-8 lg:px-20 md:rounded-[25px] shadow-[#441EDE]">
        {/* logo */}
        <div>
          <a
            href="/"
            className=" flex items-center lg:relative rela gap-2 lg:flex-row-reverse"
          >
            <img src={techSign} alt="techSign" />
          </a>
        </div>
        {/* navs */}
        <div className="mx-auto md:text-lg leading-loose">
          {linksData.map((link, i) => (
            <div key={i} className="inline-block me-4 flex-nowrap">
              <NavLink
                {...link}
                value={value}
                valueHandler={valueHandler}
                inactiveColor={"#BAC4F4"}
              />
            </div>
          ))}
        </div>
      </div>

      <p className="text-secondary text-lg font-semibold text-center">
        تمامی حقوق این وبسایت متعلق به تیم{" "}
        <span className="text-white/90">کافه تک</span> میباشد و هر گونه سوء
        استفاده و کپی برداری از نام یا محتوای این سایت پیگرد قانونی دارد
      </p>
    </div>
  );
};

export default Footer;
