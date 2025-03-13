import React from 'react';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Achievement.css';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

export default function Achievement({ achievement = [] }) {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (

    <div className="container">
      <span className="title">Achievements</span>
        <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {achievement.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.image?.url} alt={item.title} />
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
            <svg ref={progressCircle}>
            </svg>
            <span ref={progressContent} className="hidden-svg"></span>
          </div>
      </Swiper>
    </div>
  );
}

