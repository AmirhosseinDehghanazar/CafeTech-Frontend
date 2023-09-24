import { useInView } from "react-intersection-observer";
import "./footer.css";

const Footer = () => {
  return (
    <div className="mb-10">
      <div></div>
      <p className="text-secondary text-lg font-semibold text-center">
        تمامی حقوق این وبسایت متعلق به تیم{" "}
        <span className="text-white/90">کافه تک</span> میباشد و هر گونه سوء
        استفاده و کپی برداری از نام یا محتوای این سایت پیگرد قانونی دارد
      </p>
    </div>
  );
};

export default Footer;
