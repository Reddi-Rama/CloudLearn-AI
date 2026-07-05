"use client";

interface Props {
  id: string;
}

export default function CredentialID({
  id,
}: Props) {
  return (
    <div className="rounded-xl bg-slate-100 p-4">

      <p className="text-sm text-slate-500">

        Credential ID

      </p>

      <h3 className="mt-2 font-mono font-bold">

        {id}

      </h3>

    </div>
  );
}