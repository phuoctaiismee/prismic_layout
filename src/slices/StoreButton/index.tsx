import {Content} from "@prismicio/client";
import {SliceComponentProps} from "@prismicio/react";

/**
 * Props for `StoreButton`.
 */
export type StoreButtonProps = SliceComponentProps<Content.StoreButtonSlice>;

/**
 * Component for "StoreButton" Slices.
 */
const StoreButton = ({slice}: StoreButtonProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            {slice.primary.type === "appstore" ? (
                <img src="/appstore.png" />
            ) : (
                <img src="/googleplay.png" />
            )}
        </section>
    );
};

export default StoreButton;
