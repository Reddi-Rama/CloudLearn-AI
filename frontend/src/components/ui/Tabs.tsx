"use client";

import { useState } from "react";

interface Props {
  tabs: string[];
}

export default function Tabs({ tabs }: Props) {

  const [active, setActive] = useState(0);

  return (
    <div>

      <div className="mb-8 flex gap-4">

        {tabs.map((tab, index) => (

          <button
            key={tab}
            onClick={() => setActive(index)}
            className={`rounded-full px-6 py-3 transition

            ${
              active === index
                ? "bg-sky-500 text-white"
                : "bg-slate-100"
            }`}
          >

            {tab}

          </button>

        ))}

      </div>

    </div>
  );
}