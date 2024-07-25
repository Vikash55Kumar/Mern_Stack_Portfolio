import React from 'react'
import Linkedin from '../../assets/Linkdin-icon.png'
import facebookIcon from '../../assets/facebook-icon.png'
import twitter from '../../assets/twitter.png'
import github from '../../assets/github-icon.png'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './ReachMe.css'

export default function ReachMe() {
  return (
    <div className='area'>
    <section className="reachMe">
        <div className="connectLink">
            <span className="title2">Reach out to me here</span>
            <span className="description2">Feel free to ping me for volunteering,<br></br> discussing your
                 ideas or grabbing a<br></br> cup of coffee
            </span>
            <div className="links">
                <a className="link" href="https://www.linkedin.com/in/software-enginner-vikash">
                  <img src={Linkedin} alt="" className='image2'/>
                </a>
                <a className="link">
                <img src={facebookIcon} alt="" className='image2' />
                </a>
                <a className="link" >
                <img src={twitter} alt="" className='image2' />
                </a>
                <a className="link" href="https://github.com/Vikash55Kumar?tab=repositories">
                <img src={github} alt="" className='image2' />
                </a>
            </div>
        </div>
        <div className="contactDetails ">
            <span className="title3">Have a Question?</span>
            <div className="block">
              <ul>               
                <li className='addressLink'>
                  <a href='https://maps.app.goo.gl/hdAeQ1oacGPoDW3B8'>
                  <span className="icon icon-map-maker">
                    <LocationOnIcon/> &nbsp; &nbsp;
                  </span>
                  <span id='text1' className="text">NH-62, JIET College, New Pali<br></br>  
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                  Road, Jodhpur, Rajasthan, India <br></br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                   PIN:842802</span>
                  </a>
                </li>
                <li className='addressLink'>
                    <span className="icon ">
                    <PhoneIcon/> &nbsp; &nbsp;
                    </span>
                    <span className="text">+9135842253</span>
                
                </li>
                <li className='addressLink'>
                  <a href='' >
                    <span className="icon">
                      <EmailRoundedIcon/>   &nbsp; &nbsp;
                    </span>
                    <span className="text">vikashcbsb@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
        </div>
        
    </section>
    <div className="creator">Made with ❤️ by <b>Vikash Kumar</b></div>
    </div>
  )
}
