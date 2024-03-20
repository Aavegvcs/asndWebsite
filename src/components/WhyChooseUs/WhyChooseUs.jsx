import React from "react";
import "../../App.css"
import PointImg from "../../assets/images/point-img.svg";
import ChooseLines from "../../assets/images/choose-lines.svg"
import ChooseBrands from "../../assets/images/choose-brands.png"
import ChooseBubble from "../../assets/images/choose-bubbles.svg"


const pointsArr = [
  {
    // img :PointImg,
    text: "Tailored tech solutions for business growth.",
    // alt :""
  },
  {
    // img :PointImg,
    text: "Innovative expertise to fuel your success.",
    // alt :""
  },
  {
    // img :"",
    text: "Proven results through advanced tech solutions.",
    // alt :""
  },
  {
    // img :"",
    text: "Gain a competitive edge with our technology.",
    // alt :""
  },
  {
    // img :"",
    text: "Reliable, secure, scalable tech for businesses.",
    // alt :""
  },
];

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us flex justify-center items-center h-[899px]">
      <div className="flex flex-wrap w-full">
        <div className="md:w-6/12 h-full">
            <div className="overflow-hidden">
                <div className="relative p-7">
                    <img src={ChooseLines} alt="" className="ChooseLines w-full h-full" />
                    <img src={ChooseBrands} alt="" className="ChooseBrands w-full h-full" />
                    <img src={ChooseBubble} alt="" className="ChooseBubble w-full h-full" />
                </div>
            </div>
        </div>
        <div className="md:w-6/12">
          <div className="flex flex-col gap-[30px] justify-center h-full">
            <div>
              <h4 className="text-[#0773F9] font-semibold text-[20px] leading-[20px]">Why Choose Us</h4>
            </div>
            <div className="flex flex-col gap-[15px]">
              <h2 className="text-[#000] font-semibold text-[32px] leading-[20px]">Boost Your Business</h2>
              <h3 className="text-[#8B8B8B] font-semibold text-[24px] leading-[20px]">with ASND</h3>
            </div>
            <div>
              <p className="text-[#666666] font-normal text-[16px] leading-[24px]">
                Benefit from our team of seasoned professionals with extensive
                experience in software development across various industries.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {pointsArr.map((point, i) => {
                return (
                  <div className="flex gap-2 items-center" key={i}>
                    <img src={PointImg} alt="PointImg" className="" />
                    <p className="text-[16px] text-[#222222] font-semibold">{point.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
