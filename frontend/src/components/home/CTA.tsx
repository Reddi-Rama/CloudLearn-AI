"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  ShieldCheck,
  Download,
  ArrowRight,
} from "lucide-react";

export default function CertificatePreview() {
  return (
    <section className="section">

      <div className="container-custom">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
              Earn Certificates
            </span>

            <h2 className="heading mt-6">
              Showcase Your
              <span className="text-blue-600"> Achievements</span>
            </h2>

            <p className="sub-heading mt-6">
              Complete courses, pass assessments, and earn
              industry-style certificates that can be verified
              online and shared with employers.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-3">
                <ShieldCheck className="text-green-600" />
                <span>Secure Verification</span>
              </div>

              <div className="flex items-center gap-3">
                <Award className="text-blue-600" />
                <span>Professional Certificate Design</span>
              </div>

              <div className="flex items-center gap-3">
                <Download className="text-violet-600" />
                <span>Download & Share Anytime</span>
              </div>

            </div>

            <Link
              href="/certificates"
              className="btn-primary mt-10 inline-flex"
            >
              Explore Certificates
              <ArrowRight size={18} />
            </Link>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="glass-card rounded-[36px] p-8 shadow-2xl">

              <div className="rounded-3xl border-2 border-blue-100 bg-gradient-to-br from-white to-blue-50 p-10">

                <div className="flex justify-center">

                  <Award
                    size={70}
                    className="text-blue-600"
                  />

                </div>

                <h3 className="mt-8 text-center text-3xl font-bold">
                  Certificate of Completion
                </h3>

                <p className="mt-4 text-center text-slate-600">
                  This certifies that
                </p>

                <h4 className="mt-4 text-center text-2xl font-bold text-blue-700">
                  Student Name
                </h4>

                <p className="mt-5 text-center text-slate-600">
                  has successfully completed
                </p>

                <h5 className="mt-4 text-center text-xl font-semibold">
                  Artificial Intelligence Learning Path
                </h5>

                <div className="mt-10 flex items-center justify-between">

                  <div>

                    <p className="text-xs text-slate-500">
                      Certificate ID
                    </p>

                    <p className="font-semibold">
                      CLAI-2026-0001
                    </p>

                  </div>

                  <ShieldCheck
                    size={36}
                    className="text-green-600"
                  />

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}