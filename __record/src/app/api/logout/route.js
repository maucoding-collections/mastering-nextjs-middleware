import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  cookies().delete("userdata");
  return NextResponse.json({
    message: "Logout success",
  });
}
