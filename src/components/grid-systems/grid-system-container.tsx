import {Content} from "@prismicio/client";
import {getLayoutDataAPI} from "@/actions/use-layout";
import {GridItem} from "./type";
import {SliceComponentType} from "@prismicio/react";
import {componentRegistry} from "@/lib/slices";

interface GridSystemProps
    extends Content.HomepageDocumentData,
        Content.PageDocumentData {}

type SliceItemsType =
    | Content.HomepageDocumentDataSlicesSlice
    | Content.PageDocumentDataSlicesSlice;

const RenderGrid = ({
    config,
    slices,
    items,
}: {
    config?: GridItem;
    slices: SliceItemsType[];
    items: GridItem[];
}) => {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${config?.col || 12}, 1fr)`,
                gap: config?.gap,
                backgroundImage: config?.style?.backgroundImage,
                backgroundSize: config?.style?.backgroundSize,
                backgroundColor: config?.style?.backgroundColor,
                backgroundPosition: config?.style?.backgroundPosition,
                backgroundRepeat: config?.style?.backgroundRepeat,
                padding: config?.style?.padding,
                ...(config?.style as React.CSSProperties), // Cast config.style to React.CSSProperties
            }}
        >
            {items?.map((item, index) => (
                <RenderSlice key={index} slice={item} slices={slices} />
            ))}
        </div>
    );
};

const RenderSlice = ({
    slice,
    slices,
}: {
    slice: GridItem | null | undefined;
    slices: SliceItemsType[];
}) => {
    // Use a more flexible component lookup without enforcing specific types
    const key = slice?.sliceId?.substring(0, slice?.sliceId?.indexOf("$"));
    const SliceComponent = componentRegistry[key as keyof typeof componentRegistry];
    const data = slices.find((sli) => sli.id === slice?.sliceId) || null;

    return (
        <div
            style={{
                gridColumn: `span ${slice?.colspan || slice?.col || 1}`,
                gridRow: `span ${slice?.rowspan || slice?.row || 1}`,
            }}
        >
            {SliceComponent && data ? (
                <SliceComponent slice={data} />
            ) : (
                slice?.childs && (
                    <RenderGrid config={slice} slices={slices} items={slice?.childs} />
                )
            )}
        </div>
    );
};

const GridSystemContainer = async ({slices}: GridSystemProps) => {
    const layoutData = await getLayoutDataAPI();

    return (
        <div className="container mx-auto py-5">
            <RenderGrid
                config={layoutData.container as GridItem}
                slices={slices}
                items={layoutData.container.childs as GridItem[]}
            />
        </div>
    );
};

export default GridSystemContainer;
