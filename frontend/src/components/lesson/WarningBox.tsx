interface WarningBoxProps {
  warning: string;
}

export default function WarningBox({
  warning,
}: WarningBoxProps) {
  return (
    <div className="rounded-3xl border border-red-200 bg-red-50 p-6">
      <h3 className="text-xl font-semibold text-red-700">
        ⚠️ Important Note
      </h3>

      <p className="mt-4 text-slate-700 leading-8">
        {warning}
      </p>
    </div>
  );
}