<!-- ELUCENIA technical documentation · correcao-de-sodio-adrogue-madias · pt-BR · no clinical/professional/rights approval -->

# Adrogué–Madias: variação teórica de sódio

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/correcao-de-sodio-adrogue-madias)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Sódio atual

`na`

mEq/L · intervalo: 100–190

### Peso

`peso`

kg · intervalo: 30–300

### Fração estimada de água corporal total

`grupo`

- `0.6` — 0,60
- `0.5` — 0,50
- `0.45` — 0,45

### Solução infundida

`sol`

- `ns3` — NaCl 3% (Na 513 mEq/L)
- `ns09` — NaCl 0,9% (Na 154 mEq/L)
- `rl` — Ringer lactato (Na 130, K 4 mEq/L)
- `ns045` — NaCl 0,45% (Na 77 mEq/L)
- `ns02` — NaCl 0,2% em glicose 5% (Na 34 mEq/L)
- `sg5` — Soro glicosado 5% (sem sódio)

### Potássio adicionado ao soro

`kadd`

mEq/L · opcional · intervalo: 0–60

### Idade

`idade`

anos · intervalo: 18–110

## Edição do método

Adrogué–Madias 2000; variação teórica por 1 L

## Fórmula documentada

ΔNa por 1 L = (Na da solução + K da solução − Na sérico)/(água corporal total + 1); água corporal total = peso × fração informada.

## Limites e população

Estimativa estática em adultos; não calcula volume para atingir uma meta, velocidade, duração nem limites seguros de correção. Não inclui diurese, perdas e mudanças durante tratamento.

## Referências

- [IAEM · Hyponatraemia guideline v1.0 · maio de 2024](https://iaem.ie/wp-content/uploads/wpfd/preview_files/The-Assessment-and-Management-of-Hyponatraemia-in-the-Emergency-Department-V1.0%28899318df0e8c4df2bec997a7d369eafd%29.pdf)

- [Adrogué HJ, Madias NE. Hyponatremia. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005253422107)

- [Adrogué HJ, Madias NE. Hypernatremia. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005183422006)

- [Spasovski G et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol, 2014.](https://doi.org/10.1530/EJE-13-1020)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
