"use client";

interface Props{
message:string;
type?:"success"|"warning"|"error";
}

export default function Alert({
message,
type="success",
}:Props){

const color={
success:"bg-green-100 text-green-700",
warning:"bg-yellow-100 text-yellow-700",
error:"bg-red-100 text-red-700",
};

return(

<div className={`rounded-2xl p-5 font-semibold ${color[type]}`}>

{message}

</div>

);

}