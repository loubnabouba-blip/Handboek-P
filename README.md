# Politiehandboek

Intern leer- en spiekhandboek, met per onderdeel een leerdocument en een spiekbriefje (kern, beslisboom, "weet ik niet", tabellen, checklist, valkuilen, flitskaarten en zoeken).

Open `index.html` in een browser, of bekijk de site via GitHub Pages.

## Opbouw
- `index.html`, `oefenen.html`, `leren/` en `spiek/`: de pagina's (gegenereerd).
- `data/m01.js` t/m `m16.js`: de inhoud per onderdeel.
- `engine.js` en `engine.css`: de gedeelde motor en opmaak.
- `build.mjs`: genereert de pagina's uit de data (`node build.mjs`).
- `politiehandboek.html`: het hele handboek in één bestand (`node build.mjs --single politiehandboek.html`).
- `wwm-op-straat.html`: los handboek WWM op straat (`node build.mjs --book books/wwm.json`).

## Bronnen
Wetteksten: wetten.overheid.nl. Lokale regels: APV Amersfoort (lokaleregelgeving.overheid.nl). Beleid: aanwijzingen en richtlijnen van het Openbaar Ministerie (om.nl).
