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
import bg from "../assets/images/banner-bg.webp";
import Material from "./Material";

function Skills() {
  return (
    <>
      <div id="skills" style={{backgroundImage: `url(${bg})`}} className="wrapper h-full bg-no-repeat bg-center bg-cover p-16 lg:p-4 py-10">
        <div className="skills-wrapper text-center text-white bg-[#171717]  p-10 rounded-[50px] lg:p-2">
          <h1 className="text-4xl ">Mes compétences</h1>
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
        </div>
        <br></br>
        <Material></Material>
      </div>
    </>
  );
}

export default Skills;