import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";
import { FaLeaf } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";



const ScrollToSection = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
};



const Home = () => {
  return (
    <div className='mx:8 md:mx-16'>
      <div className='bg-white '>

        {/* /* landing page */}

        <div className='bg-green-200 h-fit md:max-h-[42vw]  mx-10 grid  grid-cols-1 md:grid-cols-2'>
          <div className=" justify-start p-7 md:p-14 grid gap-6  md:grid-rows-2 h-full " >
            <h1 className='grid grid-rows-2 content-center md:mt-10'>
              <span className='flex justify-start max-w-xl text-slate-800 text-5xl md:text-6xl font-bold '>Welcome to Shree Sheetalnath Homeo Clinic
              </span>
              <span className="flex text-slate-600 justify-start pt-12  max-w-2xl text-2xl "> Explore the natural and holistic healing methods offered by Dr. Roshan Banthia for your overall wellbeing. </span>

            </h1>
            <div>
              <button type="button" class="text-white items-center h-14 w-fit bg-green-700 hover:bg-green-800 flex justify-start focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Discover More</button>
            </div></div>
          <div className='p-8 md:p-14 justify-center h-full'>
            <img className='h-72 md:h-[71%] mt-1 flex ml-12 md:ml-0 md:justify-end w-auto opacity-90 rounded-3xl' src="/src/Group.png" alt="medicine" />
          </div>
        </div>

        {/* Why Homeopathy */}
        <ScrollToSection />
        <div id='why-homeopathy' className='justify-center flex '>
          <h1 className='text-center text-4xl  mt-20 font-semibold '>
            <span className='h-8 text-slate-800'>
              Why Homeopathy </span>
            <span className='flex justify-center my-4'><IoIosArrowDown /></span></h1>

        </div>
        <div className='justify-center  md:m-10 bg-[url("/src/parallax-img.jpeg")] flex h-fit bg-cover bg-fixed'>
          <div className='flex justify-center m-20  items-center bg-green-100 opacity-90 h-fit md:h-[550px] w-[1000px] contain-content '>


            <div className='grid h-fit md:h-full w-full p-5 grid-cols-1 grid-rows-2 md:grid-rows-2 '>

              <div className='flex md:flex-row flex-col gap-2 md:gap-0 justify-stretch'>
                <span className='p-2 items-center md:h-full text-center md:w-fit grid md:grid-rows-2 border-solid border-[1px] border-black'>
                  <h1 className='text-xl md:text-3xl font-bold text-slate-800 h-fit'>Digestion</h1>
                  <div className=''> Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, laboriosam sint odio commodi eveniet Esse.
                  </div>
                </span>
                <span className='md:w-fit grid md:h-full md:grid-rows-2 items-center text-center p-6  border-solid border-[1px] border-black'>
                  <h1 className='text-xl md:text-3xl font-bold text-slate-800 h-fit'>Fatigue</h1>
                  <div>Lorem ipsum dolor sit amet.</div>
                </span>
                <span className='md:w-fit w:full p-6 md:h-full grid items-center text-center md:grid-rows-2 text-wrap border-solid border-[1px] border-black'>
                  <h1 className='text-xl md:text-3xl font-bold text-slate-800 h-fit'>Detoxification</h1>
                  <div>Lorem ipsum dolor sit amet. lorem-4</div>
                </span>
              </div>
              <div className='flex md:flex-row flex-col gap-2 md:gap-0 justify-stretch'>
                <span className=' p-6 md:w-fit md:h-full grid  md:grid-rows-2 items-center text-center  border-solid border-[1px] border-black'>
                  <h1 className='text-xl md:text-3xl font-bold text-slate-800 h-fit'>Women's Health</h1>
                  <div>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ue?</div>
                </span>
                <span className=' p-6 md:w-fit md:h-full items-center text-center grid md:grid-rows-2 border-solid border-[1px] border-black'>
                  <h1 className='text-xl md:text-3xl font-bold text-slate-800 h-fit'>Weight Loss</h1>
                  <div>Lorem ipsum dolor sit amet.</div>
                </span>
                <span className=' p-6 w-auto h-fit md:h-full  border-solid grid items-center text-center md:grid-rows-2 border-[1px] border-black'>
                  <h1 className='text-xl md:text-3xl font-bold text-slate-800 h-fit'>Stress</h1>
                  <div>Lorem ipsum dolor sit amet.</div>
                </span>

              </div>

            </div>

          </div>
        </div>

        {/* Services */}

        <div className='m-10 mt-36 mb-36 '>
          <div className='md:inline-flex justify-between items-center'>
            <div className='max-w-4xl'>
              <h1 className='text-2xl font-semibold text-green-500'>Our Unique Treatments</h1>
              <span className='text-slate-800 text-4xl md:text-5xl font-semibold '><div className='mt-6'>Experience the Benefits </div></span>
              <p className='text-slate-600 text-4xl mb-6 md:mb-0 md:text-5xl font-semibold max-w-5xl '>
                Discover the advantages of our specialized homeopathic treatments designed to enhance your health and wellbeing.</p>
            </div>
            <div className='flex justify-end h-80'>
              <img src="/src/services.png" alt="services" />
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 mt-16 md:mt-36 max-w-7xl'>
            <div>
              <div className='text-4xl h-fit w-fit border-solid border-2 p-3 rounded-2xl border-green-600 text-green-600 '  >
                <FaUserDoctor /></div>
              <h1 className='text-2xl text-slate-800 font-semibold mt-4'>Personalized Care</h1>
              <p className='text-xl text-slate-600'>Receive treatments tailored to your individual health needs.</p>
            </div>
            <div>
              <div className='text-4xl h-fit w-fit border-solid border-2 p-3 rounded-2xl border-green-600 text-green-600 '><FaLeaf /></div>
              <h1 className='text-2xl text-slate-800 font-semibold mt-4'>Natural Remedies</h1>
              <p className='text-xl text-slate-600'>Benefit from safe and natural homeopathic remedies.</p>
            </div>
            <div>
              <div className='text-4xl h-fit w-fit border-solid border-2 p-3 rounded-2xl border-green-600 text-green-600 '> <MdHealthAndSafety /></div>
              <h1 className='text-2xl text-slate-800 font-semibold mt-4'>Holistic Approach</h1>
              <p className='text-xl text-slate-600'>Experience a comprehensive approach to health that considers your mind, body, and spirit.</p>
            </div>



          </div>













        </div>

        {/* Testimonials */}

        <div className='bg-green-200'>
          <section className="">
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
              <h2 className="text-center text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
                Patient Testimonials
              </h2>
              <h3 className='text-center text-xl  tracking-tight text-gray-600 mt-6 sm:text-2xl' >Read what our satisfied patients have to say about their experiences at Shree Sheetalnath Homeo Clinic.</h3>

              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                  <div className="flex items-center gap-4">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                      className="size-14 rounded-full object-cover"
                    />

                    <div>
                      <div className="flex justify-center gap-0.5 text-green-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >

                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >

                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >

                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >

                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >

                        </svg>
                      </div>

                      <p className="mt-0.5 text-lg font-medium text-gray-900">Paul Starr</p>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-700">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
                    consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
                    error officiis atque voluptates magnam!
                  </p>
                </blockquote>

                <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                  <div className="flex items-center gap-4">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                      className="size-14 rounded-full object-cover"
                    />

                    <div>
                      <div className="flex justify-center gap-0.5 text-green-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                      </div>

                      <p className="mt-0.5 text-lg font-medium text-gray-900">Paul Starr</p>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-700">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
                    consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
                    error officiis atque voluptates magnam!
                  </p>
                </blockquote>

                <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                  <div className="flex items-center gap-4">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                      className="size-14 rounded-full object-cover"
                    />

                    <div>
                      <div className="flex justify-center gap-0.5 text-green-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                      </div>

                      <p className="mt-0.5 text-lg font-medium text-gray-900">Paul Starr</p>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-700">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
                    consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
                    error officiis atque voluptates magnam!
                  </p>
                </blockquote>
              </div>
            </div>
          </section>
        </div>
        {/* Start Journey */}

        <div className=' justify-center m-16'>
          <h1 className='text-slate-800 text-5xl text-center font-bold'>Start Your Healing Journey</h1>
          <h2 className='text-slate-600 text-2xl text-center mt-10 mx-auto mb-16 max-w-3xl'>Join us at Shree Sheetalnath Homeo Clinic and experience the benefits of natural homeopathic treatments.
            Schedule your consultation today!</h2>
          <span className='flex justify-center border-2 border-green-600 w-fit h-fit p-3 rounded-xl mx-auto'><a href="/Services"><button className='text-center items-center flex justify-center gap-3 text-xl text-green-800 '>Learn More <FaArrowRight className='flex ' /></button> </a></span>

        </div>


        {/* Get in Touch */}
        <ScrollToSection />
        <div id='contact' className='p-16 bg-green-200'>
          <h2 className='text-slate-800 text-5xl text-center font-bold '>Get in Touch</h2>
          <h3 className='text-slate-600 text-2xl text-center mt-4 mx-auto mb-16 max-w-3xl'>Reach out to us for appointments and inquiries. We're here to help you on your path to healing.</h3>
          <div className='grid grid-cols-2 gap-6 mx-auto w-fit align-baseline justify-center'>
            <div className='flex mx-auto max-w-lg mt-20  gap-x-5'>
              <div className=' border-2 bg-green-500 rounded-xl h-fit p-2 text-white mt-1 text-2xl' >
                <IoCall />
              </div>
              <div className='' >
                <p className='font-bold mb-2'>Book an Appointment</p>
                <p className='mb-2'>Schedule a consultation with Dr. Roshan Banthia</p>
                <p className='mb-2'>Contact us - +91 97820 15573</p>
                <p>dr.roshanbanthia@gmail.com</p>
              </div>
            </div>
            <div className='flex mx-auto max-w-lg mt-20  gap-x-5'>
              <div className=' border-2 bg-green-500 rounded-xl h-fit p-2 text-white mt-1 text-2xl'><FaLocationDot /></div>
              <div>
                <p className='font-bold mb-2'>Location</p>
                <p className='mb-2'>F-2, 69, Raghu Vihar, Durgapura</p>
                <p className='mb-2'>Jaipur, Rajasthan</p>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Home