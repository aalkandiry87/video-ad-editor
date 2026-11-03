# القواعد المشتركة

## 1. تجهيز الصورة قبل الفيديو (يوفر كريدت)
إذا الصورة من الجوال (خلفية زحمة، إضاءة صفرا)، سوّ أول ستيل نظيف واعتمده، بعدين حرّكه.

```
Task: clean hero still of the attached product for use as a video start frame.
Reference: @Image1 = exact product geometry, cap, label, logo, color and material. Do not redesign anything.
Output: {RATIO, default 9:16}, product centered in lower-middle third, 15% headroom.
Background: {BACKGROUND, default seamless warm charcoal backdrop with soft gradient}.
Lighting: large soft key 45° camera-left, thin strip rim light camera-right tracing the silhouette, low fill. Natural contact shadow under the product.
Keep: label fully readable and straight, true proportions, real reflections only from the described lights.
Negatives: no extra text, no added props touching the product, no warped label, no melted edges, no duplicated logo.
```

## 2. ختام الشعار (End card) — يضاف لأي قالب
```
Final 2 seconds: camera settles to a locked-off frame. Product holds still, center frame. {BRAND_NAME} logo fades in above it, clean and legible, then on-screen text "{CTA_TEXT}" in small clean type below. Background dims slightly so text reads. No new objects enter.
```

## 3. السالب الأساسي (Negatives) — يتلصق آخر أي برومت
```
Negatives: product shape change, label text change, logo distortion, extra caps or parts, floating product without contact shadow, wrong scale versus hands, flicker, morphing between frames, random subtitles, watermarks, extra fingers, plastic-looking skin.
```

## 4. معايير القبول (Acceptance)
- أول + نص + آخر فريم: الشكل والملصق واللون يطابقون الصورة.
- الحجم صح جنب اليد/الطاولة/الشارع.
- الحركة ناعمة بدون قفزات، والصوت مثل المكتوب.
- لو الملصق يرجف شوي ← يتصلح بالمونتاج (لصق الملصق الحقيقي). لو الشكل تغيّر ← رفض.

## 5. اختيار الموديل السريع
| الحاجة | الموديل |
|---|---|
| إعلان 15-30 ث بلقطة متصلة | Seedance 2.5 (omni_reference) — جرّب draft 480p أول |
| كذا لقطة بنفس المنتج | Kling 3.0 Omni multi-shot |
| بداية ونهاية محددة (ريفيل + شعار) | Kling o3 FLF / Veo 3.1 Frames to Video |
| لوك سينمائي بعدسة وضوء محدد | Cinema Studio 4.0 |
| تعديل شي واحد بإعلان جاهز | kling_video_edit |

## 6. الأبعاد الافتراضية
- ريل/تيك توك/سناب: 9:16 — 1080×1920
- يوتيوب/شاشات: 16:9
- فيد: 4:5
