import React from "react";

const TeamMember = ({ member }) => {
  return (
    <div className="bg-white shadow-2xl rounded-lg overflow-hidden flex flex-col items-center text-center">
      <img src={member.imgSrc} alt={member.name} width="200px" height="200px" className="object-cover rounded-full border" />
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{member.name}</h3>
        <p className="text-gray-700 text-base mb-2">
          {member.position} <span> {member.location && member.location} </span>{" "}
        </p>
        <div className="flex justify-center space-x-4">
          <a href={member.social.instagram} target="_blank" rel="noreferrer">
            {/* <i className="fab fa-instagram text-2xl text-pink-600"></i> */}
            instagram
          </a>
          <a href={member.social.facebook} target="_blank" rel="noreferrer">
            {/* <i className="fab fa-facebook text-2xl text-blue-600"></i> */}
            facebook
          </a>
          <a href={member.social.twitter} target="_blank" rel="noreferrer">
            {/* <i className="fab fa-twitter text-2xl text-blue-400"></i> */}
            twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
