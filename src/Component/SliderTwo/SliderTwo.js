import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../Assets/tomatos.webp";
import "./SliderTwo.css";



const SliderTwo = () => {

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
            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={img1} alt="" />
                    <div className='content'>
                        <h1>Tomato</h1>
                        <h2>₹40.50</h2>
                        <div className='price-underline'></div>
                        <div className=' select-btn'>
                            <p>SELECT OPTION</p>
                            <MdDoubleArrow className='ml-1' />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={img1} alt="" />
                    <div className='content'>
                        <h1>Tomato</h1>
                        <h2>₹40.50</h2>
                        <div className='price-underline'></div>
                        <div className=' select-btn'>
                            <p>SELECT OPTION</p>
                            <MdDoubleArrow className='ml-1' />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={img1} alt="" />
                    <div className='content'>
                        <h1>Tomato</h1>
                        <h2>₹40.50</h2>
                        <div className='price-underline'></div>
                        <div className=' select-btn'>
                            <p>SELECT OPTION</p>
                            <MdDoubleArrow className='ml-1' />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={img1} alt="" />
                    <div className='content'>
                        <h1>Tomato</h1>
                        <h2>₹40.50</h2>
                        <div className='price-underline'></div>
                        <div className=' select-btn'>
                            <p>SELECT OPTION</p>
                            <MdDoubleArrow className='ml-1' />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={img1} alt="" />
                    <div className='content'>
                        <h1>Tomato</h1>
                        <h2>₹40.50</h2>
                        <div className='price-underline'></div>
                        <div className=' select-btn'>
                            <p>SELECT OPTION</p>
                            <MdDoubleArrow className='ml-1' />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={img1} alt="" />
                    <div className='content'>
                        <h1>Tomato</h1>
                        <h2>₹40.50</h2>
                        <div className='price-underline'></div>
                        <div className=' select-btn'>
                            <p>SELECT OPTION</p>
                            <MdDoubleArrow className='ml-1' />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={img1} alt="" />
                    <div className='content'>
                        <h1>Tomato</h1>
                        <h2>₹40.50</h2>
                        <div className='price-underline'></div>
                        <div className=' select-btn'>
                            <p>SELECT OPTION</p>
                            <MdDoubleArrow className='ml-1' />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='hoverIncrease'>
                    <img src={img1} alt="" />
                    <div className='content'>
                        <h1>Tomato</h1>
                        <h2>₹40.50</h2>
                        <div className='price-underline'></div>
                        <div className=' select-btn'>
                            <p>SELECT OPTION</p>
                            <MdDoubleArrow className='ml-1' />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            

         

        </Swiper>
    );
}

export default SliderTwo;