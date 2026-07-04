"use client";

interface Props{
title:string;
description:string;
}

export default function ExampleCard({
title,
description,
}:Props){

return(

<div className="rounded-3xl border border-sky-100 bg-sky-50 p-8">

<h2 className="text-2xl font-bold">

{title}

</h2>

<p className="mt-4 leading-8 text-slate-700">

{description}

</p>

</div>

);

}