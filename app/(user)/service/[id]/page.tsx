import React from "react";
import CardServiceComponent from "@/components/card/CardServiceComponent";

type PropsType = {
 params: { id: string };
 searchParams: { [key: string]: string | string[] | undefined };
};

const ENDPOINT = 'https://fakestoreapi.com/products/';

async function getData(id: string) {
 const res = await fetch(`${ENDPOINT}${id}`);
 const data = await res.json();
 return data;
}

const Page = async (props: PropsType) => {
 let data = await getData(props.params.id);
 return (
    <div className="w-full h-auto min-h-full grid place-content-center m-2">
      <CardServiceComponent
        title={data?.title || "NoTitle"}
        description={data?.description || "No Description"}
        image={
          data?.image ||
          "https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1"
        }
      />
    </div>
 );
};

export default Page;
