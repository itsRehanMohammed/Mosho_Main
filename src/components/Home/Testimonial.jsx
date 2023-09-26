import React from "react";
import { useState, useEffect } from "react";

const Testimonial = () => {
  const [width, setWidth] = useState(null);

  let mobile = false;

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    if (width < 1000) {
      mobile = true;
    }
  }, []);

  return (
    <>
      <div className="bg-[#23222a] text-white md:h-[400px] mt-40 grid md:grid-cols-2 grid-cols-1 md:relative items-center">
        <div>
          <img
            src="/assets/testimonial.png"
            alt="testimonial"
            className="md:absolute md:bottom-0 md:-mt-8 -mt-16"
            width="480px"
          />
        </div>
        <div className="flex flex-col md:items-start items-center md:text-left text-center">
          <div className="my-10">
            <h1 className="text-[24px]">Jacob Jones</h1>
            <p className="text-[#c9c9c9] my-2">Freelance Product Designer</p>
            <span>⭐⭐⭐⭐</span>
          </div>
          <p className="text-[17px] md:text-left md:mx-0 mx-2">
            Best part is that you can order food online from your favourite{" "}
            {!mobile && <br />} restaurant with ease. You can get special
            discounts from {!mobile && <br />}
            restaurants. You can select a range of menu easily.{" "}
          </p>
          <div className="my-10">
            <button className="mr-1 p-2 rounded-full hover:bg-[#ff492f] bg-[#343333]">
              <img
                width={20}
                height={20}
                src="/assets/previous-white.png"
                alt="previous"
              />
            </button>
            <button className="mx-3 p-2 rounded-full hover:bg-[#ff492f] bg-[#343333]">
              <img
                width={20}
                height={20}
                src="/assets/next-white.png"
                alt="next"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
