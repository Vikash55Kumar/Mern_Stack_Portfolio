import React, { useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Passionate.css';

import { Autoplay, Navigation,Pagination } from 'swiper/modules';

export default function Passionate({ passionate = [] }) {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
  return (
    <>
      <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDescription">
          I am a dedicated B-tech student and passionate in Java Problem solving
          and web development, with a experience for creating user-friendly 
          portfolio websites using React.js. Proficient in HTML, CSS, JavaScript, 
          and React.js, I also have hands-on experience with Canva. I’m a quick 
          learner, adaptable, and a firm believer in collaboration. In my free time, 
          I enjoy mentoring, coding, and reading books.
        </span>
        <div className="skillBars">
          <Swiper
            spaceBetween={3}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="passionate-swiper"
          >
          
            {passionate.map((item, index) => (
              <SwiperSlide key={index} className="passionate-swiper-slide">
                <div className="skillBar">
                  <img src={item.image?.url} alt="" className="skillBarImage" />
                  <div className="skillBarText">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <svg ref={progressCircle}>
          </svg>
          <span ref={progressContent } className="hidden-svg"></span>
          </Swiper>
        </div>
      </section>
    </>
  );
}


     {/* <div className="skillBar">
            <img src={web_developer} alt="" className="skillBarImage" />
            <div className="skillBarText">
            <h2>Web Development</h2>
            <p>Upcoming Full Stack Developer</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={app} alt="" className="skillBarImage" />
            <div className="skillBarText">
            <h2>DSA in Java</h2>
            <p>Enhance problem solving skills</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={ui} alt="" className="skillBarImage" />
            <div className="skillBarText">
            <h2>Reading Books</h2>
            <p>Inspirational and motivational literature</p>
            </div>
          </div> */}