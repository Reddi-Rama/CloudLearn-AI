"use client";

import {
BookOpen,
Clock3,
Layers,
Award
} from "lucide-react";

const stats=[
{
icon:BookOpen,
title:"Lessons",
value:"12"
},
{
icon:Layers,
title:"Modules",
value:"4"
},
{
icon:Clock3,
title:"Duration",
value:"8 Hours"
},
{
icon:Award,
title:"Certificate",
value:"Yes"
},
];

export default function CourseStats(){

return(

<section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

{stats.map((item)=>{

const Icon=item.icon;

return(

<div
key={item.title}
className="rounded-3xl bg-white p-8 shadow-lg"
>

<Icon
size={38}
className="text-sky-600"
/>

<p className="mt-6 text-slate-500">

{item.title}

</p>

<h2 className="text-4xl font-black">

{item.value}

</h2>

</div>

);

})}

</section>

);

}