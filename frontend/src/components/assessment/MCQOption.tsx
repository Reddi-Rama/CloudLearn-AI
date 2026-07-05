"use client";

interface Props{
current:number;
total:number;
onSelect:(n:number)=>void;
}

export default function QuestionNavigator({
current,
total,
onSelect
}:Props){

return(

<div className="grid grid-cols-5 gap-3">

{Array.from({length:total}).map((_,i)=>(

<button

key={i}

onClick={()=>onSelect(i+1)}

className={`h-12 rounded-xl transition

${current===i+1

?"bg-blue-600 text-white"

:"glass-card"

}`}

>

{i+1}

</button>

))}

</div>

)

}