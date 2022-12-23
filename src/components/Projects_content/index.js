import React from 'react'
import ProjectContainer from './content'
import './index.css'
import {data} from './content/data'
const ProjectsC = () => {
  return (
    <div id='prj'>
      {data.map((e)=><ProjectContainer {...e}></ProjectContainer>)}
    </div>
  )
}

export default ProjectsC