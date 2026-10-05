<!-- ELUCENIA technical documentation · correcao-de-sodio-adrogue-madias · ar · no clinical/professional/rights approval -->

# Adrogué–Madias: التغير النظري للصوديوم

[الشروط والمصادر والأذونات](https://elucenia.org/ar/tools/correcao-de-sodio-adrogue-madias)

## كيفية الاستخدام

استخدم الأداة في البوابة أو افتح index.html عبر خادم HTTP محلي. اختر اللغة، وأكمل الحقول، ثم أجرِ الحساب.

## المدخلات والوحدات

### الصوديوم الحالي

`na`

mEq/L · النطاق: ١٠٠–١٩٠

### الوزن

`peso`

kg · النطاق: ٣٠–٣٠٠

### الكسر المقدّر لماء الجسم الكلي

`grupo`

- `0.6` — ٠٫٦٠
- `0.5` — ٠٫٥٠
- `0.45` — ٠٫٤٥

### المحلول المسرب

`sol`

- `ns3` — NaCl ٣% (Na ٥١٣ mEq/L)
- `ns09` — NaCl ٠٫٩% (Na ١٥٤ mEq/L)
- `rl` — رينغر لاكتات (Na ١٣٠، K ٤ mEq/L)
- `ns045` — NaCl ٠٫٤٥% (Na ٧٧ mEq/L)
- `ns02` — NaCl ٠٫٢% في غلوكوز ٥% (Na ٣٤ mEq/L)
- `sg5` — محلول غلوكوز ٥% (دون صوديوم)

### البوتاسيوم المضاف إلى محلول التسريب

`kadd`

mEq/L · اختياري · النطاق: ٠–٦٠

### العمر

`idade`

سنوات · النطاق: ١٨–١١٠

## إصدار الطريقة

Adrogué–Madias 2000؛ التغيّر النظري لكل 1 L

## المعادلة الموثقة

ΔNa لكل 1 L = (Na المحلول + K المحلول − Na المصل)/(ماء الجسم الكلّي + 1)؛ ماء الجسم الكلّي = الوزن × النسبة المدخلة.

## الحدود والفئة السكانية

تقدير ثابت لدى البالغين؛ لا يحسب الحجم اللازم للوصول إلى هدف أو السرعة أو المدة أو الحدود الآمنة للتصحيح. لا يشمل إدرار البول أو الفقد أو التغيّرات أثناء العلاج.

## المراجع

- [IAEM · Hyponatraemia guideline v1.0 · مايو 2024](https://iaem.ie/wp-content/uploads/wpfd/preview_files/The-Assessment-and-Management-of-Hyponatraemia-in-the-Emergency-Department-V1.0%28899318df0e8c4df2bec997a7d369eafd%29.pdf)

- [Adrogué HJ, Madias NE. Hyponatremia. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005253422107)

- [Adrogué HJ, Madias NE. Hypernatremia. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005183422006)

- [Spasovski G et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol, 2014.](https://doi.org/10.1530/EJE-13-1020)

## إعادة إجراء الاختبارات التقنية

شغّل node test.cjs في المجلد الجذري لهذا المستودع لتكرار الحالات الاصطناعية المسجلة. تُحفظ المدخلات والنتائج المتوقعة وحدود التفاوت الأصلية. لا تُعدّ الاختبارات التقنية تحققًا سريريًا.

```sh
node test.cjs
```

يحتوي tool.json على المصادر والإصدار ونطاق المراجعة. يحتفظ examples.json بالمدخلات والنتائج المتوقعة للحالات الاصطناعية؛ ويسجل results.json النتائج التي تم الحصول عليها.

[السجل والمراجع](../tool.json) · [شيفرة JavaScript](../calculator.js) · [حالات مرجعية](../examples.json) · [results.json](../results.json)

## المراجعة وشروط الاستخدام

لم تُجرَ مراجعة سريرية مستقلة.

هذه الواجهة ترجمة أعدّها مؤلفوها، وليست إصدارًا رسميًا أو معتمدًا. لم تُجرَ مراجعة سريرية مستقلة أو مراجعة لغوية مهنية، ولم تُستكمل الموافقة على حقوق استخدام الأدوات.

نتيجة المعادلة أو التصنيف. يعتمد التفسير والتصرف ومدى الانطباق على التقييم المهني والمصدر المحدد.

## الترخيص ونسبة العمل إلى أصحابه

ينطبق Apache-2.0 على كود ELUCENIA فقط. تبقى حقوق الأدوات والمنشورات والترجمات والبيانات لأصحابها المعنيين. احتفظ بملفّي LICENSE وNOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
