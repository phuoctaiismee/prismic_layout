'use client'
import { Content } from "@prismicio/client";
import { componentRegistry } from "@/lib/slices";
import { GridItem, mapJustifyContent } from ".";
import { GridCol, SpanCol, SpanRow } from ".";
import { useEffect, useState } from "react";
import { io } from 'socket.io-client'
import { CONFIGS } from "@/configs";
import { ContainerConfig } from "./type";
interface GridSystemProps
    extends Content.HomepageDocumentData,
    Content.PageDocumentData {
    page?: ContainerConfig
}

type SliceItemsType =
    | Content.HomepageDocumentDataSlicesSlice
    | Content.PageDocumentDataSlicesSlice;
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

    const sliceClasses = [
        slice?.colspan ? SpanCol(slice.colspan) : "",
        slice?.rowspan ? SpanRow(slice.rowspan) : "",
    ]
        .filter(Boolean)
        .join(" ");

    // Xử lý chỉ lấy style hợp lệ
    const inlineStyles = {
        ...(slice?.style || {}),
        borderBottom:
            slice?.style?.borderBottom && !slice.childs
                ? slice.style.borderBottom
                : undefined, // Chỉ áp dụng border cho slice không có con
        paddingBottom:
            slice?.style?.paddingBottom && !slice.childs
                ? slice.style.paddingBottom
                : undefined, // Chỉ áp dụng padding nếu không có con
    };

    const content =
        SliceComponent && data ? (
            <SliceComponent slice={data} />
        ) : (
            slice?.childs && (
                <RenderGrid config={slice} slices={slices} items={slice.childs} />
            )
        );

    return sliceClasses || Object.keys(inlineStyles).length ? (
        <div className={sliceClasses} style={inlineStyles}>
            {content}
        </div>
    ) : (
        <>{content}</>
    );
};

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

    // Áp dụng class và style dựa trên type
    const containerClasses = isFlex
        ? [
            "flex",
            "w-full",
            "flex-col",
            "lg:flex-row",
            mapJustifyContent(config.justifyContent),
            config.alignItems ? `items-${config.alignItems}` : "",
            config.gap ? `gap-${config.gap}` : "",
        ]
        : [
            "grid",
            "grid-cols-1",
            config?.col ? `lg:${GridCol(config.col)}` : "",
            config?.gap ? `gap-${config.gap}` : "",
        ];

    const combinedClasses = containerClasses.filter(Boolean).join(" ");

    const inlineStyles = {
        ...(config?.style || {}),
    };

    const content = items.map((item, index) => (
        <RenderSlice key={index} slice={item} slices={slices} />
    ));

    return (
        <div className={combinedClasses} style={inlineStyles}>
            {content}
        </div>
    );
};

// Main component
const GridSystemContainerV2 = ({ page, slices }: GridSystemProps) => {

    const [layout, setLayout] = useState<any>();
    useEffect(() => {
        const socket = io(CONFIGS.SOCKET_URL, {
            withCredentials: true,
            transports: ["websocket"],
        });

        socket.on("return-json", (data) => {
            console.log("Received webhook event:", data);
            setLayout(data)
        });

        // Cleanup khi component unmount
        return () => {
            socket.disconnect();
        };
    }, []);
    return (
        <div className="mx-auto py-5">
            {page?.container?.childs || layout?.childs ? (
                <RenderGrid
                    config={layout || page?.container}
                    slices={slices}
                    items={(layout || page?.container).childs}
                />
            ) : (
                <div>Layout data not found</div>
            )}
        </div>
    );

};

export default GridSystemContainerV2;
