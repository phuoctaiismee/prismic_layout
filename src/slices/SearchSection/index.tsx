import SearchContainer from "@/components/common/searchs/search-container";
import {Content} from "@prismicio/client";
import {SliceComponentProps} from "@prismicio/react";

/**
 * Props for `SearchSection`.
 */
export type SearchSectionProps = SliceComponentProps<Content.SearchSectionSlice>;

/**
 * Component for "SearchSection" Slices.
 */
const SearchSection = ({slice}: SearchSectionProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="flex items-center"
        >
            <SearchContainer />
        </section>
    );
};

export default SearchSection;
