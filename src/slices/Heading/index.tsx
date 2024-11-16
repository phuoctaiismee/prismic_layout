import {Content} from "@prismicio/client";
import {SliceComponentProps} from "@prismicio/react";
import {PrismicRichText} from "@prismicio/react";
import HeadingComp from "@/components/common/typographys/heading";

/**
 * Props for `Heading`.
 */
export type HeadingProps = SliceComponentProps<Content.HeadingSlice>;

/**
 * Component for "Heading" Slices.
 */
const Heading = ({slice}: HeadingProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <PrismicRichText
                field={slice.primary.heading}
                components={{
                    heading1: ({children}) => (
                        <h1 className="text-6xl font-black">{children}</h1>
                    ),
                    heading2: ({children}) => (
                        <h2 className="text-5xl font-black leading-normal">{children}</h2>
                    ),
                    heading4: ({children}) => (
                        <h4 className="text-3xl font-black leading-normal">{children}</h4>
                    ),
                }}
            />
        </section>
    );
};

export default Heading;
