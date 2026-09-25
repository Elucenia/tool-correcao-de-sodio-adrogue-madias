# Correção do sódio (Adrogué-Madias)

Identificador: `correcao-de-sodio-adrogue-madias`. Pacote independente da interface ELUCENIA, para navegador e Node.js.

## Situação

- Revisão: **restricted**. O código transforma meta em volume por fórmula sem modelar diurese, evolução ou limites individualizados de correção. O alerta aparece apenas com meta >10. Suspender conversão terapêutica até explicitar cenário, horizonte temporal e protocolo de monitorização.
- Execução: **desativada; o adaptador retorna REVIEW_REQUIRED**.
- Validação clínica independente: **não realizada**. Os testes abaixo verificam aritmética e transporte dos campos.
- Fonte importada: Panorama Médico; arquivo `app/content/ferramentas/urgencia.php`.
- 4/4 casos de referência conferidos na importação. 0 casos independentes desta ferramenta.
- Dados: o exemplo funciona localmente, sem rede, armazenamento ou identificação de pacientes.

## Uso no Node.js

```js
const { calculate } = require('./calculator.js');
const example = require('./examples.json')[0];
console.log(calculate(example.input));
```

Execute `node test.cjs` (ou `npm test`) para conferir os exemplos. Abra `index.html` para usar a versão local do navegador. Não há dependências npm.

## Contrato

`calculate(input)` recebe um objeto, devolve `{id, main, label, raw, clinicalValidation}` ou `{error, code, field?}`. Consulte `tool.json` e `metadata.fields` para nomes, unidades, opções e intervalos. Números aceitam valores finitos ou strings numéricas; opções precisam corresponder às chaves documentadas. Campos obrigatórios vazios, booleanos inválidos, valores fora de intervalo e resultados não finitos são rejeitados. Somente checkbox omitido representa falso; um campo numérico ou uma opção obrigatória nunca é preenchido automaticamente.

Interpretações, ordens terapêuticas e tabelas herdadas não são retornadas pelo adaptador. Classificações e valores ainda dependem da população e das limitações da fonte.

## Fórmula / versão

Adrogué–Madias estima a variação de Na por 1 L: ([Na+K] da solução − Na sérico) / (água corporal total + 1). A estimativa não é uma ordem de infusão e não representa perdas ou mudanças em curso.

A transcrição acima documenta o acervo de origem e pode requerer atualização. Revisão documental: https://www.endocrinology.org/media/xhrhxhxm/emergency-management-of-severe-and-moderately-severely-symptomatic-hyponatraemia-in-adult-patients-2022.pdf

## Condições e limites

Prevê a variação do sódio sérico após 1 litro de uma solução, na hiponatremia ou na hipernatremia, e o volume necessário para uma meta de correção.

Confirme população, exclusões, unidades, versão e diretriz aplicável ao país e serviço. O resultado não deve ser utilizado isoladamente para diagnóstico, alta ou prescrição. O pacote não representa certificação clínica, aprovação regulatória ou indicação para toda população. Veja a revisão completa em `tool.json`.

## Fontes originais

- [Adrogué HJ, Madias NE. Hyponatremia. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005253422107)
- [Adrogué HJ, Madias NE. Hypernatremia. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005183422006)
- [Spasovski G et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol, 2014.](https://doi.org/10.1530/EJE-13-1020)

## Exemplos e rastreabilidade

`examples.json` preserva `originalInput`, expectativa e entrada explícita do exemplo. Não foi necessário expandir opções zero nos exemplos.

## Direitos e repositório

Este pacote integra o acervo privado de desenvolvimento da ELUCENIA. A publicação externa depende de liberação expressa. A licença MIT (arquivo LICENSE) cobre o código de integração, preservando o aviso de autoria e a licença; não transfere direitos sobre instrumentos, traduções, questionários, artigos, marcas ou outros materiais de terceiros. Consulte NOTICE.md e as condições de cada titular. O acesso a este adaptador não publica nem licencia automaticamente o restante da plataforma ELUCENIA.

## Acesso ao repositório

Repositório privado da organização ELUCENIA. A abertura pública depende de liberação expressa.
