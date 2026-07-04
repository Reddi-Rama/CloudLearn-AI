"use client";

const options=[
"for",
"loop",
"repeat",
"iterate"
];

export default function QuizQuestion(){

    return(

        <section className="rounded-[32px] bg-white p-10 shadow-xl">

            <h2 className="text-3xl font-bold mb-8">

                Which keyword is used to create a loop in Python?

            </h2>

            <div className="space-y-5">

                {options.map((option,index)=>(

                    <button
                    key={index}
                    className="w-full rounded-2xl border p-5 text-left hover:border-blue-500 hover:bg-blue-50 transition"
                    >

                        <span className="mr-4 font-bold">

                            {String.fromCharCode(65+index)}

                        </span>

                        {option}

                    </button>

                ))}

            </div>

        </section>

    );

}