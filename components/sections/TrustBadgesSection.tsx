import { ChildIcon, LeafIcon, PawIcon, HeartIcon } from "@/components/ui/Icons";

const TRUST_CARDS = [
  {
    prefix: "Tepih servis u Beogradu siguran za decu",
    label: "Bezbedno za decu",
    icon: <ChildIcon />,
  },
  { prefix: "Ekološko pranje tepiha", label: "Ekološka sredstva", icon: <LeafIcon /> },
  {
    prefix: "Tepih servis siguran za ljubimce",
    label: "Bezbedno za kućne ljubimce",
    icon: <PawIcon />,
  },
  {
    prefix: "Zdravo pranje tepiha za domove u Beogradu",
    label: "Zdravlje na prvom mestu",
    icon: <HeartIcon />,
  },
] as const;

export function TrustBadgesSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-12">
          Dubinsko mašinsko pranje tepiha Beograd
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {TRUST_CARDS.map(({ prefix, label, icon }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-4 bg-cream rounded-2xl p-6 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center text-gold shrink-0">
                {icon}
              </div>
              <p className="text-gray-600 text-xs mb-1">{prefix}</p>
              <p className="text-gray-700 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
