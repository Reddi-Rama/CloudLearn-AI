"use client";

import {
Download,
FileDown,
Video,
Link2
} from "lucide-react";

const resources=[
{
icon:Video,
title:"Lesson Video"
},
{
icon:FileDown,
title:"PDF Notes"
},
{
icon:Download,
title:"Source Code"
},
{
icon:Link2,
title:"Useful Links"
}
];

export default function LessonResources(){

return(

<section className="rounded-3xl bg-white p-8 shadow-lg">

<h2 className="mb-8 text-2xl font-bold">

Resources

</h2>

<div className="grid gap-5 md:grid-cols-2">

{resources.map((item)=>{

const Icon=item.icon;

return(

<button
key={item.title}
className="flex items-center gap-4 rounded-2xl border p-6 hover:bg-sky-50"
>

<Icon className="text-sky-600"/>

{item.title}

</button>

);

})}

</div>

</section>

);

}