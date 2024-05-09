import React from "react";
import Logo from "../assets/images/logo_in_footer.svg";
import EmailIcon from "../assets/images/mail_in_footer_img.svg";
import HomeIcon from "../assets/images/address_footer_img.svg";
import PhoneIcon from "../assets/images/call_in_footer_img.svg";
import Facebook from "../assets/images/facebook.svg";
import Twitter from "../assets/images/twitter.svg";
import LinkedIn from "../assets/images/linkedin.svg";
import Youtube from "../assets/images/youtube.svg";
import Instagram from "../assets/images/instagram.svg";
import { Link } from "react-router-dom";

const Footer = () => {


  const serviceArr = [
    {
      text: "IT Consultations"
    },
    {
      text: "Data Security"
    },
    {
      text: "Website Development"
    },
    {
      text: "UI/UX Design"
    },
    {
      text: "Cloud Services"
    },
    {
      text: "Game Development"
    },
    {
      text: "CRM & Software"
    },
  ]



  const quickLinksArr = [
    {
      text: "About Us"
    },
    {
      text: "Services"
    },
    {
      text: "Portfolio"
    },
    {
      text: "Contact Us"
    },
    {
      text: "Terms & Condition"
    },
    {
      text: "Privacy Policy"
    },
    {
      text: "Career"
    },
  ]









  return (
    <div className="footer bg-black py-14 md:px-0 px-4">
      <div className="md:w-[70%] w-full mx-auto flex-wrap flex items-start pt-[28px]">
        <div className="xl:w-3/12 md:w-6/12 w-full mt-4">
          <div className="pe-4">
            <div className=""><img src={Logo} alt="" className="h-[70px]" /></div>
            <p className="text-[16px] font-normal leading-[24px] text-[#8B8B8B] mt-6 mb-8">Best IT Solutions & Technology</p>
            <ul className="p-0 m-0 flex flex-col gap-3">
              <li className="flex gap-1 items-start">
                <img src={HomeIcon} alt="" />
                <p className="text-[16px] font-normal leading-[24px] text-[#8B8B8B]">
                  
                     {/* Dwarka Sector-9,<br /> New Delhi pin 110045 */}
                     1515, 15th Floor, Tower-4, DLF Corporate Greens, Sector 74A, Gurugram, Haryana - 122004
                     
                     </p>
              </li>
              <li className="flex gap-1 items-start">
                <img src={PhoneIcon} alt="" />
                <div className="flex flex-col gap-1">

                  <span className="text-[16px] font-normal leading-[24px] text-[#8B8B8B]">+91 92787 01674</span>
                  {/* <span className="text-[16px] font-normal leading-[24px] text-[#8B8B8B]">+91-1234567890</span> */}
                </div>
              </li>
              <li className="flex gap-1">
                <img src={EmailIcon} alt="" />
                <div className="flex flex-col gap-1">
                  <span className="text-[16px] font-normal leading-[24px] text-[#8B8B8B]">connect@aaveg.com</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="xl:w-3/12 md:w-6/12 w-full mt-4">
          <div className="w-full ">
            <h3 className="text-[#fff] font-bold text-[20px] mb-8">Services</h3>
            <ul className="flex flex-col gap-1">
              {
                serviceArr.map((service, index) => {
                  return (

                    <li key={index}><Link to="#" className="text-[16px] font-normal leading-[24px] text-[#8B8B8B]">{service.text}</Link></li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        <div className="xl:w-3/12 md:w-6/12 w-full mt-4">

          <div className="w-full ">
            <h3 className="text-[#fff] font-bold text-[20px]  mb-8">Quick Links</h3>
            <ul className="flex flex-col gap-1">
              {
                quickLinksArr.map((quickLink, index) => {
                  return (
                    <li key={index}><Link to="#" className="text-[16px] font-normal leading-[24px] text-[#8B8B8B]">{quickLink.text}</Link></li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        <div className="xl:w-3/12 md:w-6/12 w-full mt-4">
          <div className="w-full">
            <h3 className="text-[#fff] font-bold text-[20px]  mb-8">Quick Links</h3>
            <div className="flex flex-col gap-5">
              <p className="text-[16px] font-normal leading-[24px] text-[#8B8B8B]">Register now to get latest updates on promotion coupons </p>
              <div>
                <div className="flex rounded-[12px]">
                  <input type="text" placeholder="Type Your Email" className="bg-[#373737] px-3 grow h-[40px] rounded-tl-[12px] rounded-bl-[12px]  max-sm:w-[120px]" />
                  <button className="bg-gradient-to-r from-[#0B49F5] to-[#02B4FF] text-[#fff] font-normal rounded-tr-[12px] rounded-br-[12px] px-4 py-2">Subscribe</button>
                </div>
                <p className="text-[16px] font-normal leading-[24px] text-[#8B8B8B] py-3">By subscribing, you accepted the our Policy</p>
              </div>
            </div>
            <div className="flex justify-start gap-2">
              <img src={Facebook} alt="" />
              <img src={Twitter} alt="" />
              <img src={LinkedIn} alt="" />
              <img src={Youtube} alt="" />
              <img src={Instagram} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
