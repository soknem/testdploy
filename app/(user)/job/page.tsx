import React from "react";
import CardContentComponent from "@/components/card/CardContentComponent";
export default function job() {
  return (
    <div className="w-full h-auto flex flex-col px-2 md:px-10 lg:px-20 my-4">
      <div>
        <h1 className="text-[24px] font-bold m-1 mt-3">USEFUL CONTENT</h1>
      </div>
      <div className="w-full h-auto p-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-center items-center">
        <CardContentComponent />
        <CardContentComponent />
        <CardContentComponent />
        <CardContentComponent />
        <CardContentComponent />
        <CardContentComponent />
      </div>
    </div>
  );
}
