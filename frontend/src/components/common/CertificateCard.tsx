"use client";

import {
Award,
Download,
BadgeCheck
} from "lucide-react";

interface Props{
course:string;
}

export default function CertificateCard({
course,
}:Props){

return(

<div className="rounded-3xl border-4 border-yellow-300 bg-white p-8 shadow-xl">

<div className="flex justify-between">

<Award
size={50}
className="text-yellow-500"
/>

<BadgeCheck
className="text-green-500"
/>

</div>

<h2 className="mt-8 text-3xl font-black">

{course}

</h2>

<p className="mt-4 text-slate-500">

Verified Certificate

</p>

<button className="mt-8 flex items-center gap-3 rounded-xl bg-sky-500 px-6 py-3 text-white">

<Download size={18}/>

Download

</button>

</div>

);

}