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
    <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDescription">
        I am a dedicated B-Tech student with a passion 
        for Java problem-solving and MERN stack development. 
        I have experience working on projects like 'Degiclean – Turning Waste into Value! 🌍♻️',
        where I utilized EJS, CSS, Node.js, Express, MongoDB, and Google OAuth (Passport). 
        I also specialize in creating user-friendly MERN portfolio websites. 
        Proficient in HTML, CSS, JavaScript, React.js, Node.js, Express, 
        and MongoDB, I bring both technical skills and hands-on design experience with Canva.
        I’m a quick learner, adaptable, and a strong advocate for collaboration. 
        In my free time, I enjoy mentoring, coding, and reading.
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
  );
}
