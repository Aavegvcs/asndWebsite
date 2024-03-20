import React from "react";
import HowDoCard from "../HowDoCard/HowDoCard";
import Img1 from "../../assets/images/understanding-object.svg";
import Img2 from "../../assets/images/choose-right.svg";
import Img3 from "../../assets/images/document-coding.svg";
import Img4 from "../../assets/images/careful-testing.svg";
import Img5 from "../../assets/images/successful-deployment.svg";
import Img6 from "../../assets/images/amc-support.svg";

const HowDoArr = [
  {
    img: Img1,
    title: "Understanding Object",
    alt: "Understanding Object",
  },
  {
    img: Img2,
    title: "Choose Right",
    alt: "Choose Right",
  },
  {
    img: Img3,
    title: "Document Coding",
    alt: "Document Coding",
  },
  {
    img: Img4,
    title: "Careful testing",
    alt: "Careful testing",
  },
  {
    img: Img5,
    title: "Successful deployment",
    alt: "",
  },
  {
    img: Img6,
    title: "AMC support",
    alt: "AMC support",
  },
];

export const HowDoSection = () => {
  return (
    <div className="how-do-section bg-[#FBFBFB] bg-no-repeat flex justify-center items-center h-auto md:h-[542px]">
      <div className="md:w-[70%] md:bg-transparent bg-[#FBFBFB] w-full flex justify-center flex-col gap-5 mx-auto px-[8px] md:py-14px py-7">
        <div className="section-heading flex flex-col justify-between h-[64px]">
          <h4 className="text-xl text-center font-semibold text-[#0773F9]">
            Work Process
          </h4>
          <h2 className="text-3xl text-center text-[#494949] font-semibold">
            How We Do It?
          </h2>
        </div>
        <div className="flex flex-wrap w-full ">
          {HowDoArr.map((elm, i) => {
            return <HowDoCard data ={elm} key={i} />;
          })}
          
        </div>
      </div>
    </div>
  );
};
