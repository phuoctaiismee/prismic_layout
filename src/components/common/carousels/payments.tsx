"use client";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination, Autoplay} from "swiper/modules";
const CarouselPayments = () => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={20}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="py-16 mt-16"
        >
            <SwiperSlide>
                <div className="aspect-video border rounded px-5 py-1 flex justify-center items-center">
                    <img src="/stripe.png" className="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="aspect-video border rounded px-5 py-1 flex justify-center items-center">
                    <img src="/mastercard.png" className="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="aspect-video border rounded px-5 py-1 flex justify-center items-center">
                    <img src="/paypal.png" className="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="aspect-video border rounded px-5 py-1 flex justify-center items-center">
                    <img src="/skrill.png" className="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="aspect-video border rounded px-5 py-1 flex justify-center items-center">
                    <img src="/stripe.png" className="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="aspect-video border rounded px-5 py-1 flex justify-center items-center">
                    <img src="/mastercard.png" className="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="aspect-video border rounded px-5 py-1 flex justify-center items-center">
                    <img src="/paypal.png" className="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="aspect-video border rounded px-5 py-1 flex justify-center items-center">
                    <img src="/skrill.png" className="" />
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default CarouselPayments;
