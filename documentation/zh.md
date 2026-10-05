<!-- ELUCENIA technical documentation · correcao-de-sodio-adrogue-madias · zh · no clinical/professional/rights approval -->

# Adrogué–Madias：血钠理论变化

[条件、来源与许可](https://elucenia.org/zh/tools/correcao-de-sodio-adrogue-madias)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 当前钠值

`na`

mEq/L · 范围: 100–190

### 体重

`peso`

kg · 范围: 30–300

### 估计全身水分比例

`grupo`

- `0.6` — 0.60
- `0.5` — 0.50
- `0.45` — 0.45

### 输注液体

`sol`

- `ns3` — NaCl 3%（Na 513 mEq/L）
- `ns09` — NaCl 0.9%（Na 154 mEq/L）
- `rl` — 乳酸林格液（Na 130，K 4 mEq/L）
- `ns045` — NaCl 0.45%（Na 77 mEq/L）
- `ns02` — 5% 葡萄糖中的 NaCl 0.2%（Na 34 mEq/L）
- `sg5` — 5% 葡萄糖液（无钠）

### 输液中添加的钾

`kadd`

mEq/L · 选填 · 范围: 0–60

### 年龄

`idade`

年 · 范围: 18–110

## 方法版本

Adrogué–Madias 2000；每1 L的理论变化

## 已记录的公式

每1 L的ΔNa =（溶液Na + 溶液K − 血清Na）/（总体水 + 1）；总体水 = 体重 × 输入比例。

## 限制与适用人群

成人的静态估算；不计算达到目标所需的容量、速度、时长或安全纠正限度。不包括利尿、丢失和治疗期间的变化。

## 参考文献

- [IAEM · Hyponatraemia guideline v1.0 · 2024年5月](https://iaem.ie/wp-content/uploads/wpfd/preview_files/The-Assessment-and-Management-of-Hyponatraemia-in-the-Emergency-Department-V1.0%28899318df0e8c4df2bec997a7d369eafd%29.pdf)

- [Adrogué HJ, Madias NE. Hyponatremia. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005253422107)

- [Adrogué HJ, Madias NE. Hypernatremia. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005183422006)

- [Spasovski G et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol, 2014.](https://doi.org/10.1530/EJE-13-1020)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026
