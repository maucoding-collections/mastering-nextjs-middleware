import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  cookies().delete("userdata");
  return NextResponse.json({ message: "Logout success" });
}
