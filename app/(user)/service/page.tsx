"use client";
import CardServiceComponent from "@/components/card/CardServiceComponent";
import CardProduct from "@/components/card/CardServiceComponent";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ENDPOINT = "https://fakestoreapi.com/products/";

export default function page() {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch(ENDPOINT)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="h-auto w-full px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-2">
      {products.map((product: any, index) => (
        <CardServiceComponent
          onClick={() => router.push(`/service/${product.id}`)}
          key={index}
          title={product.title}
          image={product.image}
          description={product.description}
        />
      ))}
    </div>
  );
}
