import React, { useEffect } from 'react'
import "./Home.css"
import * as THREE from 'three';
import TimeLine from '../TimeLine/TimeLine';
import Typography from '@mui/material/Typography';
import Skills from '../Skills/Skills';
import Projects from "../Project/Project"
import ReachMe from '../reachMe/ReachMe';
import Contact from '../Contact/Contact';
import Intro from '../intro/Intro';
import About from '../About/About';
import Certificate from '../Achievement/Achievement';
import Passionate from '../passionate/Passionate';
import Achievement from '../Achievement/Achievement';

const Home =({timelines, project, skills, intro, achievement, passionate}) => {

  return (
    <div className='home'>
      <Intro intro={intro}/>
      <Passionate passionate={passionate}/>
      <div className="homeContainer">
        <span variant="h3">Time Line</span>
        <TimeLine timelines={timelines} />
      </div>

      <div className="homeSkills">
        <span className='skill' >Skills</span>
        <Skills skills={skills}/>
      </div>
  
        <Projects projects={project}/>
        <Achievement achievement={achievement}/>
        <Contact/>
        <ReachMe/>
    </div>
  );
};

export default Home;