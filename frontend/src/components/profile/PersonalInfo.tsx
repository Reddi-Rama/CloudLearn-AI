"use client";

interface PersonalInfoProps {
  phone: string;
  city: string;
  country: string;
}

export default function PersonalInfo({
  phone,
  city,
  country,
}: PersonalInfoProps) {
  return (
    <div className="glass-card rounded-3xl p-8">

      <h2 className="text-2xl font-bold">

        Personal Information

      </h2>

      <div className="mt-8 space-y-6">

        <div>

          <p className="text-slate-500">

            Phone

          </p>

          <h3>{phone}</h3>

        </div>

        <div>

          <p className="text-slate-500">

            City

          </p>

          <h3>{city}</h3>

        </div>

        <div>

          <p className="text-slate-500">

            Country

          </p>

          <h3>{country}</h3>

        </div>

      </div>

    </div>
  );
}