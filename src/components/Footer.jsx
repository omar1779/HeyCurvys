import React from "react";
import { BsInstagram, BsWhatsapp, BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <div className="bg-violet-900 h-14 md:h-28 flex justify-around items-center">
      <a href="https://instagram.com/_heycurvys?igshid=YmMyMTA2M2Y=" target="blank">
        <BsInstagram className="text-white h-7 w-7  md:h-12 md:w-12 lg:h-10 lg:w-10 animate-pulse" />
      </a>
      <a href="#">
        <BsWhatsapp className="text-white h-7 w-7 md:h-12 md:w-12 lg:h-10 lg:w-10 animate-pulse" />
      </a>
      <a href="#">
        <BsGithub className="text-white h-7 w-7 md:h-12 md:w-12 lg:h-10 lg:w-10 animate-pulse" />
      </a>
    </div>
  );
}

export default Footer;
