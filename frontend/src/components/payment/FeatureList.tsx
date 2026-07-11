interface Props {
  features: string[];
}

export default function FeatureList({
  features,
}: Props) {
  return (
    <ul className="space-y-3">
      {features.map((feature) => (
        <li key={feature}>
          ✓ {feature}
        </li>
      ))}
    </ul>
  );
}