import Link from "next/link";
import { ArrowLeft, Clock3, Sparkles } from "lucide-react";

const availableDomains = [
  "programming",
  "aiml",
  "data-science",
  "cybersecurity",
  "cloud-computing",
];

const domainNames: Record<string, string> = {
  programming: "Programming",
  aiml: "Artificial Intelligence & Machine Learning",
  "data-science": "Data Science",
  cybersecurity: "Cybersecurity",
  "cloud-computing": "Cloud Computing",
  "machine-learning": "Machine Learning",
  blockchain: "Blockchain",
  "web-development": "Web Development",
};

interface Props {
  params: {
    domain: string;
  };
}

export default function DomainPage({ params }: Props) {
  const domain = params.domain;

  const domainName =
    domainNames[domain] ||
    domain
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const isAvailable = availableDomains.includes(domain);

  /*
   * ============================================================
   * COMING SOON
   * ============================================================
   */
  if (!isAvailable) {
    return (
      <main className="min-h-screen bg-slate-50">

        {/* Back */}
        <div className="mx-auto max-w-7xl px-6 py-6">
          <Link
            href="/domains"
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-slate-200
              bg-white
              px-5
              py-3
              text-sm
              font-semibold
              text-slate-700
              shadow-sm
              transition
              hover:-translate-y-0.5
              hover:border-sky-300
              hover:bg-sky-50
              hover:text-sky-600
            "
          >
            <ArrowLeft size={18} />
            Back to Domains
          </Link>
        </div>

        {/* Coming Soon */}
        <section className="flex min-h-[75vh] items-center justify-center px-6">

          <div
            className="
              w-full
              max-w-3xl
              rounded-[32px]
              border
              border-slate-200
              bg-white
              px-8
              py-16
              text-center
              shadow-[0_20px_60px_rgba(15,23,42,0.08)]
              md:px-14
              md:py-20
            "
          >

            <div
              className="
                mx-auto
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-2xl
                bg-sky-50
                text-sky-600
                shadow-sm
              "
            >
              <Clock3 size={38} />
            </div>

            <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-sky-50 px-5 py-2 text-sm font-bold text-sky-600">
              <Sparkles size={16} />
              Coming Soon
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              {domainName}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              We are currently preparing this learning domain with structured
              lessons, practical projects, and career-focused content.
            </p>

            <p className="mt-4 text-base font-medium text-slate-500">
              This domain will be available soon.
            </p>

            <Link
              href="/domains"
              className="
                mt-9
                inline-flex
                items-center
                gap-2
                rounded-2xl
                bg-sky-600
                px-6
                py-3.5
                text-base
                font-bold
                text-white
                shadow-lg
                transition
                hover:-translate-y-1
                hover:bg-sky-700
                hover:shadow-xl
              "
            >
              <ArrowLeft size={18} />
              Explore Available Domains
            </Link>

          </div>

        </section>
      </main>
    );
  }

  /*
   * ============================================================
   * YOUR EXISTING AVAILABLE-DOMAIN CONTENT
   * ============================================================
   *
   * Keep your current content here for:
   *
   * programming
   * aiml
   * data-science
   * cybersecurity
   * cloud-computing
   */

  return (
    <main className="min-h-screen bg-slate-50">

      <div className="mx-auto max-w-7xl px-6 py-8">

        <Link
          href="/domains"
          className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            border
            border-slate-200
            bg-white
            px-5
            py-3
            text-sm
            font-semibold
            text-slate-700
            shadow-sm
            transition
            hover:border-sky-300
            hover:bg-sky-50
            hover:text-sky-600
          "
        >
          <ArrowLeft size={18} />
          Back to Domains
        </Link>

        <div className="mt-10">
          <h1 className="text-4xl font-extrabold text-slate-900">
            {domainName}
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            Domain content goes here.
          </p>
        </div>

      </div>

    </main>
  );
}