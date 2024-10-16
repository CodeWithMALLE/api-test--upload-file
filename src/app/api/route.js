import { NextResponse } from "next/server";
import fs from "fs"
import path from "path";

export async function POST(request) {
    const data = await request.formData();
    const file = data.get("file")

    const fileName = file.name;
    const filePath = path.join(process.cwd(), "src", "app", fileName);

    const buffer = Buffer.from(await file.arrayBuffer());
    await fs.promises.writeFile(filePath, buffer);

    const fileUrl = `/uploads/${fileName}`;

    return NextResponse.json({ fileUrl });
    
}