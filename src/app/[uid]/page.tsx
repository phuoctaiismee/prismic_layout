import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SliceZone } from '@prismicio/react';

import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { cookies } from 'next/headers';

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
   const { uid } = await params;
   const client = createClient();
   const page = await client.getByUID('page', uid).catch(() => notFound());

   return (
      <div className="flex flex-col gap-8 lg:gap-16 justify-center items-center overflow-hidden">
         <SliceZone slices={page.data.slices} components={components} />
      </div>
   );
}
export async function generateStaticParams() {
    const client = createClient();
    const pages = await client.getAllByType('page');
 
    return pages.map((page) => {
       return { uid: page.uid };
    });
 }
 