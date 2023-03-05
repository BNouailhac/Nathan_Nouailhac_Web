import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import img from "../assets/images/tool1.webp";
import img2 from "../assets/images/tool2.webp";
import img3 from "../assets/images/tool3.webp";
import bg from "../assets/images/banner-bg.webp"

function Skills() {
  return (
    <>
      <div id="skills" style={{backgroundImage: `url(${bg})`}} className="wrapper h-full bg-no-repeat bg-center bg-cover p-16 lg:p-4 py-10">
        <div className="skills-wrapper text-center text-white bg-[#171717]  p-10 rounded-[50px] lg:p-2">
          <h1 className="text-4xl ">Compétence</h1>
          <p className="text-lg py-3 text-[#939191]">
            Mes expériences passées me permettent d'offrir divers services :
          </p>
          <div className="box flex justify-between  items-center bg-[#171717] my-6">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Navigation, Pagination]}
            >
              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className="bg-[#171717]">
                  <i style={{ fontSize: "2.5rem" }} className="fa-solid fa-video"></i>
                  <h1 className="font-bold text-2xl my-2">Organisation de projets</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-[#171717]">
                {" "}
                <div className="bg-[#171717]">
                  <i style={{ fontSize: "2.5rem" }} className="fa-solid fa-microphone-lines"></i>
                  <h1 className="font-bold text-2xl my-2">Doublage maison/studio</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-[#171717]">
                {" "}
                <div className="bg-[#171717]">
                  <i style={{ fontSize: "2.5rem" }} className="fa-sharp fa-solid fa-photo-film"></i>
                  <h1 className="font-bold text-2xl my-2">Montage vidéo</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-[#171717]">
                {" "}
                <div className="bg-[#171717]">
                  <i style={{ fontSize: "2.5rem" }} className="fa-solid fa-headset"></i>
                  <h1 className="font-bold text-2xl my-2">Casteur Esport</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-[#171717]">
                {" "}
                <div className="bg-[#171717]">
                  <i style={{ fontSize: "2.5rem" }} className="fa-solid fa-person-chalkboard"></i>
                  <h1 className="font-bold text-2xl my-2">Prestation évènement</h1>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <p className="text-lg py-3">
            Le matériel que j'utilise pour mes projets :
          </p>
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
            Je dispose d'une salle insonorisé pour réalisé mes enregistrements et je peux également me déplacer dans le studio d’enregistrement de votre choix si besoin.
          </p>
        </div>
      </div>
    </>
  );
}

export default Skills;
