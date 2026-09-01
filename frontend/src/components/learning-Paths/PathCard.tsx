import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

interface PathCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
}

export default function PathCard({
  title,
  description,
  icon: Icon,
  href,
}: PathCardProps) {
  return (
    <Link
      href={href}
      className="group block h-full"
    >
      <article
        className="
          relative
          flex
          h-full
          min-h-[390px]
          flex-col
          overflow-hidden
          rounded-[32px]
          border
          border-slate-200
          bg-white
          p-9
          shadow-[0_10px_35px_rgba(15,23,42,0.08)]
          transition-all
          duration-500
          hover:-translate-y-3
          hover:border-sky-300
          hover:shadow-[0_20px_55px_rgba(14,165,233,0.18)]
        "
      >
        {/* Decorative Background */}
        <div
          className="
            pointer-events-none
            absolute
            -right-16
            -top-16
            h-44
            w-44
            rounded-full
            bg-sky-100
            opacity-60
            blur-3xl
            transition-all
            duration-500
            group-hover:bg-sky-200
            group-hover:opacity-80
          "
        />

        {/* Top Label */}
        <div className="relative flex items-center gap-2">
          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              border
              border-sky-100
              bg-sky-50
              text-sky-600
              shadow-sm
              transition-all
              duration-300
              group-hover:bg-sky-100
            "
          >
            <Icon size={24} strokeWidth={2} />
          </div>

          <span className="text-sm font-bold uppercase tracking-wider text-sky-600">
            Learning Path
          </span>
        </div>

        {/* Title */}
        <h2
          className="
            relative
            mt-7
            text-3xl
            font-extrabold
            leading-tight
            tracking-tight
            text-slate-900
            transition-colors
            duration-300
            group-hover:text-sky-600
          "
        >
          {title}
        </h2>

        {/* Accent */}
        <div
          className="
            relative
            mt-5
            h-1
            w-14
            rounded-full
            bg-sky-500
            transition-all
            duration-500
            group-hover:w-24
          "
        />

        {/* Description */}
        <p
          className="
            relative
            mt-6
            text-base
            leading-8
            text-slate-600
          "
        >
          {description}
        </p>

        {/* Bottom */}
        <div className="relative mt-auto pt-10">
          <div
            className="
              inline-flex
              items-center
              gap-3
              rounded-2xl
              border
              border-sky-100
              bg-sky-50
              px-5
              py-3
              text-base
              font-bold
              text-sky-600
              shadow-sm
              transition-all
              duration-300
              group-hover:border-sky-600
              group-hover:bg-sky-600
              group-hover:text-white
              group-hover:shadow-lg
            "
          >
            <Sparkles size={17} />

            <span>Explore Path</span>

            <ArrowRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </div>
        </div>

        {/* Bottom Accent */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            h-1
            w-0
            bg-sky-500
            transition-all
            duration-500
            group-hover:w-full
          "
        />
      </article>
    </Link>
  );
}