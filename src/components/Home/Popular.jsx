import React from "react";
import data from "../../data/popularFoods.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay, Pagination } from "swiper";
import { useState, useEffect, useRef } from "react";

const Popular = ({ MenuDB }) => {
  const [nextWhite, setNextWhite] = useState(false);
  const [prevWhite, setPrevWhite] = useState(false);

  let mobile = false;

  const swiperRef = useRef();

  const [width, setWidth] = useState(null);

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
      <div className="w-[95%] mx-auto my-20">
        <div className="flex md:flex-row flex-col justify-between items-center">
          <h1 className="font-spectral md:text-[45px] text-[30px] font-extrabold">
            Most Popular Foods People Ordered
          </h1>
          <div className="flex flex-row items-center md:mt-0 mt-10">
            <button
              className={`mx-3 p-2 rounded-full ${
                prevWhite ? "bg-[#ff492f] text-white" : ""
              }`}
              onMouseEnter={() => setPrevWhite(true)}
              onMouseLeave={() => setPrevWhite(false)}
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <img
                width={20}
                height={20}
                src={
                  prevWhite
                    ? "/assets/previous-white.png"
                    : "/assets/previous.png"
                }
                alt="previous"
              />
            </button>
            <button
              className={`mx-3 p-2 rounded-full ${
                nextWhite ? "bg-[#ff492f] text-white" : ""
              }`}
              onMouseEnter={() => setNextWhite(true)}
              onMouseLeave={() => setNextWhite(false)}
              onClick={() => swiperRef.current?.slideNext()}
            >
              <img
                width={20}
                height={20}
                src={nextWhite ? "/assets/next-white.png" : "/assets/next.png"}
                alt="next"
              />
            </button>
          </div>
        </div>
        <div className="w-[95%] mx-auto md:mt-10">
          <Swiper
            slidesPerView={mobile ? 1 : 4}
            spaceBetween={mobile ? 50 : 300}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Autoplay, Pagination]}
            className="mySwiper"
          >
            {MenuDB.length > 0 &&
              MenuDB.map((item, index) => (
                <SwiperSlide key={item._id}>
                  <div className="flex flex-col rounded-xl items-start shadow-lg w-[320px] h-[350px] p-5 my-4">
                    <a href={`https://app.themosho.com/menu/${item._id}`}>
                      <div className="relative">
                        <img
                          src={item.image}
                          alt="biryani"
                          className="rounded-xl"
                        />
                        <div className="absolute bottom-2 left-1 flex items-center">
                          <img
                            src={"./assets/logo.png"}
                            alt="restaurant-logo"
                            className="w-8 rounded-full"
                          />
                          <h1 className="ml-2 text-white font-extrabold font-spectral text-lg">
                            Mosho
                          </h1>
                        </div>
                      </div>
                    </a>
                    <h1 className="text-[20px] font-semibold mt-1">
                      {item.product_name}
                    </h1>
                    <p className="text-[#999999] mt-1">⭐ 4.3</p>
                    <p className="flex flex-row items-center text-[#999999] mt-1">
                      <img
                        src="/assets/location.svg"
                        alt="location"
                        width="30px"
                      />
                      📍 Vashi, Navi Mumbai
                    </p>
                    <p className="text-[11px] text-[#999999] mt-1">
                      <span className="text-[20px] font-bold text-black">
                        {item.Rate}
                      </span>{" "}
                      per person •
                      <span className="text-[20px] font-bold text-black">
                        {item.Time}
                      </span>{" "}
                      min •
                      <span className="text-[20px] font-bold text-black">
                        {item.DelCharge}{" "}
                      </span>{" "}
                      delivery charge
                    </p>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Popular;
