"use client";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-8">

      <div className="rounded-[32px] bg-white p-10 shadow-xl">

        <h2 className="mb-8 text-3xl font-bold">
          Contact Information
        </h2>

        <div className="space-y-8">

          <div className="flex items-center gap-5">

            <div className="rounded-2xl bg-sky-100 p-4">
              <Mail className="text-sky-600" size={24} />
            </div>

            <div>
              <h4 className="font-semibold">
                Email
              </h4>
              <p className="text-slate-600">
                support@cloudlearnai.com
              </p>
            </div>

          </div>

          <div className="flex items-center gap-5">

            <div className="rounded-2xl bg-sky-100 p-4">
              <Phone className="text-sky-600" size={24} />
            </div>

            <div>
              <h4 className="font-semibold">
                Phone
              </h4>
              <p className="text-slate-600">
                +91 98765 43210
              </p>
            </div>

          </div>

          <div className="flex items-center gap-5">

            <div className="rounded-2xl bg-sky-100 p-4">
              <MapPin className="text-sky-600" size={24} />
            </div>

            <div>
              <h4 className="font-semibold">
                Address
              </h4>
              <p className="text-slate-600">
                Andhra Pradesh, India
              </p>
            </div>

          </div>

          <div className="flex items-center gap-5">

            <div className="rounded-2xl bg-sky-100 p-4">
              <Clock className="text-sky-600" size={24} />
            </div>

            <div>
              <h4 className="font-semibold">
                Working Hours
              </h4>
              <p className="text-slate-600">
                Mon - Sat | 9:00 AM - 6:00 PM
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}