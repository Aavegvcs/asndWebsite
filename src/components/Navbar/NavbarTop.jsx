import React from "react";
import SoundImage from "../../assets/images/sound-image.png";
import faceBookImage from "../../assets/images/facebook.png";
import twitterImage from "../../assets/images/twitter.png";
import linkedInImage from "../../assets/images/linkedin.png";
import youtubeImage from "../../assets/images/youtube.png";
import instagramImage from "../../assets/images/instagram.png";

const navSocialMediaImg = [
  {
    img: faceBookImage,
    alt: "faceBookImage",
  },
  {
    img: twitterImage,
    alt: "twitterImage",
  },
  {
    img: linkedInImage,
    alt: "linkedInImage",
  },
  {
    img: youtubeImage,
    alt: "youtubeImage",
  },
  {
    img: instagramImage,
    alt: "instagramImage",
  },
];

const NavbarTop = () => {
  return (
    <>
      <div className="md:w-[70%] w-full mx-auto hidden md:block nav-top px-[8px] ">
        <div className="flex justify-between items-center w-full">
          <div className="">
            <div className="flex items-center gap-2">
              <div>
                <img src={SoundImage} alt="SoundImage" />
              </div>
              <span className=" text-[#FFFFFF] text-[14px] font-light">
                Are you a driven and motivated 1st Line IT Support Engineer?
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {navSocialMediaImg.map((icon, i) => {
              return (
                <div key={i} className="py-2">
                  <img
                    src={icon.img}
                    alt={icon.alt}
                    className="w-[28px] h-[28px]"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarTop;
