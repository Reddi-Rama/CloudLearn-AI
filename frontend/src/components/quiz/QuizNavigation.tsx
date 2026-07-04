"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function QuizNavigation(){

    return(

        <div className="mt-10 flex justify-between">

            <button className="flex items-center gap-2 rounded-2xl border px-8 py-4">

                <ChevronLeft/>

                Previous

            </button>

            <button className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 px-8 py-4 text-white shadow-lg">

                Next

                <ChevronRight/>

            </button>

        </div>

    );

}