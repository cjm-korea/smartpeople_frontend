import { useState } from "react"

export default function Header() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#f5f5f7] mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-black"
              href="#">
              학원 톡톡
            </a>

            <button
              className='lg:hidden block text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent outline-none focus:outline-none'
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              메뉴
              <i className="fas fa-bars"></i>
            </button>

          </div>
          <div className={ `${navbarOpen ? 'flex' : 'hidden'} lg:flex flex-grow items-center text-black`}
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                  href="#"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg opacity-75"></i><span className="ml-2">소개</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                  href="#"
                >
                  <i className="fab fa-twitter text-lg leading-lgopacity-75"></i><span className="ml-2">요금제</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                  href="#"
                >
                  <i className="fab fa-pinterest text-lg leading-lg opacity-75"></i><span className="ml-2">로그인</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </>
    )
}