"use client";

import { Copy } from "lucide-react";

interface Props{
code:string;
language:string;
}

export default function CodeBlock({
code,
language,
}:Props){

return(

<div className="overflow-hidden rounded-3xl bg-[#0F172A] shadow-xl">

<div className="flex items-center justify-between border-b border-slate-700 px-6 py-4">

<span className="text-sm text-slate-300">

{language}

</span>

<button className="flex items-center gap-2 rounded-xl bg-slate-700 px-4 py-2 text-white">

<Copy size={16}/>

Copy

</button>

</div>

<pre className="overflow-auto p-8 text-green-400">

<code>

{code}

</code>

</pre>

</div>

);

}