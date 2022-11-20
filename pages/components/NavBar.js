import { useState } from 'react'
import Image from "next/image";
import Logo from "/public/GlobeDock.jpeg";
import Link from "next/link";



function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}

            </div>
            <div className="flex flex-col items-center text-center ml-4 bg-purple-50 -translate-x-5 w-full h-full">
                <a  className="text-xl font-medium my-4" href="#" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Home
                </a>
                <a className="text-xl font-normal my-4" href="#faq" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    FAQ
                </a>
                <a className="text-xl font-normal my-4" href="#contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Contact Us
                </a>
                <button className="bg-gray-100 text-gray-900 py-3 px-10 text-xl font-normal my-4"  onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Login
                </button>
            </div>
        </div>
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter bg-white px-4 py-4 h-20 items-center mx-20 mt-5 space-x-3">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="lg:w-3/12 md:w-3/12 w-1/2 flex items-center justify-items-start">
                <Image src={Logo} width={ "200px"} height={"80px"} className="image"/>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex space-x-10 lg:space-x-24 items-center justify-center">
                    <a href="#" className="text-base text-gray-900 hover:text-purple-600">
                        Home
                    </a>
                    <a href="#faq" className="text-base text-gray-900 hover:text-purple-600">
                        FAQ
                    </a>
                    <a href="#contact" className="text-base text-gray-900 hover:text-purple-600" >
                        Contact Us
                    </a>

                    <button className="bg-gray-100 hover:bg-gray-400 rounded text-gray-900 py-3 px-20 text-base font-normal ml-20">
                            Login
                    </button>

                </div>
            </div>
        </nav>
    )
}
