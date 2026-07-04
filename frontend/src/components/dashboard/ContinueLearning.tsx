"use client";

import { PlayCircle } from "lucide-react";

export default function ContinueLearning(){

return(

<div className="rounded-3xl bg-white p-8 shadow-xl border">

<div className="flex items-center justify-between">

<div>

<p className="text-gray-500">

Continue Learning

</p>

<h2 className="mt-2 text-3xl font-bold">

Python Programming

</h2>

<p className="mt-3 text-gray-500">

Module 2 • Lesson 1

</p>

</div>

<button className="rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 px-6 py-4 text-white">

<PlayCircle/>

</button>

</div>

<div className="mt-8">

<div className="flex justify-between">

<p>Progress</p>

<p>42%</p>

</div>

<div className="mt-3 h-4 overflow-hidden rounded-full bg-gray-200">

<div className="h-full w-[42%] rounded-full bg-gradient-to-r from-sky-500 to-indigo-600"/>

</div>

<p className="mt-4 text-gray-500">

5 / 12 Lessons Completed

</p>

<button className="mt-8 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 px-8 py-4 text-white font-semibold">

Resume Learning

</button>

</div>

</div>

);

}