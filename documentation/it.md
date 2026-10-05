<!-- ELUCENIA technical documentation · correcao-de-sodio-adrogue-madias · it · no clinical/professional/rights approval -->

# Adrogué–Madias: variazione teorica del sodio

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/correcao-de-sodio-adrogue-madias)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Sodio attuale

`na`

mEq/L · intervallo: 100–190

### Peso

`peso`

kg · intervallo: 30–300

### Frazione stimata di acqua corporea totale

`grupo`

- `0.6` — 0,60
- `0.5` — 0,50
- `0.45` — 0,45

### Soluzione infusa

`sol`

- `ns3` — NaCl 3% (Na 513 mEq/L)
- `ns09` — NaCl 0,9% (Na 154 mEq/L)
- `rl` — Ringer lattato (Na 130, K 4 mEq/L)
- `ns045` — NaCl 0,45% (Na 77 mEq/L)
- `ns02` — NaCl 0,2% in glucosio 5% (Na 34 mEq/L)
- `sg5` — Soluzione glucosata 5% (senza sodio)

### Potassio aggiunto alla soluzione

`kadd`

mEq/L · facoltativo · intervallo: 0–60

### Età

`idade`

anni · intervallo: 18–110

## Edizione del metodo

Adrogué–Madias 2000; variazione teorica per 1 L

## Formula documentata

ΔNa per 1 L = (Na della soluzione + K della soluzione − Na sierico)/(acqua corporea totale + 1); acqua corporea totale = peso × frazione inserita.

## Limiti e popolazione

Stima statica negli adulti; non calcola volume per raggiungere un obiettivo, velocità, durata o limiti sicuri di correzione. Non include diuresi, perdite e variazioni durante il trattamento.

## Riferimenti

- [IAEM · Hyponatraemia guideline v1.0 · maggio 2024](https://iaem.ie/wp-content/uploads/wpfd/preview_files/The-Assessment-and-Management-of-Hyponatraemia-in-the-Emergency-Department-V1.0%28899318df0e8c4df2bec997a7d369eafd%29.pdf)

- [Adrogué HJ, Madias NE. Hyponatremia. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005253422107)

- [Adrogué HJ, Madias NE. Hypernatremia. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005183422006)

- [Spasovski G et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol, 2014.](https://doi.org/10.1530/EJE-13-1020)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
