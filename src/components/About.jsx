import React from "react";
import {
  AiFillInstagram,
  AiOutlineWhatsApp,
  AiFillFacebook,
} from "react-icons/ai";
function about() {
  return (
    <div className="h-full w-full flex flex-col p-10 items-center justify-evenly">
      <div>
        <h1 className="font-thin">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, hic
          facere cum voluptas soluta ipsam explicabo porro voluptates
          recusandae,
        </h1>
      </div>
      <div className="flex flex-col justify-evenly lg:flex-row">
        <div className="flex justify-around items-center flex-col m-5">
          <AiFillInstagram className="h-10 w-10 text-violet-900 animate-bounce cursor-pointer" />
          <a href="https://instagram.com/_heycurvys?igshid=ZmRlMzRkMDU=" target="_blank" className="font-thin">Instagram @HeyCurvys</a>
        </div>
        <div className="flex justify-around items-center flex-col m-5">
          <AiFillFacebook className="h-10 w-10 text-violet-900 animate-bounce" />
          <a href="https://www.facebook.com/profile.php?id=100086965663930&mibextid=ZbWKwL" target="_blank" className="font-thin">Facebook</a>
        </div>
        <div className="flex justify-around items-center flex-col m-5">
          <AiOutlineWhatsApp className="h-10 w-10 text-violet-900 animate-bounce cursor-pointer" />
          <a href="https://api.whatsapp.com/message/545IDVRTTIV6D1?autoload=1&app_absent=0" target="_blank" className="font-thin">Whatsapp +507 6000-0000</a>
        </div>
      </div>
    </div>
  );
}

export default about;
