"use client";

import {
Award,
Download,
BadgeCheck
} from "lucide-react";

const certificates=[
"Python Programming",
"C Programming",
];

export default function CertificateGrid(){

return(

<section className="mx-auto max-w-7xl">

<h1 className="mb-10 text-4xl font-black">

Certificates

</h1>

<div className="grid gap-8 lg:grid-cols-2">

{certificates.map((certificate)=>(

<div
key={certificate}
className="rounded-3xl bg-white p-8 shadow-xl"
>

<div className="flex items-center justify-between">

<Award className="text-yellow-500" size={40}/>

<BadgeCheck className="text-green-500"/>

</div>

<h2 className="mt-8 text-3xl font-bold">

{certificate}

</h2>

<button className="mt-8 flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-4 text-white">

<Download size={18}/>

Download

</button>

</div>

))}

</div>

</section>

);

}