import React from 'react'
import {ReactNavbar} from "overlay-navbar"
import logo from "../../assets/logo.png"
import { FaUserAlt } from "react-icons/fa";

function Navbar() {

  return <ReactNavbar 
        navColor1="white"
        navColor2="#DBFEFE"
        logo={logo}
        logoWidth="150px"
        burgerColor="hsl(250, 100%, 75%)"
        burgerColorHover="hsl(250, 100%, 75%)"
        nav2justifyContent="space-evenly"
        nav3justifyContent="space-evenly"
        link1Text="Home"
        link2Text="About"
        link3Text="Project"
        link4Text="Contact"
        link5Text="Skill"
        link6Text="TimeLine"
        link1Url="/"
        link2Url="/about"
        link3Url="/project"
        link4Url="/contact"
        link5Url="/skill"
        link6Url="/timeline"
        link1ColorHover="red"
        link1Color="HSL(250, 100%, 75%)"
        link1Size="1.5rem"
        link1Padding="1vmax"
        profileIcon={true}
      ProfileIconElement={FaUserAlt}
      profileIconColor="HSL(250, 100%, 75%)"
      profileIconColorHover="red"
    />
}

export default Navbar