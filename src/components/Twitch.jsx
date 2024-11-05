import React, { useState } from "react";

import "../styles.css";

function Twitch() {

  return (
    <>
      <div id="twitch"  className="projects  bg-[#171717] text-white py-10">
        <h1 className="text-center text-4xl font-bold">Twitch</h1>
        <p className="text-center max-w-[1100px] lg:px-6 py-6 mx-auto text-[#939191]">
            Je suis également très actif sur Twitch !
        </p>
        <div className="twitch-responsive">
          <iframe style={{margin: "auto"}}
            src={`https://player.twitch.tv/?channel=craniumfull&parent=${window.location.hostname}`}
            allowFullScreen={true}>
          </iframe>
        </div>
      </div>
    </>
  );
}

export default Twitch;
