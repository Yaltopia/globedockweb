import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";



export default function Home() {
  return (
   <>
    <NavBar />

       {/*Hero Section*/}
       <Hero />

       {/*About Section*/}

       <div className="aboutsec flex flex-col md:flex-row lg:flex-row bg-gray-50 w-full mt-10 justify-center items-center lg:space-x-5 my-auto space-y-10 lg:space-y-0 md:space-y-0 py-10 ">

           <div className="flex flex-col lg:w-1/3 lg:mt-0 md:mt-0 mt-10 mx-3 items-center space-y-3">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" className="w-24 h-24 text-purple-600 ">
                   <path stroke-linecap="round" stroke-linejoin="round"
                         d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/>
               </svg>
               <h1 className="text-center font-bold text-2xl lg:text-4xl"> Personalized Learning </h1>
               <p className=" text-center mt-3 lg:text-base  text-sm"> Students practice at their own pace, first filling in gaps <br />
                   in their understanding and then accelerating their learning.</p>
           </div>

           <div className="flex flex-col  lg:w-1/3 mx-3 items-center space-y-3">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" className="w-24 h-24 text-purple-600">
                   <path stroke-linecap="round"
                         d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"/>
               </svg>
               <h1 className="text-center font-bold text-2xl lg:text-4xl"> Trusted Content </h1>
               <p className=" text-center mt-3 lg:text-base text-sm"> Students practice at their own pace, first filling in gaps <br />
                   in their understanding and then accelerating their learning.</p>
           </div>

           <div className="flex flex-col lg:w-1/3 mx-3 items-center space-y-3 ">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" className="w-24 h-24 text-purple-600">
                   <path stroke-linecap="round" stroke-linejoin="round"
                         d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"/>
               </svg>
               <h1 className="text-center font-bold text-2xl lg:text-4xl"> Tools to empower Teachers </h1>
               <p className=" text-center mt-3 lg:text-base text-sm"> Students practice at their own pace, first filling in gaps <br />
                   in their understanding and then accelerating their learning.</p>
           </div>
       </div>


       {/*Numbers Section*/}

       <div className="flex flex-col md:flex-row lg:flex-row mx-12 text-center lg:text-right items-center mt-16 lg:space-x-12 justify-evenly">

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

       <section className="text-gray-600 body-font">
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
                   <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
               </div>
           </div>
       </section>




       {/*Testimonial Section*/}

       <section className="text-gray-600 body-font">
           <div className="container px-5 py-24 mx-auto">
               <h1 className="text-3xl text-purple-600 font-medium title-font text-gray-900 mb-12 text-center">Testimonials</h1>
               <div className="flex flex-wrap -m-4">
                   <div className="p-4 md:w-1/2 w-full">
                       <div className="h-full bg-purple-100 p-8 rounded">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-8 h-8 text-gray-800 mb-4" viewBox="0 0 975.036 975.036">
                               <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                           </svg>
                           <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
                           <a class="inline-flex items-center">
                               <img alt="testimonial" src="https://dummyimage.com/106x106" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
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
                           <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
                           <a className="inline-flex items-center">
                               <img alt="testimonial" src="https://dummyimage.com/107x107" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
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
                               everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny
                               pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
                           <a className="inline-flex items-center">
                               <img alt="testimonial" src="https://dummyimage.com/106x106"
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
                               everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny
                               pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
                           <a className="inline-flex items-center">
                               <img alt="testimonial" src="https://dummyimage.com/107x107"
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
       <div className=" flex flex-col bg-purple-100  w-full text-center space-y-2 justify-center items-center mt-10" style={{height:'300px'}}>
           <h1 className="text-2xl lg:text-4xl text-purple-600 font-bold">You Still Have Questions</h1>
           <p className="text-base  text-gray-900">Feel free to contact us !</p>
       </div>

       {/*Contact Us Section*/}

       <ContactUs />

       <Footer />

   </>
  )
}
