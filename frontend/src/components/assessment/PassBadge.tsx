"use client";

import { CheckCircle2, XCircle } from "lucide-react";

interface Props{
passed:boolean;
}

export default function PassBadge({
passed
}:Props){

return(

<div className="flex justify-center">

<div className={`flex items-center gap-3 rounded-full px-6 py-3 font-semibold ${
passed
?"bg-green-100 text-green-700"
:"bg-red-100 text-red-700"
}`}>

{passed
?<CheckCircle2/>
:<XCircle/>}

{passed
?"PASSED"
:"FAILED"}

</div>

</div>

)

}