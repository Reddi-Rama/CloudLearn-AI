"use client";

import BackButton from "@/components/layout/BackButton";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  Award,
  Download,
  FileText,
  Loader2,
} from "lucide-react";

import { isAuthenticated } from "@/lib/auth";

import {
  certificateService,
  Certificate,
} from "@/services/certificate.service";

export default function MyCertificatesPage() {
  const router = useRouter();

  const [certificates, setCertificates] = useState<
    Certificate[]
  >([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* ============================================================
     LOAD CERTIFICATES
  ============================================================ */

  useEffect(() => {
    async function loadCertificates() {
      if (!isAuthenticated()) {
        router.replace("/login");
        return;
      }

      try {
        setLoading(true);
        setError("");

        const data =
          await certificateService.getCertificates();

        setCertificates(data);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Unable to load certificates."
        );
      } finally {
        setLoading(false);
      }
    }

    loadCertificates();
  }, [router]);


  /* ============================================================
     DOWNLOAD CERTIFICATE
  ============================================================ */

  async function handleDownload(
    certificateId: string
  ) {
    try {
      setError("");

      await certificateService.downloadCertificate(
        certificateId
      );
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Unable to download certificate."
      );
    }
  }


  /* ============================================================
     LOADING
  ============================================================ */

  if (loading) {
    return (
      <main className="min-h-screen bg-[#f7faff]">

        {/* Back Button */}
        <div className="px-6 pt-6">
          <BackButton />
        </div>

        <div className="flex min-h-[70vh] items-center justify-center px-6">
          <div className="text-center">

            <Loader2
              className="mx-auto animate-spin text-sky-600"
              size={40}
            />

            <p className="mt-4 text-sm font-medium text-slate-600">
              Loading your certificates...
            </p>

          </div>
        </div>

      </main>
    );
  }


  /* ============================================================
     PAGE
  ============================================================ */

  return (
    <main className="min-h-screen bg-[#f7faff] px-6 pb-20 pt-6">

      <div className="mx-auto max-w-7xl">

        {/* ======================================================
            BACK BUTTON
        ====================================================== */}

        <div className="mb-10">
          <BackButton />
        </div>


        {/* ======================================================
            PAGE HEADER
        ====================================================== */}

        <div className="mb-10">

          <div className="flex items-center gap-4">

            <div
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-sky-500
                to-indigo-600
                shadow-lg
              "
            >
              <Award
                size={32}
                className="text-white"
              />
            </div>

            <div>

              <h1 className="text-4xl font-black text-slate-900">
                My Certificates
              </h1>

              <p className="mt-1 text-slate-600">
                View and download the certificates you have earned.
              </p>

            </div>

          </div>

        </div>


        {/* ======================================================
            ERROR
        ====================================================== */}

        {error && (
          <div
            className="
              mb-8
              rounded-2xl
              border
              border-red-200
              bg-red-50
              p-4
              text-sm
              font-medium
              text-red-600
            "
          >
            {error}
          </div>
        )}


        {/* ======================================================
            NO CERTIFICATES
        ====================================================== */}

        {!error &&
          certificates.length === 0 && (
            <div
              className="
                rounded-[32px]
                border
                border-slate-200
                bg-white
                p-12
                text-center
                shadow-xl
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
                  rounded-full
                  bg-sky-50
                "
              >
                <Award
                  size={40}
                  className="text-sky-600"
                />
              </div>

              <h2 className="mt-6 text-2xl font-bold text-slate-900">
                No Certificates Yet
              </h2>

              <p className="mx-auto mt-3 max-w-lg text-slate-600">
                Complete your courses and assessments to earn
                certificates. Your certificates will appear here.
              </p>

            </div>
          )}


        {/* ======================================================
            CERTIFICATE LIST
        ====================================================== */}

        {certificates.length > 0 && (
          <>

            {/* Count */}
            <div className="mb-6">

              <p className="text-sm font-semibold text-slate-500">
                {certificates.length}{" "}
                {certificates.length === 1
                  ? "Certificate"
                  : "Certificates"}{" "}
                Earned
              </p>

            </div>


            {/* Cards */}
            <div
              className="
                grid
                gap-8
                md:grid-cols-2
                lg:grid-cols-3
              "
            >

              {certificates.map((certificate) => (

                <div
                  key={certificate.certificateId}
                  className="
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-slate-200
                    bg-white
                    shadow-xl
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-2xl
                  "
                >

                  {/* Certificate Banner */}
                  <div
                    className="
                      flex
                      h-48
                      items-center
                      justify-center
                      bg-gradient-to-br
                      from-sky-500
                      via-blue-600
                      to-indigo-700
                    "
                  >
                    <Award
                      size={80}
                      className="text-white"
                    />
                  </div>


                  {/* Certificate Details */}
                  <div className="p-7">

                    <h2 className="text-xl font-bold text-slate-900">
                      {certificate.courseTitle}
                    </h2>


                    <div className="mt-5 space-y-3 text-sm">

                      {/* Certificate ID */}
                      <div className="flex items-start gap-3 text-slate-600">

                        <FileText
                          size={18}
                          className="mt-0.5 shrink-0"
                        />

                        <div className="min-w-0">

                          <span>
                            Certificate ID:
                          </span>

                          <span className="ml-1 break-all font-semibold text-slate-900">
                            {certificate.certificateId}
                          </span>

                        </div>

                      </div>


                      {/* Issue Date */}
                      <div className="text-slate-500">

                        Issued on{" "}

                        {new Date(
                          certificate.issuedAt
                        ).toLocaleDateString("en-IN")}

                      </div>

                    </div>


                    {/* Download */}
                    <button
                      type="button"
                      onClick={() =>
                        handleDownload(
                          certificate.certificateId
                        )
                      }
                      className="
                        mt-7
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-3
                        rounded-2xl
                        bg-gradient-to-r
                        from-sky-500
                        to-indigo-600
                        px-5
                        py-4
                        font-semibold
                        text-white
                        shadow-lg
                        transition-all
                        duration-300
                        hover:scale-[1.02]
                        hover:shadow-xl
                        active:scale-[0.99]
                      "
                    >

                      <Download size={20} />

                      Download Certificate

                    </button>

                  </div>

                </div>

              ))}

            </div>

          </>
        )}

      </div>

    </main>
  );
}