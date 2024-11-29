import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { cookies } from "next/headers";
import { Fragment } from "react";
import GridSystemContainerV2 from "@/components/grid-systems/grid-system-containerv2";
import { getLayoutDataAPI } from "@/actions/use-layout";

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("page", uid).catch(() => notFound());
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
export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("page");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
