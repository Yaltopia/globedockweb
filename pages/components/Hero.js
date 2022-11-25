import Image from "next/image";
import Edu from "/public/Edu.png"

export default function Hero() {
    return (
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 mx-10 lg:mx-20 lg:my-32 ">

            <div className="lg:w-1/2 w-full space-y-5 lg:ml-10 my-32">
            <h1 className="text-4xl text-purple-600 ">Let’s #EducateEthiopia Together</h1>
            <p className="text-xl ">
                GlobeDock Academy is a free online learning platform for Ethiopian elementary and high school students.
            </p>

            <div className="flex lg:flex-row md:flex-row flex-col mt-10 space-x-3 text-center lg:items-center md:items-center items-start space-y-3 lg:space-y-0 md:space-y-0">
                <a href="https://edu.globedockacademy.com/login/index.php"  className="bg-gray-100 text-center text-gray-900 py-3 px-16 rounded">Login</a>
                <div className="flex flex-row items-center space-x-3">
                    <a href="https://edu.globedockacademy.com/login/signup.php"  className="text-purple-600">Sign Up</a>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-5 h-5 text-purple-600">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                </div>
            </div>
            </div>

                <div className="flex lg:w-1/2 w-full justify-center items-center">
                    <Image src={Edu} alt=" Education" className="rounded-xl" width="400" height="400" />
                </div>

            </div>



    )
}
