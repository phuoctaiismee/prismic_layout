import {Content} from "@prismicio/client";
import {SliceComponentProps} from "@prismicio/react";
import CarouselComp from "@/components/common/carousels/carousel";

/**
 * Props for `Carousel`.
 */
export type CarouselProps = SliceComponentProps<Content.CarouselSlice>;

/**
 * Component for "Carousel" Slices.
 */
const Carousel = ({slice}: CarouselProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
           
        >
            <CarouselComp withControl={slice.primary.with_control} />
        </section>
    );
};

export default Carousel;
