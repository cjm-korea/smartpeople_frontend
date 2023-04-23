import { useState } from "react"
import Layout from '@/components/layout'
import Head from 'next/head'
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";

export default function Login() {
    const [text, setText] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    function tryLogin(req, res) {
        const data = {
            userName: text,
            password: password
        }
        fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if (response) {
                    // Create Cookie with JWT
                    const option = {
                        httpOnly: true,
                        maxAge: 60 * 60 * 1 // 1 hour
                    };
                    setCookie('jwt', response);

                    router.push({
                        pathname: '/'
                    })
                } else {
                    alert('Wrong password!');
                    setText('');
                    setPassword('');
                }
            });
    }

    return (
        <Layout>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">학원톡톡</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">시범테스트 중 입니다.</p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label className="leading-7 text-sm text-gray-600">Name</label>
                                    <input type='text' value={text} onChange={(e) => setText(e.target.value)} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label className="leading-7 text-sm text-gray-600">Password</label>
                                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button onClick={tryLogin} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">로그인</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}