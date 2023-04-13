import fetch from "node-fetch";
import { serialize } from 'cookie'
import Cookies from "js-cookie";
import { NextResponse } from "next/server";
import { middleware } from "@/middleware";

export default async function handler(req, res) {
    const data = JSON.parse(req.body);
    // Make get ID, password
    const loginDTO = {
        userName: data.userName,
        password: data.password
    }

    const response = await fetch('http://localhost:8000/auth/signIn', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginDTO)
    });
    const token = response.headers.get('authorization');
    console.log(token);

    res.status(200).json(token);
}
