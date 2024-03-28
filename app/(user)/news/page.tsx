"use client";

import { useState } from "react";
import CardContentComponent from "@/components/card/CardContentComponent";
import Pagination from "@/components/pagination/PaginationComponent"; // Import the Pagination component
import React from "react";

export default function News() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);
  const content = Array.from({ length: 20 }).map((_, index) => (
    <CardContentComponent key={index} />
  ));

  const itemsPerPage = 8;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div className="w-full h-auto flex flex-col px-2 md:px-10 lg:px-20 my-4">
      <div>
        <h1 className="text-[24px] font-bold m-1 mt-3">USEFUL CONTENT</h1>
      </div>
      <div className="w-full h-auto p-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-center items-center">
        {content.slice(startIndex, endIndex)}
      </div>
      <div className="flex justify-center mt-4">
        <Pagination
          layout="pagination"
          currentPage={currentPage}
          totalPages={Math.ceil(content.length / itemsPerPage)}
          onPageChange={onPageChange}
          previousLabel="Previous"
          nextLabel="Next"
        />
      </div>
    </div>
  );
}
