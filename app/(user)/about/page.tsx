import React from "react";

export default function about() {
  return (
    <div className="w-full sm:px-10 md:px-20 lg:px-40 ">
      <div className="flex flex-col w-full h-auto px-2 my-4 bg-white mx-4 py-4 px-8">
        <h2 className="font-semibold text-[1rem] text-gray-700 leading-[2rem] mb-2">
          WHAT IS CENTER OF SCIENCE AND TECHNOLOGY ADVANCED DEVELOPMENT
        </h2>
        <p className="font-normal text-[1rem] text-gray-500">
          CSTAD is a noteworthy science and technology center in Cambodia. CSTAD
          has routed Cambodian students to advanced science and technology,
          research, and develop digital skills and our graduates have been
          guaranteed excellent job opportunities with the Top IT company. CSTAD
          will continue to provide high-quality training with the latest
          methodology, and roadmap as well as the best choice for those who want
          to be an IT expert in Cambodia.
        </p>
        <img
          src="./istad logo.png"
          alt=""
          className="w-auto h-full max-h-[300px] mx-auto my-4"
        />
      </div>
      <div className="flex flex-col w-full h-auto px-4 my-4 bg-white mx-4 py-4 md:px-8">
        <h2 className="font-semibold text-[1rem] text-gray-700 leading-[2rem] mb-2">
          VISION
        </h2>
        <p>Advanced IT Institute in Cambodia</p>
      </div>
      <div className="flex flex-col w-full h-auto px-6 my-4 bg-white mx-4 py-4 md:px-8">
        <h2 className="font-semibold text-[1rem] text-gray-700 leading-[2rem] mb-2">
          MISSION
        </h2>
        <p>
          <ul className="list-disc">
            <li>
              Provide the latest methodology with high-quality training and
              mentoring
            </li>
            <li>Build up the capacity and career of IT experts Cambodia</li>
            <li>Consult and connect CSTAD trainees to top IT careers</li>
          </ul>
        </p>
      </div>
      <div className="flex flex-col w-full h-auto px-4 my-4 bg-white mx-4 py-4 md:px-8">
        <h2 className="font-semibold text-[1rem] text-gray-700 leading-[2rem] mb-2">
          SLOGAN
        </h2>
        <p>Start your IT Career with CSTAD</p>
      </div>
      <div className="flex flex-col justify-center items-center tracking-widest w-full h-auto my-4  mx-2 py-2 px-4">
        <p className="font-semibold text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] text-blue-800">IF YOU HAVE ANY QUESTIONS, PLEASE FEEL FREE TO CONTACT US.</p>
      </div>
      <div className="space-y-4 flex flex-col w-full h-auto px-4 my-4 bg-white mx-4 py-4 md:px-8">
        
        <p>No. 24, St. 562, Sangkat Boeung kak I, Khan Toul Kork, Phnom Penh, Cambodia</p>
        <p>(+855) 95 990 910 | (+855) 93 990 910</p>
        <p>Facebook</p>
        <p>Telegram Channel</p>
        <p>info.istad@gmail.com</p>
        <p>www.istad.co</p>
        <p>YouTube</p>
      </div>
    </div>
  );
}
