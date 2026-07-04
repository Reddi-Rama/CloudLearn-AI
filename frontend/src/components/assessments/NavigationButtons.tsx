"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function NavigationButtons(){

    return(

        <div className="mt-10 flex items-center justify-between">

            <button className="rounded-2xl border px-8 py-4 hover:bg-slate-50 transition flex items-center gap-2">

                <ChevronLeft/>

                Previous

            </button>

            <button className="rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 px-8 py-4 text-white shadow-lg hover:scale-105 transition flex items-center gap-2">

                Next

                <ChevronRight/>

            </button>

        </div>

    )

}