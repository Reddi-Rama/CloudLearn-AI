"use client";

import { Bot } from "lucide-react";

export default function FloatingAssistant(){

return(

<button
className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-2xl transition hover:scale-110"
>

<Bot size={30}/>

</button>

);

}