import React from "react";
import Service1 from "../../assets/images/it-consultantion.png";
import Service2 from "../../assets/images/data-security.png";
import Service3 from "../../assets/images/web-development.png";
import Service4 from "../../assets/images/ux-ui-design.png";
import Service5 from "../../assets/images/cloud-services.png";
import Service6 from "../../assets/images/app-development.png";
import ServiceCard from "../ServiceCard/ServiceCard";

const servicesApp = [
  {
    serviceImg: Service1,
    serviceTitle: "IT Consultation",
    serviceDesc:
      "Trust our top minds to eliminate workflow pain points, implement new tech & app.",
    alt: "IT Consultation",
  },
  {
    serviceImg: Service2,
    serviceTitle: "Data Security",
    serviceDesc:
      "Trust our top minds to eliminate workflow pain points, implement new tech & app.",
    alt: "Data Security",
  },
  {
    serviceImg: Service3,
    serviceTitle: "Web Development",
    serviceDesc:
      "Trust our top minds to eliminate workflow pain points, implement new tech & app.",
    alt: "Web Development",
  },
  {
    serviceImg: Service4,
    serviceTitle: "UI/UX Design",
    serviceDesc:
      "Trust our top minds to eliminate workflow pain points, implement new tech & app.",
    alt: "UI/UX Design",
  },
  {
    serviceImg: Service5,
    serviceTitle: "Cloud Services",
    serviceDesc:
      "Trust our top minds to eliminate workflow pain points, implement new tech & app.",
    alt: "Cloud Services",
  },
  {
    serviceImg: Service6,
    serviceTitle: "App Development",
    serviceDesc:
      "Trust our top minds to eliminate workflow pain points, implement new tech & app.",
    alt: "App Development",
  },
];

const OurServices = () => {
  return (
    <div className="our-services bg-no-repeat flex justify-center items-center h-auto md:h-[826px]">
      <div className="md:w-[70%] w-full flex justify-center flex-col gap-5 mx-auto px-[8px] md:py-14px py-7">
        <div className="section-heading">
          <h2 className="text-4xl text-center font-semibold text-[#0960F7]">
            Our Services
          </h2>
          <h3 className="text-4xl text-center text-[#5B5B5B] font-normal">
            <span className="text-[#222222] font-semibold">
              Perfect Solution
            </span>{" "}
            for your business
          </h3>
        </div>
        <div className="flex flex-wrap w-full ">
          {servicesApp.map((service, i) => {
            return <ServiceCard service={service} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
