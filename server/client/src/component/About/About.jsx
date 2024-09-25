import React from 'react'
import './About.css'

export default function About({about = {}}) {
  return (
    <section id="about">
        <div className="aboutImg">
            <img src={about.image1?.url} alt="" className="workImg1" />
        </div>
        <div className="port">
            <span className="title">About me</span>
            <span className="desc"> {about.description}
            </span>
            <div className="workImgs">
                <img src={about.image2?.url} alt="" className="workImg" />
                <img src={about.image3?.url} alt="" className="workImg" />
            </div>
        </div>
    </section>
  )
}
