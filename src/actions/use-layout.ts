'use server'

import { CONFIGS } from "@/configs";

export async function getDocument() {
    const response = await fetch('https://teknix-lalala.prismic.io/api/v2');
    const data = await response.json();
    return data;
}


export async function getDocumentData(ref: string) {
    const response = await fetch(`https://teknix-lalala.prismic.io/api/v2/documents/search?ref=${ref}`);
    const data = await response.json();
    return data;
}

export async function getLayoutDataAPI() {
    try {
        const response = await fetch(`${CONFIGS.API_URL}/api`);
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching layout data:", error);
        // Fallback to default layout
        return { defaultLayout: true };
    }
}
