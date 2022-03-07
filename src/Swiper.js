import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import './swiper.css'

import {SliderImages} from './data'

function Slider() {

    return (
        <>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
        //   navigation
          pagination={{ clickable: true}}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          loop
          autoplay
        >
            {SliderImages.map((sliderImage)=>{
                const {title, text, image} = sliderImage
                return (
                <SwiperSlide>
                <div className='sliderContainer'>
                    <div className='sliderTextContainer'>
                        <div className='sliderHeading'>{title}</div>
                        <div className='sliderText'>{text}</div>
                    </div>
                    {image && 
                    <div className='sliderImageContainer'>
                        <img className='sliderImage' src={image} />
                    </div>}
                </div>
                </SwiperSlide>
                ); 
            })
            }
            
        </Swiper>

        </>
    )
}


export default Slider

