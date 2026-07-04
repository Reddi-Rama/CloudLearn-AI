"use client";

interface Props{
current:number;
total:number;
}

export default function Pagination({
current,
total,
}:Props){

return(

<div className="flex items-center justify-center gap-3">

{Array.from({length:total}).map((_,i)=>(

<button
key={i}
className={`h-11 w-11 rounded-full

${current===i+1
?"bg-sky-500 text-white"
:"bg-slate-100"}
`}
>

{i+1}

</button>

))}

</div>

);

}