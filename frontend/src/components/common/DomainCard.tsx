"use client";

interface Props{
title:string;
courses:number;
icon:string;
}

export default function DomainCard({
title,
courses,
icon,
}:Props){

return(

<div className="rounded-[32px] bg-white p-8 shadow-xl transition hover:-translate-y-2 hover:shadow-2xl">

<div className="text-5xl">

{icon}

</div>

<h2 className="mt-6 text-3xl font-bold">

{title}

</h2>

<p className="mt-3 text-slate-500">

{courses} Courses

</p>

<button className="mt-8 rounded-xl bg-sky-500 px-6 py-3 text-white">

Explore

</button>

</div>

);

}