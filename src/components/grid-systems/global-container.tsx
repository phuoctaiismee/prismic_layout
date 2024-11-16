import {getLayoutDataAPI} from "@/actions/use-layout";
import {Content} from "@prismicio/client";
import {Page, Section} from "./type";
import {cn} from "@/lib/utils";
import {componentRegistry} from "@/lib/slices";

interface GridSystemProps
    extends Content.HomepageDocumentData,
        Content.PageDocumentData {}

type SliceItemsType =
    | Content.HomepageDocumentDataSlicesSlice
    | Content.PageDocumentDataSlicesSlice;

const RenderSection = ({config, slices}: {config: Section; slices: SliceItemsType[]}) => {
    return (
        <div className="relative" id={config.id}>
            {/* Render background */}
            {config.background?.className && (
                <div
                    className={cn(
                        "background absolute inset-0 -z-[1]",
                        config.background.className
                    )}
                />
            )}

            {/* Render layout */}
            {config.layout?.className && (
                <div className={cn(config.layout.className)}>
                    {config.layout.childs?.map((item) => (
                        <RenderSlice key={item.id} slice={item} slices={slices} />
                    ))}
                </div>
            )}
        </div>
    );
};

const RenderSlice = ({slice, slices}: {slice: Section; slices: SliceItemsType[]}) => {
    const key = slice.id.split("$")[0];
    const SliceComponent = componentRegistry[key as keyof typeof componentRegistry];
    const data = slices.find((sli) => sli.id === slice.id) || null;

    if (SliceComponent && data) {
        return <SliceComponent slice={data} />;
    }

    return (
        <>
            {/* Apply layout if specified, else render child components directly */}
            {slice.layout?.className ? (
                <div className={cn(slice.layout.className)}>
                    {slice.layout.childs?.map((child) => (
                        <RenderSlice key={child.id} slice={child} slices={slices} />
                    ))}
                </div>
            ) : (
                slice.layout?.childs?.map((child) => (
                    <RenderSlice key={child.id} slice={child} slices={slices} />
                ))
            )}
        </>
    );
};

const GlobalContainer = async ({slices}: GridSystemProps) => {
    const layoutData: Page = await getLayoutDataAPI();

    return (
        <div className="min-h-screen">
            {layoutData.sections.map((section: Section) => (
                <RenderSection key={section.id} config={section} slices={slices} />
            ))}
        </div>
    );
};

export default GlobalContainer;
