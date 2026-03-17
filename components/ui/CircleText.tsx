"use client";

const TEXT =
  "Tepisi se ne donose u servis, već ih preuzimamo i dostavljamo isključivo mi. Pozovite nas.";

export function CircleText() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-navy-dark overflow-hidden py-2.5 select-none">
      <div className="inline-block whitespace-nowrap animate-[ticker_20s_linear_infinite]">
        <span className="text-gold font-semibold text-sm px-8">{TEXT}</span>
      </div>
    </div>
  );
}
