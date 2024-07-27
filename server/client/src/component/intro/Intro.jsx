import React from 'react'
import Button from '@mui/material/Button';
import './Intro.css' 

export default function Intro({intro}){
  return (
    <>
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText"> I'm 
                    <span className="introName"> {intro.name}  </span>
                </span>
                <span className="developer"> {intro.description}</span>
                <p>{intro.subDescription}</p>
                <Button className='btn' variant="outlined" 
                    href={intro.url}>
                    Download CV
                  </Button>
            </div>
            <div className="ig" >
              <img className='image' src={intro.image?.url} alt="profile" />
            </div>
        </section>
    </>
  )
}

// export default Intro;
