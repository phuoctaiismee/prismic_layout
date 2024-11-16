import CarouselPayments from "@/components/common/carousels/payments";
import {Content} from "@prismicio/client";
import {SliceComponentProps} from "@prismicio/react";

/**
 * Props for `PaymentCarousel`.
 */
export type PaymentCarouselProps = SliceComponentProps<Content.PaymentCarouselSlice>;

/**
 * Component for "PaymentCarousel" Slices.
 */
const PaymentCarousel = ({slice}: PaymentCarouselProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <CarouselPayments />
        </section>
    );
};

export default PaymentCarousel;
