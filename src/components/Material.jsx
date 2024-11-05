import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import img from "../assets/images/tool1.webp";
import img2 from "../assets/images/tool2.webp";
import img3 from "../assets/images/tool3.webp";

function Material() {
  return (
    <>
      {/* <div id="Material" style={{backgroundImage: `url(${bg})`}} className="wrapper h-full bg-no-repeat bg-center bg-cover p-16 lg:p-4 py-10"> */}
        <div style={{ margin: "auto" }} className="Material-wrapper text-center text-white bg-[#171717] max-w-[1400px] p-10 rounded-[50px] lg:p-2">
          <h1 className="text-4xl ">Mon matériel</h1>
          <div className="grid grid-cols-3 p-8 gap-6 tl:grid-cols-1 ">
            <div className="py-2">
              <img src={img} style={{ width: "5rem" }} alt="" className="text-center mx-auto" />
              <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
                - Microphone Audio-Technica AT2020
              </p>
            </div>
            
            <div className="py-2">
              <img src={img2} style={{ width: "8rem" }} alt="" className="text-center mx-auto" />
              <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
                - Audient EVO 4 USB Audio Interface
              </p>
            </div>
            
            <div className="py-2">
              <img src={img3} style={{ width: "5rem" }} alt="" className="text-center mx-auto" />
              <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
                - DBX 286 S
              </p>
            </div>
          </div>
          <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
            Je dispose d'une salle insonorisée pour réaliser mes enregistrements, mais je peux également me déplacer vers le studio d’enregistrement de votre choix si nécessaire.
          </p>
        </div>
      {/* </div> */}
    </>
  );
}

export default Material;
