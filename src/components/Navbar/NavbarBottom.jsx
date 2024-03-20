import React, { useState } from "react";
import AsndLogo from "../../assets/images/asnd-logo.png";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const navLinks = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "About Us",
    to: "/",
  },
  {
    text: "Services",
    to: "/",
  },
  {
    text: " Portfolio",
    to: "/",
  },
];

const NavbarBottom = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="bg-white  md:rounded-t-[35px] rounded-t-[0px] flex justify-between items-center h-[80px]">
      <div className="md:w-[70%] w-full mx-auto flex justify-between items-center nav-bottom">
        <div className="px-[8px]">
          <img src={AsndLogo} alt="logo" />
        </div>

        <div
          className={`md:relative top-0 md:right-0 ${
            toggleMenu ? "-right-[0%]" : "-right-[100%]"
          }  md:h-auto h-[100vh] fixed bg-white md:w-auto w-[100vw] md:z-0 z-50 py-7 md:py-0`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-14 md:gap-4">
            <div
              className="toggle-menu md:hidden flex justify-end w-full hover:cursor-pointer"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <RxCross2 className="text-[25px] mr-[30px]" />
            </div>
            {navLinks.map((link, i) => {
              return (
                <NavLink
                  to="#"
                  className="text-[14px] text-[#6E6E6E]"
                  onClick={() => setToggleMenu(!toggleMenu)}
                  key={i}
                >
                  {link.text}
                </NavLink>
              );
            })}
          </div>
        </div>
        <div
          className="toggle-menu md:hidden block hover:cursor-pointer"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <IoMenu className="text-[25px] mr-[20px]" />
        </div>
        <div className="hidden md:block">
          <button className="bg-gradient-to-r from-[#0B49F5] to-[#02B4FF] text-white font-normal rounded-[4px] w-[130px] py-[6px]">
            Free Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarBottom;