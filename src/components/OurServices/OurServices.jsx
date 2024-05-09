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
      "Expert consultancy to align your IT infrastructure with your business goals for sustained growth.",
    alt: "IT Consultation",
  },
  {
    serviceImg: Service2,
    serviceTitle: "Data Security",
    serviceDesc:
      " Shielding your data fortress with cutting-edge encryption and vigilant threat detection.",
    alt: "Data Security",
  },
  {
    serviceImg: Service3,
    serviceTitle: "Web Development",
    serviceDesc:
      " Building dynamic web experiences that captivate audiences and drive meaningful interactions.",
    alt: "Web Development",
  },
  {
    serviceImg: Service4,
    serviceTitle: "UI/UX Design",
    serviceDesc:
      "Designing immersive digital journeys that prioritize user needs and amplify engagement and conversion.",
    alt: "UI/UX Design",
  },
  {
    serviceImg: Service5,
    serviceTitle: "Cloud Services",
    serviceDesc:
      " Harnessing the cloud's potential to drive innovation, collaboration, and business growth with tailored solutions..",
    alt: "Cloud Services",
  },
  {
    serviceImg: Service6,
    serviceTitle: "App Development",
    serviceDesc:
      "Bringing your app vision to life with bespoke solutions that prioritize performance, usability, and scalability.",
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
            {/* <span className="text-[#222222] font-semibold">
              Perfect Solution
            </span>{" "}
            for your business */}



            From development to consultation, we're your partner in tech evolution
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
