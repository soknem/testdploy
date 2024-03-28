import React from 'react'
type PropsType = {
    params: {
      id: number;
    };
    searchParam: any;
  };

  const ENDPOINT ='https://fakestoreapi.com/products/';
  const fetApi=async(id:number)=>{
    const res=await fetch(`${ENDPOINT}${id}`);
    const data=await res.json();
    return data;
  }
  
export default async function page(props:PropsType) {
    const data=await fetApi(props.params.id)
  return (
    <div>
      
    </div>
  )
}
