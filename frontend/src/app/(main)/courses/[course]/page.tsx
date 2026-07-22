import Link from "next/link";
import { notFound } from "next/navigation";

import { modules } from "@/content/programming/python/lessons/module";


interface CoursePageProps {
  params: Promise<{
    course: string;
  }>;
}



export default async function CoursePage({
  params,
}: CoursePageProps) {


  const { course } = await params;




  if (course !== "python-development") {
    return notFound();
  }




  const courseName = course
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) =>
      char.toUpperCase()
    );





  return (

    <main
      className="
      min-h-screen
      bg-slate-50
      py-20
      "
    >



      <div
        className="
        mx-auto
        max-w-7xl
        px-6
        "
      >







        {/* HERO SECTION */}



        <section
          className="
          rounded-3xl
          bg-white
          p-12
          shadow-sm
          "
        >



          <p
            className="
            font-medium
            text-sky-600
            "
          >
            Programming Domain
          </p>





          <h1
            className="
            mt-4
            text-5xl
            font-bold
            text-slate-900
            "
          >

            {courseName}

          </h1>







          <p
            className="
            mt-6
            max-w-3xl
            text-lg
            leading-8
            text-slate-600
            "
          >

            Learn Python from beginner to advanced
            through structured modules, practical lessons,
            examples, and real-world applications.

          </p>








          <div
            className="
            mt-10
            flex
            gap-4
            "
          >




            <Link

              href={`/lesson/${course}/module1/about`}

              className="
              rounded-2xl
              bg-sky-600
              px-8
              py-4
              font-semibold
              text-white
              transition
              hover:bg-sky-700
              "

            >

              Start Learning

            </Link>








            <Link

              href={`/exam/${course}`}

              className="
              rounded-2xl
              border
              border-slate-300
              px-8
              py-4
              font-semibold
              transition
              hover:bg-slate-100
              "

            >

              Final Exam

            </Link>





          </div>




        </section>









        {/* MODULES */}



        <section
          className="
          mt-16
          "
        >




          <h2
            className="
            text-3xl
            font-bold
            text-slate-900
            "
          >

            Course Modules

          </h2>








          <div
            className="
            mt-8
            grid
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
            "
          >





            {
              modules
              .filter(Boolean)
              .map((module,index)=>(




                <Link


                  key={`${module.id}-${index}`}


                  href={`/lesson/${course}/${module.id}/about`}



                  className="
                  flex
                  min-h-[310px]
                  flex-col
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-sm
                  transition
                  hover:-translate-y-1
                  hover:shadow-xl
                  "

                >








                  {/* MODULE NUMBER */}



                  <div
                    className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-sky-100
                    font-bold
                    text-sky-600
                    "
                  >

                    {index + 1}

                  </div>









                  {/* TITLE */}



                  <h3
                    className="
                    mt-6
                    h-16
                    overflow-hidden
                    text-xl
                    font-bold
                    leading-7
                    text-slate-900
                    "
                  >

                    {module.title}

                  </h3>









                  {/* DESCRIPTION */}



                  <p
                    className="
                    mt-4
                    h-14
                    overflow-hidden
                    text-sm
                    leading-6
                    text-slate-600
                    "
                  >

                    Learn {module.title} through structured lessons,
                    practical examples, and real-world applications.

                  </p>









                  {/* FOOTER */}



                  <div
                    className="
                    mt-auto
                    flex
                    items-center
                    justify-between
                    pt-8
                    "
                  >






                    <span
                      className="
                      rounded-full
                      bg-slate-100
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-slate-700
                      "
                    >

                      {module.lessons?.length ?? 0} Lessons

                    </span>








                    <span
                      className="
                      font-semibold
                      text-sky-600
                      "
                    >

                      Start Module →

                    </span>






                  </div>






                </Link>




              ))
            }






          </div>





        </section>






      </div>






    </main>

  );

}