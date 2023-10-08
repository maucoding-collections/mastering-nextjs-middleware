import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const DUMMY_USER = {
  username: "username",
  password: "username",
  name: "Username Fullname",
};

export async function POST(request) {
  const { username, password } = await request.json();
  if (
    username.trim().toLowerCase() === DUMMY_USER.username &&
    password === DUMMY_USER.password
  ) {
    const normalizeUserdata = {...DUMMY_USER}
    delete normalizeUserdata.password

    cookies().set("userdata", JSON.stringify(normalizeUserdata))

    return NextResponse.json({
      message: "Login Success",
    });
  } else {
    return NextResponse.json({
      error: "Username & password not match",
    });
  }
}
