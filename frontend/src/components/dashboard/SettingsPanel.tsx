"use client";

export default function SettingsPanel() {
  return (
    <section className="rounded-3xl bg-white p-10 shadow-xl">

      <h1 className="text-4xl font-black">

        Settings

      </h1>

      <div className="mt-10 space-y-8">

        <Setting
          title="Dark Mode"
          description="Coming Soon"
        />

        <Setting
          title="Email Notifications"
          description="Enabled"
        />

        <Setting
          title="Language"
          description="English"
        />

        <Setting
          title="Certificate Visibility"
          description="Public"
        />

      </div>

    </section>
  );
}

function Setting({
  title,
  description,
}:{
  title:string;
  description:string;
}){

  return(

    <div className="flex items-center justify-between rounded-2xl border p-6">

      <div>

        <h3 className="font-bold">

          {title}

        </h3>

        <p className="text-slate-500">

          {description}

        </p>

      </div>

      <button className="rounded-xl bg-sky-500 px-5 py-2 text-white">

        Change

      </button>

    </div>

  )

}