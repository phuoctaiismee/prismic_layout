import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

// Webhook secret (tuỳ chọn, nếu cần bảo mật)
const WEBHOOK_SECRET = 'datmaniac';
// const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

// Xử lý webhook
export async function POST(req: NextRequest) {
    try {
        // Kiểm tra header Authorization (tuỳ chọn)
        // const authHeader = req.headers.get('authorization');
        // const token = authHeader?.split(' ')[1];
        // if (WEBHOOK_SECRET && token !== WEBHOOK_SECRET) {
        //   return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
        // }

        // Đọc dữ liệu từ request
        const data = await req.json();
        console.log('Received webhook data:', data);

        // Đường dẫn tới file JSON trong thư mục public/mocks
        const filePath = path.join(process.cwd(), 'public', 'mocks', 'layout4.json');

        // Kiểm tra và tạo thư mục nếu cần
        const dirPath = path.dirname(filePath);
        try {
            await fs.access(dirPath); // Kiểm tra xem thư mục có tồn tại không
        } catch {
            await fs.mkdir(dirPath, { recursive: true }); // Tạo thư mục nếu chưa tồn tại
        }

        // Ghi dữ liệu vào file JSON (tạo mới nếu chưa có, thay thế nội dung nếu đã tồn tại)
        await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
        console.log('Data written to layout4.json successfully');

        // Trả phản hồi
        return NextResponse.json({ message: 'Webhook received and file updated successfully' });
    } catch (error) {
        console.error('Error processing webhook:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
