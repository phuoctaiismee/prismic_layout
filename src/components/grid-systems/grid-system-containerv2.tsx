"use client";

import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Content } from "@prismicio/client";
import { CONFIGS } from "@/configs";
import { componentRegistry } from "@/lib/slices";
import { GridItem, mapJustifyContent, GridCol, SpanCol, SpanRow } from ".";
import Loading from "../common/loaders/loading";

interface GridSystemProps
    extends Content.HomepageDocumentData,
    Content.PageDocumentData {
    page?: GridItem;
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
    const key = slice?.id?.split("$")[0];
    const SliceComponent = componentRegistry[key as keyof typeof componentRegistry];
    const data = slices.find((sli) => sli.id === slice?.id) || null;

    const sliceClasses = [
        slice?.colspan ? SpanCol(Number(slice.colspan)) : "",
        slice?.rowspan ? SpanRow(Number(slice.rowspan)) : "",
    ]
        .filter(Boolean)
        .join(" ");

    const inlineStyles: React.CSSProperties = {
        ...slice?.style || {},

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

    const containerClasses = isFlex
        ? [
            "flex w-full",
            "flex-col lg:flex-row",
            mapJustifyContent(config.justifyContent),
            config.alignItems ? `items-${config.alignItems}` : "",
            config.gap ? `gap-${Number(config.gap)}` : "",
        ]
        : [
            "grid grid-cols-1",
            config?.columns ? `lg:${GridCol(Number(config.columns))}` : "",
            config?.gap ? `gap-${Number(config.gap)}` : "",
        ];

    const combinedClasses = containerClasses.filter(Boolean).join(" ");
    const inlineStyles: React.CSSProperties = { ...config?.style };

    const content = items.map((item, index) => (
        <RenderSlice key={index} slice={item} slices={slices} />
    ));

    return (
        <div className={combinedClasses} style={inlineStyles}>
            {content}
        </div>
    );
};

const GridSystemContainerV2 = ({ page, slices }: GridSystemProps) => {
    const [layout, setLayout] = useState<GridItem | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const socket = io(CONFIGS.SOCKET_URL, {
            withCredentials: true,
            transports: ["websocket"],
        });

        socket.on("return-json", (data) => {
            if (data) {
                setIsLoading(true);
                setLayout(data);
                setTimeout(() => setIsLoading(false), 2000);
            }
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const config = layout || page;

    return (
        <div className="mx-auto py-5">
            {config?.childs ? (
                <RenderGrid config={config} slices={slices} items={config.childs} />
            ) : (
                <div>Layout data not found</div>
            )}
            <Loading isLoading={isLoading} />
        </div>
    );
};

export default GridSystemContainerV2;
