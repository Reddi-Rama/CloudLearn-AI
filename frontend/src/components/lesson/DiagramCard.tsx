"use client";

interface Props{
title:string;
image:string;
}

export default function DiagramCard({
title,
image,
}:Props){

return(

<div className="rounded-3xl bg-white p-8 shadow-lg">

<h2 className="mb-6 text-2xl font-bold">

{title}

</h2>

<img
src={image}
alt={title}
className="w-full rounded-2xl"
/>

</div>

);

}