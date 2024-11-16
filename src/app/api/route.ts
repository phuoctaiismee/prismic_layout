import { promises as fs } from 'fs';
import path from 'path';

export const revalidate = 60;

export async function GET() {
    try {
        // Define the path to the JSON file
        const filePath = path.join(process.cwd(), 'public', 'mocks', 'layout3.json'); // Adjust if using a different path

        // Read and parse the JSON file
        const jsonData = await fs.readFile(filePath, 'utf8');
        const posts = JSON.parse(jsonData);

        // Return the JSON data as a response
        return new Response(JSON.stringify(posts), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error reading JSON data:', error);
        return new Response(JSON.stringify({ error: 'Failed to load data' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
