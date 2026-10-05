<!-- ELUCENIA technical documentation · correcao-de-sodio-adrogue-madias · en · no clinical/professional/rights approval -->

# Adrogué–Madias: theoretical sodium change

[conditions, sources and permissions](https://elucenia.org/en/tools/correcao-de-sodio-adrogue-madias)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Current sodium

`na`

mEq/L · range: 100–190

### Weight

`peso`

kg · range: 30–300

### Estimated total body water fraction

`grupo`

- `0.6` — 0.60
- `0.5` — 0.50
- `0.45` — 0.45

### Infused solution

`sol`

- `ns3` — NaCl 3% (Na 513 mEq/L)
- `ns09` — NaCl 0.9% (Na 154 mEq/L)
- `rl` — Lactated Ringer’s solution (Na 130, K 4 mEq/L)
- `ns045` — NaCl 0.45% (Na 77 mEq/L)
- `ns02` — NaCl 0.2% in glucose 5% (Na 34 mEq/L)
- `sg5` — Glucose 5% solution (no sodium)

### Potassium added to the solution

`kadd`

mEq/L · optional · range: 0–60

### Age

`idade`

years · range: 18–110

## Method edition

Adrogué–Madias 2000; theoretical change per 1 L

## Documented formula

ΔNa per 1 L = (solution Na + solution K − serum Na)/(total body water + 1); total body water = weight × entered fraction.

## Limits and population

Static estimate in adults; does not calculate the volume needed to reach a target, rate, duration or safe correction limits. Does not include diuresis, losses or changes during treatment.

## References

- [IAEM · Hyponatraemia guideline v1.0 · May 2024](https://iaem.ie/wp-content/uploads/wpfd/preview_files/The-Assessment-and-Management-of-Hyponatraemia-in-the-Emergency-Department-V1.0%28899318df0e8c4df2bec997a7d369eafd%29.pdf)

- [Adrogué HJ, Madias NE. Hyponatremia. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005253422107)

- [Adrogué HJ, Madias NE. Hypernatremia. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005183422006)

- [Spasovski G et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol, 2014.](https://doi.org/10.1530/EJE-13-1020)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
