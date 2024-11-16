import FilterSectionComp from "@/components/common/searchs/filter-section";
import {Content} from "@prismicio/client";
import {SliceComponentProps} from "@prismicio/react";

/**
 * Props for `FilterSection`.
 */
export type FilterSectionProps = SliceComponentProps<Content.FilterSectionSlice>;

/**
 * Component for "FilterSection" Slices.
 */
const FilterSection = ({slice}: FilterSectionProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <FilterSectionComp />
        </section>
    );
};

export default FilterSection;
