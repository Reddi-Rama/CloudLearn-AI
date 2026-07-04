"use client";

import { ChevronRight } from "lucide-react";

const modules=[
"Module 1 • Python Basics",
"Module 2 • Data Types",
"Module 3 • Functions",
"Module 4 • Projects"
];

export default function ModulesSection(){

return(

<section className="rounded-3xl bg-white p-10 shadow-lg">

<h2 className="mb-8 text-3xl font-black">

Course Modules

</h2>

<div className="space-y-5">

{modules.map((module,index)=>(

<div
key={index}
className="flex items-center justify-between rounded-2xl border p-6 hover:bg-slate-50"
>

<h3 className="font-semibold">

{module}

</h3>

<ChevronRight/>

</div>

))}

</div>

</section>

);

}