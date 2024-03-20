import React from "react";
import Img from "../../assets/images/understanding-object.svg";

const HowDoCard = ({ data }) => {
  return (
    <div className="lg:w-2/12 md:w-3/12 sm:w-4/12 w-6/12">
      <div className="flex flex-col gap-4 how-do-card py-[20px] px-[15px]">
        <div>
          <img src={data.img} alt={data.alt} />
        </div>
        <div className="px-[21px]">
          <h4 className="text-[#222222] font-semibold text-[16px] leading-[24px] text-center">
            {data.title}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default HowDoCard;
