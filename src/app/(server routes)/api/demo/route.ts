import { NextResponse, type NextRequest } from "next/server";

import comments from "@/app/(server routes)/comments/data";

// GET Request
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredComments = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;
  return NextResponse.json(
    {
      message: "comments fetch successfully",
      data: filteredComments,
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
