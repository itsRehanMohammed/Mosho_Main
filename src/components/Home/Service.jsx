import React from "react";
import { useState, useEffect } from "react";

const Service = () => {
  const [width, setWidth] = useState(null);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    if (width < 1000) {
      setMobile(true);
    }
  }, []);

  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 w-[95%] mx-auto my-40">
        <div>
          <img src="/assets/why-img.png" alt="why-us" width="500px" />
        </div>
        <div className="flex flex-col md:items-start items-center justify-evenly md:w-[82%] md:mx-auto mx-2">
          <h1 className="md:text-[40px] text-[30px] leading-tight font-bold">
            Why You Use Our Food <br /> Delivery Service?
          </h1>
          <p className="md:text-[18px] text-[14px] text-[#727272] md:-mt-3 my-3">
            We are most fastest and favourite food delivery service{" "}
            {!mobile && <br />} all over the world. Search for your favourite
            food or {!mobile && <br />} restaurant in your area.
          </p>
          <div className="flex flex-col items-start font-semibold">
            <div className="flex flex-row items-center my-2 w-full p-2 shadow rounded-lg">
              <img src="/assets/reviews.png" alt="reviews" width="30px" />
              <p className="mx-2">98.97% positive reviews</p>
            </div>
            <div className="flex flex-row items-center my-2 w-full p-2 shadow rounded-lg">
              <img src="/assets/food.png" alt="reviews" width="30px" />
              <p className="mx-2">Quality foods with discounts</p>
            </div>
            <div className="flex flex-row items-center my-2 w-full p-2 shadow rounded-lg">
              <img src="/assets/stopwatch.png" alt="reviews" width="30px" />
              <p className="mx-2">2x Faster than others delivery service</p>
            </div>
          </div>
          <button className="bg-[#ff492f] text-white px-5 py-3 text-[15px] rounded-3xl md:mt-0 mt-5">
            Order Your Food Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Service;
