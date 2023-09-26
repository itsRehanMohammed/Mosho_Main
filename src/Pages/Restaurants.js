import React from "react";
import Footer from "../components/Home/Footer";
import Navbar from "../components/Home/Navbar";

const Restaurants = () => {
  const branches = [
    {
      id: 1,
      name: "The Mosho",
      phone: "88283 30006",
      hours: "11am - 1am",
      services: "Dine-in · Drive-through · No-contact delivery",
      image: "/assets/restaurant_3.jpg",
      address: " MOSHO, Shop 21, Mini Market, Sector 10, Vashi, Navi Mumbai, Maharashtra 400703",
      location: "Vashi",
    },
    {
      id: 4,
      name: "The Mosho",
      phone: "88283 30006",
      hours: "11am - 1am",
      services: "Dine-in · Drive-through · No-contact delivery",
      image: "/assets/restaurant_2.jpg",
      address: "Airoli mindspeace west Thane - Belapur Rd, MIDC INDL Area, Airoli, Navi Mumbai, Maharashtra 400708",
      location: "Airoli",
    },
    {
      id: 2,
      name: "The Mosho",
      phone: "88283 30006",
      hours: "11am - 1am",
      services: "Dine-in · Drive-through · No-contact delivery",
      image: "/assets/restaurant_2.jpg",
      address: " MOSHO, Shop 21, Mini Market, Sector 10, Vashi, Navi Mumbai, Maharashtra 400703",
      location: "Vashi",
    },
    {
      id: 5,
      name: "The Mosho",
      phone: "88283 30006",
      hours: "11am - 1am",
      services: "Dine-in · Drive-through · No-contact delivery",
      image: "/assets/restaurant_3.jpg",
      address: "Shop no. A-6, Mukti Nagar, WT Marg, Chembur East, Nagesh Patilwadi, Chembur East, near Neeldurg Durg Hotel, Mumbai, Maharashtra 400071 Chembur",
      location: "Chembur",
    },
    {
      id: 3,
      name: "The Mosho",
      phone: "88283 30006",
      hours: "11am - 1am",
      services: "Dine-in · Drive-through · No-contact delivery",
      image: "/assets/restaurant_3.jpg",
      address: " MOSHO, Shop 21, Mini Market, Sector 10, Vashi, Navi Mumbai, Maharashtra 400703",
      location: "Vashi",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-[#262626] text-white lg:px-10 px-2 py-5 text-center">
        <h1 className="font-bold lg:text-[60px] text-[40px] mb-5">Our Restaurants</h1>

        {branches.map((branch) => {
          return (
            <div key={branch.id} class="my-5 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xxl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={branch.image} alt="" />
              <div class="flex flex-col justify-between p-4 leading-normal text-start">
                <h5 class=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{branch.name}</h5>
                <p class="mb-1 font-bold tracking-tight text-gray-300 dark:text-gray">
                  {branch.location} <span> ⭐4.6 </span>{" "}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{branch.address}</p>
                <h6 class="mb-1 font-normal text-gray-700 dark:text-gray-100">
                  Services: <span class="mb-3 font-normal text-gray-700 dark:text-gray-400"> {branch.services} </span>
                </h6>
                <h6 class="mb-1 font-normal text-gray-700 dark:text-gray-100">
                  Hours: <span class="mb-3 font-normal text-gray-700 dark:text-gray-400"> {branch.hours} </span>
                </h6>
                <h6 class="mb-1 font-normal text-gray-700 dark:text-gray-100">
                  Call:{" "}
                  <a href={`tel:+91 ${branch.phone}`} class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {" "}
                    +91 {branch.phone}{" "}
                  </a>
                </h6>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Restaurants;
