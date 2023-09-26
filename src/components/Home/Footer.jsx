import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#23222a] text-white flex md:flex-row flex-col md:items-start items-center w-full py-16 px-10">
        <div className="w-[55%] flex flex-col justify-between">
          <div className="flex flex-row items-center">
            <img src="/assets/logo.png" alt="logo" width="38px" />
            <h1 className="ml-2 font-semibold font-spectral">The Mosho</h1>
          </div>
          <div className="flex flex-row my-3">
            <img src="/assets/facebook-icon.png" alt="facebook" className="border rounded-full w-[35px] hover:bg-[#ff492f] cursor-pointer p-1.5 mx-1" />
            <img src="/assets/twitter-icon.png" alt="facebook" className="border rounded-full w-[35px] hover:bg-[#ff492f] cursor-pointer p-1.5 mx-1" />
            <img src="/assets/instagram-icon.png" alt="facebook" className="border rounded-full w-[35px] hover:bg-[#ff492f] cursor-pointer p-1.5 mx-1" />
            <img src="/assets/youtube-icon.png" alt="facebook" className="border rounded-full w-[35px] hover:bg-[#ff492f] cursor-pointer p-1.5 mx-1" />
          </div>
          <p>
            ©2021<span className="text-[#ff492f]"> The Mosho </span>
          </p>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 md:mt-0 mt-10 w-full">
          <div className="flex flex-col items-start text-[14px] text-[#c9c9c9]">
            <h1 className="mb-5 text-[20px] font-semibold font-spectral text-white">Serivces</h1>
            <div>
              <h2 className="mt-1.5">Online Order</h2>
              <h2 className="mt-1.5">Pre-Reservation</h2>
              <h2 className="mt-1.5">24/7 Services</h2>
            </div>
          </div>
          <div className="flex flex-col items-start text-[14px] text-[#c9c9c9]">
            <h1 className="mb-5 text-[20px] font-semibold font-spectral text-white">Quick Links</h1>
            <div>
              <h2 className="mt-1.5">Restaurant</h2>
              <h2 className="mt-1.5">Reviews</h2>
              <h2 className="mt-1.5">Blogs</h2>
              <h2 className="mt-1.5">Order Foods</h2>
            </div>
          </div>
          <div className="flex flex-col items-start text-[14px] text-[#c9c9c9] md:mt-0 mt-5">
            <h1 className="mb-5 text-[20px] font-semibold font-spectral text-white">About</h1>
            <div>
              <h2 className="mt-1.5">Our Story</h2>
              <h2 className="mt-1.5">Benifits</h2>
              <h2 className="mt-1.5">Career</h2>
            </div>
          </div>
          <div className="flex flex-col items-start text-[14px] text-[#c9c9c9] md:mt-0 mt-5">
            <h1 className="mb-5 text-[20px] font-semibold font-spectral text-white">Help</h1>
            <div>
              <h2 className="mt-1.5">Contact</h2>
              <h2 className="mt-1.5">Support</h2>
              <h2 className="mt-1.5">FAQ</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
