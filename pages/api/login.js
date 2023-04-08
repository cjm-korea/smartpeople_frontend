import fetch from "node-fetch";
import { serialize } from 'cookie'
import Cookies from "js-cookie";
import { NextResponse } from "next/server";
import { middleware } from "@/middleware";

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

    console.log(parsedCookie);

    res.setHeader('Set-Cookie', `${tokenName}=${accessToken}; Path=/; HttpOnly`).status(200).send();
}
