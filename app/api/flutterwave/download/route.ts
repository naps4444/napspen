import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: NextRequest) {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "guide",
      "practical-retirement-guide.pdf"
    );

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        {
          success: false,
          message: "Guide file not found.",
        },
        { status: 404 }
      );
    }

    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="The-Practical-Retirement-Guide.pdf"',
        "Cache-Control": "private, no-store, max-age=0",
      },
    });
  } catch (error) {
    console.error("Download error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to download the guide.",
      },
      { status: 500 }
    );
  }
}
