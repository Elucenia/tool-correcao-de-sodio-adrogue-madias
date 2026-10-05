<!-- ELUCENIA technical documentation · correcao-de-sodio-adrogue-madias · de · no clinical/professional/rights approval -->

# Adrogué–Madias: theoretische Natriumänderung

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/correcao-de-sodio-adrogue-madias)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Aktuelles Natrium

`na`

mEq/L · Bereich: 100–190

### Gewicht

`peso`

kg · Bereich: 30–300

### Geschätzter Anteil des Gesamtkörperwassers

`grupo`

- `0.6` — 0,60
- `0.5` — 0,50
- `0.45` — 0,45

### Infundierte Lösung

`sol`

- `ns3` — NaCl 3 % (Na 513 mEq/L)
- `ns09` — NaCl 0,9 % (Na 154 mEq/L)
- `rl` — Ringer-Laktat (Na 130, K 4 mEq/L)
- `ns045` — NaCl 0,45 % (Na 77 mEq/L)
- `ns02` — NaCl 0,2 % in Glukose 5 % (Na 34 mEq/L)
- `sg5` — Glukoselösung 5 % (ohne Natrium)

### Der Lösung zugesetztes Kalium

`kadd`

mEq/L · optional · Bereich: 0–60

### Alter

`idade`

Jahre · Bereich: 18–110

## Fassung der Methode

Adrogué–Madias 2000; theoretische Änderung pro 1 L

## Dokumentierte Formel

ΔNa pro 1 L = (Na der Lösung + K der Lösung − Serum-Na)/(Gesamtkörperwasser + 1); Gesamtkörperwasser = Gewicht × eingegebener Anteil.

## Grenzen und Population

Statische Schätzung bei Erwachsenen; berechnet weder Zielvolumen, Geschwindigkeit, Dauer noch sichere Korrekturgrenzen. Diurese, Verluste und Veränderungen während der Behandlung sind nicht enthalten.

## Referenzen

- [IAEM · Hyponatraemia guideline v1.0 · Mai 2024](https://iaem.ie/wp-content/uploads/wpfd/preview_files/The-Assessment-and-Management-of-Hyponatraemia-in-the-Emergency-Department-V1.0%28899318df0e8c4df2bec997a7d369eafd%29.pdf)

- [Adrogué HJ, Madias NE. Hyponatremia. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005253422107)

- [Adrogué HJ, Madias NE. Hypernatremia. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005183422006)

- [Spasovski G et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol, 2014.](https://doi.org/10.1530/EJE-13-1020)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026
