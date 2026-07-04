"use client";

import { BookOpen } from "lucide-react";

interface Props{
title:string;
progress:number;
}

export default function CourseCard({
title,
progress,
}:Props){

return(

<div className="overflow-hidden rounded-3xl bg-white shadow-xl">

<div className="bg-gradient-to-r from-sky-500 to-indigo-600 p-8 text-white">

<BookOpen size={40}/>

<h2 className="mt-5 text-3xl font-bold">

{title}

</h2>

</div>

<div className="p-8">

<div className="h-3 overflow-hidden rounded-full bg-slate-200">

<div
style={{width:`${progress}%`}}
className="h-full rounded-full bg-gradient-to-r from-sky-500 to-indigo-600"
/>

</div>

<p className="mt-4">

{progress}% Completed

</p>

<button className="mt-8 rounded-xl bg-sky-500 px-6 py-3 text-white">

Continue

</button>

</div>

</div>

);

}