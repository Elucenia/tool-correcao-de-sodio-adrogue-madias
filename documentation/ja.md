<!-- ELUCENIA technical documentation · correcao-de-sodio-adrogue-madias · ja · no clinical/professional/rights approval -->

# Adrogué–Madias：ナトリウムの理論的変化

[条件・出典・許諾](https://elucenia.org/ja/tools/correcao-de-sodio-adrogue-madias)

## 使い方

ポータルでツールを使用するか、ローカルHTTPサーバー経由でindex.htmlを開いてください。言語を選択し、項目を入力して計算してください。

## 入力項目と単位

### 現在のナトリウム値

`na`

mEq/L · 範囲: 100–190

### 体重

`peso`

kg · 範囲: 30–300

### 推定総体水分割合

`grupo`

- `0.6` — 0.60
- `0.5` — 0.50
- `0.45` — 0.45

### 輸液製剤

`sol`

- `ns3` — NaCl 3%（Na 513 mEq/L）
- `ns09` — NaCl 0.9%（Na 154 mEq/L）
- `rl` — 乳酸リンゲル液（Na 130、K 4 mEq/L）
- `ns045` — NaCl 0.45%（Na 77 mEq/L）
- `ns02` — 5%ブドウ糖液中のNaCl 0.2%（Na 34 mEq/L）
- `sg5` — 5%ブドウ糖液（ナトリウムなし）

### 輸液へのカリウム添加量

`kadd`

mEq/L · 任意 · 範囲: 0–60

### 年齢

`idade`

年 · 範囲: 18–110

## 方法の版

Adrogué–Madias 2000；1 L当たりの理論的変化

## 記載された計算式

1 L当たりのΔNa =（溶液Na + 溶液K − 血清Na）/（総体水分量 + 1）；総体水分量 = 体重 × 入力した割合。

## 限界・対象集団

成人における静的推定です。目標に達するための量、速度、期間、安全な補正限度は計算しません。利尿、喪失、治療中の変化は含みません。

## 参考文献

- [IAEM · Hyponatraemia guideline v1.0 · 2024年5月](https://iaem.ie/wp-content/uploads/wpfd/preview_files/The-Assessment-and-Management-of-Hyponatraemia-in-the-Emergency-Department-V1.0%28899318df0e8c4df2bec997a7d369eafd%29.pdf)

- [Adrogué HJ, Madias NE. Hyponatremia. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005253422107)

- [Adrogué HJ, Madias NE. Hypernatremia. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005183422006)

- [Spasovski G et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol, 2014.](https://doi.org/10.1530/EJE-13-1020)

## 技術テストの再現

このリポジトリのルートディレクトリでnode test.cjsを実行すると、記録された合成ケースを再実行できます。元の入力、期待結果、許容誤差は保持されています。技術テストは臨床的検証を意味しません。

```sh
node test.cjs
```

tool.jsonには出典、版、確認範囲が記録されています。examples.jsonには合成入力と期待結果が保持され、results.jsonには実際に得られた結果が記録されています。

[記録・参考文献](../tool.json) · [JavaScriptコード](../calculator.js) · [参照ケース](../examples.json) · [results.json](../results.json)

## 確認状況と使用条件

独立した臨床レビューは実施されていません。

このインターフェースは独自に作成した翻訳であり、公式版や認証済みの版ではありません。独立した臨床レビュー、専門家による言語レビュー、評価尺度等の権利許諾の確認は実施されていません。

式または分類の結果です。解釈、対応、適用可能性は専門家による評価と選択した出典に依存します。

## ライセンスと帰属表示

Apache-2.0はELUCENIAのコードにのみ適用されます。評価尺度等、出版物、翻訳、データの権利は、それぞれの権利者に帰属します。LICENSEとNOTICEを保持してください。

ELUCENIA · Felipe Guedes · Copyright © 2026
