import React, { useState } from 'react';
// import ContactMailImg from "../../assets/images/contact_mail_img.png";
// import PrioritySupport from "../../assets/images/priority_support_img.png";
// import ContactLocationImg from "../../assets/images/contact_location_img.png";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { RxCross2 } from 'react-icons/rx';

const ContactModal = ({ toggleModal }) => {
    const [toggleQuiryType, setToggleQuiryType] = useState(false);
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState(null);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");



    const contactSubmitHandler = (event) => {
        event.preventDefault();
        if (!name || !mobile || !email) {

            toast.error("Please Fill Fields !", {
                position: "top-left"
            });
            return;
        }
        let data = JSON.stringify({
            "indexValue": toggleQuiryType ? 1 : 0,
            "fullName": name,
            "emailID": email,
            "phoneNumber": mobile,
            "message": message
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://18.60.9.40:3000/app/v1/query/contactUs',
            headers: {
                'Content-Type': 'application/json',
                'api-key': '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setName("")
                setMobile(null)
                setEmail("")
                setMessage("")
            })
            .catch((error) => {
                console.log(error);
            });
    }


    return (
        <React.Fragment>
            <div className='h-full px-3 '>
                <div className=' w-full xl:w-[1109px] mx-auto shadow-[0px_4px_32px_0px_#0000001F] '>
                    <div className='w-full flex justify-between flex-wrap'>
                        <div className='md:w-4/12 md:block hidden w-full bg-gradient-to-r from-[#0B49F5] to-[#02B4FF] p-3 rounded-tl-[20px] rounded-bl-[20px]'>
                            <div className='flex flex-col gap-5 p-3 rounded-[12px] '>
                                <div className='flex flex-col gap-1 bg-white rounded-[12px] p-[12px] shadow-[0px_3px_12px_0px_#0000001F] '>
                                    <div className='w-[45px] h-[45px] p-[6px] bg-gradient-to-r from-[#0B49F5] to-[#02B4FF] rounded-[12px]'>
                                        {/* <img src={ContactMailImg} alt="" /> */}
                                    </div>
                                    <h4 className='font-medium text-[16px] mt-2'>Send your query</h4>
                                    <span className='inline-block -mt-[8px]'>connect@aaveg.com</span>
                                </div>
                                <div className='flex flex-col gap-1 rounded-[12px] p-[12px]  bg-white shadow-[0px_3px_12px_0px_#0000001F] '>
                                    <div className='w-[45px] h-[45px] p-[6px] bg-gradient-to-r from-[#0B49F5] to-[#02B4FF] rounded-[12px]'>
                                        {/* <img src={PrioritySupport} alt="" /> */}
                                    </div>
                                    <h4 className='font-medium text-[16px] mt-2'>Priority Support</h4>
                                    <div className='flex -mt-[4px]'>
                                         <span>+91 92787 01674</span>
                                        {/* <span> +91-9876543210 </span> */}
                                        </div>
                                </div>
                                <div className='flex flex-col gap-1 rounded-[12px] p-[12px]  bg-white shadow-[0px_3px_12px_0px_#0000001F] '>
                                    <div className='w-[45px] h-[45px] p-[6px] bg-gradient-to-r from-[#0B49F5] to-[#02B4FF] rounded-[12px]'>
                                        {/* <img src={ContactLocationImg} alt="" /> */}
                                    </div>
                                    <h4 className='font-medium text-[16px] mt-1'>Office Address</h4>
                                    <p>

                                        {/* 3rd Floor, D21, Corporate Park,<br /> Sector-21, Dwarka, New Delhi - <br /> 110077 */}

                                        1515, 15th Floor, Tower-4, DLF Corporate Greens, Sector 74A, Gurugram, Haryana - 122004
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-8/12 w-full p-5 md:rounded-tr-[20px] md:rounded-br-[20px]  md:rounded-[0px] rounded-[20px] bg-white'>
                            <div className='h-full'>
                                <div className='flex gap-3 flex-wrap relative'>
                                    <button className='bg-transparent absolute right-2 top-2' onClick={() => toggleModal(false)}><RxCross2 className='text-[28px]' /></button>
                                    <div className={`${toggleQuiryType ? "bg-[#999999]" : "bg-gradient-to-r from-[#0B49F5] to-[#02B4FF] "} rounded-[12px]  py-2 px-4`} onClick={() => setToggleQuiryType(!toggleQuiryType)}><span className='text-white text-[16px] leading-[26px] font-normal hover:cursor-pointer'>Send your enquiry</span></div>
                                    <div className={`${toggleQuiryType ? "bg-gradient-to-r from-[#0B49F5] to-[#02B4FF]" : "bg-[#999999]"} rounded-[12px]  py-2 px-4`} onClick={() => setToggleQuiryType(!toggleQuiryType)}><span className='text-white text-[16px] leading-[26px] font-normal hover:cursor-pointer'>Arrange a call back</span></div>
                                </div>
                                <div className='flex flex-col w-full'>
                                    <form onSubmit={contactSubmitHandler} className='flex pb-2 pt-[24px] justify-between flex-col gap-3 items-start'>
                                        {
                                            toggleQuiryType ? (<>
                                                <div className='w-full flex flex-col gap-2'>
                                                    <label className='text-[14px] font-normal'>Phone Number</label>
                                                    <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} className=' p-[8px] rounded-[8px] bg-[#FBFBFB] border-0 placeholder:text-[14px] placeholder:font-light focus:outline-0' placeholder='Enter your phone number' />
                                                </div>

                                            </>) : (<>

                                                <div className='flex flex-col w-full gap-3'>
                                                    <div className='w-full flex flex-col gap-2'>
                                                        <label className='text-[14px] font-normal'>Name</label>
                                                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className=' p-[8px] rounded-[8px] bg-[#FBFBFB] border-0 placeholder:text-[14px] placeholder:font-light focus:outline-0' placeholder='Type your name' />
                                                    </div>
                                                    <div className='w-full flex flex-col gap-2'>
                                                        <label className='text-[14px] font-normal'>Phone Number</label>
                                                        <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} className=' p-[8px] rounded-[8px] bg-[#FBFBFB] border-0 placeholder:text-[14px] placeholder:font-light focus:outline-0' placeholder='Enter your phone number' />
                                                    </div>
                                                    <div className='w-full flex flex-col gap-2'>
                                                        <label className='text-[14px] font-normal'>Email</label>
                                                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className=' p-[8px] rounded-[8px] bg-[#FBFBFB] border-0 placeholder:text-[14px] placeholder:font-light focus:outline-0' placeholder='Type your email' />
                                                    </div>
                                                    <div className='w-full flex flex-col gap-2'>
                                                        <label className='text-[14px] font-normal'>Your message (optional)</label>
                                                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='  p-[8px] rounded-[8px] bg-[#FBFBFB] border-0 placeholder:text-[14px] placeholder:font-light focus:outline-0' id="" rows="5" placeholder='Write your message here'></textarea>
                                                    </div>
                                                </div>
                                            </>)
                                        }


                                        <button className='bg-gradient-to-r from-[#0B49F5] to-[#02B4FF] text-white py-2 px-3 rounded-[12px]'>Submit</button>



                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* <div className='flex gap-3'>
            //     <div className='h-screen w-full flex justify-center items-center'>
            //         <div className='h-[50px] w-fit z-20 relative'>
            //             <div className='absolute left-0 w-[80%] h-[50px] z-[-10] bg-green-500 skew-x-[340deg] rounded'>
    
            //             </div>
            //             <div className='absolute right-0 w-[80%] h-[50px] z-[-10] bg-green-500 skew-x-[20deg] rounded'>
    
            //             </div>
            //             <div className='text-white px-4 text-xs w-full h-[50px] items-center text-center'>
            //           <span>  Send your enquiry</span>
            //             </div>
            //         </div>
            //     </div>
            //     <div className='h-screen w-full flex justify-center items-center'>
            //         <div className='w-[100px] h-[50px] z-20 relative'>
            //             <div className='absolute left-0 w-[80%] h-[50px] z-0 bg-green-500 skew-x-[340deg] rounded'>
    
            //             </div>
            //             <div className='absolute right-0 w-[80%] h-[50px] z-0 bg-green-500 skew-x-[20deg] rounded'>
    
            //             </div>
            //             <div className='text-white z-20 absolute text-xs w-full h-[50px] items-center text-center'>
            //                 Send your enquiry
            //             </div>
            //         </div>
            //     </div>
            </div> */}
            <ToastContainer />
        </React.Fragment>

    )
}

export default ContactModal
