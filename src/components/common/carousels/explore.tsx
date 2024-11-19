"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const CarouselExplore = () => {
    return (
        <Swiper
            slidesPerView="auto"
            spaceBetween={20}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="py-16 mt-16"

        >
            <SwiperSlide className="!w-auto">
                <Card className="aspect-auto relative h-[406px] w-[470px] min-w-[300px] border-0 rounded-lg overflow-hidden p-14">
                    <img src="https://images.pexels.com/photos/16257094/pexels-photo-16257094/free-photo-of-woman-sitting-by-the-lake-and-looking-at-the-view-with-her-dog.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" className="absolute inset-0 w-full h-full brightness-95 object-cover" />
                    <div className="relative">
                        <div className="absolute left-0 top-0">
                            <div className="flex flex-col justify-start items-start gap-5">
                                <h3 className="text-4xl font-bold text-white">Warking up in a far away place</h3>
                                <Button className="rounded-full bg-yellow-500 flex items-center py-6 text-black hover:text-white">
                                    <span className="text-lg">View more</span>
                                    <ArrowRight className="w-9 h-9" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </Card>
            </SwiperSlide>
            <SwiperSlide className="!w-auto">
                <Card className="aspect-auto relative h-[406px] w-[630px] min-w-[300px] border-0 rounded-lg overflow-hidden p-14">
                    <img src="https://travila-nextjs.vercel.app/_next/static/media/advance.e9d7efda.png" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="relative">
                        <div className="absolute right-0 top-0 w-1/2">
                            <div className="flex flex-col justify-start items-start gap-10">
                                <div>
                                    <p className="text-lg font-bold text-black">Explore the word</p>
                                    <h3 className="text-3xl font-bold text-black">The adventure the starts today</h3>
                                </div>
                                <Button className="rounded-full bg-yellow-500 flex items-center py-6 text-black hover:text-white">
                                    <span className="text-lg">View more</span>
                                    <ArrowRight className="w-9 h-9" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </Card>
            </SwiperSlide>
            <SwiperSlide className="!w-auto">
                <Card className="aspect-auto relative h-[406px] w-[530px] min-w-[300px] border-0 rounded-lg overflow-hidden p-14">
                    <img src="https://images.pexels.com/photos/3010291/pexels-photo-3010291.jpeg?auto=compress&cs=tinysrgb&w=400" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="relative">
                        <div className="absolute right-0 top-0 w-1/2">
                            <div className="flex flex-col justify-start items-start gap-10">
                                <div>
                                    <p className="text-lg font-bold text-white">Dream Vacation</p>
                                    <h3 className="text-3xl font-bold text-white">Start you Journey Now</h3>
                                </div>
                                <Button className="rounded-full bg-yellow-500 flex items-center py-6 text-black hover:text-white">
                                    <span className="text-lg">View more</span>
                                    <ArrowRight className="w-9 h-9" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </Card>
            </SwiperSlide>
            <SwiperSlide className="!w-auto">
                <Card className="aspect-auto relative h-[406px] w-[470px] min-w-[300px] border-0 rounded-lg overflow-hidden p-14">
                    <img src="https://images.pexels.com/photos/355829/pexels-photo-355829.jpeg?auto=compress&cs=tinysrgb&w=400" className="absolute inset-0 w-full h-full brightness-95 object-cover" />
                    <div className="relative">
                        <div className="absolute left-0 top-0">
                            <div className="flex flex-col justify-start items-start gap-5">
                                <h3 className="text-4xl font-bold text-white">Warking up in a far away place</h3>
                                <Button className="rounded-full bg-yellow-500 flex items-center py-6 text-black hover:text-white">
                                    <span className="text-lg">View more</span>
                                    <ArrowRight className="w-9 h-9" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </Card>
            </SwiperSlide>
            <SwiperSlide className="!w-auto">
                <Card className="aspect-auto relative h-[406px] w-[530px] min-w-[300px] border-0 rounded-lg overflow-hidden p-14">
                    <img src="https://images.pexels.com/photos/414035/pexels-photo-414035.jpeg?auto=compress&cs=tinysrgb&w=400" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="relative">
                        <div className="absolute right-0 top-0 w-1/2">
                            <div className="flex flex-col justify-start items-start gap-10">
                                <div>
                                    <p className="text-lg font-bold text-white">Dream Vacation</p>
                                    <h3 className="text-3xl font-bold text-white">Start you Journey Now</h3>
                                </div>
                                <Button className="rounded-full bg-yellow-500 flex items-center py-6 text-black hover:text-white">
                                    <span className="text-lg">View more</span>
                                    <ArrowRight className="w-9 h-9" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </Card>
            </SwiperSlide>
        </Swiper>
    );
};



export default CarouselExplore;
