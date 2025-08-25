import { NextResponse, type NextRequest } from "next/server";

import comments from "@/app/(server routes)/comments/data";

type Params = {
  params: Promise<{ id: string }>;
};

// PUT Request
export async function PUT(request: NextRequest, { params }: Params) {
  const body = await request.json();
  const { id } = await params;
  const index = comments.findIndex((comment) => comment.id === parseInt(id));
  if (index !== -1) {
    comments[index] = { ...comments[index], ...body };
  }
  return NextResponse.json(
    {
      message: "comments update successfully",
      data: comments,
    },
    {
      status: 200,
    }
  );
}

// PATCH Request
export async function PATCH(request: NextRequest, { params }: Params) {
  const body = await request.json();
  const { id } = await params;
  const index = comments.findIndex((comment) => comment.id === parseInt(id));
  if (index !== -1) {
    comments[index] = { ...comments[index], ...body };
  }
  return NextResponse.json(
    {
      message: "comments patch successfully",
      data: comments,
    },
    {
      status: 200,
    }
  );
}

// DELETE Request
export async function DELETE(_request: NextRequest, { params }: Params) {
  const { id } = await params;
  const index = comments.findIndex((comment) => comment.id === parseInt(id));
  let deletedComment = null;
  if (index !== -1) {
    deletedComment = comments[index];
    comments.splice(index, 1);
  }
  return NextResponse.json(
    {
      message: "comments delete successfully",
      data: deletedComment,
    },
    {
      status: 200,
    }
  );
}
