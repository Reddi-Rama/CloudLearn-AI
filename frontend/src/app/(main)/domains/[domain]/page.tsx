import {
  Clock3,
  Sparkles,
} from "lucide-react";

import BackButton from "@/components/layout/BackButton";


/* ============================================================
   AVAILABLE DOMAINS
============================================================ */

const availableDomains = [
  "programming",
  "aiml",
  "data-science",
  "cybersecurity",
  "cloud-computing",
];


/* ============================================================
   DOMAIN NAMES
============================================================ */

const domainNames: Record<string, string> = {
  programming: "Programming",

  aiml:
    "Artificial Intelligence & Machine Learning",

  "data-science":
    "Data Science",

  cybersecurity:
    "Cybersecurity",

  "cloud-computing":
    "Cloud Computing",

  "machine-learning":
    "Machine Learning",

  blockchain:
    "Blockchain",

  "web-development":
    "Web Development",
};


/* ============================================================
   PAGE PROPS
============================================================ */

interface Props {
  params: Promise<{
    domain: string;
  }>;
}


/* ============================================================
   DOMAIN PAGE
============================================================ */

export default async function DomainPage({
  params,
}: Props) {
  const { domain: rawDomain } = await params;

  const domain = rawDomain.toLowerCase();

  const domainName =
    domainNames[domain] ||
    domain
      .split("-")
      .map(
        (word) =>
          word.charAt(0).toUpperCase() +
          word.slice(1)
      )
      .join(" ");

  const isAvailable =
    availableDomains.includes(domain);


  /* ==========================================================
     COMING SOON
  ========================================================== */

  if (!isAvailable) {
    return (
      <main
        className="
          domain-detail-page
          min-h-screen
          w-full
          overflow-hidden

          bg-[#f8fbff]
          text-slate-900

          dark:bg-[#020617]
          dark:text-slate-100
        "
      >

        <div
          className="
            mx-auto
            min-h-screen
            w-full
            max-w-7xl
            px-5
            pb-20
            pt-6
            sm:px-6
          "
        >

          {/* ==================================================
              BACK TO DOMAINS
          ================================================== */}

          <div className="mb-10">
            <BackButton
              href="/domains"
              label="Back to Domains"
            />
          </div>


          {/* ==================================================
              COMING SOON
          ================================================== */}

          <section
            className="
              flex
              min-h-[72vh]
              w-full
              items-center
              justify-center
              bg-transparent
            "
          >

            <div
              className="
                relative
                w-full
                max-w-4xl
                overflow-hidden
                rounded-[36px]

                border
                border-slate-200
                bg-white

                px-8
                py-16

                text-center

                shadow-[0_25px_80px_rgba(15,23,42,0.10)]

                dark:border-slate-700
                dark:bg-slate-900
                dark:shadow-[0_25px_80px_rgba(0,0,0,0.40)]

                md:px-14
                md:py-20
              "
            >

              {/* Decorative glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-72
                  w-72
                  rounded-full
                  bg-sky-100
                  blur-3xl

                  dark:bg-sky-950
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-24
                  -left-24
                  h-72
                  w-72
                  rounded-full
                  bg-indigo-100
                  blur-3xl

                  dark:bg-indigo-950
                "
              />


              {/* Icon */}

              <div
                className="
                  relative
                  mx-auto
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                  rounded-[28px]

                  border
                  border-sky-100
                  bg-sky-50
                  text-sky-600

                  shadow-lg

                  dark:border-sky-900
                  dark:bg-sky-950
                  dark:text-sky-400
                "
              >
                <Clock3 size={44} />
              </div>


              {/* Badge */}

              <div
                className="
                  relative
                  mx-auto
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  rounded-full

                  border
                  border-sky-100
                  bg-sky-50

                  px-5
                  py-2.5

                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-sky-600

                  dark:border-sky-900
                  dark:bg-sky-950
                  dark:text-sky-400
                "
              >
                <Sparkles size={16} />

                Coming Soon
              </div>


              {/* Title */}

              <h1
                className="
                  relative
                  mt-7
                  text-4xl
                  font-black
                  tracking-tight

                  text-slate-900

                  dark:text-white

                  sm:text-5xl
                  md:text-6xl
                "
              >
                {domainName}
              </h1>


              {/* Description */}

              <p
                className="
                  relative
                  mx-auto
                  mt-6
                  max-w-2xl

                  text-base
                  leading-8

                  text-slate-600

                  dark:text-slate-400

                  md:text-lg
                "
              >
                We are currently preparing this learning
                domain with structured lessons, practical
                projects, and career-focused content.
              </p>


              {/* Status */}

              <div
                className="
                  relative
                  mx-auto
                  mt-6
                  flex
                  max-w-md
                  items-center
                  justify-center
                  gap-2

                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50

                  px-5
                  py-4

                  text-sm
                  font-semibold
                  text-slate-600

                  dark:border-slate-700
                  dark:bg-slate-800
                  dark:text-slate-300
                "
              >
                <span
                  className="
                    h-2.5
                    w-2.5
                    animate-pulse
                    rounded-full
                    bg-sky-500
                  "
                />

                This domain will be available soon.
              </div>


              {/* Return */}

              <div className="relative mt-10 flex justify-center">

                <BackButton
                  href="/domains"
                  label="Explore Available Domains"
                />

              </div>

            </div>

          </section>

        </div>

      </main>
    );
  }


  /* ==========================================================
     AVAILABLE DOMAIN
  ========================================================== */

  return (
    <main
      className="
        domain-detail-page
        min-h-screen
        w-full
        overflow-hidden

        bg-[#f8fbff]
        text-slate-900

        dark:bg-[#020617]
        dark:text-slate-100
      "
    >

      <div
        className="
          mx-auto
          min-h-screen
          w-full
          max-w-7xl
          px-5
          pb-20
          pt-6
          sm:px-6
        "
      >

        {/* ==================================================
            BACK TO DOMAINS
        ================================================== */}

        <div className="mb-10">
          <BackButton
            href="/domains"
            label="Back to Domains"
          />
        </div>


        {/* ==================================================
            DOMAIN HEADER
        ================================================== */}

        <section
          className="
            relative
            overflow-hidden
            rounded-[36px]

            border
            border-slate-200
            bg-white

            px-8
            py-14

            shadow-[0_20px_60px_rgba(15,23,42,0.08)]

            dark:border-slate-700
            dark:bg-slate-900
            dark:shadow-[0_20px_60px_rgba(0,0,0,0.32)]

            md:px-12
            md:py-16
          "
        >

          {/* Decorative glow */}

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-64
              w-64
              rounded-full
              bg-sky-100
              blur-3xl

              dark:bg-sky-950
            "
          />


          <div className="relative">

            {/* Badge */}

            <div
              className="
                inline-flex
                items-center
                rounded-full

                border
                border-sky-100
                bg-sky-50

                px-5
                py-2

                text-sm
                font-bold
                text-sky-600

                dark:border-sky-900
                dark:bg-sky-950
                dark:text-sky-400
              "
            >
              Learning Domain
            </div>


            {/* Title */}

            <h1
              className="
                mt-6
                text-4xl
                font-black
                tracking-tight

                text-slate-900

                dark:text-white

                md:text-6xl
              "
            >
              {domainName}
            </h1>


            {/* Description */}

            <p
              className="
                mt-5
                max-w-3xl

                text-lg
                leading-8

                text-slate-600

                dark:text-slate-400
              "
            >
              Explore structured learning resources,
              practical concepts, and career-focused
              skills in {domainName}.
            </p>

          </div>

        </section>


        {/* ==================================================
            DOMAIN CONTENT
        ================================================== */}

        <section
          className="
            mt-12
            bg-transparent
          "
        >

          <div
            className="
              rounded-[32px]

              border
              border-slate-200
              bg-white

              p-8

              shadow-[0_15px_45px_rgba(15,23,42,0.07)]

              dark:border-slate-700
              dark:bg-slate-900
              dark:shadow-[0_15px_45px_rgba(0,0,0,0.28)]

              md:p-12
            "
          >

            <h2
              className="
                text-2xl
                font-extrabold
                text-slate-900

                dark:text-white

                md:text-3xl
              "
            >
              {domainName} Learning
            </h2>


            <p
              className="
                mt-4
                text-base
                leading-8
                text-slate-600

                dark:text-slate-400
              "
            >
              Domain content goes here.
            </p>

          </div>

        </section>

      </div>

    </main>
  );
}