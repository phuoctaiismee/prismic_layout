"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Controller } from "swiper/modules";
import ProductCard from "../cards/product-card";
import { useState } from "react";
import { Swiper as SwiperInstance } from "swiper/types";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { mockProducts } from "../cards/mock";

interface CarouselProps {
    withControl?: boolean;
}
const Carousel = ({ withControl }: CarouselProps) => {
    const [controlledSwiper, setControlledSwiper] = useState<SwiperInstance | null>(null);

    return (
        <div className="relative">
            {withControl && (
                <div className="absolute -top-40 right-[120px] z-50 hidden lg:block">
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
                loop={true}
                spaceBetween={20}
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                    },
                    1024: {

                        slidesPerView: 4,
                    },
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                onSwiper={(swiper) => setControlledSwiper(swiper)}
                modules={[Autoplay, Pagination, Controller]}
                className="py-16 mt-16"
            >
                {mockProducts.map((product) => (
                    <SwiperSlide key={product.id}>
                        <ProductCard product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    );
};

export default Carousel;
