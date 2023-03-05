import React, { useState } from "react";

import "../styles.css";
import ProjectCard from "./sub-components/ProjectCard";
import logo1 from '../assets/images/logo1.webp';
import _audio1 from '../assets/sound/Predefamille.ogg';
import logo2 from '../assets/images/logo2.webp';
import _audio2 from '../assets/sound/PandaRouxCCC.ogg';
import logo3 from '../assets/images/logo3.webp';
import _audio3 from '../assets/sound/SniperTF2CCC.ogg';
import logo4 from '../assets/images/logo4.webp';
import _audio4 from '../assets/sound/DrBoeufnot.ogg';
import logo5 from '../assets/images/logo5.webp';
import _audio5 from '../assets/sound/Oz.mp3';
import logo6 from '../assets/images/logo6.webp';
import _audio6 from '../assets/sound/CommissaireMartialChevalier.ogg';
import logo7 from '../assets/images/logo7.webp';
import _audio7 from '../assets/sound/Khan.mp3';
import logo8 from '../assets/images/logo8.webp';
import _audio8 from '../assets/sound/CliffsideYannis.mp3';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Pagination } from "swiper";

function Audio() {

  const projects = [
    {
      id: 1,
      audio: _audio1,
      logo: logo1,
      description: "'Helluva Boss Fandub FR // Episode 2' : Un père de famille",
    },
    {
      id: 2,
      audio: _audio2,
      logo: logo2,
      description: "'GUARDIAN TALES Fandub VF' : Panda roux, du Trio du Panda Fou",
    },
    {
      id: 3,
      audio: _audio3,
      logo: logo3,
      description: "'Meet the.. TF2 [Fandub FR]' : Sniper",
    },
    {
      id: 4,
      audio: _audio4,
      logo: logo4,
      description: "'Épithète Effacée' : Dr.Boeufnoît",
    },
    {
      id: 5,
      audio: _audio5,
      logo: logo5,
      description: "'Genshin Impact FR' : Oz",
    },
    {
      id: 6,
      audio: _audio6,
      logo: logo6,
      description: "'L'Affaire de la Rose Morte' : Commissaire Martial Chevalier",
    },
    {
      id: 7,
      audio: _audio7,
      logo: logo7,
      description: "'MURDER DRONES [PILOT] - FR' : Khan",
    },
    {
      id: 8,
      audio: _audio8,
      logo: logo8,
      description: "'- CliffSide FR -' : Yannis",
    },
  ];

  return (
    <>
      <div id="audio" style={{ paddingTop: "0rem" }} className="projects  bg-[#171717] text-white py-10">
        <h1 className="text-center text-4xl font-bold py-6">Extraits Audio</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
          Ci-dessous plusieurs extraits audio, où j'interprète des personnages dans le cadre de candidature de projets sur le site <a style={{ color: '#02A6FF' }} href="https://www.castingcall.club/craniumfull" className="active"> castingcall</a>.
        </p>
        <div className="box flex justify-between items-center bg-[#171717] my-6">
          <Swiper
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation, Pagination]}
          >
            <SwiperSlide className=" bg-[#171717]">
              {" "}
              <ProjectCard key={0} item={projects[0]} />
            </SwiperSlide>
            <SwiperSlide className=" bg-[#171717]">
              {" "}
              <ProjectCard key={1} item={projects[1]} />
            </SwiperSlide>
            <SwiperSlide className=" bg-[#171717]">
              {" "}
              <ProjectCard key={2} item={projects[2]} />
            </SwiperSlide>
            <SwiperSlide className=" bg-[#171717]">
              {" "}
              <ProjectCard key={3} item={projects[3]} />
            </SwiperSlide>
            <SwiperSlide className=" bg-[#171717]">
              {" "}
              <ProjectCard key={4} item={projects[4]} />
            </SwiperSlide>
            <SwiperSlide className=" bg-[#171717]">
              {" "}
              <ProjectCard key={5} item={projects[5]} />
            </SwiperSlide>
            <SwiperSlide className=" bg-[#171717]">
              {" "}
              <ProjectCard key={6} item={projects[6]} />
            </SwiperSlide>
            <SwiperSlide className=" bg-[#171717]">
              {" "}
              <ProjectCard key={7} item={projects[7]} />
            </SwiperSlide>
          </Swiper>
          
        </div>
      </div>
    </>
  );
}

export default Audio;
