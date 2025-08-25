import { cookies } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // 1st way
  // const theme = request.cookies.get("theme");
  // console.log("🚀 ~ GET ~ theme:", theme);

  // 2nd way
  const cookieStore = await cookies();
  cookieStore.set("result", "20");

  const result = cookieStore.get("result");
  console.log("result", result);
  return new Response("<h1>Profile</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
