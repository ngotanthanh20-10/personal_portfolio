import React from "react";
import { BsFacebook, BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://facebook.com/">
        <BsFacebook />
      </a>
      <a href="https://github.com/">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
