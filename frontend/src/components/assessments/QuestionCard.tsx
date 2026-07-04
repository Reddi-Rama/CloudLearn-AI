"use client";

const options=[
"input()",
"print()",
"display()",
"echo()"
];

export default function QuestionCard(){

    return(

        <section className="rounded-[32px] bg-white p-10 shadow-xl">

            <h2 className="text-3xl font-bold mb-8">
                Which function is used to print output in Python?
            </h2>

            <div className="space-y-5">

                {options.map((option,index)=>(

                    <button
                    key={index}
                    className="w-full rounded-2xl border border-slate-200 p-5 text-left hover:border-sky-500 hover:bg-sky-50 transition"
                    >

                        <span className="mr-4 font-bold">
                            {String.fromCharCode(65+index)}.
                        </span>

                        {option}

                    </button>

                ))}

            </div>

        </section>

    )

}