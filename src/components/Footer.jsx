import React from "react";

function Footer() {
  return (
    <>
      <div className="footer bg-[#171717]">
        <div className="wrap flex justify-between items-center px-12 text-white font-bold py-6 tl:px-4 tl:py-4 ">
          <h1 className="text-2xl  font-bold">Craniumfull</h1>
          <div style={{ marginRight: "2.5rem" }} className="flex gap-2 cursor-pointer ">
            <a href="https://www.linkedin.com/in/nathan-nouailhac-08a680175/" target="_blank">
              <i className="fa-brands fa-linkedin border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
            <a href="https://www.tiktok.com/@craniumfull_real" target="_blank">
              <i className="fa-brands fa-tiktok border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
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
