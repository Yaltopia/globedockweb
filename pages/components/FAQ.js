import {useState} from "react";

export default function FAQ() {
    const [isOpened, setIsOpened] = useState(false);
    const [isOpenedF, setIsOpenedF] = useState(false);
    const [isOpenedS, setIsOpenedS] = useState(false);

    function toggle() {
        setIsOpened(wasOpened => !wasOpened);
    }
    function toggle2() {
        setIsOpenedF(wasOpened1 => !wasOpened1);
    }
    function toggle3() {
        setIsOpenedS(wasOpened2 => !wasOpened2);
    }
    return (
        <div className="mt-10">
            <div className="text-center mt-10m space-y-2">
                <p className="text-sm">FAQ</p>
                <h1 className="text-2xl lg:text-4xl text-purple-600">Frequently Asked Question</h1>
                <p className="text-base font-light">Do you have questions ? We are here to help!</p>
            </div>

            <div className="flex flex-col space-y-24 mx-10 mt-24 ">
                <div className="flex flex-col border-b-2 justify-center text-center space-y-5 pb-10">
                    <div className="flex justify-between space-x-3">
                        <h1 className="text-xl text-purple-600 text-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h1>
                        <button onClick={toggle}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 className=" w-10 h-10 lg:w-6 lg:h-6 text-purple-600">
                                <path fill-rule="evenodd"
                                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                                      clip-rule="evenodd"/>
                            </svg>
                        </button>
                    </div>
                    {isOpened && (
                    <p className="text-base text-left text-gray-400">Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Cum elit, ullamcorper facilisis  tortor. <br />
                        A dui placerat turpis egestas gravida  varius. Adipiscing vel ridiculus integer morbi </p>
                    )}
                </div>

                <div className="flex flex-col border-b-2 justify-center text-center space-y-5 pb-10">
                    <div className="flex justify-between space-x-3">
                        <h1 className="text-xl text-purple-600 text-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h1>
                        <button onClick={toggle2}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 className=" w-10 h-10 lg:w-6 lg:h-6 text-purple-600">
                                <path fill-rule="evenodd"
                                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                                      clip-rule="evenodd"/>
                            </svg>
                        </button>
                    </div>
                    {isOpenedF && (
                        <p className="text-base text-left text-gray-400">Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Cum elit, ullamcorper facilisis  tortor. <br />
                            A dui placerat turpis egestas gravida  varius. Adipiscing vel ridiculus integer morbi </p>
                    )}
                </div>

                <div className="flex flex-col border-b-2 justify-center text-center space-y-5 pb-10">
                    <div className="flex justify-between space-x-3">
                        <h1 className="text-xl text-purple-600 text-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h1>
                        <button onClick={toggle3}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 className=" w-10 h-10 lg:w-6 lg:h-6 text-purple-600">
                                <path fill-rule="evenodd"
                                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                                      clip-rule="evenodd"/>
                            </svg>
                        </button>
                    </div>
                    {isOpenedS && (
                        <p className="text-base text-left text-gray-400">Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Cum elit, ullamcorper facilisis  tortor. <br />
                            A dui placerat turpis egestas gravida  varius. Adipiscing vel ridiculus integer morbi </p>
                    )}
                </div>
            </div>


        </div>
    )
}



