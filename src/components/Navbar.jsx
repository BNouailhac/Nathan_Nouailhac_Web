import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "../styles.css";

function Navbar() {
  const [durum, setDurum] = useState(true);
  console.log(durum);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.querySelector(".navbarcon").style.backgroundColor = "#171717";
    } else {
      document.querySelector(".navbarcon").style.backgroundColor =
        "rgba(0, 0, 0, 0)";
    }
  }

  return (
    <>
      <div className="navbarcon flex justify-between items-center px-20 py-6 bg-transparent z-40 text-white lg:px-6 fixed w-full">
        <h1 className="text-4xl  font-bold">Craniumfull</h1>

        <nav
          className={` flex justify-center items-center gap-x-10 ${
            durum && "lg:hidden"
          } lg:fixed lg:top-0 -z-20  lg:flex-col lg:w-full lg:bg-[#171717]  lg:h-[450px] lg:left-0 h-full lg:items-start  lg:pl-6  cursor-pointer lg:pt-20`}
        >
          <ul className="flex gap-10 text-2xl mr-4 lg:flex-col lg:gap-6 ">
            
            <li className="bla nav-icon">
              {/* <i className="fa-solid fa-microphone resp-icon"></i> */}
              <AnchorLink href="#skills">Compétences</AnchorLink>
            </li>
            <li className="bla nav-icon">
              {/* <i className="fa-brands fa-youtube resp-icon"></i> */}
              <AnchorLink href="#projects">Vidéo</AnchorLink>
            </li>
            <li className="bla nav-icon">
              {/* <i className="fa-solid fa-headphones resp-icon"></i> */}
              <AnchorLink href="#audio">Audio</AnchorLink>
            </li>
          </ul>

          <div className="icon text-lg flex gap-4  lg:gap-8 lg:my-10">
            
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
          <div className="btn">
            <AnchorLink href="#contact">
            <button className="border-[1px] border-white border-solid py-2 px-4 hover:bg-white hover:text-black font-bold rounded-full">
  Me contacter
</button>
            </AnchorLink>
          </div>
        </nav>
        <i
          onClick={(e) => setDurum(!durum)}
          className="fa-solid fa-bars hidden lg:block text-2xl cursor-pointer"
        ></i>
      </div>
    </>
  );
}

export default Navbar;
