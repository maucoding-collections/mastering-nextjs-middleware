import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function middleware(request) {
  const userdata = cookies().get("userdata");
  if (!userdata) {
    //redirect to login
    return NextResponse.redirect(new URL("/", request.url));
  } else {
    // check is userdata valid
    try {
      const userdataJson = JSON.parse(userdata.value);

      if (userdataJson.username) {
        // if userdataJson.userdata available next()
        return NextResponse.next();
      } else {
        // else redirect login
        return NextResponse.redirect(new URL("/", request.url));
      }
    } catch (e) {
      console.error(e);
      // else redirect login
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
