import CardCourseComponent from "@/components/card/CardCourseComponent";
import React from "react";

export default function course() {
  const courseComponents = Array.from({ length: 8 }, (_, index) => (
    <CardCourseComponent key={index} />
  ));
  return (
    <div className="flex flex-col w-full h-auto  px-2 md:px-10 lg:px-20 my-4">
      <div>
        <h1 className="text-[24px] font-bold m-1 mt-3">COURSES</h1>
      </div>
      <div className="w-full h-auto p-1 grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center items-center">
        {courseComponents}
      </div>
    </div>
  );
}
