import CardServiceComponent from "@/components/card/CardServiceComponent";
import React from "react";
type PropsType = {
  params: {
    id: number;
  };
  searchParam: any;
};
const ENDPOINT ='https://fakestoreapi.com/products/';
export const  getData= async (id:number)=>{
  const res = await fetch(`${ENDPOINT}${id}`);
	const data = await res.json();

return data;
}

export default async  function page(props: PropsType) {
  let data = await getData(props.params.id);
  return (
    <div className="w-full h-auto min-h-full grid place-content-center m-2">
      <CardServiceComponent title={data?.title || "NoTitle"}
				description={data?.description || "No Description"}
				image={
					data?.image ||
					"https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1"
				}
        />
    </div>
  );
}
