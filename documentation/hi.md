<!-- ELUCENIA technical documentation · correcao-de-sodio-adrogue-madias · hi · no clinical/professional/rights approval -->

# Adrogué–Madias: सोडियम में सैद्धांतिक परिवर्तन

[शर्तें, स्रोत और अनुमतियाँ](https://elucenia.org/hi/tools/correcao-de-sodio-adrogue-madias)

## उपयोग कैसे करें

पोर्टल पर उपकरण का उपयोग करें या स्थानीय HTTP सर्वर के माध्यम से index.html खोलें। भाषा चुनें, फ़ील्ड भरें और गणना करें।

## इनपुट और इकाइयाँ

### वर्तमान सोडियम

`na`

mEq/L · सीमा: 100–190

### वज़न

`peso`

kg · सीमा: 30–300

### कुल शरीर-जल का अनुमानित अंश

`grupo`

- `0.6` — 0.60
- `0.5` — 0.50
- `0.45` — 0.45

### इन्फ़्यूज़ किया गया घोल

`sol`

- `ns3` — NaCl 3% (Na 513 mEq/L)
- `ns09` — NaCl 0.9% (Na 154 mEq/L)
- `rl` — लैक्टेटेड रिंगर (Na 130, K 4 mEq/L)
- `ns045` — NaCl 0.45% (Na 77 mEq/L)
- `ns02` — 5% ग्लूकोज़ में NaCl 0.2% (Na 34 mEq/L)
- `sg5` — 5% ग्लूकोज़ घोल (सोडियम रहित)

### इन्फ़्यूज़न घोल में जोड़ा गया पोटैशियम

`kadd`

mEq/L · वैकल्पिक · सीमा: 0–60

### आयु

`idade`

वर्ष · सीमा: 18–110

## विधि का संस्करण

Adrogué–Madias 2000; प्रति 1 L सैद्धांतिक परिवर्तन

## दस्तावेज़ित सूत्र

प्रति 1 L ΔNa = (घोल का Na + घोल का K − सीरम Na)/(कुल शरीर-जल + 1); कुल शरीर-जल = वज़न × दर्ज अंश।

## सीमाएँ और जनसमूह

वयस्कों में स्थिर अनुमान; लक्ष्य तक पहुँचने के लिए मात्रा, दर, अवधि या सुधार की सुरक्षित सीमाएँ नहीं गणना करता। मूत्रोत्सर्जन, हानि और उपचार के दौरान बदलाव शामिल नहीं हैं।

## संदर्भ

- [IAEM · Hyponatraemia guideline v1.0 · मई 2024](https://iaem.ie/wp-content/uploads/wpfd/preview_files/The-Assessment-and-Management-of-Hyponatraemia-in-the-Emergency-Department-V1.0%28899318df0e8c4df2bec997a7d369eafd%29.pdf)

- [Adrogué HJ, Madias NE. Hyponatremia. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005253422107)

- [Adrogué HJ, Madias NE. Hypernatremia. N Engl J Med, 2000.](https://doi.org/10.1056/NEJM200005183422006)

- [Spasovski G et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol, 2014.](https://doi.org/10.1530/EJE-13-1020)

## तकनीकी परीक्षण दोहराएँ

दर्ज कृत्रिम मामलों को दोहराने के लिए इस रिपॉज़िटरी की मूल निर्देशिका में node test.cjs चलाएँ। मूल इनपुट, अपेक्षित परिणाम और सहनशीलता सीमाएँ सुरक्षित रखी गई हैं। तकनीकी परीक्षण नैदानिक सत्यापन नहीं हैं।

```sh
node test.cjs
```

tool.json में स्रोत, संस्करण और समीक्षा का दायरा दिया गया है। examples.json में कृत्रिम इनपुट और अपेक्षित परिणाम सुरक्षित हैं; results.json में प्राप्त परिणाम दर्ज हैं।

[रिकॉर्ड और संदर्भ](../tool.json) · [JavaScript कोड](../calculator.js) · [संदर्भ मामले](../examples.json) · [results.json](../results.json)

## समीक्षा और उपयोग की शर्तें

स्वतंत्र नैदानिक समीक्षा नहीं की गई है।

यह इंटरफ़ेस लेखकों द्वारा किया गया अनुवाद है, कोई आधिकारिक या प्रमाणित संस्करण नहीं। स्वतंत्र नैदानिक समीक्षा, पेशेवर भाषाई समीक्षा और उपकरणों के अधिकारों की अनुमति की प्रक्रिया पूरी नहीं हुई है।

सूत्र या वर्गीकरण का परिणाम। व्याख्या, कार्यवाही और उपयुक्तता पेशेवर मूल्यांकन और चुने गए स्रोत पर निर्भर है।

## लाइसेंस और श्रेय

Apache-2.0 केवल ELUCENIA के कोड पर लागू होता है। उपकरणों, प्रकाशनों, अनुवादों और डेटा के अधिकार उनके संबंधित अधिकारधारकों के पास रहते हैं। LICENSE और NOTICE सुरक्षित रखें।

ELUCENIA · Felipe Guedes · Copyright © 2026
