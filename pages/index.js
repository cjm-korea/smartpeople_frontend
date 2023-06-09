import Head from 'next/head'
import Layout from '@/components/layout'
import Image from 'next/image';
import Animation from '@/components/animation';
import { getCookies } from 'cookies-next'
import Link from 'next/link';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { useEffect, useState } from 'react';


export default function Home() {
  // Use isLogin API for check login status
  const [loginStatus, setLoginStatus] = useState(false)
  const isLoginURL = '/api/isLogin'

  useEffect(() => {
    var token = getCookies('jwt')

    // Don't check login status If cookie is not exist
    if (token) {
      async function fetchIsLogin() {
        const headers = {
          'Content-Type': 'application/json',
          'Cookie': token,
        };

        const res = await fetch(isLoginURL, {
          method: 'GET',
          headers: headers
        })

        // Set Login Status
        if (await res.json() === 200) {
          setLoginStatus(true);
        } else {
          setLoginStatus(false);
        }
      }

      fetchIsLogin();
    }
  }, [])


  return (
    <Layout isLogIn={loginStatus}>
      <Head>
        <title>학원톡톡</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <section className='relative w-screen h-[50vh]'>
        <h1 className='absolute w-full h-fit top-12 bottom-0 left-0 right-0 z-10 text-center leading-relaxed p-0 m-0 text-white text-[3rem]'>
          차량 및 출결 연동
          <br />
          학생 관리 서비스
        </h1>
        <Swiper
          className="relative m-0 p-0 w-full h-full"
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          <SwiperSlide className='swiper-slide'>
            <Image
              src="/class_01.jpg"
              width={'0'}
              height={'0'}
              sizes='100vw'
              alt='main_img_1'
              className='w-full h-full'
              quality={100}
              priority='true'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/class_02.png"
              width={'0'}
              height={'0'}
              sizes='100vw'
              alt='main_img_1'
              className='w-full h-full'
              quality={100}
              priority='true'
            />
          </SwiperSlide>
          {/* <SwiperSlide>Slide 3</SwiperSlide> */}
        </Swiper>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">효율적인 학원 운영의 길
              {/* <br class="hidden lg:inline-block">readymade gluten/</br> */}
            </h1>
            <p className="mb-8 leading-relaxed">
              1. 아이의 출결 상황을 알고 싶나요?<br/>
              2. 실시간으로 통학 버스의 위치를 알고 싶나요?<br/>
              3. 이 모든 서비스를 초기비용 없이 이용하고 싶나요?
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">연락하기</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Animation />
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">학원톡톡만의 서비스</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">학원 운영 종합 패키지</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              진짜 이용자가 원하는 방식으로!
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">등하원 알림 서비스</h2>
              <p className="leading-relaxed text-base mb-4">초기비용 없이 학생의 등하원 알림 서비스를 학부모에게 보낼 수 있습니다.</p>
              <Link href='/' className="text-indigo-500 inline-flex items-center">더보기
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">실시간 통학버스 위치보기</h2>
              <p className="leading-relaxed text-base mb-4">학원의 통학버스 위치를 실시간으로 보여주게 됩니다.</p>
              <Link href='/' className="text-indigo-500 inline-flex items-center">서비스 준비중
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            {/* <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Neptune</h2>
              <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              <Link href='/' className="text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Melanchole</h2>
              <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              <Link href='/' className="text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div> */}
          </div>
          <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">자세히 보기</button>
        </div>
      </section>
    </Layout>
  )
}
