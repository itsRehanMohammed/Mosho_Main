import React from "react";
import { Link } from "react-router-dom";

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
            <img
              src="/assets/facebook-icon.png"
              alt="facebook"
              className="border rounded-full w-[35px] hover:bg-[#ff492f] cursor-pointer p-1.5 mx-1"
            />
            <img
              src="/assets/twitter-icon.png"
              alt="facebook"
              className="border rounded-full w-[35px] hover:bg-[#ff492f] cursor-pointer p-1.5 mx-1"
            />
            <img
              src="/assets/instagram-icon.png"
              alt="facebook"
              className="border rounded-full w-[35px] hover:bg-[#ff492f] cursor-pointer p-1.5 mx-1"
            />
            <img
              src="/assets/youtube-icon.png"
              alt="facebook"
              className="border rounded-full w-[35px] hover:bg-[#ff492f] cursor-pointer p-1.5 mx-1"
            />
          </div>
          <p>
            ©2021<span className="text-[#ff492f]"> The Mosho </span>
          </p>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 md:mt-0 mt-10 w-full">
          <div className="flex flex-col items-start text-[14px] text-[#c9c9c9]">
            <h1 className="mb-5 text-[20px] font-semibold font-spectral text-white">
              Serivces
            </h1>
            <div>
              <h2 className="mt-1.5">
                {" "}
                <a href={`https://app.themosho.com/menu`}>Online Order </a>
              </h2>
              <h2 className="mt-1.5">
                <a href={`https://app.themosho.com/contact`}>
                  Pre-Reservation{" "}
                </a>{" "}
              </h2>
              <h2 className="mt-1.5">
                <Link to="/contact-us">24/7 Services</Link>
              </h2>
            </div>
          </div>
          <div className="flex flex-col items-start text-[14px] text-[#c9c9c9]">
            <h1 className="mb-5 text-[20px] font-semibold font-spectral text-white">
              Quick Links
            </h1>
            <div>
              <h2 className="mt-1.5">
                <Link to="/restaurants">Restaurants</Link>
              </h2>
              <h2 className="mt-1.5">
                {" "}
                <a href={`https://app.themosho.com/menu`}> Order Foods </a>{" "}
              </h2>
            </div>
          </div>
          <div className="flex flex-col items-start text-[14px] text-[#c9c9c9] md:mt-0 mt-5">
            <h1 className="mb-5 text-[20px] font-semibold font-spectral text-white">
              {" "}
              <Link to="/about">About</Link>{" "}
            </h1>
            <div>
              <h2 className="mt-1.5">
                {" "}
                <Link to="/about-us">Our Story </Link>{" "}
              </h2>
              <Link to="/offers">Offers</Link>
            </div>
          </div>
          <div className="flex flex-col items-start text-[14px] text-[#c9c9c9] md:mt-0 mt-5">
            <h1 className="mb-5 text-[20px] font-semibold font-spectral text-white">
              Help
            </h1>
            <div>
              <h2 className="mt-1.5">
                {" "}
                <Link to="/contact-us">Contact</Link>
              </h2>
              <h2 className="mt-1.5">
                <a href={`https://app.themosho.com/contact`}>Support </a>{" "}
              </h2>
              <h2 className="mt-1.5">
                {" "}
                <Link to="/offers">FAQ</Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
