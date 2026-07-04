"use client";

import Accordion from "@/components/ui/Accordion";

export default function LessonFAQ(){

return(

<section className="rounded-3xl bg-white p-8 shadow-lg">

<h2 className="mb-8 text-2xl font-bold">

Frequently Asked Questions

</h2>

<div className="space-y-4">

<Accordion
title="What is a List?"
content="A list is an ordered and mutable collection in Python."
/>

<Accordion
title="What is a Tuple?"
content="A tuple is ordered but immutable."
/>

<Accordion
title="What is Dictionary?"
content="Dictionary stores data as key-value pairs."
/>

</div>

</section>

);

}