export function SectionHeading({
  kicker,
  title,
  copy,
  centered = false,
  className = "",
}: {
  kicker: string;
  title: string;
  copy: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl space-y-4 ${centered ? "mx-auto text-center" : ""} ${className}`}>
      <span className="section-kicker">{kicker}</span>
      <div className="space-y-3">
        <h2
          className="section-title"
          style={{ fontFamily: "var(--font-sora), 'Sora', sans-serif" }}
        >
          {title}
        </h2>
        <p
          className={`max-w-2xl text-base leading-relaxed sm:text-lg ${centered ? "mx-auto" : ""}`}
          style={{ color: "#7A7570" }}
        >
          {copy}
        </p>
      </div>
    </div>
  );
}
