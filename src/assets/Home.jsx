import { Suspense, lazy } from 'react';
import React from 'react'
import Header from "../components/Header"
const Contact = React.lazy(() => import("../components/Contact"));
const Footer = React.lazy(() => import("../components/Footer"));
const Projects = React.lazy(() => import("../components/Projects"));
const Audio = React.lazy(() => import("../components/Audio"));
const Skills = React.lazy(() => import("../components/Skills"));

function Home() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Skills />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Projects />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Audio />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Contact />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  )
}

export default Home