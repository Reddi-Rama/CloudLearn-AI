"use client";

const points=[
"Easy to understand explanations",
"Real-world examples",
"Visual diagrams",
"Practice questions",
"Mini assessment"
];

export default function KeyPoints(){

return(

<section className="rounded-3xl bg-white p-8 shadow-lg">

<h2 className="mb-8 text-2xl font-bold">

Key Points

</h2>

<div className="space-y-4">

{points.map(point=>(

<div
key={point}
className="rounded-xl bg-slate-100 p-4"
>

✅ {point}

</div>

))}

</div>

</section>

);

}