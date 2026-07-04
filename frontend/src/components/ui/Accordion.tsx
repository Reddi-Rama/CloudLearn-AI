"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Props{
title:string;
content:string;
}

export default function Accordion({
title,
content,
}:Props){

const[open,setOpen]=useState(false);

return(

<div className="rounded-2xl border">

<button
onClick={()=>setOpen(!open)}
className="flex w-full items-center justify-between p-6"
>

<h3 className="font-bold">

{title}

</h3>

<ChevronDown
className={`${open?"rotate-180":""} transition`}
/>

</button>

{open&&(

<div className="border-t p-6 text-slate-600">

{content}

</div>

)}

</div>

);

}