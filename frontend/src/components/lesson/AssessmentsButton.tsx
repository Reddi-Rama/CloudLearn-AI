import Link from "next/link";

interface Props {
  courseId: string;
}

export default function AssessmentsButton({
  courseId,
}: Props) {
  return (
    <Link
      href={`/exam/${courseId}`}
      className="inline-block rounded-xl bg-purple-600 px-6 py-3 text-white transition hover:bg-purple-700"
    >
      Take Final Assessment
    </Link>
  );
}