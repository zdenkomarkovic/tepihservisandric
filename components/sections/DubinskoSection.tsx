import { HeartIcon, ShieldIcon, SparkleIcon } from "@/components/ui/Icons";

const DUBINSKO_CARDS = [
  { prefix: "Tepih Servis Vozdovac Beograd", label: "Zdravlje na prvom mestu", icon: <HeartIcon /> },
  { prefix: "Tepih Servis Vozdovac Beograd", label: "Antibakterijska sredstva", icon: <ShieldIcon /> },
  { prefix: "Tepih Servis Vozdovac Beograd", label: "Higijena na visokom nivou", icon: <SparkleIcon /> },
] as const;

export function DubinskoSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-4">
          Dubinsko pranje za čist i zdrav dom
        </h2>
        <p className="text-center text-gray-500 text-sm max-w-2xl mx-auto mb-12">
          Vodimo računa o higijeni i nudimo savremenu opremu i najkvalitetnija sredstva za dubinsko
          pranje tepiha i nameštaja.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {DUBINSKO_CARDS.map(({ prefix, label, icon }) => (
            <div key={label} className="flex flex-col items-center gap-4 bg-cream rounded-2xl p-8 text-center">
              <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center text-gold shrink-0">
                {icon}
              </div>
              <p className="text-gray-600 text-xs">{prefix}</p>
              <p className="text-gray-700 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
