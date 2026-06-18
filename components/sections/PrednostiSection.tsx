import { StarIcon, CalendarIcon, BadgeIcon, TruckIcon, GearIcon, BrushIcon, DropIcon } from "@/components/ui/Icons";

const PREDNOSTI = [
  { label: "Tradicija i iskustvo", icon: <StarIcon />, kicker: "Tepih servis sa dugogodišnjim iskustvom" },
  { label: "Osnovan 1984.", icon: <CalendarIcon />, kicker: "Tepih servis Andrić osnovan 1984. godine" },
  { label: "Profesionalni i ekspeditivni", icon: <BadgeIcon />, kicker: "Profesionalan tepih servis" },
  { label: "Dolazimo na Vašu adresu", icon: <TruckIcon />, kicker: "Pranje tepiha sa dostavom na adresu" },
  { label: "Automatsko mašinsko pranje", icon: <GearIcon />, kicker: "Tepih servis sa savremenom opremom" },
  { label: "Šest rotacionih četki", icon: <BrushIcon />, kicker: "Dubinsko mašinsko pranje sa šest četki" },
  { label: "Ispiranje centrifugom", icon: <DropIcon />, kicker: "Pranje tepiha sa ispiranjem centrifugom" },
] as const;

export function PrednostiSection() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-12">
          Prednosti tepih servisa Andrić
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PREDNOSTI.map(({ label, icon, kicker }) => (
            <div key={label} className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-gold shrink-0">
                {icon}
              </div>
              <p className="text-navy font-semibold text-sm">
                <span className="text-gray-600 text-xs block mb-0.5">{kicker}</span>
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
