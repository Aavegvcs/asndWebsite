import React from "react";
import AavegImg from "../../assets/images/aaveg.png";
import WtiCabsImg from "../../assets/images/wti.png";
import ZomatoImg from "../../assets/images/zomato.png";
import dlfImg from "../../assets/images/dlf.png";

const companyArr = [
  {
    img: AavegImg,
    alt: "AavegImg",
  },
  {
    img: WtiCabsImg,
    alt: "WtiCabsImg",
  },
  {
    img: ZomatoImg,
    alt: "ZomatoImg",
  },
  {
    img: dlfImg,
    alt: "dlfImg",
  },
];

const BrandStrip = () => {
  return (
    <div className="bg-gradient-to-r from-[#0B49F5] to-[#02B4FF] flex justify-center items-center lg:h-[160px] h-auto">
      <div className="w-[70%] mx-auto flex flex-wrap">
        {companyArr.map((elm, i) => {
          return (
            <div className="lg:w-3/12 md:w-4/12 sm:w-6/12 w-full px-5" key={i}>
              <div className="py-5 flex justify-center items-center">
                <img src={elm.img} alt={elm.alt} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BrandStrip;
