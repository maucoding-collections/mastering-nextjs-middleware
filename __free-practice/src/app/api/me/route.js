import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const userdata = cookies().get("userdata");
  if (userdata) {
    try {
      const userdataObj = JSON.parse(userdata.value);
      return NextResponse.json({
        error: "Session available",
        data: userdataObj,
      });
    } catch (e) {
      return NextResponse.json({ error: "Session empty" });
    }
  } else {
    return NextResponse.json({ error: "Session empty" });
  }
}
