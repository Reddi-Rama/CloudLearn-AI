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
"use client";

import { motion } from "framer-motion";

interface QuestionCardProps {
  questionNumber: number;
  question: string;
  children: React.ReactNode;
}

export default function QuestionCard({
  questionNumber,
  question,
  children,
}: QuestionCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className="glass-card rounded-[32px] p-8"
    >
      <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
        Question {questionNumber}
      </span>

      <h2 className="mt-6 text-2xl font-bold text-slate-800">
        {question}
      </h2>

      <div className="mt-8 space-y-4">
        {children}
      </div>
    </motion.div>
  );
}
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