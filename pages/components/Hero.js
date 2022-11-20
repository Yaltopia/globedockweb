

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center text-center space-y-4 mx-10 lg:mx-20 my-32 py-10">
            <h1 className="text-4xl text-purple-600 ">Let’s #EducateEthiopia Together</h1>
            <p className="text-xl lg:w-1/2 mx-5">
                GlobeDock Academy is a free online learning platform for Ethiopian elementary and high school students.
            </p>

            <div className="flex lg:flex-row md:flex-row flex-col mt-10 space-x-3 text-center items-center space-y-5 lg:space-y-0 md:space-y-0">
                <a href="https://edu.globedockacademy.com/login/index.php" target="_blank" className="bg-gray-100 text-center text-gray-900 py-3 px-16 rounded">Login</a>
                <div className="flex flex-row items-center space-x-3">
                    <a href="https://edu.globedockacademy.com/login/signup.php" target="_blank" className="text-purple-600">Sign Up</a>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-5 h-5 text-purple-600">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                </div>
            </div>
        </div>

    )
}
