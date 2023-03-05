import React from "react";
import img from "../assets/images/contact.gif";

function Contact() {
  return (
    <>
      <div id="contact" style={{ backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }} className="contact bg-[linear-gradient(90deg,#b004b0,#38097a);] w-full">
        <div className="wrapper flex justify-center py-10 gap-52 lg:py-12">
          <div className="content-box">
            <h1 className="text-white font-bold text-4xl bg-[#171717] p-1.5" style={{ textAlign: "center", borderRadius: "30px", maxWidth: "18.5rem", margin: "auto" }}>Contactez-moi :</h1>
            <div className="grid grid-cols-3 p-8 gap-6 tl:grid-cols-1 ">
              <div style={{ textAlign: "center", borderRadius: "30px" }} className="bg-[#171717] btn py-4 px-3">
                <p className="text-white text-max font-bold" style={{ marginBottom: "10px", fontSize: "15.5px" }}>Sur twitter :</p>
                <a href="https://twitter.com/Craniumfull" target="_blank">
                  <button style={{ fontSize: "15px", color: "#737373", width: "11.5rem", height: "6rem", borderRadius: "10px" }} className="border-[1px] border-white border-solid hover:bg-white hover:text-black font-bold">     
                    <i style={{ fontSize: "30px", marginBottom: "5px" }} className="fa-brands fa-twitter"></i>
                    <br></br>
                    @Craniumfull
                  </button>
                </a>
              </div>
              <div style={{ textAlign: "center", borderRadius: "30px" }} className="bg-[#171717] btn py-4 px-3">
                <p className="text-white text-max font-bold" style={{ marginBottom: "10px", fontSize: "15.5px" }}>Sur discord :</p>
                  <button style={{ fontSize: "15px", color: "#737373", width: "11.5rem", height: "6rem", borderRadius: "10px" }} className="border-[1px] border-white border-solid hover:bg-white hover:text-black font-bold">
                    <i style={{ fontSize: "30px", marginBottom: "5px" }} className="fa-brands fa-discord"></i>
                    <br></br>
                    Craniumfull#9815
                  </button>
              </div>
              <div style={{ textAlign: "center", borderRadius: "30px" }} className="bg-[#171717] btn py-4 px-3">
                <p className="text-white text-max font-bold" style={{ marginBottom: "10px", fontSize: "15.5px" }}>Sur mon adresse  email :</p>
                <button onClick={() => window.location = 'mailto:craniumfull@hotmail.fr'} style={{ fontSize: "15px", color: "#737373", width: "11.5rem", height: "6rem", borderRadius: "10px" }} className="border-[1px] border-white border-solid hover:bg-white hover:text-black font-bold">
                  <i style={{ fontSize: "30px", marginBottom: "5px" }} className="fa-solid fa-envelope"></i>
                  <br></br>
                  craniumfull@hotmail.fr
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
