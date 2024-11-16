import {Content} from "@prismicio/client";
import {SliceComponentProps} from "@prismicio/react";
import {PrismicRichText} from "@prismicio/react";
import ParagraphComp from "@/components/common/typographys/paragraph";
/**
 * Props for `SubTitle`.
 */
export type SubTitleProps = SliceComponentProps<Content.SubTitleSlice>;

/**
 * Component for "SubTitle" Slices.
 */
const SubTitle = ({slice}: SubTitleProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <PrismicRichText
                field={slice.primary.text}
                components={{
                    paragraph: ({children}) => (
                        <p className="font-light text-xl text-neutral-500">
                            {children}
                        </p>
                    ),
                }}
            />
        </section>
    );
};

export default SubTitle;
