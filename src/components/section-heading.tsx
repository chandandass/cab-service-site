export function SectionHeading({
  kicker,
  title,
  copy,
}: {
  kicker: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="max-w-3xl space-y-5">
      <span className="section-kicker">{kicker}</span>
      <div className="space-y-3">
        <h2 className="text-3xl font-black tracking-tight text-[#f7f3e7] sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-2xl text-base leading-7 text-[#c7cfdb] sm:text-lg">{copy}</p>
      </div>
    </div>
  );
}
