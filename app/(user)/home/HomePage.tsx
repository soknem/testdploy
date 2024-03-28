import React from "react";
import SliderComponent from "./components/SliderComponent";
import CardCourseComponent from "@/components/card/CardCourseComponent";
export default function HomePage() {
  const courseComponents = Array.from({ length: 8 }, (_, index) => (
    <CardCourseComponent key={index} />
  ));
  return (
    <div className="w-full h-full flex flex-col mb-4">
      <div>
        <SliderComponent />
      </div>
      <div className="flex flex-col w-full h-auto  px-2 md:px-10 xl:px-30">
        <div>
          <h1 className="text-[24px] font-bold m-1 mt-3">COURSES</h1>
        </div>
        <div className="w-full h-auto p-1 grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center">
          {courseComponents}
        </div>
      </div>
    </div>
  );
}
