import Link from "next/link";
import { notFound } from "next/navigation";

import { modules } from "@/content/programming/python/lessons/module";


interface PageProps {
  params: Promise<{
    courseId: string;
    moduleId: string;
    lessonId: string;
  }>;
}



type Example = {
  title?: string;
  code?: string;
  output?: string;
};



type LessonData = {
  id: string;
  title: string;
  content: string;
  examples?: Example[];
};



type ModuleData = {
  id: string;
  title: string;
  about: LessonData;
  lessons: LessonData[];
};





function renderContent(content:string){

return content.split("\n").map((line,index)=>{

const text=line.trim();


if(!text){
return <div key={index} className="h-3" />;
}




if(text.startsWith("# ")){

return(
<h1
key={index}
className="
mt-10
mb-6
text-5xl
font-extrabold
text-green-400
"
>
{text.replace("# ","")}
</h1>
);

}





if(text.startsWith("## ")){

return(
<h2
key={index}
className="
mt-8
mb-4
text-3xl
font-bold
text-green-400
"
>
{text.replace("## ","")}
</h2>
);

}





if(text.startsWith("### ")){

return(
<h3
key={index}
className="
mt-6
mb-3
text-2xl
font-semibold
text-green-300
"
>
{text.replace("### ","")}
</h3>
);

}





if(text.startsWith("- ")){

return(
<li
key={index}
className="
ml-7
list-disc
text-lg
leading-8
text-gray-200
"
>
{text.replace("- ","")}
</li>
);

}





return(
<p
key={index}
className="
mb-4
text-xl
leading-8
text-gray-200
"
>
{text}
</p>
);


});

}









export default async function LessonPage({
params
}:PageProps){



const {
courseId,
moduleId,
lessonId
}=await params;





const moduleData =

(modules as ModuleData[])
.find(
(module)=>module.id===moduleId
);





if(!moduleData){

return notFound();

}





const pages:LessonData[]=[

moduleData.about,

...moduleData.lessons

];





const currentIndex =
pages.findIndex(
(page)=>page.id===lessonId
);





if(currentIndex===-1){

return notFound();

}





const current = pages[currentIndex];





// Previous

const previousLesson =
currentIndex > 0
?
pages[currentIndex-1]
:
null;





// Next inside same module

const nextLesson =
currentIndex < pages.length-1
?
pages[currentIndex+1]
:
null;





// Next module

const moduleNumber =
Number(
moduleId.replace("module","")
);



const nextModule =
modules.find(
(m:any)=>
m.id===`module${moduleNumber+1}`
);








return(


<div
className="
relative
min-h-screen
overflow-hidden
bg-[#020617]
text-white
"
>





{/* STARS */}

<div
className="
absolute
inset-0
"
>

{
Array.from({length:150}).map((_,i)=>(

<span
key={i}
className="
absolute
h-[2px]
w-[2px]
rounded-full
bg-white
animate-pulse
"
style={{

top:`${(i*19)%100}%`,

left:`${(i*37)%100}%`

}}
/>

))
}

</div>









<div
className="
relative
z-10
flex
max-w-[1700px]
mx-auto
pt-20
"
>









{/* SIDEBAR */}


<aside
className="
sticky
top-20
h-[calc(100vh-80px)]
w-80
overflow-y-auto
border-r
border-white/10
bg-black/20
backdrop-blur-xl
"
>



<div className="p-6">





<Link

href="/courses/python-development"

className="
mb-8
block
rounded-xl
bg-sky-600
px-5
py-3
text-center
font-semibold
hover:bg-sky-700
"

>

← Back to Python Course

</Link>








<h2
className="
mb-8
text-2xl
font-bold
text-green-400
"
>

{moduleData.title}

</h2>







<nav className="space-y-3">


{

pages.map((lesson)=>(


<Link

key={lesson.id}

href={`/lesson/${courseId}/${moduleId}/${lesson.id}`}

className={`
block
rounded-xl
px-5
py-3
text-base

${
lesson.id===current.id

?

"bg-green-600 text-white"

:

"text-gray-300 hover:bg-white/10"

}

`}

>

{lesson.title}

</Link>


))

}



</nav>






</div>


</aside>









{/* CONTENT */}



<main
className="
flex-1
px-14
pb-20
"
>



<h1
className="
mb-12
text-6xl
font-extrabold
text-green-400
"
>

{current.title}

</h1>






{renderContent(current.content)}








{

current.examples?.map((example,index)=>(


<div
key={index}
className="
mt-10
rounded-2xl
overflow-hidden
border
border-white/10
"
>


<div
className="
bg-white/10
p-4
font-bold
text-green-400
"
>

{example.title}

</div>



{
example.code &&

<pre
className="
bg-black
p-6
text-green-300
"
>
{example.code}
</pre>

}



{
example.output &&

<pre
className="
bg-slate-900
p-6
text-gray-200
"
>
{example.output}
</pre>

}



</div>


))

}









{/* NAVIGATION */}



<div
className="
mt-16
flex
justify-between
border-t
border-white/10
pt-8
"
>






{

previousLesson ?


<Link

href={`/lesson/${courseId}/${moduleId}/${previousLesson.id}`}

className="
rounded-xl
bg-slate-800
px-8
py-4
font-semibold
"

>

← Previous Lesson

</Link>


:

<div/>

}









{

nextLesson ?


<Link

href={`/lesson/${courseId}/${moduleId}/${nextLesson.id}`}

className="
rounded-xl
bg-green-600
px-8
py-4
font-bold
"

>

Next Lesson →

</Link>




:

nextModule &&


<Link

href={`/lesson/${courseId}/${nextModule.id}/about`}

className="
rounded-xl
bg-blue-600
px-8
py-4
font-bold
"

>

Next Module →

</Link>


}





</div>





</main>





</div>





</div>


);


}