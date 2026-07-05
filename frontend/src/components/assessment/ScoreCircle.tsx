"use client";

interface Props{
score:number;
total:number;
}

export default function ScoreCircle({
score,
total
}:Props){

const percentage=Math.round((score/total)*100);

return(

<div className="flex justify-center">

<div className="flex h-52 w-52 items-center justify-center rounded-full border-[12px] border-blue-600">

<div className="text-center">

<h2 className="text-5xl font-bold">

{percentage}%

</h2>

<p className="mt-2 text-slate-500">

Score

</p>

</div>

</div>

</div>

)

}