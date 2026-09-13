import {
  FolderTree,
} from "lucide-react";

interface Props {
  lines: string[];
}

export default function AIMLStructureCard({
  lines,
}: Props) {

  return (
    <div
      className="
        my-8
        overflow-hidden
        rounded-[24px]
        border
        border-indigo-200
        bg-indigo-50
        shadow-sm
        dark:border-indigo-900/60
        dark:bg-indigo-950/20
      "
    >

      <div
        className="
          flex
          items-center
          gap-3
          border-b
          border-indigo-200
          bg-indigo-100/70
          px-5
          py-4
          dark:border-indigo-900/60
          dark:bg-indigo-950/30
        "
      >

        <FolderTree
          size={18}
          className="
            text-indigo-600
            dark:text-indigo-400
          "
        />

        <span
          className="
            text-xs
            font-black
            uppercase
            tracking-[0.16em]
            text-indigo-700
            dark:text-indigo-400
          "
        >
          Structure
        </span>

      </div>

      <div className="overflow-x-auto p-5">

        <div
          className="
            min-w-max
            rounded-2xl
            border
            border-indigo-100
            bg-white
            px-5
            py-4
            font-mono
            text-sm
            leading-7
            text-slate-700
            dark:border-slate-800
            dark:bg-slate-950
            dark:text-slate-300
          "
        >

          {lines.map(
            (line, index) => (

              <div
                key={index}
                className="
                  whitespace-pre
                "
              >
                {line}
              </div>

            )
          )}

        </div>

      </div>

    </div>
  );
}