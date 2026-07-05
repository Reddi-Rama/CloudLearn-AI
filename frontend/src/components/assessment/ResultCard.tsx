"use client";

interface Props{
score:number;
total:number;
passed:boolean;
}

export default function ResultCard({
score,
total,
passed
}:Props){

return(

<div className="glass-card rounded-3xl p-8 text-center">

<h2 className="text-3xl font-bold">

Assessment Completed

</h2>

<p className="mt-5 text-slate-600">

You scored

<span className="font-bold">

 {" "} {score}/{total}

</span>

</p>

<p className="mt-4">

{passed
?"Excellent work! You're ready for the next lesson."
:"Don't worry. Review the lesson and try again."}

</p>

</div>

)

}