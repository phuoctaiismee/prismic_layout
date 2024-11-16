import SortSectionComp from "@/components/common/searchs/sort-section";
import {Content} from "@prismicio/client";
import {SliceComponentProps} from "@prismicio/react";
/**
 * Props for `SortSection`.
 */
export type SortSectionProps = SliceComponentProps<Content.SortSectionSlice>;

/**
 * Component for "SortSection" Slices.
 */
const SortSection = ({slice}: SortSectionProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <SortSectionComp />
        </section>
    );
};

export default SortSection;
