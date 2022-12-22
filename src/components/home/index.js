import React from 'react'
import Component1 from '../../components/component1';
import Aboutme from '../../components/About_me';
import Skills from '../../components/skills';
import Skills2 from '../../components/skills2';
import ProjectM from '../../components/project_main_page';
const Home = () => {
  return (
    <>
    <Component1/>
      <Aboutme/>
      <Skills2/>
      <Skills/>
      <ProjectM/>
    </>
  )
}

export default Home