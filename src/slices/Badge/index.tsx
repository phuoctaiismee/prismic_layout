import {Content} from "@prismicio/client";
import {SliceComponentProps} from "@prismicio/react";

/**
 * Props for `Badge`.
 */
export type BadgeProps = SliceComponentProps<Content.BadgeSlice>;

/**
 * Component for "Badge" Slices.
 */
const Badge = ({slice}: BadgeProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="px-4 py-3 text-sm font-semibold bg-neutral-100 rounded-full w-fit"
            style={{
                backgroundColor: slice.primary.background + "",
            }}
        >
            {slice.primary.text}
        </section>
    );
};

export default Badge;
