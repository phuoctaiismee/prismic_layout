import {Content} from "@prismicio/client";
import {getLayoutDataAPI} from "@/actions/use-layout";
import {componentRegistry} from "@/lib/slices";
import {GridItem, mapJustifyContent} from ".";
import {ColStart, GridCol, GridRow, RowStart, SpanCol, SpanRow} from ".";

interface GridSystemProps
    extends Content.HomepageDocumentData,
        Content.PageDocumentData {}

type SliceItemsType =
    | Content.HomepageDocumentDataSlicesSlice
    | Content.PageDocumentDataSlicesSlice;

// Render individual slices
const RenderSlice = ({
    slice,
    slices,
}: {
    slice: GridItem | null | undefined;
    slices: SliceItemsType[];
}) => {
    const key = slice?.sliceId?.split("$")[0];
    const SliceComponent = componentRegistry[key as keyof typeof componentRegistry];
    const data = slices.find((sli) => sli.id === slice?.sliceId) || null;

    // Generate CSS classes for the slice
    const sliceClasses = [
        slice?.col ? GridCol(slice.col) : "",
        slice?.row ? GridRow(slice.row) : "",
        slice?.colspan ? SpanCol(slice.colspan) : "",
        slice?.rowspan ? SpanRow(slice.rowspan) : "",
    ]
        .filter(Boolean)
        .join(" ");

    const hasClassesOrStyle = sliceClasses || slice?.style;

    // Render slice or children
    const content =
        SliceComponent && data ? (
            <SliceComponent slice={data} />
        ) : (
            slice?.childs && (
                <RenderGrid config={slice} slices={slices} items={slice.childs} />
            )
        );

    // Only wrap in div if necessary
    return hasClassesOrStyle ? (
        <div className={sliceClasses} style={slice?.style as React.CSSProperties}>
            {content}
        </div>
    ) : (
        content
    );
};

// Render grid or flex container
const RenderGrid = ({
    config,
    slices,
    items,
}: {
    config?: GridItem;
    slices: SliceItemsType[];
    items: GridItem[];
}) => {
    const isFlex = config?.type === "flex";

    // Generate CSS classes for the container
    const containerClasses = isFlex
        ? [
              "flex",
              "w-full",
              mapJustifyContent(config.justifyContent), // Map justifyContent
              config.alignItems ? `items-${config.alignItems}` : "",
              config.gap ? `gap-${config.gap}` : "",
          ]
        : [
              "grid",

              config?.col ? GridCol(config.col) : "",
              //   config?.row ? GridRow(config.row) : "",
              config?.gap ? `gap-${config.gap}` : "",
          ];

    const combinedClasses = containerClasses.filter(Boolean).join(" ");
    const hasClassesOrStyle = combinedClasses || config?.style;

    const content = items.map((item, index) => (
        <RenderSlice key={index} slice={item} slices={slices} />
    ));

    // Only wrap in div if necessary
    return hasClassesOrStyle ? (
        <div className={combinedClasses} style={config?.style as React.CSSProperties}>
            {content}
        </div>
    ) : (
        <>{content}</>
    );
};

// Main grid system container
const GridSystemContainerV2 = async ({slices}: GridSystemProps) => {
    const layoutData = await getLayoutDataAPI();

    return (
        <div className="mx-auto py-5">
            <RenderGrid
                config={layoutData.container as GridItem}
                slices={slices}
                items={layoutData.container.childs as GridItem[]}
            />
        </div>
    );
};

export default GridSystemContainerV2;
