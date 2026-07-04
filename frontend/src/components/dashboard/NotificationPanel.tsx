"use client";

import {
Bell,
CheckCircle
} from "lucide-react";

const notifications=[

"Python lesson unlocked",

"Assessment passed",

"Certificate ready",

"New AI course available"

];

export default function NotificationPanel(){

return(

<section className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-xl">

<div className="flex items-center gap-4 mb-8">

<Bell className="text-sky-600"/>

<h1 className="text-3xl font-bold">

Notifications

</h1>

</div>

<div className="space-y-6">

{notifications.map((item,index)=>(

<div
key={index}
className="flex items-center gap-5 rounded-2xl bg-slate-50 p-5"
>

<CheckCircle className="text-green-500"/>

<p>{item}</p>

</div>

))}

</div>

</section>

);

}