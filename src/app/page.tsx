import { Metadata } from "next";
import { createClient } from "@/prismicio";
import GridSystemContainerV2 from "@/components/grid-systems/grid-system-containerv2";
import { Fragment } from "react";
import { CONFIGS } from "@/configs";
import { getLayoutDataAPI } from "@/actions/use-layout";

export default async function Page() {
    const client = createClient();

    const page = await client.getSingle("homepage");
    const layoutData = await getLayoutDataAPI();
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
