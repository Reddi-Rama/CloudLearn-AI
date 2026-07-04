"use client";

interface Props{
    current:number;
    total:number;
}

export default function ProgressBar({
    current,
    total
}:Props){

    const percent=(current/total)*100;

    return(

        <div className="mb-8 rounded-3xl bg-white p-6 shadow-lg">

            <div className="mb-3 flex justify-between">

                <h3 className="font-semibold">
                    Question {current} of {total}
                </h3>

                <span>{Math.round(percent)}%</span>

            </div>

            <div className="h-4 rounded-full bg-slate-200 overflow-hidden">

                <div
                style={{width:`${percent}%`}}
                className="h-full rounded-full bg-gradient-to-r from-sky-500 to-indigo-600"
                />

            </div>

        </div>

    )

}