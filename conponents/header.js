export default function Header() {
    return (
        <>
            <div className="bg-gray-400 font-sans leading-normal tracking-normal">

                <nav className="flex items-center justify-between flex-wrap bg-[#f5f5f7] p-6 fixed w-full z-10 top-0">
                    <div className="flex items-center flex-shrink-0 text-black mr-6">
                        <a className="text-black no-underline hover:text-white hover:no-underline" href="#">
                            <span className="text-2xl pl-2"><i className="em em-grinning"></i>학원 톡톡</span>
                        </a>
                    </div>

                    <div className="block sm:hidden">
                        <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-white border-gray-600 hover:text-white hover:border-white">
                            <div className="fill-current h-3 w-3">Menu</div>
                        </button>
                    </div>

                    <div className="w-full flex-grow lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0" id="nav-content">
                        <ul className="list-reset lg:flex justify-end flex-1 items-center text-black">
                            <li className="mr-3">
                                <a className="inline-block py-2 px-4 text-white no-underline" href="#">Active</a>
                            </li>
                            <li className="mr-3">
                                <a className="inline-block no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">link</a>
                            </li>
                            <li className="mr-3">
                                <a className="inline-block no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">link</a>
                            </li>
                            <li className="mr-3">
                                <a className="inline-block no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">link</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}