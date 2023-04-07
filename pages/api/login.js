import axios from "axios"
import fetch from "node-fetch";

export default async (req, res) => {
    const loginDTO = {
        userName: "CJM",
        password: "1111"
    }
    await fetch('http://localhost:8000/auth/signIn', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginDTO)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
}
