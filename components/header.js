import { useState } from "react"
import { FaMoneyCheck } from "react-icons/fa";
import { FiLogIn } from  'react-icons/fi'
import { GiBullseye } from "react-icons/gi";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosClose } from 'react-icons/io'

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#f5f5f7]">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-black"
              href="#">
              학원 톡톡
            </a>

            <button
              className='lg:hidden block text-black cursor-pointer text-xl leading-none px-3 py-1 border-none rounded bg-transparent outline-none focus:outline-none'
              type="button" onClick={() => setNavbarOpen(!navbarOpen)}>
                {navbarOpen ?  <IoIosClose size="36" color="#000000" className="mr-2" /> : <HiMenuAlt3 size="36" color="#000000" className="mr-2" />}
            </button>

          </div>
          <div className={`${navbarOpen ? 'flex' : 'hidden'} lg:flex flex-grow items-center justify-end text-black`} id="example-navbar-danger">
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto text-lg leading-lg">
              <li className="nav-item flex justify-center">
                <a className="ml-2 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75" href="#">
                <GiBullseye size="27" color="#D32F2F" className="mr-2" /> 소개
                </a>
              </li>
              <li className="nav-item flex justify-center">
                <a className="ml-2 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75" href="#">
                <FaMoneyCheck size="27" color="#51abf3" className="mr-2" /> 요금제
                </a>
              </li>
              <li className="nav-item flex justify-center">
                <a className="ml-2 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75" href="#">
                <FiLogIn size="27" color="#000000" className="mr-2" /> 로그인
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}