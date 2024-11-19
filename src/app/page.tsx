import { Metadata } from "next";
import { createClient } from "@/prismicio";
import GridSystemContainerV2 from "@/components/grid-systems/grid-system-containerv2";
import { Fragment } from "react";
import { CONFIGS } from "@/configs";

export default async function Page() {
    const client = createClient();

    // Fetch Prismic data
    const page = await client.getSingle("homepage");

    // Fetch layout data
    let layoutData;
    try {
        const response = await fetch(`${CONFIGS.API_URL}/api`);
        if (!response.ok) {
            return;
        }
        layoutData = await response.json();
    } catch (error) {
        console.error("Error fetching layout data:", error);
        layoutData = { defaultLayout: true }; // Fallback data
    }

    console.log("🚀 ~ Page ~ layoutData:", layoutData);

    if (!page || !layoutData) {
        return <div>Error loading page data</div>;
    }

    return (
        <Fragment>
            <GridSystemContainerV2 page={layoutData} {...page.data} />
        </Fragment>
    );
}

export async function generateMetadata(): Promise<Metadata> {
    const client = createClient();
    const page = await client.getSingle("homepage");

    return {
        title: page.data.meta_title,
        description: page.data.meta_description,
    };
}
