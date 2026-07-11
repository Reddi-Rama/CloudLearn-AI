interface Props {
  params: {
    slug: string;
  };
}

export default function DomainDetailsPage({
  params,
}: Props) {
  return (
    <main className="container-custom py-40">

      <h1 className="text-5xl font-bold">

        {params.slug
          .split("-")
          .map(
            (word) =>
              word.charAt(0).toUpperCase() +
              word.slice(1)
          )
          .join(" ")}

      </h1>

      <p className="mt-6 text-slate-600 text-lg">

        Domain details page coming soon...

      </p>

    </main>
  );
}