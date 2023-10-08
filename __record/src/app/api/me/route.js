import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  const userdata = cookies().get("userdata");
  if (userdata) {
    try {
      const userdataJson = JSON.parse(userdata.value);
      return NextResponse.json({
        message: "User found",
        data: userdataJson,
      });
    } catch (e) {
      console.error(e);
      return NextResponse.json({
        error: "User not login",
      });
    }
  } else {
    return NextResponse.json({
      error: "User not login",
    });
  }
}
