import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import Learn from "../public/learn.png";
import Person from "../public/person.png";
import Image from "next/image";



export default function Home() {
  return (
   < >
    <NavBar />

       {/*Hero Section*/}
       <Hero />

       {/*About Section*/}

       <div className="aboutsec flex flex-col md:flex-row lg:flex-row bg-gray-50 w-full mt-10 justify-center items-center lg:space-x-5  space-y-10 lg:space-y-0 md:space-y-0 py-10 px-10 ">

           <div className="flex flex-col lg:w-1/3 lg:mt-0 md:mt-0 mt-10 mx-3 items-center space-y-3">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" className="w-10 h-10 lg:w-24 lg:h-24 text-purple-600 ">
                   <path stroke-linecap="round" stroke-linejoin="round"
                         d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/>
               </svg>
               <h1 className="text-center font-bold text-2xl lg:text-4xl"> Personalized Learning </h1>
               <p className=" text-center mt-3 lg:text-base  text-sm"> Students practice at their own pace, first filling in gaps <br />
                   in their understanding and then accelerating their learning.</p>
           </div>

           <div className="flex flex-col  lg:w-1/3 mx-3 items-center space-y-3">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" className="w-10 h-10 lg:w-24 lg:h-24 text-purple-600">
                   <path stroke-linecap="round"
                         d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"/>
               </svg>
               <h1 className="text-center font-bold text-2xl lg:text-4xl"> Trusted Content </h1>
               <p className=" text-center mt-3 lg:text-base text-sm"> Students practice at their own pace, first filling in gaps <br />
                   in their understanding and then accelerating their learning.</p>
           </div>

           <div className="flex flex-col lg:w-1/3 mx-3 items-center space-y-3 ">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" className="w-10 h-10 lg:w-24 lg:h-24 text-purple-600">
                   <path stroke-linecap="round" stroke-linejoin="round"
                         d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"/>
               </svg>
               <h1 className="text-center font-bold text-2xl lg:text-4xl"> Tools to empower Teachers </h1>
               <p className=" text-center mt-3 lg:text-base text-sm"> Students practice at their own pace, first filling in gaps <br />
                   in their understanding and then accelerating their learning.</p>
           </div>
       </div>


       {/*Numbers Section*/}

       <div className="flex flex-col md:flex-row lg:flex-row mx-12 lg:mx-20 text-center lg:text-right items-center mt-16 lg:space-x-12 justify-evenly">

           <div className="lg:border-r-2 border-b-2 lg:border-b-0 md:border-b-0  pr-3 items-center justify-center" style={{height: '200px' } }>
               <h1 className="text-4xl text-purple-600 font-bold mt-12">1000+</h1>
               <p className="text-base">Lorem ipsum dolor sit amet,consectetur
                   <br />
                    adipiscing elit.</p>
           </div>

           <div className="lg:border-r-2 border-b-2 lg:border-b-0 md:border-b-0 pr-3 items-center justify-center " style={{height: '200px'}}>
               <h1 className="text-4xl text-purple-600 font-bold mt-12 ">20+</h1>
               <p className="text-base">Lorem ipsum dolor sit amet,consectetur
                   <br />
                   adipiscing elit.</p>
           </div>

           <div className="pr-3 items-center justify-center " style={{height: '200px'}}>
               <h1 className="text-4xl text-purple-600 font-bold mt-12 ">20+</h1>
               <p className="text-base">Lorem ipsum dolor sit amet,consectetur
                   <br />
                   adipiscing elit.</p>
           </div>

       </div>

       {/*Learn More Section*/}

       <section className="text-gray-600 body-font lg:mx-20">
           <div className="mx-10 flex px-5 py-24 md:flex-row flex-col items-center">
               <div
                   className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                   <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-purple-600">You can learn
                       <br className="hidden lg:inline-block" />anything.
                   </h1>
                   <p className="mb-8 leading-relaxed">Build a deep, solid understanding in math,
                       science, and more.</p>
               </div>
               <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                   <Image className="object-cover object-center rounded" width="720px" height="600px" alt="hero" src={Learn} />
               </div>
           </div>
       </section>




       {/*Testimonial Section*/}

       <section className="text-gray-600 body-font lg:mx-20 -mt-10">
           <div className="container px-5 py-24 mx-auto">
               <h1 className="text-3xl text-purple-600 font-medium title-font text-gray-900 mb-12 text-center">Testimonials</h1>
               <div className="flex flex-wrap -m-4">
                   <div className="p-4 md:w-1/2 w-full">
                       <div className="h-full bg-purple-100 p-8 rounded">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-8 h-8 text-gray-800 mb-4" viewBox="0 0 975.036 975.036">
                               <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                           </svg>
                           <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie  microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
                           <a class="inline-flex items-center">
                               <Image alt="testimonial" src={Person} width="50px" height="50px" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
              <span className="text-gray-500 text-sm">UI DEVELOPER</span>
            </span>
                           </a>
                       </div>
                   </div>
                   <div className="p-4 md:w-1/2 w-full">
                       <div className="h-full bg-purple-100 p-8 rounded">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-8 h-8 text-gray-800 mb-4" viewBox="0 0 975.036 975.036">
                               <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                           </svg>
                           <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie  microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
                           <a className="inline-flex items-center">
                               <Image alt="testimonial" src={Person} width="50px" height="50px" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900">Alper Kamu</span>
              <span className="text-gray-500 text-sm">DESIGNER</span>
            </span>
                           </a>
                       </div>
                   </div>
               </div>

               <div className="flex flex-wrap -m-4">
                   <div className="p-4 md:w-1/2 w-full">
                       <div className="h-full bg-purple-100 p-8 rounded">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                className="block w-8 h-8 text-gray-900 mb-4" viewBox="0 0 975.036 975.036">
                               <path
                                   d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                           </svg>
                           <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch
                               everyday carry neutra before they sold out fixie microdosing. Tacos pinterest fanny
                               pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
                           <a className="inline-flex items-center">
                               <Image alt="testimonial" src={Person}
                                      width="50px" height="50px"
                                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                               <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
              <span className="text-gray-500 text-sm">UI DEVELOPER</span>
            </span>
                           </a>
                       </div>
                   </div>
                   <div className="p-4 md:w-1/2 w-full">
                       <div className="h-full bg-purple-100 p-8 rounded">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                className="block w-8 h-8 text-gray-900 mb-4" viewBox="0 0 975.036 975.036">
                               <path
                                   d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                           </svg>
                           <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch
                               everyday carry neutra before they sold out fixie microdosing. Tacos pinterest fanny
                               pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
                           <a className="inline-flex items-center">
                               <Image alt="testimonial" src={Person}
                                      width="50px" height="50px"
                                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                               <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900">Alper Kamu</span>
              <span className="text-gray-500 text-sm">DESIGNER</span>
            </span>
                           </a>
                       </div>
                   </div>
               </div>

           </div>
       </section>

       {/*FAQ Section*/}

       <FAQ />


       {/*Static Text Section*/}
       <div className=" flex flex-col bg-purple-100  w-full text-center space-y-3 justify-center items-center mt-10" style={{height:'300px'}}>
           <h1 className="text-2xl lg:text-4xl text-purple-600 font-bold">You Still Have Questions</h1>
           <p className="text-base  text-gray-900">Feel free to contact us !</p>
           <a className="text-purple-600 text-xl " href="mailto:contact@globedockacademy.com">contact@globedockacademy.com</a>
           <a className="text-gray-600 text-base" href="tel:+2519-111111">+251-91111111</a>
       </div>

       {/*Static Mobile Application Section*/}

       <div className="mt-5 mx-10 lg:mx-10 mb-10 p-5">

           <div
               className="p-4 w-full text-center bg-white rounded-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700">
               <h3 className="mb-2 text-3xl font-bold text-purple-600 dark:text-white">Learn from anywhere</h3>
               <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Stay up to date and move work
                   forward with Globe Dock Academy</p>
               <div className="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                   <a href="#"
                      className="w-full sm:w-auto flex bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                       <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab"
                            data-icon="apple"
                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                           <path fill="currentColor"
                                 d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z">
                           </path>
                       </svg>
                       <div className="text-left">
                           <div className="mb-1 text-xs">Download on the</div>
                           <div className="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
                       </div>
                   </a>
                   <a href="#"
                      className="w-full sm:w-auto flex bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                       <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab"
                            data-icon="google-play"
                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                           <path fill="currentColor"
                                 d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z">
                           </path>
                       </svg>
                       <div className="text-left">
                           <div className="mb-1 text-xs">Get in on</div>
                           <div className="-mt-1 font-sans text-sm font-semibold">Google Play</div>
                       </div>
                   </a>
               </div>
           </div>
       </div>

       <Footer />

   </>
  )
}
