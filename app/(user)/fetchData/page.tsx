'use client'

import { useEffect, useState } from "react";
import CardTest from "./CardTest";

const ENDPOINT ='https://fakestoreapi.com/products/';
type ProductType={
    readonly id:number,
    title:string;
}
 const  Page=()=>{
    const [products,setProducts] =useState<ProductType[]>([]);
 
    useEffect(() => {
        fetch(ENDPOINT)
          .then((res) => res.json())
          .then((data) => setProducts(data));
      }, []);

    return(
        <div>
            {products.map((product:any,index)=>(
                <CardTest key={index} id={product.id} title={product.title} />
            ))}
        </div>
    )
}
export default Page;