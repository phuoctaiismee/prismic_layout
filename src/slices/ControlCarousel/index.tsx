"use client";
import {Content} from "@prismicio/client";
import {SliceComponentProps} from "@prismicio/react";
import {Button} from "@/components/ui/button";
import {ArrowLeft, ArrowRight} from "lucide-react";
import {useSwiper} from "swiper/react";

/**
 * Props for `ControlCarousel`.
 */
export type ControlCarouselProps = SliceComponentProps<Content.ControlCarouselSlice>;

/**
 * Component for "ControlCarousel" Slices.
 */
const ControlCarousel = ({slice}: ControlCarouselProps): JSX.Element => {
    const swiper = useSwiper();
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="space-x-2"
        >
            <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-neutral-100"
                onClick={() => swiper.slidePrev()}
            >
                <ArrowLeft />
            </Button>
            <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-neutral-100"
                onClick={() => swiper.slideNext()}
            >
                <ArrowRight />
            </Button>
        </section>
    );
};

export default ControlCarousel;
