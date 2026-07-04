"use client";

import {
Bookmark,
Share2,
Download
} from "lucide-react";

export default function LessonActions(){

return(

<div className="flex flex-wrap gap-4">

<button className="flex items-center gap-3 rounded-xl bg-slate-100 px-6 py-4">

<Bookmark/>

Bookmark

</button>

<button className="flex items-center gap-3 rounded-xl bg-slate-100 px-6 py-4">

<Share2/>

Share

</button>

<button className="flex items-center gap-3 rounded-xl bg-slate-100 px-6 py-4">

<Download/>

Download Notes

</button>

</div>

);

}