import { Link } from "react-router-dom";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';



import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Productall() {
    

  return (
    <section>
        

    <div className="w-full mb-[3rem]">
        <div className='w-full relative'>
            <img className="w-full" src="images/reservation.png" alt="" />
            <div className='w-full absolute top-[40%] flex items-center justify-center'>
                <h2 className='lora-Regular text-[52px] text-[#fff] uppercase'>Shop</h2>
            </div>
        </div>
    </div>
    {/* productall page content part start */}
    <div className="max-w-[90rem] w-full mx-auto">
            <div className="mb-[2rem] flex flex-col-3 items-center border border-[#000] rounded-[20px] pr-[20px]"><span className="display-ruby float-left w-full"><img src="images/left.png" alt="" /><h2 className="lora text-[18px] text-[#999999]">Search for restaurants and food</h2></span><span className="inline-block float-right"><img src="images/close.png" alt="" /></span></div>
          </div>
    <div className="max-w-[90rem] w-full mx-auto">
        <h2 className="lora text-[28px] justify-center flex">Famous Cuisines</h2>

        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper proall pt-[3rem]"
      >
        <SwiperSlide>
            <div className="shadow-[1px_1px_10px_rgba(0,0,0,0.5)] mb-[2rem] p-[20px] rounded-[10px]">
                <img className="w-full" src="images/briyani.png" alt="" />
                <div className="flex justify-center">
                    <h3 className="lora text-[28px]">Biryani</h3>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide><div className="shadow-[1px_1px_10px_rgba(0,0,0,0.5)] mb-[2rem] p-[20px] rounded-[10px]">
                <img className="w-full" src="images/roll.png" alt="" />
                <div className="flex justify-center">
                    <h3 className="lora text-[28px]">Biryani</h3>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="shadow-[1px_1px_10px_rgba(0,0,0,0.5)] mb-[2rem] p-[20px] rounded-[10px]">
                <img className="w-full" src="images/pizza.png" alt="" />
                <div className="flex justify-center">
                    <h3 className="lora text-[28px]">Biryani</h3>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="shadow-[1px_1px_10px_rgba(0,0,0,0.5)] mb-[2rem] p-[20px] rounded-[10px]">
                <img className="w-full" src="images/briyani.png" alt="" />
                <div className="flex justify-center">
                    <h3 className="lora text-[28px]">Biryani</h3>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="shadow-[1px_1px_10px_rgba(0,0,0,0.5)] mb-[2rem] p-[20px] rounded-[10px]">
                <img className="w-full" src="images/roll.png" alt="" />
                <div className="flex justify-center">
                    <h3 className="lora text-[28px]">Biryani</h3>
                </div>
            </div>
        </SwiperSlide>
       
      </Swiper>


         
    </div>
    
    {/* faq page content part end close*/}
    
</section>
  )
}
