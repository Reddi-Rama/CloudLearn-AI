"use client";

const skills=[
"Variables",
"Loops",
"Functions",
"OOP",
"File Handling",
"Modules",
"Projects",
"Best Practices"
];

export default function SkillsSection(){

return(

<section className="rounded-3xl bg-white p-10 shadow-lg">

<h2 className="text-3xl font-black">

Skills You'll Learn

</h2>

<div className="mt-8 flex flex-wrap gap-4">

{skills.map(skill=>(

<div
key={skill}
className="rounded-full bg-sky-100 px-5 py-3 text-sky-700 font-semibold"
>

{skill}

</div>

))}

</div>

</section>

);

}