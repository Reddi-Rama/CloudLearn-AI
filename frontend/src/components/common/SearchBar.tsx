"use client";

import { Search } from "lucide-react";

export default function SearchBar(){

return(

<div className="relative w-full">

<Search
className="absolute left-4 top-4 text-slate-400"
/>

<input
placeholder="Search..."
className="w-full rounded-2xl border py-4 pl-12 pr-5 outline-none focus:border-sky-500"
/>

</div>

);

}