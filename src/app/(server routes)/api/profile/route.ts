import { headers } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // TODO: 1st way
  // const requestHeader = new Headers(request.headers);
  // const token = requestHeader.get("authorization")?.replace("Bearer ", "");

  // TODO: 2nd way
  const headerList = await headers();
  const token = headerList.get("authorization")?.replace("Bearer ", "");
  return NextResponse.json({ data: "working", token });
}
