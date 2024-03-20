import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <>
      <div className="md:w-4/12 sm:w-6/12 w-full p-3">
        <div className="flex flex-col gap-5 service-card py-[20px] px-[15px] rounded-[12px] h-full bg-white shadow-[0px_4px_20px_0px_#0000001F]">
          <div>
            <img src={service.serviceImg} alt={service.alt} />
          </div>
          <h3 className="text-[20px] text-[#222222] font-bold leading-6">
            {service.serviceTitle}
          </h3>
          <p className="text-[15px] text-[#666666] leading-6">
            {service.serviceDesc}
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
