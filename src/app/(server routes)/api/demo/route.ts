import { NextResponse, type NextRequest } from "next/server";

import comments from "@/app/(server routes)/comments/data";

// GET Request
export async function GET() {
  return NextResponse.json(
    {
      message: "comments fetch successfully",
      data: comments,
    },
    {
      status: 200,
    }
  );
}

// POST Request
export async function POST(request: NextRequest) {
  const body = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: body.text,
  };
  comments.push(newComment);

  return NextResponse.json(
    {
      message: "comments add successfully",
      data: comments,
    },
    {
      status: 201,
    }
  );
}
