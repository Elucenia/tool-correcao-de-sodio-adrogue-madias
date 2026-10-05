<!-- ELUCENIA technical documentation · correcao-de-sodio-adrogue-madias · es · no clinical/professional/rights approval -->

# Adrogué–Madias: variación teórica del sodio

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/correcao-de-sodio-adrogue-madias)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Sodio actual

`na`

mEq/L · intervalo: 100–190

### Peso

`peso`

kg · intervalo: 30–300

### Fracción estimada de agua corporal total

`grupo`

- `0.6` — 0,60
- `0.5` — 0,50
- `0.45` — 0,45

### Solución infundida

`sol`

- `ns3` — NaCl 3% (Na 513 mEq/L)
- `ns09` — NaCl 0,9% (Na 154 mEq/L)
- `rl` — Ringer lactato (Na 130, K 4 mEq/L)
- `ns045` — NaCl 0,45% (Na 77 mEq/L)
- `ns02` — NaCl 0,2% en glucosa 5% (Na 34 mEq/L)
- `sg5` — Solución de glucosa 5% (sin sodio)

### Potasio añadido a la solución

`kadd`

mEq/L · opcional · intervalo: 0–60

### Edad

`idade`

años · intervalo: 18–110

## Edición del método

Adrogué–Madias 2000; cambio teórico por 1 L

## Fórmula documentada

ΔNa por 1 L = (Na de la solución + K de la solución − Na sérico)/(agua corporal total + 1); agua corporal total = peso × fracción introducida.

## Límites y población

Estimación estática en adultos; no calcula el volumen para alcanzar una meta, la velocidad, la duración ni los límites seguros de corrección. No incluye diuresis, pérdidas ni cambios durante el tratamiento.

## Referencias

- [IAEM · Hyponatraemia guideline v1.0 · mayo de 2024](https://iaem.ie/wp-content/uploads/wpfd/preview_files/The-Assessment-and-Management-of-Hyponatraemia-in-the-Emergency-Department-V1.0%28899318df0e8c4df2bec997a7d369eafd%29.pdf)

- [Adrogué HJ, Madias NE. Hyponatremia. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005253422107)

- [Adrogué HJ, Madias NE. Hypernatremia. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005183422006)

- [Spasovski G et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol, 2014.](https://doi.org/10.1530/EJE-13-1020)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
