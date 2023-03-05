import React from 'react'
import bg from "../assets/images/home.gif"
import nathan from '../assets/images/nathan.png';
import Navbar from './Navbar'
import "../styles.css"
import YoutubeEmbed from "./sub-components/YoutubeEmbed";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Header() {

  return (
    <>
      <div id='home' style={{ backgroundImage: `url(${bg})` }} className=' bg-center bg-cover bg-no-repeat h-screen flex flex-col '>
        <Navbar />
        <div className="responsive-home wrapper justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
          <img className="nathanHome" src={nathan} alt="Une photo de Nathan Nouailhac" />;
          <div className="text-pres content lg:text-center">
            <h1 className='text-white text-4xl font-bold' style={{ marginTop: "25px" }}>Nathan Nouailhac <a style={{ color: '#02A6FF' }} href="https://twitter.com/Craniumfull"> @Craniumfull</a></h1>
            <p className='text-white text-max py-2.5 '>Comédien de doublage, Streamer régulier, ancien Chroniqueur et Casteur chez
              <a style={{ color: '#02A6FF' }} href="https://twitter.com/FrenchcraftWC3" className="active"> @FrenchcraftWC3</a>.
            </p>
            <p className='text-resp text-white text-max'>
              Ces dernières années, j'ai participé de nombreux projets indépendants de doublage : web-séries, jeux vidéos et court-métrages indé.
              <br />
              J'ai su m'adapter rapidement à ces projects très variées et suis à l'écoute de nouvelles propositions.
            </p>
            <div className="btn">
              <AnchorLink href="#contact">
                <button className=' border-2 border-[#b0aaaa] font-bold text-white bg-[linear-gradient(90deg,#b004b0,#38097a)] p-2 rounded-2xl'>Prenons contact <i className="fa-solid fa-arrow-right text-lg  p-[2px] "></i></button>
              </AnchorLink>
            </div>
          </div>
          
          <div className="text-pres content lg:text-right">
            <h1 className='text-white text-3xl font-bold video-demo'>Voici une démo :</h1>
            <YoutubeEmbed embedId="UGa8eReR_ns" />
            <div style={{ "textAlign": "center"}}>
              <p className='text-white py-3 '>En voir plus</p>
              <AnchorLink className="bla" href="#projects">
                <i className="fa-solid fa-arrow-down border-[1px] border-white p-2 rounded-[100%]" style={{ "backgroundColor": "white" }}></i>
              </AnchorLink>
            </div>
          </div>
          <AnchorLink className="button-home" href="#home">
            <i className="fa-solid fa-arrow-up border-[1px] border-white p-5 rounded-[100%]" style={{ "backgroundColor" : "white"}}></i>
          </AnchorLink>
        </div>
      </div>
    </>
  )
}

export default Header