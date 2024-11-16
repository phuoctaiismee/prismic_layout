import {Card} from "@/components/ui/card";
import {Content} from "@prismicio/client";
import {PrismicImage, PrismicRichText, SliceComponentProps} from "@prismicio/react";

/**
 * Props for `CardBackground`.
 */
export type CardBackgroundProps = SliceComponentProps<Content.CardBackgroundSlice>;

/**
 * Component for "CardBackground" Slices.
 */
const CardBackground = ({slice}: CardBackgroundProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            {slice.variation === "center" && (
                <Card
                    className="aspect-square p-5 rounded-3xl flex flex-col gap-3 justify-center items-center border-neutral-100"
                    style={{
                        backgroundColor: slice.primary.background + "",
                    }}
                >
                    <PrismicImage
                        field={slice.primary.image}
                        className="object-cover h-24"
                    />
                    <PrismicRichText
                        field={slice.primary.title}
                        components={{
                            heading3: ({children}) => (
                                <h3 className="text-2xl font-bold">{children}</h3>
                            ),
                        }}
                    />
                    <PrismicRichText
                        field={slice.primary.description}
                        components={{
                            paragraph: ({children}) => (
                                <p className="text-lg font-light text-center text-neutral-500">
                                    {children}
                                </p>
                            ),
                        }}
                    />
                </Card>
            )}
            {slice.variation === "default" && (
                <Card
                    className="aspect-square p-10 rounded-3xl flex flex-col gap-3 border-neutral-100"
                    style={{
                        backgroundColor: slice.primary.background + "",
                        backgroundImage: `url(${slice.primary.image.url + ""})`,
                        backgroundRepeat: "no-repeat",
                        // backgroundSize: "cover",
                        backgroundPosition: "bottom right",
                        paddingRight: 80,
                    }}
                >
                    <PrismicRichText
                        field={slice.primary.title}
                        components={{
                            heading3: ({children}) => (
                                <h3 className="text-2xl font-bold">{children}</h3>
                            ),
                        }}
                    />
                    <PrismicRichText
                        field={slice.primary.description}
                        components={{
                            paragraph: ({children}) => (
                                <p className="text-lg font-light text-neutral-500 w-2/3">
                                    {children}
                                </p>
                            ),
                        }}
                    />
                </Card>
            )}
        </section>
    );
};

export default CardBackground;
