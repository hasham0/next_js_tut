import { NextResponse, type NextRequest } from "next/server";

export const dynamic = "force-static";

export async function GET(request: NextRequest) {
  const category = [
    {
      id: 1,
      name: "Category 1",
    },
    {
      id: 2,
      name: "Category 2",
    },
  ];
  return NextResponse.json({ data: category });
}
