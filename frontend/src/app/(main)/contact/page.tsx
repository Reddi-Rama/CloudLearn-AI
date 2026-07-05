import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FAQ from "@/components/home/FAQ";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="pt-36">

        {/* Hero */}

        <section className="py-24 text-center">

          <span className="rounded-full bg-sky-100 px-5 py-2 font-semibold text-sky-700">
            Contact CloudLearn AI
          </span>

          <h1 className="mt-8 text-6xl font-black text-slate-900">

            We'd Love To
            <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-violet-600 bg-clip-text text-transparent">
              {" "}Hear From You
            </span>

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">

            Have questions, suggestions or feedback?
            Our team is always here to help you.

          </p>

        </section>

        {/* Contact Section */}

        <section className="pb-24">

          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">

            {/* Left */}

            <div className="space-y-8">

              <div className="rounded-3xl bg-white p-8 shadow-lg">

                <div className="flex items-center gap-5">

                  <Mail className="text-sky-600" size={32} />

                  <div>

                    <h3 className="text-xl font-bold">

                      Email

                    </h3>

                    <p className="text-slate-600">

                      support@cloudlearn.ai

                    </p>

                  </div>

                </div>

              </div>

              <div className="rounded-3xl bg-white p-8 shadow-lg">

                <div className="flex items-center gap-5">

                  <Phone className="text-green-600" size={32} />

                  <div>

                    <h3 className="text-xl font-bold">

                      Phone

                    </h3>

                    <p className="text-slate-600">

                      +91 98765 43210

                    </p>

                  </div>

                </div>

              </div>

              <div className="rounded-3xl bg-white p-8 shadow-lg">

                <div className="flex items-center gap-5">

                  <MapPin className="text-red-500" size={32} />

                  <div>

                    <h3 className="text-xl font-bold">

                      Location

                    </h3>

                    <p className="text-slate-600">

                      India

                    </p>

                  </div>

                </div>

              </div>

              <div className="rounded-3xl bg-white p-8 shadow-lg">

                <div className="flex items-center gap-5">

                  <Clock className="text-orange-500" size={32} />

                  <div>

                    <h3 className="text-xl font-bold">

                      Working Hours

                    </h3>

                    <p className="text-slate-600">

                      Monday - Saturday

                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Right */}

            <div className="rounded-[35px] bg-white p-10 shadow-xl">

              <h2 className="text-3xl font-bold">

                Send us a Message

              </h2>

              <form className="mt-8 space-y-6">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-2xl border p-4 outline-none focus:border-sky-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-2xl border p-4 outline-none focus:border-sky-500"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-2xl border p-4 outline-none focus:border-sky-500"
                />

                <textarea
                  rows={6}
                  placeholder="Your Message..."
                  className="w-full rounded-2xl border p-4 outline-none focus:border-sky-500"
                />

                <button
                  className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 px-8 py-4 font-semibold text-white"
                >

                  <Send size={20} />

                  Send Message

                </button>

              </form>

            </div>

          </div>

        </section>

        <FAQ />


      </main>

      <Footer />

    </>
  );
}