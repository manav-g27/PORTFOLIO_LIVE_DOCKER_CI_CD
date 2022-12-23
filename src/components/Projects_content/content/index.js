import React from 'react'
import './index.css'
const ProjectContainer = ({title,imageurl,gitlink}) => {
  return (
    <div id='projmain'>
        <div>
            <h1>{title}</h1>
        </div>
        <div id='projimg'>
            <img src={require(`${imageurl}`)} alt=''></img>
        </div>
        <br></br>
        <div id='btn-set-proj'><a href={gitlink}><button>GitHub</button></a></div>
    </div>
  )
}

export default ProjectContainer