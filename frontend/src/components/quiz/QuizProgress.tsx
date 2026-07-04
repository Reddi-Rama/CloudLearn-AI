"use client";

interface Props{
    current:number;
    total:number;
}

export default function QuizProgress({
    current,
    total
}:Props){

    const percent=(current/total)*100;

    return(

        <div className="mb-8 rounded-3xl bg-white p-6 shadow-lg">

            <div className="flex justify-between mb-3">

                <span className="font-semibold">

                    Question {current} of {total}

                </span>

                <span>

                    {Math.round(percent)}%

                </span>

            </div>

            <div className="h-4 rounded-full bg-slate-200 overflow-hidden">

                <div
                style={{width:`${percent}%`}}
                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-600"
                />

            </div>

        </div>

    );

}