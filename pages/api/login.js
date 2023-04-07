import fetch from "node-fetch";
import { serialize } from 'cookie'
import Cookies from "js-cookie";

export default async function handler(req, res) {
    const loginDTO = {
        userName: "CJM",
        password: "1111"
    }
    const response = await fetch('http://localhost:8000/auth/signIn', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginDTO)
    });

    const parsedCookie = response.headers.get('set-cookie').split(';');
    const tokenName = parsedCookie[0].split('=')[0];
    const accessToken = parsedCookie[0].split('=')[1];

    // console.log(parsedCookie);
    // console.log(accessToken);
    Cookies.set(tokenName, accessToken, {
        expires: 30,
        sameSite: 'strict',
        httpOnly: false,
        path: '/'
     })

    // const cookieOptions = {
    //     path: '/',
    //     httpOnly: false,
    //     sameSite: 'strict',
    //     maxAge: 60*60*24*7
    //  }

    // res.setHeader('Set-Cookie', serialize(tokenName, accessToken, cookieOptions));
}
