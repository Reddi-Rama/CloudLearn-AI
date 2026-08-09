"use client";

import { useState } from "react";
import Link from "next/link";

type SidebarLesson = {
  id: string;
  title: string;
};

type SidebarModule = {
  id: string;
  title: string;
  about: SidebarLesson;
  lessons: SidebarLesson[];
};

interface LessonSidebarProps {
  courseId: string;
  moduleId: string;
  lessonId: string;
  modules: SidebarModule[];
}

export default function LessonSidebar({
  courseId,
  moduleId,
  lessonId,
  modules,
}: LessonSidebarProps) {

  const [openModules, setOpenModules] =
    useState<string[]>([moduleId]);



  function toggleModule(
    moduleIdToToggle: string
  ) {

    setOpenModules((current) => {

      if (
        current.includes(moduleIdToToggle)
      ) {

        return current.filter(
          (id) =>
            id !== moduleIdToToggle
        );

      }

      return [
        ...current,
        moduleIdToToggle,
      ];

    });

  }



  return (

    <aside
      className="
      fixed
      left-0
      top-24
      bottom-0
      z-20
      hidden
      w-[27vw]
      min-w-[300px]
      border-r
      border-white/10
      bg-slate-900/95
      backdrop-blur-xl
      lg:block
      "
    >

      <div
        className="
        h-full
        overflow-y-auto
        px-6
        py-8
        "
      >



        {/* COURSE NAVIGATION */}

        <div
          className="
          mb-8
          border-b
          border-white/10
          pb-6
          "
        >

          <p
            className="
            text-sm
            font-semibold
            uppercase
            tracking-widest
            text-sky-400
            "
          >
            Course Navigation
          </p>



          <h2
            className="
            mt-3
            text-2xl
            font-bold
            leading-8
            text-white
            "
          >

            {courseId
              .replace(/-/g, " ")
              .replace(/\b\w/g, (char) =>
                char.toUpperCase()
              )}

          </h2>

        </div>



        {/* ALL MODULES */}

        <div
          className="
          space-y-4
          "
        >

          {modules.map(
            (module, index) => {

              const isOpen =
                openModules.includes(
                  module.id
                );



              const isCurrentModule =
                module.id === moduleId;



              const lessons = [
                module.about,
                ...module.lessons,
              ];



              return (

                <div
                  key={module.id}
                  className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  "
                >



                  {/* MODULE HEADER */}

                  <button
                    type="button"
                    onClick={() =>
                      toggleModule(
                        module.id
                      )
                    }
                    className={`
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-4
                    px-5
                    py-5
                    text-left
                    transition
                    ${
                      isCurrentModule
                        ? "bg-sky-600/30"
                        : "bg-white/[0.03] hover:bg-white/10"
                    }
                    `}
                  >

                    <div
                      className="
                      flex
                      min-w-0
                      items-center
                      gap-4
                      "
                    >

                      {/* MODULE NUMBER */}

                      <span
                        className={`
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        text-base
                        font-bold
                        ${
                          isCurrentModule
                            ? "bg-sky-500 text-white"
                            : "bg-white/10 text-gray-300"
                        }
                        `}
                      >
                        {index + 1}
                      </span>



                      {/* MODULE TITLE */}

                      <span
                        className={`
                        text-base
                        font-semibold
                        leading-6
                        ${
                          isCurrentModule
                            ? "text-white"
                            : "text-gray-200"
                        }
                        `}
                      >
                        {module.title}
                      </span>

                    </div>



                    {/* ARROW */}

                    <span
                      className={`
                      shrink-0
                      text-sm
                      text-gray-400
                      transition-transform
                      ${
                        isOpen
                          ? "rotate-180"
                          : ""
                      }
                      `}
                    >
                      ▼
                    </span>

                  </button>



                  {/* LESSON LIST */}

                  {isOpen && (

                    <div
                      className="
                      border-t
                      border-white/10
                      bg-black/10
                      p-3
                      "
                    >

                      {lessons.map(
                        (
                          lesson,
                          lessonIndex
                        ) => {

                          const isCurrentLesson =
                            module.id ===
                              moduleId &&
                            lesson.id ===
                              lessonId;



                          return (

                            <Link
                              key={
                                lesson.id
                              }
                              href={
                                `/lesson/${courseId}/${module.id}/${lesson.id}`
                              }
                              className={`
                              mb-1
                              block
                              rounded-xl
                              px-4
                              py-3
                              text-base
                              leading-6
                              transition
                              last:mb-0
                              ${
                                isCurrentLesson
                                  ? "bg-green-600 font-semibold text-white"
                                  : "text-gray-300 hover:bg-white/10 hover:text-white"
                              }
                              `}
                            >

                              <span
                                className="
                                mr-3
                                text-sm
                                text-gray-500
                                "
                              >
                                {lessonIndex + 1}.
                              </span>

                              {lesson.title}

                            </Link>

                          );

                        }
                      )}

                    </div>

                  )}

                </div>

              );

            }
          )}

        </div>

      </div>

    </aside>

  );

}