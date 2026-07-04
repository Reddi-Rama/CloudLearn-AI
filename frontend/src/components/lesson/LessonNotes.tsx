"use client";

import { Award } from "lucide-react";

export default function CertificateInfo(){

return(

<section className="rounded-3xl bg-gradient-to-r from-sky-500 to-indigo-600 p-10 text-white shadow-xl">

<div className="flex items-center gap-5">

<Award size={50}/>

<div>

<h2 className="text-3xl font-black">

Verified Certificate

</h2>

<p className="mt-3">

Complete the course, pass the Final Assessment, and pay ₹29 to unlock your verified CloudLearn certificate.

</p>

</div>

</div>

</section>

);

}