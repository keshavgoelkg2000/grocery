import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { objects } from "../content/index";
import "./Slider.css";



const Slider = () => {

    return (
            <Swiper
                slidesPerView={4}
                spaceBetween={0}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >

                {objects.map((object, index)=>(
                    <SwiperSlide>
                    <div className='hoverIncrease'>
                        <img src={object.icon} alt="function" />
                        <div className='content'>
                            <h1>{object.name}</h1>
                            <h2>{object.price}</h2>
                            <div className='price-underline'></div>
                            <div className=' select-btn'>
                                <p>SELECT OPTION</p>
                                <MdDoubleArrow className='ml-1' />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
            
    );
}

export default Slider;