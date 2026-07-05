export default function Partners() {
  const partners = [
    "Google",
    "Microsoft",
    "Amazon",
    "Cisco",
    "IBM",
    "Oracle",
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-12 text-center text-4xl font-black">
          Trusted Technologies
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">

          {partners.map((partner) => (
            <div
              key={partner}
              className="rounded-2xl border bg-white p-8 text-center shadow transition hover:shadow-lg"
            >
              <h3 className="text-lg font-bold">
                {partner}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}