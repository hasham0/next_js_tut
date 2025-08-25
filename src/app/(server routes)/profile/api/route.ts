import { headers } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const headerList = await headers();
  const token = headerList.get("authorization")?.replace("Bearer ", "");
  return new Response("<h1>Profile</h1>", {
    headers: { "Content-Type": "text/html" },
  });
}
