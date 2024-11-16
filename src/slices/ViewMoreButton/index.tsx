import {Content} from "@prismicio/client";
import {SliceComponentProps} from "@prismicio/react";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
/**
 * Props for `ViewMoreButton`.
 */
export type ViewMoreButtonProps = SliceComponentProps<Content.ViewMoreButtonSlice>;

/**
 * Component for "ViewMoreButton" Slices.
 */
const ViewMoreButton = ({slice}: ViewMoreButtonProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <Button size="lg" className="rounded-full">
                <span>View More</span>
                <ArrowRight />
            </Button>
        </section>
    );
};

export default ViewMoreButton;
