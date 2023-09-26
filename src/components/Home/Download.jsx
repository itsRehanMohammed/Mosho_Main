import React from "react";
import { useState, useEffect } from "react";

const Download = () => {
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
      <div className="grid md:grid-cols-2 grid-cols-1 items-center w-[90%] mx-auto mt-20">
        <div className="flex flex-col md:items-start items-center md:text-left text-center">
          <h1 className="md:text-[40px] text-[35px] font-bold leading-tight">
            Download Our Mobile App {!mobile && <br />} It's Very Simple & Easy
          </h1>
          <p className="text-[18px] my-4 text-[#999999]">
            Make online reservations, read restaurant reviews from{" "}
            {!mobile && <br />} diners, and earn points towards free
            meals.OpenTable {!mobile && <br />} is a real-time online
            reservation.
          </p>
          <div className="flex flex-row items-center mt-8">
            <button className="mr-3 text-[12px] flex flex-row items-center bg-[#ff492f] text-white md:px-6 px-3 md:py-3.5 py-2 rounded-[40px]">
              <img src="/assets/apple-logo.png" alt="apple" />
              <div className="flex flex-col items-start leading-tight md:mx-2">
                Download on the {!mobile && <br />}
                <span className="md:text-[16px]">App Store</span>
              </div>
            </button>
            <button className="text-[12px] flex flex-row items-center md:px-6 px-3 md:py-3.5 py-2 rounded-[40px] border">
              <img src="/assets/play-store.png" alt="play-store" width="40px" />
              <div className="flex flex-col items-start leading-tight mx-2">
                Get it from {!mobile && <br />}
                <span className="md:text-[16px] font-bold">Google Play</span>
              </div>
            </button>
          </div>
        </div>
        <div className="md:mt-0 mt-5">
          <img src="/assets/download-app.png" alt="download-app" />
        </div>
      </div>
    </>
  );
};

export default Download;
