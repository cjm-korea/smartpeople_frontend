import Head from 'next/head'
import Layout from '@/components/layout'
import Image from 'next/image';
import Animation from '@/components/animation';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { useEffect, useState } from 'react';


export default function Home() {
  // Make private page for admin
  // And use isLogin API for check login validate
  const [checkLogin, setCheckLogin] = useState(null)

  const isLoginURL = '/api/isLogin'
  var token;

  useEffect(() => {
    if(typeof window !== 'undefined') {
      token = window.localStorage.getItem('jwt');
    }

    if (token) {
      async function fetchIsLogin() {
        const headers = {
          'Content-Type': 'application/json',
          Authorization: token,
        };
        const res = await fetch(isLoginURL, {
          method: 'GET',
          headers: headers
        })
        setCheckLogin(res.status);
      }
      fetchIsLogin();
    }
  }, [])


  return (
    <Layout>
      <Head>
        <title>학원톡톡</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <section className='relative w-screen h-[50vh]'>
        <h1 className='absolute top-4 left-0 right-0 z-10 text-center leading-relaxed p-0 m-0 text-white text-[4rem]'>
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
              className='w-full h-full'
              quality={100}
            />
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          ...
        </Swiper>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">효율적인 학원 운영의 길
              {/* <br class="hidden lg:inline-block">readymade gluten/</br> */}
            </h1>
            <p className="mb-8 leading-relaxed">아이의 학원 스케쥴이나 수업에 잘 참석하고 있는지에 대한 여부를 궁금해하는 학부모가 많으나 학원의 관리 인력 및 시스템 부족으로 아이들의 정보를 실시간으로 알려주지 못합니다.
              학원에는 근무자 간 체계적인 업무 관리 채널이 없습니다. 근무자 간 체계적인 업무 관리 채널이 없기 때문에 불편사항에 대한 빠른 피드백과 업무 효용이 잘 일어나고 있지 않습니다.</p>
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
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">기존방식에서 벗어나 학원 운영관리가 아닌 소비자들이 원하는 방식으로 해결방법</p>
          </div>
          <div className="flex flex-wrap">
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
              <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              <a className="text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">The Catalyzer</h2>
              <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              <a className="text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Neptune</h2>
              <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              <a className="text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Melanchole</h2>
              <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              <a className="text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        </div>
      </section>

    </Layout>
  )
}
