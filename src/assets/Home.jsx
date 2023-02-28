import React from 'react'
import Header from "../components/Header"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Projects from "../components/Projects"
import Audio from "../components/Audio"
import Skills from "../components/Skills"

function Home() {
  return (
    <>
     <Header/> 
     <Skills/> 
     <Projects />
     <Audio />
     <Contact/>
     <Footer/>
    </>
  )
}

export default Home