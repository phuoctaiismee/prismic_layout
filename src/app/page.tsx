import {Metadata} from "next";

import {createClient} from "@/prismicio";
import GridSystemContainer from "@/components/grid-systems/grid-system-container";
import GlobalContainer from "@/components/grid-systems/global-container";
import {Fragment} from "react";
import dynamic from "next/dynamic";

const GridSystemContainerV2 = dynamic(
    import("@/components/grid-systems/grid-system-containerv2")
);

export default async function Page() {
    const client = createClient();
    const page = await client.getSingle("homepage");
    // console.log("🚀 ~ Page ~ page:", page.data.slices);

    // return <SliceZone slices={page.data.slices} components={components} />;
    // return <GridSystemContainer {...page.data} />;
    return (
        <Fragment>
            <GridSystemContainerV2 {...page.data} />
        </Fragment>
    );
    // return <GlobalContainer {...page.data} />;
}

export async function generateMetadata(): Promise<Metadata> {
    const client = createClient();
    const page = await client.getSingle("homepage");

    return {
        title: page.data.meta_title,
        description: page.data.meta_description,
    };
}
