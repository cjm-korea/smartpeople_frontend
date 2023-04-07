import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { cookie, serialize } from 'cookie'
import Cookies from "js-cookie";

export default function Login() {
    // const router = useRouter();
    // const [cookie, setCookie] = useState('');

    useEffect(() => {
        async function checkLogin() {
            const res = await fetch('/api/login',{
                method: 'GET'
            });
        }

        // console.log(document.cookie);

        // async function isLogin() {
        //     const res = await fetch('/api/isLogin',{
        //         method: 'GET',
        //         headers: {
        //             Cookie: document.cookie.startsWith('jwt%')
        //         }
        //     });
        // }

        checkLogin();
        // isLogin();
    }, []);
    return (
        <>
            로그인
        </>
    )
}


