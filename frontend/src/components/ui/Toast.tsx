"use client";

interface Props{
message:string;
}

export default function Toast({
message,
}:Props){

return(

<div className="fixed bottom-6 right-6 rounded-2xl bg-slate-900 px-6 py-4 text-white shadow-2xl">

{message}

</div>

);

}