import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react"

export default function Login() {
    const router = useRouter();
    function checkLogin() {
        axios.get('/api/isLogin')
        .then(res => {
            console.log(res);
            if(res.status === 200 && res.data.name){
                // 로그인
                
            }else {
                // 로그인 안됨
                router.push('/login')
            }
        })
    }

    useEffect(() => {
        checkLogin();
    }, []);

    return(
        <>
            로그인
        </>
    )
}