import {useState} from "react";

export default function FAQ() {
    const [isOpened, setIsOpened] = useState(false);
    const [isOpenedF, setIsOpenedF] = useState(false);
    const [isOpenedS, setIsOpenedS] = useState(false);
    const [isOpenedC, setIsOpenedC] = useState(false);

    function toggle() {
        setIsOpened(wasOpened => !wasOpened);
    }
    function toggle2() {
        setIsOpenedF(wasOpened1 => !wasOpened1);
    }
    function toggle3() {
        setIsOpenedS(wasOpened2 => !wasOpened2);
    }
    function toggle4() {
        setIsOpenedC(wasOpened3 => !wasOpened3);
    }
    return (
        <div className="mt-10 lg:mx-20" id="faq">
            <div className="text-center mt-10m space-y-2">
                <p className="text-sm">FAQ</p>
                <h1 className="text-2xl lg:text-4xl text-purple-600">Frequently Asked Question</h1>
                <p className="text-base font-light">Do you have questions ? We are here to help!</p>
            </div>

            <div className="flex flex-col space-y-24 mx-10 mt-24 ">
                <div className="flex flex-col border-b-2 justify-center text-center space-y-5 pb-10">
                    <div className="flex justify-between space-x-3">
                        <h1 className="text-xl text-purple-600 text-bold">What is GlobeDock Academy used for?</h1>
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
                    <p className="text-base text-left text-gray-400">
                        GlobeDock Academy is personalized learning resource for all ages. It offers practice exercises, instructional videos, and a personalized learning dashboard that empower ethiopian Grade 1 to 12 to study at their own pace in and outside of the classroom.</p>
                    )}
                </div>

                <div className="flex flex-col border-b-2 justify-center text-center space-y-5 pb-10">
                    <div className="flex justify-between space-x-3">
                        <h1 className="text-xl text-purple-600 text-bold">Why is GlobeDock Academy so important?</h1>
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
                        <p className="text-base text-left text-gray-400">
                            GlobeDock Academy is the leading online learning resource used and trusted by US teachers and students. of teachers and students who have used Globe Dock Academy report it is an effective learning resource, more than any other core curriculum online learning resource.
                        </p>
                    )}
                </div>


                <div className="flex flex-col border-b-2 justify-center text-center space-y-5 pb-10">
                    <div className="flex justify-between space-x-3">
                        <h1 className="text-xl text-purple-600 text-bold">Is Globe Dock Academy a good way to study?</h1>
                        <button onClick={toggle4}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 className=" w-10 h-10 lg:w-6 lg:h-6 text-purple-600">
                                <path fill-rule="evenodd"
                                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                                      clip-rule="evenodd"/>
                            </svg>
                        </button>
                    </div>
                    {isOpenedC && (
                        <p className="text-base text-left text-gray-400">
                         Globe Dock Academy is a reliable and highly useful source of academic learning. While it caters specifically to students in primary school through the college prep phase, anyone with a hunger to learn can benefit from Globe Dock Academy.
                        </p>
                    )}
                </div>

                <div className="flex flex-col border-b-2 justify-center text-center space-y-5 pb-10">
                    <div className="flex justify-between space-x-3">
                        <h1 className="text-xl text-purple-600 text-bold">Is Globe Dock Academy Full Free?</h1>
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
                        <p className="text-base text-left text-gray-400">
                            Created by experts, Globe Dock Academy library of trusted, standards-aligned practice and lessons covers math K-12 through early college, grammar, science, history, AP®, SAT®, and more. It is all free for learners and teachers.
                        </p>
                    )}
                </div>
            </div>


        </div>
    )
}



