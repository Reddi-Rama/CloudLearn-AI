"use client";

import {
  Camera,
  Mail,
  GraduationCap,
  Phone,
  MapPin,
  Edit,
} from "lucide-react";

export default function ProfilePageContent() {
  return (
    <section className="grid gap-8 lg:grid-cols-3">

      <div className="rounded-3xl bg-white p-8 shadow-xl">

        <div className="flex flex-col items-center">

          <div className="relative">

            <img
              src="/images/avatar.png"
              alt="profile"
              className="h-40 w-40 rounded-full object-cover"
            />

            <button className="absolute bottom-2 right-2 rounded-full bg-sky-500 p-3 text-white">

              <Camera size={18}/>

            </button>

          </div>

          <h2 className="mt-6 text-3xl font-bold">

            Reddi Rama

          </h2>

          <p className="text-slate-500">

            Information Technology Student

          </p>

        </div>

      </div>

      <div className="lg:col-span-2 rounded-3xl bg-white p-8 shadow-xl">

        <div className="flex items-center justify-between">

          <h2 className="text-3xl font-bold">

            Personal Information

          </h2>

          <button className="flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-white">

            <Edit size={18}/>

            Edit

          </button>

        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">

          <Info icon={<Mail size={18}/>} label="Email" value="rama@email.com"/>

          <Info icon={<Phone size={18}/>} label="Phone" value="+91 9876543210"/>

          <Info icon={<GraduationCap size={18}/>} label="College" value="B.Tech IT"/>

          <Info icon={<MapPin size={18}/>} label="Location" value="India"/>

        </div>

      </div>

    </section>
  );
}

function Info({
  icon,
  label,
  value,
}:{
  icon:React.ReactNode;
  label:string;
  value:string;
}){

  return(

    <div className="rounded-2xl bg-slate-50 p-5">

      <div className="flex items-center gap-3">

        {icon}

        <span className="font-semibold">

          {label}

        </span>

      </div>

      <p className="mt-4 text-slate-600">

        {value}

      </p>

    </div>

  )

}