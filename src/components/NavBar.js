import { useState } from "react"
import { Link } from "react-router-dom"


const NavBar = () => {
    const [display, setDisplay] = useState(false)

    return (
        <div className="w-full flex flex-column justify-center align-center bg-white">
            <div className="w-[90%] my-2 flex justify-center">
                <nav className="w-full flex flex-col md:flex-row justify-between">
                    <div className="flex flex-row justify-between items-center content-start">
                        <div className="inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-[32px] w-[32px] lg:w-[42px] h-[42px]" viewBox="0 0 20 20" fill="#0042CC">
                                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                            </svg>
                            <span className="font-RobotoSlab text-lg text-[#0B0A07] md:text-xl lg:text-2xl xl:text-4xl">CryptoInfo</span>
                        </div>
                        {display
                            ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-[32px] w-[32px] md:hidden" viewBox="0 0 20 20" fill="#0042CC" onClick={() => setDisplay(!display)}>
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            )
                            : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-[32px] w-[32px] md:hidden" viewBox="0 0 20 20" fill="#0042CC" onClick={() => setDisplay(!display)}>
                                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                            )
                        }
                    </div>
                    <ul className={`font-Roboto text-center nav-links animate-fade-in-down md:flex justify-between px-5 ${!display && "hidden md:flex"}`}>
                        <li className="mx-2 text-[#0B0A07] md:text-lg lg:text-xl xl:text-2xl"><Link to="/">Home</Link></li>
                        <li className="mx-2 text-[#0B0A07] md:text-lg lg:text-xl xl:text-2xl"><Link to="/coins">Coins</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default NavBar