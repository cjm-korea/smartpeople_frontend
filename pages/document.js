import Layout from "@/components/layout";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { columns } from "@/components/data/columns";
import * as qrcode from "qrcode";

export default function Document(props) {
    const router = useRouter();
    const [QR, setQR] = useState('');

    // Must Logined status for this page using 
    if(props.statusCode !== 200){
        router.push({
            pathname: '/login'
        })
    }

    function qrGenerate() {
        qrcode.toDataURL(`http://localhost:3000/${props.user?.companyName}`).then(setQR);
    }

    useEffect(() => {
        qrGenerate();
    }, [])

    return (
        <Layout isLogIn={props.statusCode === 200 ? true : false}>
            <Head>
                <title>학원톡톡</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            {props.statusCode === 200 ? (<>
                <section className="text-gray-600 body-font">
                    <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">어서오세요 {props.user.userName}님.</h1>
                            <p className="mb-1 leading-relaxed">상호명: {props.user?.companyName}</p>
                            <p className="mb-1 leading-relaxed">위치: {props.user?.companyAddress}</p>
                            <p className="mb-1 leading-relaxed">번호: {props.user?.companyNumber}</p>
                        </div>
                        <div className="flex justify-center lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <img src={QR} width={200} height={200} alt="QR code" />
                        </div>
                    </div>
                </section>

                <section className="text-gray-600 body-font">
                    <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center w-full">
                        <Box sx={{ height: 400, width: '100%' }}>
                            <DataGrid
                                getRowId={(row) => row.userName}
                                rows={props.user?.students}
                                columns={columns}
                            />
                        </Box>
                    </div>
                </section>
            </>) : 
            <></>}
        </Layout>
    )
}

// This gets called on every request
export async function getServerSideProps({ req, res }) {
    const token = req.headers.cookie?.split('=')[1]
    const getUserUrl = 'http://localhost:8000/auth/isLogin'

    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    };
    const userData = await fetch(getUserUrl, {
        method: 'GET',
        headers: headers
    }).then(data => data.json())

    return { props: userData }
}