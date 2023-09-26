import React from "react";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import TeamMember from "../components/AboutUs/TeamMember";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Mandar Zite",
      position: "Manager",
      location: "• Vashi",
      imgSrc: "/assets/team-member-1.png",
      social: {
        instagram: "https://www.instagram.com/",
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
      },
    },
    {
      name: "Ganesh Pralahad Jadhav",
      position: "Ceo and Founder",
      imgSrc: "/assets/team-member-2.png",
      social: {
        instagram: "https://www.instagram.com/",
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
      },
    },
    {
      name: "Pralhad Jadhav",
      position: "Manager",
      location: "• Vashi",
      imgSrc: "/assets/team-member-3.png",
      social: {
        instagram: "https://www.instagram.com/",
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
      },
    },
    {
      name: "Momien Khan",
      position: "Manager",
      location: "• Vashi",
      imgSrc: "/assets/team-member-3.png",
      social: {
        instagram: "https://www.instagram.com/",
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
      },
    },
    {
      name: "Mr.Anna",
      position: "Manager",
      location: "• Vashi",
      imgSrc: "/assets/team-member-1.png",
      social: {
        instagram: "https://www.instagram.com/",
        facebook: "https://www.facebook.com/",
        twitter: "https://twitter.com/",
      },
    },
  ];

  return (
    <>
      <Navbar />

      <div className="bg-[#262626] text-white px-10 py-5 text-center">
        <h1 className="font-bold text-[60px] mb-5">About Us</h1>
        <p className="text-[20px] mb-5">At The Mosho, we are passionate about serving delicious food that brings people together. Our chefs use only the freshest and highest-quality ingredients to create meals that satisfy all your cravings.</p>
        <p className="text-[20px] mb-5">
          We believe that food should be more than just fuel for the body - it should be a source of joy and connection. That's why we offer a range of dishes to suit all tastes and dietary needs, from classic comfort foods to innovative vegan and gluten-free options.
        </p>
        <p className="text-[20px] mb-5">Our commitment to excellence extends beyond our menu. We are dedicated to providing exceptional customer service and creating a welcoming atmosphere where everyone feels at home.</p>
        <p className="text-[20px] mb-5">Whether you're dining in or ordering takeout, we want to make your experience with us unforgettable. Thank you for choosing The Mosho - we can't wait to serve you!</p>
      </div>

      <div className="bg-[#262626] flex  py-10 grid grid-cols-1 sm:grid-cols-2  gap-10">
        <div className="bg-[#262626] text-white px-10  text-center">
          <h1 className="font-bold text-[60px] mb-5">Our Mision</h1>
          <p className="text-[20px] mb-5">Our mission at MOSHO is to bring the unique and traditional taste of Darjeeling to Mumbai and beyond, by offering a wide variety of veg and non-veg momos and shawarmas that are authentic, delicious and finger-licking.</p>
          <p className="text-[20px] mb-5">We are committed to maintaining high standards of quality and authenticity, offering lots of variety, including platters of steam and fry, tandoori and kurkure momos.</p>
          <p className="text-[20px] mb-5">We aim to be the best food brand in town, and through our franchises, expand our reach to more cities in India.</p>
          <p className="text-[20px] mb-5">We are dedicated to delivering our food quickly and efficiently, while also being available on online platforms for easy access to our customers.</p>
          <p className="text-[20px] mb-5">Our goal is to provide our customers with the best food and service, and through this, achieve long-term growth and success.</p>
        </div>
        <div className="bg-[#262626] text-white  px-10 text-center">
          <h1 className="font-bold text-[60px] mb-5">Our Vision</h1>
          <p className="text-[20px] mb-5"> Our vision at MOSHO is to become a leading fast-food brand in Mumbai and India, known for our unique and authentic flavors and variety of momos and shawarmas.</p>
          <p className="text-[20px] mb-5">We aim to expand our reach through our franchises and offer our food to more people across the country.</p>
          <p className="text-[20px] mb-5">
            We aim to be the best food brand in town, and through our franchises, expand our reach to more cities in India.We envision becoming the go-to destination for all food lovers, providing them with a delightful and finger-licking experience every time they choose MOSHO.
          </p>
          <p className="text-[20px] mb-5">We are committed to maintaining the quality and authenticity of our food, while also being innovative and creative in our offerings.</p>
          <p className="text-[20px] mb-5">We strive to keep up with the trends and demands of our customers, and continue to be a popular and trusted brand in the food industry.</p>
        </div>
      </div>

      <div className="bg-white text-black px-10 py-20">
        <h2 className="font-bold text-[60px] text-center mb-5">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
      </div>
      <div className="bg-[#262626] text-white px-10 py-20 text-center">
        <h2 className="font-bold text-[60px]">Come find us at!</h2>
        <p className="text-[16px] mb-5">The Mosho is located in several cities across the country. Find the location nearest to you and come visit us!</p>
        <p className="text-[25px] my-10">Mosho, Shop 21, Mini Market, Sector 10, Vashi, Navi Mumbai</p>
        <div className="flex justify-center mt-5">
          <button className="bg-white text-gray-800 font-bold py-2 px-4 rounded-full">Find a Location</button>
        </div>
      </div>
      <div className="bg-white text-black px-10 py-5">
        <h2 className="font-bold text-[60px] mb-5 text-center">Connect with Us</h2>
        <p className="text-[30px] mb-5 text-center">Stay up-to-date on all the latest news and promotions from The Mosho by following us on social media.</p>
        <div className="flex flex-row justify-center items-center mb-5">
          <img src="/assets/facebook-icon.png" alt="facebook" className="border rounded-full w-[50px] bg-[#ff492f] cursor-pointer p-1.5 mx-1" />
          <img src="/assets/twitter-icon.png" alt="facebook" className="border rounded-full w-[50px] bg-[#ff492f] cursor-pointer p-1.5 mx-1" />
          <img src="/assets/instagram-icon.png" alt="facebook" className="border rounded-full w-[50px] bg-[#ff492f] cursor-pointer p-1.5 mx-1" />
          <img src="/assets/youtube-icon.png" alt="facebook" className="border rounded-full w-[50px] bg-[#ff492f] cursor-pointer p-1.5 mx-1" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
