import { NextRequest, NextResponse } from "next/server";
import { headers } from "./next.config";

export function middleware(req, res) {
    const response = NextResponse.next({
        request: {
            headers: new Headers(req.headers),
        },
    });

    function snapCookie(req) {
        console.log(req.headers);
    }

    // response.headers.forEach((header) => console.log('header', header));

    response.cookies.set(`${req.cookies}`, 'true');

    return response;
}

// export function middleware(req, res) {
//     return;
// }