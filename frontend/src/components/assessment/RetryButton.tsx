"use client";

interface Props{
onClick:()=>void;
}

export default function RetryButton({
onClick
}:Props){

return(

<button
onClick={onClick}
className="w-full rounded-2xl bg-red-600 py-4 text-lg font-semibold text-white transition hover:bg-red-700"
>

Retry Assessment

</button>

)

}