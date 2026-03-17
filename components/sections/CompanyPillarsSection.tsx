export function CompanyPillarsSection() {
  return (
    <section className="bg-cream py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border-t-4 border-gold">
            <h3 className="font-bold text-navy text-lg mb-2">Iskustvo</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Sa sigurnošću možemo reći da nudimo najbolji odnos cene i kvaliteta, i specijalne
              pogodnosti za veće količine.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border-t-4 border-gold">
            <h3 className="font-bold text-navy text-lg mb-2">Tradicija</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Tepih Servis Andrić je osnovan 1984. godine i od tada, pa sve do danas nudi
              profesionalne i ekspeditivne usluge.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border-t-4 border-gold">
            <h3 className="font-bold text-navy text-lg mb-2">Kvalitet</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Koristimo visoko savremenu opremu i najkvalitetnija sredstva za čišćenje tepiha,
              dubinsko pranje nameštaja i dečijih kolica.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
