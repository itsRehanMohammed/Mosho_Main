import React from "react";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";

const ContactUs = () => {
  return (
    <>
      <Navbar />

      <div className="bg-[#262626] text-white lg:px-10 px-1 py-12 text-center ">
        <h1 className="font-bold text-[60px] mb-5">Contact Us</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div class="basis-1/4 block  max-w-sm mx-5 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Call Now</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              <span>
                {" "}
                <a href="tel:+91 80971 67143">+91 80971 67143 </a>{" "}
              </span>
            </p>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              <span>
                {" "}
                <a href="tel:+91 88283 30006">+91 88283 30006</a>{" "}
              </span>
            </p>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              <span>
                {" "}
                <a href="tel:+91 80978 45143">+91 80978 45143</a>{" "}
              </span>
            </p>
          </div>

          <div class="basis-1/4 mx-2  block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Business Hours</h5>
            <p class="font-normal  mb-1 text-gray-200 dark:text-white-400">
              Mon: <span className="text-gray-400"> 11:00 AM – 1:00 AM </span>
            </p>
            <p class="font-normal  mb-1 text-gray-200 dark:text-white-400">
              Tue: <span className="text-gray-400"> 11:00 AM – 1:00 AM </span>
            </p>
            <p class="font-normal  mb-1 text-gray-200 dark:text-white-400">
              Wed: <span className="text-gray-400"> 11:00 AM – 1:00 AM </span>
            </p>
            <p class="font-normal  mb-1 text-gray-200 dark:text-white-400">
              Thu: <span className="text-gray-400"> 11:00 AM – 1:00 AM </span>
            </p>
            <p class="font-normal  mb-1 text-gray-200 dark:text-white-400">
              Fri: <span className="text-gray-400"> 11:00 AM – 1:00 AM </span>
            </p>
            <p class="font-normal  mb-1 text-gray-200 dark:text-white-400">
              Sat: <span className="text-gray-400"> 11:00 AM – 1:00 AM </span>
            </p>
            <p class="font-normal  mb-1 text-gray-200 dark:text-white-400">
              Sun: <span className="text-gray-400"> 11:00 AM – 1:00 AM </span>
            </p>
          </div>

          <div class="basis-1/2 flex-1 mx-5 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Address</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400"> MOSHO, Shop 21,Mini Market Sector 10, Vashi Navi Mumbai, Maharashtra 400703 India</p>
          </div>
        </div>
      </div>

      <div className="bg-white text-black lg:px-10 px-2 py-5">
        <h2 className="font-bold lg:text-[60px] text-[40px] mb-5 text-center">Conect With Us</h2>

        <p className="text-xl mt-10">Have a question or comment? Fill out the form below and we'll get back to you as soon as possible.</p>
        <form className="mt-5">
          <div className="flex flex-col mb-5">
            <label htmlFor="name" className="text-xl mb-2">
              Name
            </label>
            <input type="text" id="name" name="name" className="border-2 border-gray-400 p-2 rounded-lg" required />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="email" className="text-xl mb-2">
              Email
            </label>
            <input type="email" id="email" name="email" className="border-2 border-gray-400 p-2 rounded-lg" required />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="message" className="text-xl mb-2">
              Message
            </label>
            <textarea id="message" name="message" rows="5" className="border-2 border-gray-400 p-2 rounded-lg" required></textarea>
          </div>
          <div className="flex justify-center">
            <button className="bg-white hover:bg-[#ff0202] hover:text-white text-black font-bold py-2 px-4 rounded-full">Send Message</button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
