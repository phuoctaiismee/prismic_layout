import {Content} from "@prismicio/client";
import {PrismicImage, SliceComponentProps} from "@prismicio/react";

/**
 * Props for `ImageFull`.
 */
export type ImageFullProps = SliceComponentProps<Content.ImageFullSlice>;

/**
 * Component for "ImageFull" Slices.
 */
const ImageFull = ({slice}: ImageFullProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className="w-full h-full"
        >
            {slice.variation === "default" && (
                <PrismicImage
                    field={slice.primary.image}
                    className="w-full h-full object-cover"
                />
            )}
            {slice.variation === "background" && (
                <div
                    // className={``}
                    style={{
                        backgroundImage: `url(${slice.primary.image.url})`,
                    }}
                />
            )}
        </section>
    );
};

export default ImageFull;
