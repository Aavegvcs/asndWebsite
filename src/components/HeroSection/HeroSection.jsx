import React, { useState } from "react";
import HeroSectionLeft from "../../assets/images/hero-section-left.png";
import HeroSectionBgImg from "../../assets/images/hero-section-bg-img.png";
import "../../App.css";
import ContactModal from "../ContactModal/ContactModal";
import Modal from '@mui/material/Modal';
import { Box } from "@mui/material";




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 1200,
 
  
};


const HeroSection = () => {

  const [toggleContactModal, setToggleContactModal] = useState(false)


  return (
    <div className="relative">
      <div
        className={`hero-section-wrapper bg-no-repeat bg-auto bg-left py-14 h-full`}
      // style={{ backgroundImage: `url(${HeroSectionBgImg})` }}
      >
        <div className="md:w-[70%] w-full mx-auto flex flex-wrap justify-between gap-5 md:gap-0 px-2 md:px-0">
          <div className="md:w-6/12 w-full hero-section-left">
            <div className="flex flex-col flex-wrap items-start max-sm:items-center gap-5 hero-section-left-text-wrapper mt-[20px] xl:mt-[32px] lg:mt-[0px]">
              <div className="bg-[#e6f3ff] py-1 px-[10px] rounded-[8px]">
                <h4 className="text-[#095BF6] text-2xl font-medium">ASND</h4>
              </div>
              <div className="pr-5">
                <h2 className="text-[#222222] font-bold lg:text-5xl max-sm:text-center md:text-4xl text-3xl">
                  {/* Transforming <span className="text-[#095CF6]">Ideas</span> into{" "}
                  <span className="text-[#095CF6]">Reality</span> */}

                  Building bridges between <span className="text-[#095CF6]">imagination</span>  and  <span className="text-[#095CF6]">execution</span>.
                </h2>
              </div>
              <div className="md:w-[80%] w-full">
                <p className="text-[#666666] lg:text-3xl max-sm:text-center md:text-2xl text-xl">
                  Leading the Way in Software Innovation
                </p>
              </div>
              <button className="bg-gradient-to-r from-[#0B49F5] to-[#02B4FF] text-white font-normal rounded-[4px] w-[130px] py-[6px]" onClick={() => setToggleContactModal(true)}>
                Contact Us
              </button>
            </div>
          </div>
          <div className="md:w-6/12 w-full hero-section-right ">
            <div className="flex items-center justify-center md:justify-end relative">
              <img src={HeroSectionLeft} alt="HeroSectionLeft" />
              {/* <div className="glassmorphism border ">
              <div className="flex flex-col gap-2">
                <h4 className="text-xl text-[#fff]">We are tech Experts</h4>
                <h4>
                  100% <span>Customer Satisfaction</span>
                </h4>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </div>



      {/* {
        toggleContactModal ? (<>
          <div className="w-full h-[150%] bg-[#e4e4e4] absolute top-0 left-0">
            <ContactModal
              toggleModal={setToggleContactModal}
              
            />
          </div>
        </>) : (<></>)
      } */}


      <Modal
        open={toggleContactModal}
        onClose={() => setToggleContactModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          <ContactModal

            toggleModal={setToggleContactModal}

          />
        </Box>
      </Modal>
    </div>
  );
};

export default HeroSection;
