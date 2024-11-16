'use server'

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
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api`);
    const data = await response.json();
    return data;
}