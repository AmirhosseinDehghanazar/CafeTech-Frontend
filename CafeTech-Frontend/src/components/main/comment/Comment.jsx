import "./comment.css";
import commentPicture from "../../../assets/comment/comment-pic.png";
import Slider from "react-slick";
import arrowright from "../../../assets/comment/arrow-left.svg";
const Comment = () => {
  const NextArrow = (props) => (
    <div className="custom-next-arrow" onClick={props.onClick}>
      <img src={arrowright} alt="" />
    </div>
  );

  const PrevArrow = (props) => (
    <div className="custom-prev-arrow" onClick={props.onClick}>
      <img src={arrowright} alt="" />
    </div>
  );
  const settings = {
    autoplay: true,
    // speed: 500,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const comments = [
    {
      id: 1,
      name: "حمید ",
      job: "Backend Developer",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. ",
    },
    {
      id: 2,
      name: "حمید ",
      job: "Backend Developer",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. ",
    },
    {
      id: 3,
      name: "حمید ",
      job: "Backend Developer",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. ",
    },
  ];

  return (
    <div className="my-32 comment-parent lg:py-10  -mx-6 md:-mx-10 lg:-mx-14 xl:-mx-20">
      {/* texts */}
      <div className="text-center max-w-[280px] md:max-w-[376px] mx-auto mb-10">
        <p className="bg-blue-text mb-3 text-[32px] md:text-[44px] font-bold text-white">
          <span>&#123; نظرات مشتریان ما &#125;</span>{" "}
        </p>
        <p className="text-linear-dark text-sm md:text-[18px]">
          مهمانان ویژه و تیم هایی که افتخار همکاری و راه اندازی رویداد های مختلف
          در زمینه های مختلف رو داشتیم{" "}
        </p>
      </div>

      {/* slide */}
      <div className="max-w-[992px] mx-auto">
        <Slider
          {...settings}
          dots={window.innerWidth > 1024 ? false : true}
          className="text-center mx-7"
        >
          {comments.map((c, i) => (
            <div
              key={i}
              className="relative comment text-start rounded-2xl overflow-y-hidden-hidden border w-[full] max-w-[852px] border-[#4B4B6A] bg-[#23232E] px-4 py-6 "
            >
              {/* comment profile */}
              <div className="flex gap-5 mb-6 items-center justify-start">
                <img
                  src={commentPicture}
                  className="comment-picture rounded-[15px] w-16 h-16 md:w-20 md:h-20"
                />
                <div>
                  <p className="text-white/90 text-lg md:text-[22px]">
                    {c.name}
                  </p>
                  <p className="text-secondary text-[14px] md:text-lg">
                    {c.job}
                  </p>
                </div>
              </div>

              {/* comment */}
              <p className="text-[#B3B3D0] text-sm md:text-lg">
                {c.description}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Comment;
