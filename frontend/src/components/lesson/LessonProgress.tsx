"use client";

interface Props{
    progress?:number;
}

export default function LessonProgress({
    progress=35
}:Props){

return(

<section className="rounded-3xl bg-white p-8 shadow-lg">

<div className="flex justify-between">

<h2 className="text-2xl font-bold">
Lesson Progress
</h2>

<span className="font-bold text-sky-600">
{progress}%
</span>

</div>

<div className="mt-6 h-4 rounded-full bg-slate-200">

<div
className="h-4 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600"
style={{
width:`${progress}%`
}}
/>

</div>

<p className="mt-5 text-slate-500">

Complete this lesson to unlock the next lesson.

</p>

</section>

);

}