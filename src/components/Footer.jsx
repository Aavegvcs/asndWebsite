import React from "react";
import Logo from "../assets/images/asnd logo.png";
import EmailIcon from "../assets/images/email_icon.png";
import HomeIcon from "../assets/images/home_icon.png";
import PhoneIcon from "../assets/images/phone_icon.png";

const Footer = () => {
  return (
    <div className="footer bg-black">
      <div className="w-[70%] mx-auto flex ">
        <div className="md:col-3/12 text-[#fff] py-12">
          <div className="flex flex-col justify-between">
            <img src={Logo} className="w-[150px]" alt="" />
            <h4 className="text-[16px] font-bold mb-5">
              Best IT Solutions & Technology WordPress Theme for Your Business.
            </h4>
            <div className="flex flex-col justify-between">
              <div>
                <img src="" className="object-fit" alt="" />
                <div className=" gap-[10]">
                  <div className="flex my-4">
                    <img src={HomeIcon} className="object-fit w-[60] h-[60]" alt="" />
                    <p className="w-[50%] text-[11px]">
                      Plot No. 15, kharsa no. 44, Near Dwarka Sector 9 Metro
                      Station, New Delhi, Delhi 110077
                    </p>
                  </div>
                  <div className="flex my-4">
                    <img src={EmailIcon} className="object-fit" alt="" />
                    <p className="w-[50%] text-[11px]">
                      neelkanth1999@gmail.com
                    </p>
                  </div>
                  <div className="flex my-4">
                    <img src={PhoneIcon} className="object-fit" alt="" />
                    <p className="w-[50%] text-[11px]">+91 8920432940</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-3/12"></div>
      </div>
    </div>
  );
};

export default Footer;
