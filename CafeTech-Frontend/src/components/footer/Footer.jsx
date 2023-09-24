import NavLink from "../navbar/NavLink";
import { linksData } from "../navbar/linksData";
import "./footer.css";

const Footer = ({ value, valueHandler }) => {
  return (
    <div className="mb-10">
      <div className="footer flex flex-col md:flex-row md:items-center gap-4 -mx-6 md:mx-0 mb-12 bg-[#4276E3] p-8 xl:px-20 md:rounded-[25px] shadow-[#441EDE]">
        {/* logo */}
        <div>
          <a
            href="/"
            className="flex items-end lg:items-center lg:relative rela gap-2 lg:flex-row-reverse"
          >
            <p className="font-bold text-2xl text-white/90">کافه تک</p>
            <div className="cafe-svg lg:absolute" />
          </a>
        </div>
        {/* navs */}
        <div className="mx-auto md:text-lg">
          {linksData.map((link, i) => (
            <div key={i} className="inline-block me-4 flex-nowrap">
              <NavLink {...link} value={value} valueHandler={valueHandler} />
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
