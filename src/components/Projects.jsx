import React, { useState } from "react";
import YoutubeEmbed from "./sub-components/YoutubeEmbed";

import "../styles.css";

function Projects() {

  const projects = [
    {
      id: 1,
      video: "pAC47sLG0Jo",
    },
    {
      id: 2,
      video: "mImFz8mkaHo",
    },
    {
      id: 3,
      video: "HPJXHC09m0A",
    },
    {
      id: 4,
      video: "jnY76WisEK8",
    },
    {
      id: 5,
      video: "uZo37S98s5w",
    },
    {
      id: 6,
      video: "zHvt0TXAIEg",
    },
  ];

  return (
    <>
      <div id="projects" className="projects  bg-[#171717] text-white py-10">
        <h1 className="text-center text-4xl font-bold py-6">Projets vidéo</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
            Ces dernières années, j'ai eu l'opportunité de me perfectionner dans le domaine du doublage en participant à de nombreux projets indépendants.
        </p>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">Voici quelques-uns de ces projets :</p>

        <div className="grid grid-cols-3 p-10 gap-8 lg:grid-cols-2 tl:grid-cols-1 ">
          {projects.map((item, i) =>
            <div key={i} className="justify-center relative overflow-hidden video-list">
              <YoutubeEmbed embedId={item.video} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Projects;
