"use client";

import {
BookOpen,
GraduationCap,
Award,
Clock,
BarChart3
} from "lucide-react";

const stats=[
{
title:"Courses Enrolled",
value:"6",
icon:BookOpen,
color:"bg-blue-100 text-blue-600"
},
{
title:"Completed",
value:"2",
icon:GraduationCap,
color:"bg-green-100 text-green-600"
},
{
title:"Certificates",
value:"2",
icon:Award,
color:"bg-purple-100 text-purple-600"
},
{
title:"Learning Hours",
value:"48",
icon:Clock,
color:"bg-orange-100 text-orange-600"
},
{
title:"Overall Progress",
value:"65%",
icon:BarChart3,
color:"bg-indigo-100 text-indigo-600"
}
];

export default function Statistics(){

return(

<section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">

{stats.map((item)=>{

const Icon=item.icon;

return(

<div
key={item.title}
className="rounded-3xl bg-white p-6 shadow-lg border"
>

<div className={`inline-flex rounded-2xl p-4 ${item.color}`}>

<Icon size={28}/>

</div>

<p className="mt-5 text-gray-500">

{item.title}

</p>

<h2 className="mt-2 text-4xl font-black">

{item.value}

</h2>

</div>

);

})}

</section>

);

}