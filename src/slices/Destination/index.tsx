import Destinations from "@/components/common/grids/destinations";
import {Content} from "@prismicio/client";
import {SliceComponentProps} from "@prismicio/react";

/**
 * Props for `Destination`.
 */
export type DestinationProps = SliceComponentProps<Content.DestinationSlice>;

/**
 * Component for "Destination" Slices.
 */
const Destination = ({slice}: DestinationProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <Destinations />
        </section>
    );
};

export default Destination;
