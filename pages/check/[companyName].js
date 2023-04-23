import Layout from "@/components/layout";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Check() {
    const router = useRouter();
    const [myNumber, setMyNumber] = useState('');

    const handleChange = (e) => {
        const regex = /^[0-9\b -]{0,13}$/;
        if (regex.test(e.target.value)) {
            setMyNumber(e.target.value);
        }
    }

    useEffect(() => {
        if (myNumber.length === 10) {
            setMyNumber(myNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
        }
        if (myNumber.length === 13) {
            setMyNumber(myNumber.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
        }
    }, [myNumber]);


    // Make messageing process
    // 등원
    function dropOff() {
        console.log(myNumber)
    }

    // 하원
    function dropOff() {
        console.log(myNumber)
    }
    return (
        // Make special header
        <>
            <Head>
                <title>학원톡톡</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#f5f5f7]">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-black"
                            href="/">
                            학원 톡톡
                        </a>
                    </div>
                </div>
            </nav>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <p className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">학원톡톡</p>
                        <h1 className="lg:w-2/3 mx-auto leading-relaxed text-base">{router.query.companyName}의 출석체크 페이지입니다.</h1>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex justify-center flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label className="leading-7 text-sm text-gray-600">자신의 번호를 입력해주세요</label>
                                    <input type="text" onChange={handleChange} value={myNumber} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center flex-row py-12">
                            <div className="p-1 w-full">
                                <button onClick={dropOff} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">등원</button>
                            </div>
                            <div className="p-1 w-full">
                                <button className="flex mx-auto text-white bg-[#e54304] border-0 py-2 px-8 focus:outline-none hover:bg-[#ee6002] rounded text-lg">하원</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}