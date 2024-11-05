import React from 'react'

function ProjectCard({item}) {
  return (
    <>
      <div className="respAudio justify-center overflow-hidden" style={{ marginTop: "30px" }}>
        <img className='logoAudio border-[2px] border-white' style={{ width: "6rem", marginRight: "2rem" }} src={item.logo} alt="Logo" />
        <div style={{ maxWidth: "19.7rem"}}>
          <p className="text-white text-max" style={{ width: "18rem", textAlign: "center" }}>{item.description}</p>
          <twitch src={item.twitch} style={{ marginLeft: "15px", marginTop: "1rem" }} controls />
        </div>
      </div>
    </>
  )
}

export default ProjectCard