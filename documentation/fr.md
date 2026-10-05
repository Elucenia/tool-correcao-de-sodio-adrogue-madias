<!-- ELUCENIA technical documentation · correcao-de-sodio-adrogue-madias · fr · no clinical/professional/rights approval -->

# Adrogué–Madias : variation théorique du sodium

[conditions, sources et autorisations](https://elucenia.org/fr/outils/correcao-de-sodio-adrogue-madias)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Sodium actuel

`na`

mEq/L · intervalle: 100–190

### Poids

`peso`

kg · intervalle: 30–300

### Fraction estimée d’eau corporelle totale

`grupo`

- `0.6` — 0,60
- `0.5` — 0,50
- `0.45` — 0,45

### Solution perfusée

`sol`

- `ns3` — NaCl 3 % (Na 513 mEq/L)
- `ns09` — NaCl 0,9 % (Na 154 mEq/L)
- `rl` — Ringer lactate (Na 130, K 4 mEq/L)
- `ns045` — NaCl 0,45 % (Na 77 mEq/L)
- `ns02` — NaCl 0,2 % dans glucose 5 % (Na 34 mEq/L)
- `sg5` — Solution de glucose 5 % (sans sodium)

### Potassium ajouté à la solution

`kadd`

mEq/L · facultatif · intervalle: 0–60

### Âge

`idade`

ans · intervalle: 18–110

## Édition de la méthode

Adrogué–Madias 2000 ; variation théorique pour 1 L

## Formule documentée

ΔNa par 1 L = (Na de la solution + K de la solution − Na sérique)/(eau corporelle totale + 1) ; eau corporelle totale = poids × fraction renseignée.

## Limites et population

Estimation statique chez l’adulte ; ne calcule pas le volume pour atteindre une cible, la vitesse, la durée ou les limites sûres de correction. N’intègre pas la diurèse, les pertes ou les variations pendant le traitement.

## Références

- [IAEM · Hyponatraemia guideline v1.0 · mai 2024](https://iaem.ie/wp-content/uploads/wpfd/preview_files/The-Assessment-and-Management-of-Hyponatraemia-in-the-Emergency-Department-V1.0%28899318df0e8c4df2bec997a7d369eafd%29.pdf)

- [Adrogué HJ, Madias NE. Hyponatremia. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005253422107)

- [Adrogué HJ, Madias NE. Hypernatremia. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005183422006)

- [Spasovski G et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol, 2014.](https://doi.org/10.1530/EJE-13-1020)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
