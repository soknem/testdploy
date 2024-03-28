import React from "react";

export default function CardContentComponent() {
  return (
    <div className="w-full max-w-[500px] min-h-[300px] rounded-[10px] flex flex-col justify-center items-center mx-auto p-2 bg-white hover:scale-[103%] duration-200 z-0">
      <div className="col-span-1 w-full h-full flex justify-center items-center m-2">
        <img
          src="./cyber.png"
          alt=""
          className="object-contain max-w-full max-h-full"
        />
      </div>
      <div className="w-full flex flex-row justify-between px-4 m-2 text-[0.8rem] text-gray-600">
        <h1>Blog</h1>
        <h1>24-Apr-2023</h1>
      </div>
      <div className="w-full m-4 flex flex-col justify-start px-2">
        <h1 className="line-clamp-2 text-gray-800 hover:text-blue-700">
          តើអ្វីទៅជា Cybersecurity
        </h1>
      </div>
    </div>
  );
}
