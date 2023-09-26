import React from "react";

const Hero = () => {
  return (
    <>
      <div className="bg-[#23222a] text-white grid md:grid-cols-2 grid-cols-1 items-center md:px-10 px-2 pt-5">
        <div className="flex flex-col md:items-start items-center md:text-left text-center">
          <div className="flex flex-row items-center bg-[#3b3947] text-[#ff492f] w-[180px] py-1 px-2 rounded-3xl">
            <img src="/assets/heart.svg" alt="heart" width="30px" />
            <span className="ml-1">People trust us</span>
          </div>
          <p className="font-spectral md:text-[58px] text-[30px] font-extrabold leading-1 my-3">
            Most Fastest Food <br />{" "}
            <span className="bg-[#ff492f] px-2 inline-block transform -rotate-6 mr-2">
              Delivery
            </span>
            Service
          </p>
          <p className="md:text-[20px] text-[16px] my-5 text-[#c9c9c9] md:text-left text-center">
            Enter your location to get your nearest restaurants or get deliver
            foods & enjoy.Happy foodie life
          </p>
          <div className="flex flex-row items-center justify-between my-3 bg-white w-max px-2 py-1 rounded-3xl">
            <img src="/assets/location.svg" alt="location" width="30px" />
            <input
              type="search"
              name="location"
              placeholder="Los Angeles, USA"
              className="ml-2"
            />
            <button className="bg-[#ff492f] py-2 px-3 rounded-3xl md:ml-10">
              Find Foods
            </button>
          </div>
        </div>
        <div className="w-[90%] mx-auto">
          <img src="/assets/hero-img.png" alt="hero-img" />
        </div>
      </div>
    </>
  );
};

export default Hero;
