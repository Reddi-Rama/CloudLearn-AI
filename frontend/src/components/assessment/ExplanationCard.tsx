"use client";

interface Props{
question:string;
correctAnswer:string;
explanation:string;
}

export default function ExplanationCard({
question,
correctAnswer,
explanation
}:Props){

return(

<div className="glass-card rounded-3xl p-8">

<h3 className="text-2xl font-bold">

{question}

</h3>

<div className="mt-6 rounded-2xl bg-green-100 p-5">

<p className="font-semibold">

Correct Answer

</p>

<p className="mt-2">

{correctAnswer}

</p>

</div>

<div className="mt-6">

<p className="font-semibold">

Explanation

</p>

<p className="mt-3 leading-8 text-slate-600">

{explanation}

</p>

</div>

</div>

)

}