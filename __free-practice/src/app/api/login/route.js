import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const DUMMY_USER = {
  username: "user",
  password: "123qwe",
  role: "admin",
};

export async function POST(request) {
  const { username, password } = await request.json();
  // dummy checking
  if (
    username.trim().toLowerCase() === DUMMY_USER.username &&
    password === DUMMY_USER.password
  ) {
    const RES_DUMMY_USER = { ...DUMMY_USER };
    delete RES_DUMMY_USER.password;

    // save session
    cookies().set("userdata", JSON.stringify(RES_DUMMY_USER));

    return NextResponse.json({
      message: "Login Success",
      data: RES_DUMMY_USER,
    });
  }
  return NextResponse.json({ error: "User & password not match" });
}
