import Link from "next/link";

export const LOCATION_CONTENT: Record<string, React.ReactNode> = {
  "veliki-mokri-lug": (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Veliki Mokri Lug je mesna zajednica opštine Zvezdara i njen najjužniji deo. Za stanovnike ovog naselja Tepih Servis Andrić organizuje preuzimanje, pranje i dostavu tepiha direktno na adresu, bez potrebe da ih sami nosite u servis.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Pranje i sušenje tepiha u komorama — Veliki Mokri Lug</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        U zavisnosti od vremenskih prilika, tepihe sušimo na najbolji mogući način — leti prirodno na otvorenom, a tokom hladnijih meseci u komorama za sušenje sa visokim temperaturama i kontrolisanim protokom vazduha, tako da se vraćaju potpuno suvi, bez trunke vlage.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Veliki Mokri Lug</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Kao deo Zone 1, preuzimanje i dostava tepiha za Veliki Mokri Lug su potpuno besplatni, bez ograničenja u kvadraturi — tepihe ne nosite Vi, dolazimo mi.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Kontaktirajte nas na brojeve telefona{" "}
        <a href="tel:0653332555" className="text-gold-text hover:text-gold-dark underline">065 333 2 555</a>{" "}
        i{" "}
        <a href="tel:0693332555" className="text-gold-text hover:text-gold-dark underline">069 333 2 555</a>.
      </p>
    </>
  ),
  kaludjerica: (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Kaluđerica je naselje na jugoistočnoj granici Beograda, u opštini Grocka, i jedno od najgušće naseljenih prigradskih naselja u Srbiji. Tepih Servis Andrić redovno pokriva ovaj deo grada uslugama dubinskog pranja tepiha, nameštaja i dečijih kolica.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Pranje i čišćenje dečijih kolica — Kaluđerica</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Dečija kolica provode dosta vremena napolju, gde se na točkovima i tkanini lepe prašina, polen i izduvni gasovi. Redovnim dubinskim pranjem uklanjamo bakterije i alergene iz svakog šava kolica, kako bi bila zaista bezbedna za Vaše najmlađe.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Pogledajte detaljnije uslugu{" "}
        <Link href="/pranje-decijah-kolica/" className="text-gold-text hover:text-gold-dark underline">Pranje dečijih kolica</Link>{" "}
        i kontaktirajte nas već danas.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Kaluđerica</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Kaluđerica spada u Zonu 1 pokrivenosti — transport tepiha je besplatan i bez ograničenja u kvadraturi, u oba pravca.
      </p>
    </>
  ),
  "mali-mokri-lug": (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Mali Mokri Lug se nalazi u jugoistočnom delu opštine Zvezdara. Redovnim mašinskim pranjem pomažemo stanovnicima ovog naselja da očuvaju izgled i vek trajanja svojih tepiha, uz preuzimanje i dostavu na adresu.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Pranje i čišćenje dečijih kolica — Mali Mokri Lug</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Kolica za bebe su izložena spoljnim uslovima svakodnevno, pa se u njima nakupljaju prašina i nečistoće koje mogu izazvati alergijske reakcije. Dubinskim pranjem toplom vodom i dezinfekcijom vraćamo kolicima potpunu čistoću, bezbednu za Vaše dete.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Pogledajte našu{" "}
        <Link href="/galerija/" className="text-gold-text hover:text-gold-dark underline">Galeriju</Link>.{" "}
        Uverite se u kvalitet koji traje.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Mali Mokri Lug</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Za lokacije u Malom Mokrom Lugu, koje spadaju u Zonu 1, preuzimanje i dostava tepiha su besplatni, bez ograničenja u kvadraturi.
      </p>
    </>
  ),
  medakovic: (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Medaković je jedno od novih naselja opštine Voždovac, izgrađenih sredinom prošlog veka južno od centra Beograda. Tepih Servis Andrić nudi kompletnu uslugu pranja tepiha, nameštaja i dečijih kolica za sve stanovnike ovog dela grada.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Mašinsko dubinsko pranje tepiha — Medaković</h2>
      <ul className="list-disc pl-5 mb-4">
        <li className="text-gray-700 mb-2">Mašinsko pranje tepiha</li>
        <li className="text-gray-700 mb-2">Ispiranje centrifugom</li>
        <li className="text-gray-700 mb-2">Šest rotacionih četki za dubinsku obradu vlakana</li>
        <li className="text-gray-700 mb-2">Automatsko sušenje u komorama</li>
        <li className="text-gray-700 mb-2">Pažljivo pakovanje i dostava</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        <Link href="/usluge/" className="text-gold-text hover:text-gold-dark underline">Pogledajte sve naše usluge</Link>. Uverite se u kvalitet.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Medaković</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Preuzimanje i dostava tepiha u Medakoviću su, kao u celoj Zoni 1, besplatni i bez ograničenja u kvadraturi tepiha.
      </p>
    </>
  ),
  konjarnik: (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Konjarnik je poznato naselje u okviru opštine Voždovac, prepoznatljivo po istoimenom tržnom centru i gustoj stambenoj izgradnji. Za stanovnike Konjarnika obezbeđujemo besplatno preuzimanje tepiha i dostavu nakon dubinskog pranja.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Polu suvo mašinsko dubinsko pranje tepiha — Konjarnik</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ovaj način pranja odvija se pomoću automatizovanih mašina sa šest rotirajućih četki koje istovremeno obrađuju celu površinu tepiha, ne ostavljajući nijedan deo netretiran. Mašine doziraju tačnu količinu vode i hemijskih sredstava prema vrsti tepiha, čime se uklanjaju i najtvrdokornije fleke bez rizika po vlakna.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Konjarnik</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Kao deo Zone 1, preuzimanje i dostava tepiha za Konjarnik su potpuno besplatni, bez ograničenja u kvadraturi.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Za sve dodatne informacije možete nas kontaktirati na broj telefona ili poslati mejl na{" "}
        <a href="mailto:tepihservis.andric@gmail.com" className="text-gold-text hover:text-gold-dark underline">tepihservis.andric@gmail.com</a>
      </p>
    </>
  ),
  "uciteljsko-naselje": (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Učiteljsko naselje je mirni stambeni kraj u okviru opštine Voždovac. Tepisi u ovom delu grada, kao i svuda, vremenom upijaju prašinu, mirise i alergene — znak da im je potrebno profesionalno dubinsko pranje.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Kada je vreme za pranje tepiha — Učiteljsko naselje</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ako Vaš tepih deluje izbledelo, ima vidljive mrlje ili neprijatan miris, kućno usisavanje više nije dovoljno. Naše mašinsko pranje vraća tepihu originalnu boju i teksturu, uz upotrebu sredstava bezbednih za decu i kućne ljubimce.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Učiteljsko naselje</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Za lokacije u Učiteljskom naselju, koje spadaju u Zonu 1, preuzimanje i dostava tepiha su besplatni, bez ograničenja u kvadraturi.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Za sve informacije oko pranja tepiha i nameštaja možete nas kontaktirati na sledeće brojeve telefona:{" "}
        <a href="tel:0653332555" className="text-gold-text hover:text-gold-dark underline">065 333 2 555</a>{" "}
        i{" "}
        <a href="tel:0693332555" className="text-gold-text hover:text-gold-dark underline">069 333 2 555</a>.
      </p>
    </>
  ),
  "lekino-brdo": (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Lekino brdo, nekadašnje Pašino brdo, deo je opštine Voždovac. Tepih Servis Andrić dolazi na adresu, preuzima tepihe na pranje i vraća ih dubinski očišćene i osvežene.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Opšivanje Tepiha — Lekino Brdo</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Opšivanje ivica tepiha ili itisona radimo nakon uklanjanja starih resa, promene boje ivica ili skraćivanja dimenzija, kako bi se sprečilo rasparivanje vlakana i produžio vek trajanja tepiha.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Lekino Brdo</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Preuzimanje i dostava tepiha na Lekinom Brdu su, kao u celoj Zoni 1, besplatni i bez ograničenja u kvadraturi tepiha.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Pogledajte naše{" "}
        <Link href="/usluge/" className="text-gold-text hover:text-gold-dark underline">Usluge</Link>{" "}
        i{" "}
        <Link href="/galerija/" className="text-gold-text hover:text-gold-dark underline">Foto galeriju</Link>.
      </p>
    </>
  ),
  "kanarevo-brdo": (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Kanarevo brdo je deo opštine Čukarica, naselje koje je ime dobilo po predratnom veleposedniku Đorđu Kanari. Za ovo naselje nudimo kompletnu uslugu dubinskog pranja tepiha i nameštaja, sa preuzimanjem i dostavom na adresu.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Opšivanje Tepiha — Kanarevo Brdo</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Bilo da su rese na Vašem tepihu dotrajale ili želite da promenite boju ivica, opšivanje sprečava rasparivanje vlakana i vraća tepihu uredan, celovit izgled.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Kanarevo Brdo</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Kanarevo brdo spada u Zonu 2 pokrivenosti — preuzimanje i dostava tepiha su besplatni, uz minimalnu kvadraturu od 6m² (manje količine se tako i obračunavaju).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Pogledajte naše{" "}
        <Link href="/usluge/" className="text-gold-text hover:text-gold-dark underline">Usluge</Link>{" "}
        i{" "}
        <Link href="/galerija/" className="text-gold-text hover:text-gold-dark underline">Foto galeriju</Link>.
      </p>
    </>
  ),
  miljakovac: (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Miljakovac je naselje u opštini Rakovica, podeljeno na tri stambene celine izgrađene tokom sedamdesetih godina. Pored pranja tepiha, redovno vršimo i dubinsko pranje tapaciranog nameštaja za stanovnike ovog dela grada.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Pranje mebla — Miljakovac</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Nameštaj se svakodnevnom upotrebom vremenom zaprlja i izgubi sjaj. Dubinskim mašinskim pranjem uklanjamo prašinu, mrlje i alergene iz tkanine, uz korišćenje ekoloških sredstava koja čuvaju boju i strukturu materijala.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Miljakovac</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Za lokacije na Miljakovcu, koje spadaju u Zonu 2, minimalna kvadratura za preuzimanje tepiha je 6m².
      </p>
    </>
  ),
  rakovica: (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Rakovica je centralno naselje istoimene opštine, smeštene u jugozapadnom delu Beograda. Vršimo detaljno mašinsko pranje i ispiranje tepiha i nameštaja, pokrivajući svaki segment održavanja — od preuzimanja do dostave.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Pranje mebla — Rakovica</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Tapacirani nameštaj u stambenom i poslovnom prostoru preporučljivo je periodično dubinski oprati. Naši tehničari koriste visokokvalitetna, ekološki prihvatljiva sredstva koja čuvaju boju i produžavaju vek trajanja nameštaja.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Rakovica</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Kao deo Zone 2, preuzimanje tepiha iz Rakovice vršimo uz minimalnu kvadraturu od 6m², dok je sama dostava besplatna.
      </p>
    </>
  ),
  cerak: (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Cerak je stambeno naselje u opštini Čukarica, poznato po nizu novijih stambenih blokova i obližnjim Cerak Vinogradima. Redovno pranje čuva boju i strukturu tepiha, produžavajući njegov vek trajanja.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Znaci da je vreme za pranje tepiha — Cerak</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ako tepih deluje dosadno, ima uporne mrlje ili upija neprijatne mirise, vreme je za dubinsko pranje. Nikada nemojte sami pokušavati agresivno hemijsko tretiranje tepiha kod kuće — pogrešno sredstvo može trajno oštetiti vlakna.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Cerak</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Cerak pripada Zoni 2, gde je minimalna kvadratura za preuzimanje tepiha 6m² (ili se manja količina tako obračunava).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Za sve informacije oko pranja tepiha i nameštaja možete nas kontaktirati na sledeće brojeve telefona:{" "}
        <a href="tel:0653332555" className="text-gold-text hover:text-gold-dark underline">065 333 2 555</a>{" "}
        i{" "}
        <a href="tel:0693332555" className="text-gold-text hover:text-gold-dark underline">069 333 2 555</a>.
      </p>
    </>
  ),
  zarkovo: (
    <>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Pranje Tepiha Žarkovo</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Žarkovo je jedno od naselja opštine Čukarica, smešteno između Banovog brda i Železnika. Tepisi su vredna investicija u enterijer doma, ali zahtevaju redovno dubinsko čišćenje kako bi zadržali boju i svežinu.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Naše mašinsko pranje uklanja duboko utisnutu prljavštinu, alergene i viruse iz tepiha i tapaciranog nameštaja, a poseban tretman posvećujemo i dečijim kolicima, kojima je dubinsko čišćenje takođe neophodno.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Žarkovo</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Žarkovo spada u Zonu 2 pokrivenosti — preuzimanje i dostava tepiha su besplatni, uz minimalnu kvadraturu od 6m².
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Pozovite nas na broj telefona{" "}
        <a href="tel:0653332555" className="text-gold-text hover:text-gold-dark underline">065 333 2 555</a>{" "}
        za sve informacije vezane za pranje tepiha.
      </p>
    </>
  ),
  "golf-naselje": (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Golf naselje je deo opštine Čukarica, smešten u blizini Ade Ciganlije. Vršimo detaljno mašinsko dubinsko ispiranje tepiha i nameštaja, pokrivajući svaki segment čišćenja i održavanja.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Pranje mebla Tepih servis Andrić Golf Naselje Beograd</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Periodično čišćenje tapaciranog nameštaja preporučljivo je bez obzira da li je reč o stambenom ili poslovnom prostoru. Koristimo napredne metode i ekološki prihvatljiva sredstva koja čuvaju boju i produžavaju vek trajanja nameštaja.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Golf Naselje</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Za lokacije u Golf naselju, koje spadaju u Zonu 2, minimalna kvadratura za preuzimanje tepiha je 6m².
      </p>
    </>
  ),
  "banovo-brdo": (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Banovo brdo je jedno od najstarijih i najprepoznatljivijih naselja opštine Čukarica, ime je dobilo po Matiji Banu. Dubinsko pranje tepiha i nameštaja nije samo pitanje estetike, već i zdravlja ukućana.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Opšivanje Tepiha Banovo Brdo</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Opšivanje ivica sprečava dalje rasparivanje tepiha nakon skraćivanja, uklanjanja resa ili promene boje ivica, čuvajući strukturu i izgled tepiha na dugi rok.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Banovo Brdo</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Banovo brdo pripada Zoni 2, gde je minimalna kvadratura za preuzimanje tepiha 6m² (ili se manja količina tako obračunava).
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Pogledajte naše{" "}
        <Link href="/usluge/" className="text-gold-text hover:text-gold-dark underline">Usluge</Link>{" "}
        i{" "}
        <Link href="/galerija/" className="text-gold-text hover:text-gold-dark underline">Foto galeriju</Link>.
      </p>
    </>
  ),
  "savski-venac": (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Savski venac je jedna od tri centralne beogradske opštine, poznata po Topčideru, brojnim ambasadama i rezidencijalnim vilama. Dubinsko pranje tepiha, nameštaja i unutrašnjosti automobila doprinosi higijeni doma i zdravlju cele porodice.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Gde sve primenjujemo dubinsko pranje — Savski venac</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Dubinsko pranje primenjujemo podjednako u stambenim i poslovnim prostorima — na itisonima, tepisima, kaučima, foteljama, madracima, kancelarijskim stolicama i dečijim kolicima. Preporučuje se najmanje jednom godišnje, a češće ukoliko prostor koristi veći broj ljudi.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Savski venac</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Savski venac spada u Zonu 2 pokrivenosti — preuzimanje i dostava tepiha su besplatni, uz minimalnu kvadraturu od 6m².
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Kontaktirajte nas na sledeće brojeve telefona:{" "}
        <a href="tel:0653332555" className="text-gold-text hover:text-gold-dark underline">065 333 2 555</a>{" "}
        i{" "}
        <a href="tel:0693332555" className="text-gold-text hover:text-gold-dark underline">069 333 2 555</a>.
      </p>
    </>
  ),
  dedinje: (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Dedinje je deo opštine Savski venac i važi za jedan od najelitnijih delova Beograda, poznat po vilama i diplomatskim rezidencijama. Ukoliko želite da Vaši tepisi i nameštaj budu zaista čisti i dezinfikovani, naš tim dolazi na adresu i preuzima ih na pranje.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Pranje mebla Tepih servis Andrić Dedinje Beograd</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Čišćenje tapaciranog nameštaja radimo prema zahtevima klijenta, u stambenom i poslovnom prostoru. Naprednim metodama i ekološki prihvatljivim sredstvima čuvamo boju, teksturu i životni vek Vašeg nameštaja.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Dedinje</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Za lokacije na Dedinju, koje spadaju u Zonu 2, minimalna kvadratura za preuzimanje tepiha je 6m².
      </p>
    </>
  ),
  senjak: (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Senjak je mirno rezidencijalno naselje u opštini Savski venac, poznato po ambasadama i starim vilama. Dubinsko pranje nameštaja i tepiha nije samo pitanje estetike, već i zdravlja — uklanja prašinu, viruse i alergene nataložene tokom meseci korišćenja.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Koristimo visokokvalitetna, ekološki prihvatljiva sredstva i napredne tehnike pranja i čišćenja koje čuvaju svetlinu boje i produžavaju vek trajanja tepiha, bez obzira na stepen zaprljanosti.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Senjak</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Senjak pripada Zoni 2, gde je minimalna kvadratura za preuzimanje tepiha 6m².
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Kontaktirajte nas na sledeće brojeve telefona:{" "}
        <a href="tel:0653332555" className="text-gold-text hover:text-gold-dark underline">065 333 2 555</a>{" "}
        i{" "}
        <a href="tel:0693332555" className="text-gold-text hover:text-gold-dark underline">069 333 2 555</a>.
      </p>
    </>
  ),
  "cukaricka-padina": (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Čukarička padina je naselje u opštini Čukarica, smešteno na obroncima iznad Save. Ceo proces pranja tepiha kod nas je standardizovan i transparentan, od preuzimanja do dostave gotovog tepiha.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Kompletan proces pranja — Čukarička Padina</h2>
      <ol className="list-decimal pl-5 mb-4">
        <li className="text-gray-700 mb-2">Preuzimanje tepiha sa Vaše adrese</li>
        <li className="text-gray-700 mb-2">Automatsko trešenje radi uklanjanja suve prljavštine</li>
        <li className="text-gray-700 mb-2">Merenje i fotografisanje tepiha pre pranja</li>
        <li className="text-gray-700 mb-2">Natapanje u koritima sa vodom</li>
        <li className="text-gray-700 mb-2">Mašinsko pranje setom rotacionih četki</li>
        <li className="text-gray-700 mb-2">Ručno pranje resa, ukoliko ih tepih ima</li>
        <li className="text-gray-700 mb-2">Centrifugiranje i ispiranje do bistre vode</li>
        <li className="text-gray-700 mb-2">Prirodno sušenje tokom dana</li>
        <li className="text-gray-700 mb-2">Dosušivanje u komorama tokom noći</li>
        <li className="text-gray-700 mb-2">Finalno usisavanje, parfemisanje i fotografisanje</li>
        <li className="text-gray-700 mb-2">Pakovanje i dostava na adresu</li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        Vozni park Tepih Servisa Andrić pokriva Čukaričku padinu, pa tepihe ne morate sami nositi — pozovite nas na broj{" "}
        <a href="tel:0653332555" className="text-gold-text hover:text-gold-dark underline">065 333 2 555</a>{" "}
        i dogovorite termin preuzimanja.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <Link href="/usluge/" className="text-gold-text hover:text-gold-dark underline">Usluge</Link>{" "}
        - Pranje Tepiha Čukarička Padina
      </p>
    </>
  ),
  "bezanijska-kosa": (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Bežanijska kosa je jedno od naselja opštine Novi Beograd, izgrađeno krajem osamdesetih godina. Ukoliko želite da Vaši tepisi i nameštaj budu zaista čisti i dezinfikovani, naš tim dolazi na adresu i preuzima ih na pranje.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Pranje mebla Tepih servis Andrić Bežanijska kosa Beograd</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Svakodnevna upotreba čini da se nameštaj vremenom zaprlja, zbog čega je preporučljivo periodično dubinsko čišćenje. Radimo i u stambenom i u poslovnom prostoru, uz korišćenje ekoloških sredstava koja čuvaju boju nameštaja.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Bežanijska Kosa</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Bežanijska kosa spada u Zonu 2 pokrivenosti — preuzimanje i dostava tepiha su besplatni, uz minimalnu kvadraturu od 6m².
      </p>
    </>
  ),
  "novi-beograd": (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Novi Beograd je jedna od najvećih beogradskih opština, izgrađena na levoj obali Save u drugoj polovini XX veka. Brinemo o svakom aspektu pranja i sušenja Vaših tepiha, kao i o održavanju resa i pravilnom čuvanju tokom transporta.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Opšivanje tepiha Novi Beograd</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Opšivanje radimo na ivicama tepiha kako bi se sprečilo rasparivanje ili radi promene boje ivične trake. Po želji klijenta uklanjamo i stare rese, čuvajući pritom osnovnu strukturu tepiha.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Novi Beograd</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Novi Beograd pripada Zoni 2, gde je minimalna kvadratura za preuzimanje tepiha 6m².
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Kontaktirajte nas na brojeve telefona{" "}
        <a href="tel:0653332555" className="text-gold-text hover:text-gold-dark underline">065 333 2 555</a>{" "}
        i{" "}
        <a href="tel:0693332555" className="text-gold-text hover:text-gold-dark underline">069 333 2 555</a>.
      </p>
    </>
  ),
  "stari-grad": (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Stari grad je istorijsko jezgro Beograda i jedna od tri centralne gradske opštine. Naše usluge obuhvataju temeljno, dubinsko pranje tepiha, nameštaja i dečijih kolica za sve stanovnike ovog dela grada.
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li className="text-gray-700 mb-2">Šest rotacionih četki</li>
        <li className="text-gray-700 mb-2">Automatsko mašinsko pranje</li>
        <li className="text-gray-700 mb-2">Ispiranje centrifugom</li>
        <li className="text-gray-700 mb-2">Ekspeditivna usluga</li>
      </ul>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Mašinsko trešenje tepiha Stari Grad</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Trešenje tepiha automatizovanim mašinama uklanja pesak, prašinu i sitne mrve pre samog pranja, čime se postiže temeljnija i kvalitetnija obrada u narednim fazama.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Stari Grad</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Za lokacije na Starom gradu, koje spadaju u Zonu 2, minimalna kvadratura za preuzimanje tepiha je 6m².
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <Link href="/usluge/" className="text-gold-text hover:text-gold-dark underline">Pogledajte sve naše usluge</Link>. Uverite se u kvalitet.
      </p>
    </>
  ),
  dorcol: (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Dorćol je jedna od najstarijih beogradskih četvrti, deo opštine Stari grad, poznata po uskim ulicama i bogatoj istoriji. Tepisi u ovom delu grada, kao i svuda, vremenom upijaju prašinu i mirise, pa im je potrebno redovno dubinsko čišćenje.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Dubinsko pranje tepiha Dorćol — Kontakt</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Kako biste saznali više o uslugama koje odgovaraju Vašim potrebama, pozovite Tepih Servis Andrić na broj{" "}
        <a href="tel:0653332555" className="text-gold-text hover:text-gold-dark underline">065 333 2 555</a>{" "}
        i dogovorite besplatnu procenu i termin preuzimanja tepiha sa adrese na Dorćolu.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Dorćol</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Dorćol spada u Zonu 2 pokrivenosti — preuzimanje i dostava tepiha su besplatni, uz minimalnu kvadraturu od 6m².
      </p>
    </>
  ),
  bogoslovija: (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Bogoslovija je kraj u centralnom delu Beograda, u blizini Slavije, koji je ime dobio po zgradi nekadašnje Bogoslovije. Ceo proces pranja tepiha kod nas je standardizovan, transparentan i prilagođen potrebama svakog klijenta.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Kompletan proces pranja — Bogoslovija</h2>
      <ol className="list-decimal pl-5 mb-4">
        <li className="text-gray-700 mb-2">Preuzimanje tepiha sa adrese klijenta</li>
        <li className="text-gray-700 mb-2">Trešenje tepiha automatizovanim mašinama</li>
        <li className="text-gray-700 mb-2">Fotografisanje i merenje pre početka pranja</li>
        <li className="text-gray-700 mb-2">Natapanje u koritima</li>
        <li className="text-gray-700 mb-2">Mašinsko pranje pomoću pet rotacionih četki</li>
        <li className="text-gray-700 mb-2">Ručna obrada resa</li>
        <li className="text-gray-700 mb-2">Centrifugiranje i ispiranje do bistre kapi</li>
        <li className="text-gray-700 mb-2">Sušenje na otvorenom, kada vremenski uslovi dozvoljavaju</li>
        <li className="text-gray-700 mb-2">Dosušivanje u automatizovanim komorama</li>
        <li className="text-gray-700 mb-2">Finalno usisavanje, parfemisanje i slikanje</li>
        <li className="text-gray-700 mb-2">Pakovanje i dostava na adresu</li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ne morate sami nositi tepihe — naš vozni park dolazi po njih na adresu u dogovoreno vreme. Pozovite{" "}
        <a href="tel:0653332555" className="text-gold-text hover:text-gold-dark underline">065 333 2 555</a>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <Link href="/usluge/" className="text-gold-text hover:text-gold-dark underline">Usluge</Link>{" "}
        - Pranje Tepiha Bogoslovija
      </p>
    </>
  ),
  cubura: (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Čubura je živopisan kraj opštine Vračar, prepoznatljiv po istoimenom parku i boemskoj atmosferi. I ovde nudimo kompletnu uslugu mašinskog pranja tepiha, od preuzimanja do dostave na adresu.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Kompletan proces pranja — Čubura</h2>
      <ol className="list-decimal pl-5 mb-4">
        <li className="text-gray-700 mb-2">Dolazak na adresu i preuzimanje tepiha</li>
        <li className="text-gray-700 mb-2">Automatsko trešenje radi uklanjanja suve prljavštine i peska</li>
        <li className="text-gray-700 mb-2">Slikanje i merenje pre pranja</li>
        <li className="text-gray-700 mb-2">Natapanje tepiha</li>
        <li className="text-gray-700 mb-2">Pranje setom rotacionih četki</li>
        <li className="text-gray-700 mb-2">Ručno pranje resa, ukoliko postoje</li>
        <li className="text-gray-700 mb-2">Ispiranje i centrifugiranje do bistre vode</li>
        <li className="text-gray-700 mb-2">Prirodno sušenje</li>
        <li className="text-gray-700 mb-2">Sušenje u komorama preko noći</li>
        <li className="text-gray-700 mb-2">Finalna obrada — usisavanje i parfemisanje</li>
        <li className="text-gray-700 mb-2">Pakovanje i dostava</li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        Pozovite nas na{" "}
        <a href="tel:0653332555" className="text-gold-text hover:text-gold-dark underline">065 333 2 555</a>{" "}
        i dogovorite termin preuzimanja tepiha sa Čubure — mi se brinemo o transportu u oba pravca.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <Link href="/usluge/" className="text-gold-text hover:text-gold-dark underline">Usluge</Link>{" "}
        - Pranje Tepiha Čubura
      </p>
    </>
  ),
  vracar: (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Vračar je najgušće naseljena i najmanja beogradska opština, poznata po Hramu Svetog Save i živoj gradskoj atmosferi. Tepih Servis Andrić pruža stručno čišćenje tepiha, dubinsko čišćenje nameštaja, čišćenje i pranje dušeka, hemijsko čišćenje dečijih kolica, opšivanje tepiha i zamenu resa.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Zaštitite svoju investiciju u podne prostirke profesionalnim uslugama čišćenja — pogledajte naš{" "}
        <Link href="/cenovnik/" className="text-gold-text hover:text-gold-dark underline">cenovnik</Link>{" "}
        i izaberite paket koji odgovara Vašim potrebama.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Vračar</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Vračar spada u Zonu 2 pokrivenosti — preuzimanje i dostava tepiha su besplatni, uz minimalnu kvadraturu od 6m².
      </p>
    </>
  ),
  djeram: (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Đeram je naselje u opštini Zvezdara, poznato i pod imenom Smederevski Đeram. Tepisi su vredna investicija u svaki dom, ali redovno upijaju mirise i prašinu, pa im je potrebno periodično dubinsko čišćenje.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Znaci da je tepihu potrebno pranje — Đeram</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ako je tepih pun mrlja, deluje izbledelo ili neprijatno miriše, vreme je za profesionalno mašinsko pranje. Nikada nemojte sami koristiti agresivna hemijska sredstva — mogu trajno oštetiti vlakna.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Đeram</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Đeram spada u Zonu 2 pokrivenosti — preuzimanje i dostava tepiha su besplatni, uz minimalnu kvadraturu od 6m².
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Za sve informacije oko pranja tepiha i nameštaja možete nas kontaktirati na sledeće brojeve telefona:{" "}
        <a href="tel:0653332555" className="text-gold-text hover:text-gold-dark underline">065 333 2 555</a>{" "}
        i{" "}
        <a href="tel:0693332555" className="text-gold-text hover:text-gold-dark underline">069 333 2 555</a>.
      </p>
    </>
  ),
  "vukov-spomenik": (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Vukov spomenik je jedna od mesnih zajednica opštine Zvezdara, smeštena u blizini istoimenog spomenika Vuku Karadžiću. Redovno pranje vraća tepihu prirodnu boju i produžava mu vek trajanja.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Zašto redovno prati tepihe — Vukov Spomenik</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Tepisi tokom godina prirodno trpe habanje, naročito na mestima sa čestim prolaskom. Dubinskim mašinskim pranjem uklanjamo nataloženu prljavštinu i vraćamo tepihu izgled kao od prvog dana.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Vukov Spomenik</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Vukov spomenik pripada Zoni 2, gde je minimalna kvadratura za preuzimanje tepiha 6m².
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Za sve informacije oko pranja tepiha i nameštaja možete nas kontaktirati na sledeće brojeve telefona:{" "}
        <a href="tel:0653332555" className="text-gold-text hover:text-gold-dark underline">065 333 2 555</a>{" "}
        i{" "}
        <a href="tel:0693332555" className="text-gold-text hover:text-gold-dark underline">069 333 2 555</a>.
      </p>
    </>
  ),
  "slavujev-venac": (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Slavujev venac je manji stambeni kraj u centralnom delu Beograda, u blizini Kalenić pijace. Redovno čišćenje čuva boju i strukturu tepiha, sprečavajući prevremeno habanje vlakana.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Kako prepoznati da je tepihu potrebno pranje — Slavujev Venac</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Potamneli tonovi, uporne mrlje i neprijatan miris najčešći su znaci da je tepihu potrebno dubinsko čišćenje. Naše mašinsko pranje uklanja i najsitniju prljavštinu, bez rizika za vlakna.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Slavujev Venac</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Slavujev venac spada u Zonu 2 pokrivenosti — preuzimanje i dostava tepiha su besplatni, uz minimalnu kvadraturu od 6m².
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Za sve informacije oko pranja tepiha i nameštaja možete nas kontaktirati na sledeće brojeve telefona:{" "}
        <a href="tel:0653332555" className="text-gold-text hover:text-gold-dark underline">065 333 2 555</a>{" "}
        i{" "}
        <a href="tel:0693332555" className="text-gold-text hover:text-gold-dark underline">069 333 2 555</a>.
      </p>
    </>
  ),
  palilula: (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Palilula (Centar) je deo istoimene, najveće beogradske opštine, koja se prostire na obe obale Dunava. Mašine za čišćenje tepiha koje koristimo imaju nekoliko radnih delova — ekstraktor, dozer za šampon i sistem za usisavanje prljave vode, koji uklanjaju prljavštinu i mrlje duboko utisnute u tepih.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Polu suvo pranje tepiha Palilula (Centar)</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ova vrsta čišćenja primenjuje se najčešće na velikim prostirkama koje se nalaze u stambenom ili poslovnom prostoru i nije ih moguće doneti u servis. Koristimo ekološke, PH neutralne hemikalije bezbedne za ukućane.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Palilula</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Palilula (Centar) spada u Zonu 2 pokrivenosti — preuzimanje i dostava tepiha su besplatni, uz minimalnu kvadraturu od 6m².
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Možete pogledati kako radimo na stranicama{" "}
        <Link href="/video/" className="text-gold-text hover:text-gold-dark underline">Video</Link>{" "}
        i{" "}
        <Link href="/galerija/" className="text-gold-text hover:text-gold-dark underline">Galerija</Link>.
      </p>
    </>
  ),
  karaburma: (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Karaburma je najveće naselje opštine Palilula na desnoj obali Dunava. U zavisnosti od vrste tepiha prilagođavamo pritisak i mekoću četki koje koristimo prilikom pranja.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Pranje tepiha sa šest rotacionih četki — Karaburma</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Set od šest četki istovremeno obrađuje površinu tepiha, u kombinaciji sa profesionalnim hemijskim sredstvima temeljno uklanjajući sve vrste nečistoća, uz potpuno očuvanje kvaliteta vlakana.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Nakon pranja, tepisi se centrifugiraju i za samo nekoliko minuta oslobađaju viška vode — poseban tretman posvećujemo ručno rađenim, svilenim i persijskim tepisima, kod kojih je brzina sušenja ključna za očuvanje boje.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Karaburma</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Karaburma pripada Zoni 2, gde je minimalna kvadratura za preuzimanje tepiha 6m². Pozovite nas na broj{" "}
        <a href="tel:0653332555" className="text-gold-text hover:text-gold-dark underline">065 333 2 555</a>.
      </p>
    </>
  ),
  mirijevo: (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Mirijevo je jedna od 17 mesnih zajednica opštine Zvezdara. Tepih Servis Andrić posluje od 1984. godine i ubraja se među prve tepih servise u Beogradu.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Održavanje tepiha i podnih prekrivača — Mirijevo</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Mašinsko-dubinsko polusuvo čišćenje primenjujemo na velikim podnim prostirkama koje nije moguće doneti u servis, uz upotrebu ekoloških PH neutralnih sredstava.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Zašto odabrati Tepih Servis Andrić?</h2>
      <ul className="list-disc pl-5 mb-4">
        <li className="text-gray-700 mb-2">Tradicija i iskustvo od 1984. godine</li>
        <li className="text-gray-700 mb-2">Profesionalna i ekspeditivna usluga</li>
        <li className="text-gray-700 mb-2">Dolazak na adresu u dogovorenom terminu</li>
        <li className="text-gray-700 mb-2">Automatsko mašinsko pranje sa šest rotacionih četki</li>
        <li className="text-gray-700 mb-2">Ispiranje centrifugom</li>
      </ul>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Mirijevo</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Mirijevo spada u Zonu 2 pokrivenosti — preuzimanje i dostava tepiha su besplatni, uz minimalnu kvadraturu od 6m². Za informacije o zakazivanju kontaktirajte nas na broj telefona{" "}
        <a href="tel:0653332555" className="text-gold-text hover:text-gold-dark underline">065 333 2 555</a>.
      </p>
    </>
  ),
  zvezdara: (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Zvezdara (Centar) je jezgro istoimene opštine i jedan od najstarijih delova ovog dela Beograda. Kao jedan od prvih tepih servisa u Beogradu, sa dugogodišnjim iskustvom, brinemo o svakom aspektu pranja, sušenja i transporta Vaših tepiha.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Zamena resa na tepisima — Zvezdara (Centar)</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ako su rese na Vašem omiljenom tepihu dotrajale, nudimo zamenu novim resama — pamučnim, vunenim, svilenim ili lanenim, prema Vašoj želji.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Opšivanje itisona — Zvezdara (Centar)</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Opšivanje itisona radimo nakon uklanjanja starih resa, promene boje ivica ili skraćivanja dimenzija, kako bi se sprečilo dalje rasparivanje.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Zvezdara</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Zvezdara (Centar) spada u Zonu 2 pokrivenosti — preuzimanje i dostava tepiha su besplatni, uz minimalnu kvadraturu od 6m².
      </p>
    </>
  ),
  banjica: (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Banjica je naselje u opštini Voždovac, poznato po Institutu za ortopedsko-hirurške bolesti i obližnjem parku. Tepisi su vredna investicija u svaki dom, ali zahtevaju redovno dubinsko pranje kako bi zadržali svežinu.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Kada je vreme za pranje tepiha — Banjica</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Potamneli tonovi i uporne mrlje najčešći su znak da je tepihu potrebno profesionalno dubinsko čišćenje. Nikada ne pokušavajte sami — pogrešno sredstvo može trajno oštetiti vlakna tepiha.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Banjica</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Kao deo Zone 1, preuzimanje i dostava tepiha za Banjicu su potpuno besplatni, bez ograničenja u kvadraturi.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Za sve informacije oko pranja tepiha i nameštaja možete nas kontaktirati na sledeće brojeve telefona:{" "}
        <a href="tel:0653332555" className="text-gold-text hover:text-gold-dark underline">065 333 2 555</a>{" "}
        i{" "}
        <a href="tel:0693332555" className="text-gold-text hover:text-gold-dark underline">069 333 2 555</a>.
      </p>
    </>
  ),
  jajinci: (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Jajinci su naselje u opštini Voždovac, smešteno u južnom delu grada. Redovno pranje tepiha vraća im prvobitnu boju i sprečava prerano habanje vlakana usled svakodnevnog gaženja.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Transport tepiha Jajinci</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Naš tim dolazi na Vašu adresu u Jajincima i preuzima tepihe na pranje, nudeći efikasna rešenja koja su bezbedna za Vašu porodicu i kućne ljubimce.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Jajinci</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Za lokacije u Jajincima, koje spadaju u Zonu 1, preuzimanje i dostava tepiha su besplatni, bez ograničenja u kvadraturi.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Kako biste saznali više o uslugama pranja tepiha, pozovite nas na broj{" "}
        <a href="tel:0653332555" className="text-gold-text hover:text-gold-dark underline">065 333 2 555</a>.
      </p>
    </>
  ),
  kumodraz: (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Kumodraž je naselje u opštini Voždovac, poznato kao rodno mesto vojvode Stepe Stepanovića. Nudimo dva tipa dubinskog mašinskog pranja, prilagođena vrsti i veličini Vašeg tepiha.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Mašinsko dubinsko pranje polusuvo — Kumodraž</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Automatizovane mašine sa šest rotirajućih četki istovremeno obrađuju celu površinu tepiha, doziranom količinom vode i sredstava prema vrsti vlakana, uklanjajući i najtvrdokornije fleke.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Mašinsko dubinsko pranje sa centrifugom — Kumodraž</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ovaj način pranja koristi pet četki koje temeljno uklanjaju prljavštinu i dezinfikuju tepih, uz opciono centrifugiranje koje iz tepiha izvlači svu preostalu vlagu.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Kumodraž</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Preuzimanje i dostava tepiha u Kumodraži su, kao u celoj Zoni 1, besplatni i bez ograničenja u kvadraturi tepiha.
      </p>
    </>
  ),
  "stepa-stepanovic": (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Stepa Stepanović je najnovije naselje opštine Voždovac, dovršeno 2012. godine. Redovno pranje tepiha vraća im prirodnu boju i sprečava habanje vlakana usled svakodnevnog gaženja.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Transport tepiha Stepa Stepanović</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Tim Tepih Servisa Andrić dolazi na Vašu adresu i preuzima tepihe na pranje, nudeći rešenja koja su efikasna, zdrava i bezbedna za celu porodicu.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Stepa Stepanović</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Za lokacije naselja Stepa Stepanović, koje spadaju u Zonu 1, preuzimanje i dostava tepiha su besplatni, bez ograničenja u kvadraturi.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Kako biste saznali više o uslugama pranja tepiha, pozovite nas na broj{" "}
        <a href="tel:0653332555" className="text-gold-text hover:text-gold-dark underline">065 333 2 555</a>.
      </p>
    </>
  ),
  "mitrovo-brdo": (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Mitrovo brdo je deo naselja Braće Jerković u opštini Voždovac, nastao tokom migracija devedesetih godina. Redovno pranje tepiha sprečava prerano habanje i vraća im originalnu boju.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Transport tepiha Mitrovo brdo</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Naš tim dolazi na adresu i preuzima tepihe na pranje, nudeći rešenja koja su efikasna i bezbedna za Vašu porodicu i lokalnu zajednicu.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Mitrovo Brdo</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Preuzimanje i dostava tepiha na Mitrovom brdu su, kao u celoj Zoni 1, besplatni i bez ograničenja u kvadraturi tepiha.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Kako biste saznali više o uslugama pranja tepiha, pozovite nas na broj{" "}
        <a href="tel:0653332555" className="text-gold-text hover:text-gold-dark underline">065 333 2 555</a>.
      </p>
    </>
  ),
  "vojvode-vlahovica": (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ulica Vojvode Vlahovića nalazi se u opštini Voždovac. Dubinsko pranje nameštaja i tepiha nije samo pitanje estetike, već pre svega zdravlja ukućana.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Opšivanje Tepiha Vojvode Vlahovića</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Opšivanje ivica sprečava rasparivanje tepiha nakon uklanjanja resa, skraćivanja dimenzija ili promene boje ivične trake, čuvajući strukturu tepiha na dugi rok.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Vojvode Vlahovića</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Kao deo Zone 1, preuzimanje i dostava tepiha za ulicu Vojvode Vlahovića su potpuno besplatni, bez ograničenja u kvadraturi.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Pogledajte naše{" "}
        <Link href="/usluge/" className="text-gold-text hover:text-gold-dark underline">Usluge</Link>{" "}
        i{" "}
        <Link href="/galerija/" className="text-gold-text hover:text-gold-dark underline">Foto galeriju</Link>.
      </p>
    </>
  ),
  "brace-jerkovic": (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Braće Jerković je jedno od novih naselja opštine Voždovac, izgrađeno između 1969. i 1975. godine. Redovno pranje tepiha vraća im prirodnu boju i sprečava habanje usled svakodnevnog gaženja.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Transport tepiha Braće Jerković</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Tim Tepih Servisa Andrić dolazi na Vašu adresu, preuzima tepihe i isporučuje ih dubinski oprane — rešenje koje je efikasno, zdravo i bezbedno za celu porodicu.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Braće Jerković</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Preuzimanje i dostava tepiha u naselju Braće Jerković su, kao u celoj Zoni 1, besplatni i bez ograničenja u kvadraturi tepiha.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Kako biste saznali više o uslugama pranja tepiha, pozovite nas na broj{" "}
        <a href="tel:0653332555" className="text-gold-text hover:text-gold-dark underline">065 333 2 555</a>.
      </p>
    </>
  ),
  "vojvode-stepe": (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Vojvode Stepe je jedna od glavnih saobraćajnica opštine Voždovac, duž koje se proteže niz stambenih naselja. Čistimo tepihe koji se suočavaju sa dubokom prljavštinom i prašinom karakterističnom za prometne delove grada.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Isporuka i prevoz tepiha Vojvode Stepe Beograd</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Korišćenjem visokokvalitetnih, ekološki prihvatljivih sredstava i naprednih tehnika pranja čuvamo svetlinu boje i produžavamo životni vek Vašeg tepiha.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <Link href="/transport-tepiha/" className="text-gold-text hover:text-gold-dark underline">Transport tepiha Lokacija Vojvode Stepe</Link>
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Vojvode Stepe</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Kao deo Zone 1, preuzimanje i dostava tepiha za Vojvode Stepe su potpuno besplatni, bez ograničenja u kvadraturi.
      </p>
    </>
  ),
  autokomanda: (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Autokomanda je naselje na severnoj granici opštine Voždovac, ime je dobilo po nekadašnjim garažama vojske Jugoslavije. Dubinsko pranje nameštaja i tepiha nije samo pitanje estetike, već pre svega zdravlja ukućana.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Opšivanje Tepiha Autokomanda</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Opšivanje ivica sprečava rasparivanje tepiha nakon uklanjanja resa, skraćivanja dimenzija ili promene boje ivične trake.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Autokomanda</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Kao deo Zone 1, preuzimanje i dostava tepiha za Autokomandu su potpuno besplatni, bez ograničenja u kvadraturi.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Pogledajte naše{" "}
        <Link href="/usluge/" className="text-gold-text hover:text-gold-dark underline">Usluge</Link>{" "}
        i{" "}
        <Link href="/galerija/" className="text-gold-text hover:text-gold-dark underline">Foto galeriju</Link>.
      </p>
    </>
  ),
  vozdovac: (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Tepih Servis Andrić se nalazi na Voždovcu i pruža profesionalne usluge pranja tepiha za sve stanovnike ovog dela Beograda. Kao jedan od prvih tepih servisa u Beogradu sa tradicijom od 1984. godine, raspolažemo najsavremenijim mašinama i ekološkim sredstvima koja temeljno čiste Vaše tepihe bez oštećenja vlakana.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Profesionalno pranje i čišćenje tepiha Voždovac</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Naše automatizovane mašine sa šest rotacionih četki vrše dubinsko temeljno pranje tepiha, uklanjajući sve nečistoće, grinje, alergene i neprijatne mirise. Koristimo visoko-kvalitetna, ekološki prihvatljiva sredstva koja su bezbedna za Vašu porodicu i kućne ljubimce. Tepisi se nakon pranja suše u specijalnim komorama sa visokim temperaturama i protocima vazduha, što garantuje potpunu suvoću bez trunke vlage.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Voždovac</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Tepise ne donosite Vi — mi dolazimo po njih! Za lokacije na Voždovcu, preuzimanje i dostava tepiha je besplatna bez ograničenja u kvadraturi. Zakazivanje je jednostavno — pozovite nas i dogovorimo termin koji Vama odgovara.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Za sve informacije i zakazivanje kontaktirajte nas na:{" "}
        <a href="tel:0653332555" className="text-gold-text hover:text-gold-dark underline">065 333 2 555</a>{" "}
        ili{" "}
        <a href="tel:0693332555" className="text-gold-text hover:text-gold-dark underline">069 333 2 555</a>.
      </p>
    </>
  ),
  zemun: (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Tepih Servis Andrić pokriva i opštinu Zemun, jednu od najvećih opština u Beogradu, smeštenu na levoj obali Save. Stanovnicima Zemuna nudimo kompletnu uslugu pranja tepiha, nameštaja i dečijih kolica, sa preuzimanjem i dostavom na adresu.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Dubinsko mašinsko pranje tepiha Zemun</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Naše automatizovane mašine sa rotacionim četkama temeljno čiste tepihe iz dubine vlakana, uklanjajući prašinu, alergene i neprijatne mirise. Koristimo ekološki bezbedna sredstva, a tepisi se nakon pranja suše u specijalnim komorama do potpune suvoće.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Zemun</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Za lokacije u Zemunu, koje spadaju u Zonu 2, minimalna kvadratura za preuzimanje tepiha je 6m². Pozovite nas i dogovorimo termin preuzimanja koji Vama odgovara.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Za sve informacije i zakazivanje kontaktirajte nas na:{" "}
        <a href="tel:0653332555" className="text-gold-text hover:text-gold-dark underline">065 333 2 555</a>{" "}
        ili{" "}
        <a href="tel:0693332555" className="text-gold-text hover:text-gold-dark underline">069 333 2 555</a>.
      </p>
    </>
  ),
  vidikovac: (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Tepih Servis Andrić pruža usluge pranja tepiha i na Vidikovcu, naselju u opštini Čukarica poznatom po pogledu na dolinu Save, po kome je i dobilo ime.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Profesionalno pranje tepiha Vidikovac</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Mašinsko dubinsko pranje obavljamo automatizovanim mašinama sa šest rotacionih četki, koje uklanjaju nečistoću iz same dubine tepiha, uz upotrebu ekoloških sredstava bezbednih za decu i kućne ljubimce.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Vidikovac</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Za lokacije na Vidikovcu, koje spadaju u Zonu 2, minimalna kvadratura za preuzimanje tepiha je 6m². Pozovite nas i dogovorimo termin preuzimanja koji Vama odgovara.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Za sve informacije i zakazivanje kontaktirajte nas na:{" "}
        <a href="tel:0653332555" className="text-gold-text hover:text-gold-dark underline">065 333 2 555</a>{" "}
        ili{" "}
        <a href="tel:0693332555" className="text-gold-text hover:text-gold-dark underline">069 333 2 555</a>.
      </p>
    </>
  ),
  "filmski-grad": (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Tepih Servis Andrić pokriva i Filmski grad, deo opštine Čukarica poznat po nasleđu beogradske filmske industrije i blizini Košutnjaka.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Dubinsko čišćenje tepiha Filmski grad</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Naše mašine za dubinsko pranje uklanjaju i najsitniju prljavštinu iz tepiha, koristeći samo propisanu količinu ekoloških sredstava, kako bi se očuvao kvalitet i boja Vašeg tepiha.
      </p>
      <h2 className="text-xl font-bold text-navy mt-8 mb-3">Preuzimanje i dostava tepiha — Filmski grad</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Za lokacije u Filmskom gradu, koje spadaju u Zonu 2, minimalna kvadratura za preuzimanje tepiha je 6m². Pozovite nas i dogovorimo termin preuzimanja koji Vama odgovara.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Za sve informacije i zakazivanje kontaktirajte nas na:{" "}
        <a href="tel:0653332555" className="text-gold-text hover:text-gold-dark underline">065 333 2 555</a>{" "}
        ili{" "}
        <a href="tel:0693332555" className="text-gold-text hover:text-gold-dark underline">069 333 2 555</a>.
      </p>
    </>
  ),
};
