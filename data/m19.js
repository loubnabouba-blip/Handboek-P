(window.MODS = window.MODS || []).push({
  id: "m19", nr: 19, reeks: 3,
  titel: "WWM op straat: digibon, dragen of voorhanden",
  kort: "Waarvoor wel en waarvoor niet een MEOS-digibon, wat is dragen en wat voorhanden hebben, en de afhandeling op straat.",
  wetten: [["Wet wapens en munitie", "BWBR0008804"], ["Wetboek van Strafvordering", "BWBR0001903"]],
  intro: "Een wapen op straat kun je soms zelf afhandelen met een MEOS-digibon, soms moet je aanhouden. Dit onderdeel volgt de presentatie De Wet wapens en munitie op straat. Voor de ordening van de wapens zie onderdeel 8, voor beslag en dossier zie onderdeel 17.",
  doelen: ["bepalen of je een digibon met WWM-feitcode kunt maken of moet aanhouden", "dragen en voorhanden hebben onderscheiden", "de feitcode kiezen bij het voorwerp", "de afhandeling op straat in vier stappen uitvoeren"],
  leren: [
    { h: "Waarvoor een MEOS-digibon?", b: [
      ["p", "Een MEOS-digibon met WWM-feitcode is er voor zaken die aan alle vier de voorwaarden voldoen:"],
      ["ol", ["Het gaat om een van de <b>genoemde wapens</b>, per feitcode (E900, G411a, G411b, G412).", "Er is <b>geen arrestant</b>: je neemt niemand mee naar het bureau.", "De verdachte is <b>meerderjarig</b>.", "De zaak is <b>op straat af te handelen</b>."]],
      ["p", "Voldoet de zaak niet aan alle vier, dan geldt: <b>altijd aanhouden</b>. Dat is zo bij een minderjarige verdachte, bij niet-genoemde wapens, en bij een ander feit dan alleen het dragen of voorhanden hebben van een wapen."],
      ["tab", ["Situatie", "Wat je doet"], [
        ["Meerderjarige, genoemd wapen, alleen dragen of voorhanden hebben, op straat af te handelen", "MEOS-digibon met de WWM-feitcode. Zie ‘Op straat’ hieronder."],
        ["Minderjarige verdachte", "Altijd aanhouden."],
        ["Een wapen dat niet bij een feitcode genoemd wordt", "Altijd aanhouden."],
        ["Een ander feit dan alleen dragen of voorhanden hebben", "Altijd aanhouden."]
      ]],
      ["let", "Ook bij een digibon blijft gelden dat beslag en afdoening twee losse beslissingen zijn (onderdeel 17) en dat het OM de sanctie bepaalt."]
    ] },
    { h: "Genoemde wapens en feitcodes", b: [
      ["tab", ["Code", "Feit", "Welke wapens"], [
        ["G411a", "Dragen van een wapen uit categorie I (WWM 13)", "Zie de lijst hieronder."],
        ["G411b", "Voorhanden hebben van een wapen uit categorie I (WWM 13)", "Dezelfde lijst."],
        ["G412", "Voorhanden hebben van een wapen uit categorie II onder 6° (WWM 26)", "Traangaswapen, pepperspray, CS-gas."],
        ["E900", "Dragen van een gelegenheidswapen, categorie IV onder 7° (WWM 2, 27)", "Honkbalknuppel, hockeystick, koekenpan, baksteen, haarlak, schilmesje, schroevendraaier, keukenmes en dergelijke."]
      ]],
      ["p", "<b>Categorie I (G411a en G411b)</b> volgens de presentatie:"],
      ["ul", ["Stiletto, valmes, vlindermes (WWM 2, categorie I onder 1°).", "Boksbeugel, ploertendoder, wurgstok, werpster, vilmes, ballistisch mes (categorie I onder 3°).", "Messen met meer dan één snijkant en of opengevouwen langer dan 28 cm (categorie I onder 2°).", "Wapens vermomd als andere voorwerpen, de ‘blanke’ wapens (categorie I onder 4°).", "Nep(vuur)wapens, geschikt voor be- en afdreiging (categorie I onder 7°)."]],
      ["p", "In MEOS staat bij G411a en G411b de omschrijving ‘categorie I onder 1 en 3’ (stiletto, valmes, vlindermes, boksbeugel, ploertendoder, wurgstok, werpster, vilmes, ballistisch mes en geluiddemper). De presentatie noemt in de lijst hierboven daarnaast ook de messen met meer dan één snijkant, de vermomde wapens en de nepwapens."],
      ["tip", "E900 gaat over een voorwerp dat normaal geen wapen is maar hier wel: een gelegenheidswapen. Het gaat alleen over dragen. Noteer waarom het hier een wapen kan zijn: de omstandigheden, het doel en een eventuele dreiging (WWM 2, categorie IV onder 7°)."]
    ] },
    { h: "Dragen of voorhanden?", b: [
      ["p", "Volgens de presentatie, simpel gezegd:"],
      ["tab", ["", "Wat het is", "Voorbeelden"], [
        ["<b>Dragen</b>", "Op het lichaam, in de handen of direct binnen handbereik en klaar voor gebruik.", "In de handen, in de broeksband, onder een autostoel, in het deurportier, in de middenconsole of het handschoenkastje."],
        ["<b>Voorhanden hebben</b>", "Weten dat iets in de nabijheid is en er makkelijk over kunnen beschikken, maar daar moeite voor moeten doen om het te pakken.", "In een kofferbak, verpakt in een tas of in een kluis."]
      ]],
      ["p", "Het onderscheid bepaalt de feitcode: dragen is G411a (categorie I) of E900 (gelegenheidswapen), voorhanden hebben is G411b of G412. WWM 13 verbiedt voor categorie I zowel het dragen als het voorhanden hebben. Voor de categorieën II, III en IV staan het voorhanden hebben (WWM 26) en het dragen (WWM 27) in aparte artikelen."],
      ["quiz", "Een stiletto zit in de broeksband van een meerderjarige. Welke feitcode?", ["G411b", "G411a", "G412", "E900"], 1, "Een stiletto is categorie I. In de broeksband is dragen: op het lichaam en klaar voor gebruik. Dat is G411a."],
      ["quiz", "Dezelfde stiletto ligt in de kofferbak, in een tas. Welke feitcode?", ["G411a", "G411b", "E900", "G412"], 1, "In een kofferbak, verpakt in een tas, kost het moeite om het te pakken. Dat is voorhanden hebben: G411b."],
      ["quiz", "Een honkbalknuppel ligt in de kofferbak. Is dat E900?", ["Ja, altijd", "Nee, E900 gaat over dragen", "Ja, als het een gelegenheidswapen is", "Alleen bij een minderjarige"], 1, "E900 is het dragen van een gelegenheidswapen. In de kofferbak is het voorhanden hebben, niet dragen."]
    ] },
    { h: "Op straat: vier stappen", b: [
      ["stap", [
        ["1. Digibon met WWM-feitcode", "Maak een MEOS-digibon met de feitcode die bij het wapen en bij dragen of voorhanden hebben past (E900, G411a, G411b of G412)."],
        ["2. Afstandsverklaring (RAPP)", "Laat de afstandsverklaring tekenen, digitaal of ‘nat’. Maak zo nodig een foto en voeg die toe aan de digibon via MEOS."],
        ["3. Reden van wetenschap (zeven w’s)", "Leg vast hoe en waar het wapen is aangetroffen. Beschrijf het dragen of voorhanden hebben. Noteer of het door de hondenman is veiliggesteld."],
        ["4. Bon op ‘nabewerken’", "Zet de bon op ‘nabewerken’."]
      ]],
      ["p", "Daarna komt de verdachte in BVI voor met MEOS-bonnen voor het wapenfeit."],
      ["casus", "Casus: het mes in de middenconsole", "Bij een controle ligt in de middenconsole van een auto een vlindermes. De bestuurder is 34 jaar en zegt dat het van zijn werk is. Er is geen ander feit.", "Digibon of aanhouden?", "Een vlindermes is categorie I. In de middenconsole is het direct binnen handbereik en klaar voor gebruik: dragen, dus G411a. De verdachte is meerderjarig, het is een genoemd wapen, er is geen ander feit en je neemt geen arrestant mee: een MEOS-digibon met G411a is mogelijk. Laat de afstandsverklaring tekenen, leg in de reden van wetenschap vast hoe en waar het lag, en zet de bon op nabewerken. Was de bestuurder 17 geweest, dan altijd aanhouden."]
    ] }
  ],
  spiek: {
    weet: [["Digibon of aanhouden?", "Digibon alleen bij alle vier: genoemd wapen, geen arrestant, meerderjarig, op straat af te handelen. Anders altijd aanhouden."], ["Dragen of voorhanden?", "Dragen: op het lichaam, in de handen of direct binnen handbereik en klaar voor gebruik. Voorhanden: moeite om het te pakken."]],
    cijfers: [["4", "Voorwaarden voor een digibon"], ["G411a", "Dragen cat. I"], ["G411b", "Voorhanden cat. I"], ["E900", "Dragen gelegenheidswapen"]],
    kern: [
      ["Digibon", [
        ["Voorwaarden", "Genoemd wapen, geen arrestant, meerderjarig, op straat af te handelen."],
        ["Anders", "Altijd aanhouden."]
      ]],
      ["Feitcodes", [
        ["G411a", "Dragen wapen cat. I."],
        ["G411b", "Voorhanden hebben wapen cat. I."],
        ["G412", "Voorhanden hebben: traangas, pepperspray, CS-gas (cat. II onder 6°)."],
        ["E900", "Dragen gelegenheidswapen (cat. IV onder 7°)."]
      ]],
      ["Op straat", [
        ["1", "Digibon met WWM-feitcode."],
        ["2", "Afstandsverklaring tekenen (digitaal of nat). Foto toevoegen via MEOS."],
        ["3", "Reden van wetenschap, zeven w’s: hoe en waar, dragen of voorhanden, veiliggesteld door hondenman."],
        ["4", "Bon op nabewerken."]
      ]]
    ],
    boom: { titel: "Digibon of aanhouden?", start: "a", n: {
      a: { q: "Is de verdachte minderjarig?", o: [["Ja", "z"], ["Nee, meerderjarig", "b"]] },
      b: { q: "Is het een genoemd wapen (per feitcode)?", o: [["Ja", "c"], ["Nee", "z"]] },
      c: { q: "Gaat het alleen om dragen of voorhanden hebben van het wapen, zonder ander feit?", o: [["Ja", "d"], ["Nee, er is een ander feit", "z"]] },
      d: { q: "Is het op straat af te handelen, zonder arrestant?", o: [["Ja", "e"], ["Nee", "z"]] },
      e: { q: "Droeg de verdachte het wapen (op het lichaam, in de handen of direct binnen handbereik en klaar voor gebruik)?", o: [["Ja, dragen", "dr"], ["Nee, voorhanden", "vh"]] },
      z: { r: "Altijd aanhouden.", k: "no" },
      dr: { r: "MEOS-digibon: G411a (cat. I), of E900 bij een gelegenheidswapen. Afstandsverklaring, reden van wetenschap, bon op nabewerken.", k: "ok" },
      vh: { r: "MEOS-digibon: G411b (cat. I), of G412 (traangas, pepperspray, CS-gas). Afstandsverklaring, reden van wetenschap, bon op nabewerken.", k: "ok" }
    } },
    tabel: [["Dragen of voorhanden", ["", "Wat", "Voorbeelden"], [
      ["Dragen", "Op het lichaam, in de handen of direct binnen handbereik en klaar voor gebruik", "Handen, broeksband, onder autostoel, deurportier, middenconsole, handschoenkastje"],
      ["Voorhanden", "In de nabijheid, makkelijk over te beschikken, maar moeite om te pakken", "Kofferbak, verpakt in een tas, kluis"]
    ]]],
    check: [
      ["Genoemd wapen", "Past het bij E900, G411a, G411b of G412?"],
      ["Meerderjarig", "Anders altijd aanhouden."],
      ["Alleen wapenfeit", "Geen ander feit."],
      ["Dragen of voorhanden", "Bepaalt de code."],
      ["Afstandsverklaring", "Getekend, foto toegevoegd."],
      ["Reden van wetenschap", "Hoe en waar, dragen of voorhanden, veiliggesteld."]
    ],
    checkTitel: "Digibon-check: loop dit af bij elk wapen op straat.",
    valk: [
      ["Minderjarige een digibon geven", "Bij een minderjarige verdachte altijd aanhouden."],
      ["Dragen en voorhanden verwarren", "Kofferbak is voorhanden, middenconsole is dragen."],
      ["E900 voor een knuppel in de kofferbak", "E900 gaat over dragen."],
      ["Reden van wetenschap vergeten", "Hoe en waar aangetroffen, en wie het veiligstelde."],
      ["Bon niet op nabewerken", "Stap 4: bon op nabewerken."]
    ],
    flits: [
      ["Digibon", "Wanneer maak je een MEOS-digibon voor een wapen?", "Bij een genoemd wapen, zonder arrestant, bij een meerderjarige verdachte, als het op straat af te handelen is."],
      ["Digibon", "Wanneer moet je altijd aanhouden?", "Bij een minderjarige verdachte, bij niet-genoemde wapens en bij een ander feit dan alleen dragen of voorhanden hebben."],
      ["Codes", "Wat is G411a?", "Het dragen van een wapen uit categorie I."],
      ["Codes", "Wat is G411b?", "Het voorhanden hebben van een wapen uit categorie I."],
      ["Codes", "Wat is G412?", "Het voorhanden hebben van een wapen uit categorie II onder 6°: traangaswapen, pepperspray, CS-gas."],
      ["Codes", "Wat is E900?", "Het dragen van een gelegenheidswapen, categorie IV onder 7°: bijvoorbeeld honkbalknuppel, hockeystick, koekenpan, baksteen, haarlak, schilmesje, schroevendraaier, keukenmes."],
      ["Dragen", "Wat is dragen?", "Op het lichaam, in de handen of direct binnen handbereik en klaar voor gebruik."],
      ["Dragen", "Noem voorbeelden van dragen.", "In de handen, in de broeksband, onder een autostoel, in het deurportier, in de middenconsole of het handschoenkastje."],
      ["Voorhanden", "Wat is voorhanden hebben?", "Weten dat iets in de nabijheid is en er makkelijk over kunnen beschikken, maar moeite moeten doen om het te pakken."],
      ["Voorhanden", "Noem voorbeelden van voorhanden hebben.", "In een kofferbak, verpakt in een tas of in een kluis."],
      ["Op straat", "Wat zijn de vier stappen op straat?", "Digibon met WWM-feitcode, afstandsverklaring, reden van wetenschap (zeven w’s), bon op nabewerken."],
      ["Op straat", "Wat hoort in de reden van wetenschap?", "Hoe en waar het wapen is aangetroffen, het dragen of voorhanden hebben, en of het door de hondenman is veiliggesteld."],
      ["Op straat", "Hoe laat je de afstandsverklaring tekenen?", "Digitaal of ‘nat’. Zo nodig een foto maken en toevoegen aan de digibon via MEOS."]
    ]
  }
});
