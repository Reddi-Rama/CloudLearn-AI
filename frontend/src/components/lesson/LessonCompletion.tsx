"use client";

import Link from "next/link";
import {
CheckCircle2,
ArrowRight
} from "lucide-react";

export default function LessonCompletion(){

return(

<section className="rounded-3xl bg-gradient-to-r from-green-500 to-emerald-600 p-10 text-white shadow-2xl">

<CheckCircle2 size={70}/>

<h2 className="mt-6 text-4xl font-black">

Lesson Completed

</h2>

<p className="mt-4 text-lg">

Great work! Continue to the next lesson or attempt the lesson assessment.

</p>

<div className="mt-10 flex gap-5">

<Link
href="/assessments/python-introduction"
className="rounded-2xl bg-white px-8 py-4 font-bold text-green-600"
>

Lesson Assessment

</Link>

<Link
href="/lessons/next"
className="flex items-center gap-3 rounded-2xl bg-green-700 px-8 py-4 font-bold"
>

Next Lesson

<ArrowRight/>

</Link>

</div>

</section>

);

}