import React from "react";

function Footer() {
  return (
    <>
      <div className="footer bg-[#171717]">
        <div className="wrap flex justify-between items-center px-12 text-white font-bold py-6 tl:px-4 tl:py-4 ">
          <h1 className="text-3xl  font-bold "><a href="https://twitter.com/Craniumfull"> Craniumfull</a></h1>
          <div className="flex gap-4 cursor-pointer ">
            <a href="https://twitter.com/Craniumfull" target="_blank">
              <i className="fa-brands fa-twitter border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
            <a href="https://www.tiktok.com/@craniumfull_real" target="_blank">
              <i className="fa-brands fa-tiktok border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
            <a href="https://www.linkedin.com/in/nathan-nouailhac-08a680175/" target="_blank">
              <i className="fa-brands fa-linkedin border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
            <a href="https://www.twitch.tv/craniumfull" target="_blank">
              <i className="fa-brands fa-twitch border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
