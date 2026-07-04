"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Sparkles,
} from "lucide-react";

import HeroIllustration from "./HeroIllustration";
import FloatingCards from "./FloatingCards";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24">

      <div className="container-custom">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
            }}
          >

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-5 py-2 backdrop-blur-xl">

              <Sparkles
                size={18}
                className="text-blue-600"
              />

              <span className="text-sm font-semibold text-blue-700">

                Empowering B.Tech Students

              </span>

            </div>

            {/* Heading */}

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl lg:text-7xl">

              Learn

              <span className="text-blue-600">
                {" "}Beyond{" "}
              </span>

              Limits

            </h1>

            {/* Subtitle */}

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">

              Master in-demand technologies through structured
              learning paths, practical coding, mock tests,
              projects and certificates—all in one place.

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                href="/courses"
                className="btn-primary"
              >

                Explore Courses

                <ArrowRight size={18} />

              </Link>

              <Link
                href="/learning-paths"
                className="btn-secondary"
              >

                <BookOpen size={18} />

                Learning Paths

              </Link>

            </div>

            {/* Stats */}

            <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">

              <div>

                <h2 className="text-4xl font-bold text-blue-600">

                  500+

                </h2>

                <p className="mt-2 text-sm text-slate-500">

                  Courses

                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold text-blue-600">

                  40+

                </h2>

                <p className="mt-2 text-sm text-slate-500">

                  Domains

                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold text-blue-600">

                  25K+

                </h2>

                <p className="mt-2 text-sm text-slate-500">

                  Students

                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold text-blue-600">

                  100%

                </h2>

                <p className="mt-2 text-sm text-slate-500">

                  Certificates

                </p>

              </div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
            }}
            className="relative"
          >

            <HeroIllustration />

            <FloatingCards />

          </motion.div>

        </div>

      </div>

    </section>
  );
}