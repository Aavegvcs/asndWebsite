import React from "react";
import Logo from "../assets/images/logo_in_footer.svg";
import EmailIcon from "../assets/images/email_icon.png";
import HomeIcon from "../assets/images/home_icon.png";
import PhoneIcon from "../assets/images/phone_icon.png";

const Footer = () => {
  return (
    <div className="footer bg-black">
      <div className="w-[70%] mx-auto flex ">

        <div className="md:col-3/12">
          <div>
            <img src={Logo} alt="" />

            <p className="text-[16px] font-normal leading-[24px] text-[#8B8B8B]">Best IT Solutions & Technology</p>
            <ul className="p-0 m-0">
              <li>
                <img src={HomeIcon} alt="" />
                <p className="text-[16px] font-normal leading-[24px] text-[#8B8B8B]">Dwarka Sector-9, New Delhi pin 110045</p>
              </li>
              <li>
                <img src={PhoneIcon} alt="" />
                <div className="flex flex-col gap-1">

                  <span className="text-[16px] font-normal leading-[24px] text-[#8B8B8B]">+91-9876543210 </span>
                  <span className="text-[16px] font-normal leading-[24px] text-[#8B8B8B]">+91-1234567890</span>
                </div>
              </li>
              <li>
                <img src={EmailIcon} alt="" />
                <div className="flex flex-col gap-1">
                  <span className="text-[16px] font-normal leading-[24px] text-[#8B8B8B]">Support@asnd.com</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:col-3/12">

        </div>
        <div className="md:col-3/12"></div>
        <div className="md:col-3/12"></div>
      </div>
    </div>
  );
};

export default Footer;
