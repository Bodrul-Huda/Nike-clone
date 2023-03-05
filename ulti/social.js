/* eslint-disable @next/next/no-img-element */

import React from "react";

const SocialLink = ({ icon }) => {
  return (
    <>
      <img className="w-10 bg-black" src={icon} alt="icon" />
    </>
  );
};

export default SocialLink;
