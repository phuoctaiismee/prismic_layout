"use client";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination, Autoplay, Controller} from "swiper/modules";
import ProductCard from "../cards/product-card";
import {useState} from "react";
import {Swiper as SwiperInstance} from "swiper/types";
import {Button} from "@/components/ui/button";
import {ArrowLeft, ArrowRight} from "lucide-react";

interface CarouselProps {
    withControl?: boolean;
}
const Carousel = ({withControl}: CarouselProps) => {
    const [controlledSwiper, setControlledSwiper] = useState<SwiperInstance | null>(null);

    return (
        <div className="relative">
            {withControl && (
                <div className="absolute -top-40 right-0 z-50">
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-neutral-100 hover:bg-neutral-900 hover:text-white"
                        onClick={() => controlledSwiper?.slidePrev()}
                    >
                        <ArrowLeft />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-neutral-100 hover:bg-neutral-900 hover:text-white"
                        onClick={() => controlledSwiper?.slideNext()}
                    >
                        <ArrowRight />
                    </Button>
                </div>
            )}
            <Swiper
                slidesPerView={3.5}
                spaceBetween={20}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                onSwiper={(swiper) => setControlledSwiper(swiper)}
                modules={[Autoplay, Pagination, Controller]}
                className="py-16 mt-16"
            >
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard isFire />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousel;
