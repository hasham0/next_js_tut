import { NextResponse, type NextRequest } from "next/server";

export const dynamic = "force-static";
export const revalidate = 10;
export async function GET(request: NextRequest) {
  return NextResponse.json({ time: new Date().toLocaleTimeString() });
}
