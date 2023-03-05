import React, { useState } from "react";

import "../styles.css";
import ProjectCard from "./sub-components/ProjectCard";
import logo1 from '../assets/images/logo1.webp';
import _audio1 from '../assets/sound/Predefamille.ogg';
import logo2 from '../assets/images/logo2.png';
import _audio2 from '../assets/sound/PandaRouxCCC.ogg';
import logo3 from '../assets/images/logo3.jpg';
import _audio3 from '../assets/sound/SniperTF2CCC.ogg';
import logo4 from '../assets/images/logo4.webp';
import _audio4 from '../assets/sound/DrBoeufnot.ogg';
import logo5 from '../assets/images/logo5.jpg';
import _audio5 from '../assets/sound/Oz.mp3';
import logo6 from '../assets/images/logo6.png';
import _audio6 from '../assets/sound/CommissaireMartialChevalier.ogg';
import logo7 from '../assets/images/logo7.png';
import _audio7 from '../assets/sound/Khan.mp3';
import logo8 from '../assets/images/logo8.png';
import _audio8 from '../assets/sound/CliffsideYannis.mp3';

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
        <h1 className="text-center text-4xl font-bold py-6">Extrait Audio</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
          Voici plusieurs extraits audio de moi interprétant des personages dans le cadre de candidature de project sur le site <a style={{ color: '#02A6FF' }} href="https://www.castingcall.club/craniumfull" className="active"> castingcall</a>.
        </p>
        {projects.map((item, i) => <ProjectCard key={i} item={item} />)}
      </div>
    </>
  );
}

export default Audio;
