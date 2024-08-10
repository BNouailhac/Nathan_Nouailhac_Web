import React from "react";
import img from "../assets/images/contact.gif";
import "../styles.css";
import xLogo from "../assets/social/logo-x.svg";
import discordLogo from "../assets/social/logo-discord.svg";
import emailLogo from "../assets/social/logo-email.svg";

function Contact() {
  return (
    <>
      <div id="contact" style={{ backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }} className="contact bg-[linear-gradient(90deg,#b004b0,#38097a);] w-full">
        <div className="wrapper flex justify-center py-10 gap-52 lg:py-12">
            <div className="box-contact flex">
                    <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", background: "linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1))" }} className="left-column">
                        <p style={{ fontSize: "3rem" }}>Me contacter</p>
                        <p style={{ fontSize: "1rem" }}>Contactez moi via mes réseaux sociaux ou par email.</p>
                    </div>
                    <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", background: "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1))" }} className="right-column">
                        <ul className="flex flex-col space-y-2">
                            <li className="flex items-center">
                                <a href="mailto:craniumfull@hotmail.fr" target="_blank" className="flex items-center">
                                    <img src={emailLogo} alt="Logo email" className="logo-email" />
                                    <span className="ml-2">craniumfull@hotmail.fr</span>
                                </a>
                            </li>
                            <li className="flex items-center">
                                <a href="https://discord.com/users/Craniumfull#9815" target="_blank" className="flex items-center">
                                    <img src={discordLogo} alt="Logo discord" className="logo-discord" />
                                    <span className="ml-2">Craniumfull#9815</span>
                                </a>
                            </li>
                            <li className="flex items-center">
                                <a href="https://twitter.com/Craniumfull" target="_blank" className="flex items-center">
                                    <img src={xLogo} alt="Logo X" className="logo-x" />
                                    <span className="ml-2">@Craniumfull</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

          {/* <div className="content-box">
            <h1 className="text-white text-3xl bg-[#171717] p-1.5" style={{ textAlign: "center", borderRadius: "30px", maxWidth: "18.5rem", margin: "auto" }}>Me contacter</h1>
            <div className="grid grid-cols-3 p-8 gap-6 tl:grid-cols-1 ">
              <div style={{ textAlign: "center", borderRadius: "30px" }} className="bg-[#171717] btn py-4 px-3">
                <p className="text-white text-max font-bold" style={{ marginBottom: "10px", fontSize: "15.5px" }}>X</p>
                <a href="https://twitter.com/Craniumfull" target="_blank">
                  <button style={{ fontSize: "15px", color: "#737373", width: "11.5rem", height: "6rem", borderRadius: "10px" }} className="flex flex-col items-center border border-[#737373] bg-[#171717] text-white hover:bg-white hover:text-black transition-colors duration-300 rounded-lg p-4 w-44 h-24">     
                    {/* <i style={{ fontSize: "30px", marginBottom: "5px" }} class="fab fa-x-twitter"></i><img src={xLogo} alt="Logo X" className="w-8 h-8 mb-1"></img>
                    <br></br>
                    @Craniumfull
                  </button>
                </a>
              </div>
              <div style={{ textAlign: "center", borderRadius: "30px" }} className="bg-[#171717] btn py-4 px-3">
                <p className="text-white text-max font-bold" style={{ marginBottom: "10px", fontSize: "15.5px" }}>Discord</p>
                  <button style={{ fontSize: "15px", color: "#737373", width: "11.5rem", height: "6rem", borderRadius: "10px" }} className="border-[1px]  border-solid hover:bg-white hover:text-black font-bold">
                    <i style={{ fontSize: "30px", marginBottom: "5px" }} className="fa-brands fa-discord"></i>
                    <br></br>
                    Craniumfull#9815
                  </button>
              </div>
              <div style={{ textAlign: "center", borderRadius: "30px" }} className="bg-[#171717] btn py-4 px-3">
                <p className="text-white text-max font-bold" style={{ marginBottom: "10px", fontSize: "15.5px" }}>e-mail</p>
                <button onClick={() => window.location = 'mailto:craniumfull@hotmail.fr'} style={{ fontSize: "15px", color: "#737373", width: "13rem", height: "6rem", borderRadius: "10px" }} className="border-[1px]  border-solid hover:bg-white hover:text-black font-bold">
                  <i style={{ fontSize: "30px", marginBottom: "5px" }} className="fa-solid fa-envelope"></i>
                  <br></br>
                  craniumfull@hotmail.fr
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Contact;