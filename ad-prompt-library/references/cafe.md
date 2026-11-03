# قوالب الكافيهات (6)

**الفراغات المشتركة:** `{BRAND_NAME}` · `{PRODUCT_LOCK}` (الكوب/الشعار/المشروب من الصورة) · `{DRINK}` · `{CTA_TEXT}` (افتراضي: العنوان أو «زورونا») · `{RATIO}` 9:16 · `{DURATION}` 12s
**قاعدة الكافيه:** شعار الكوب ثابت ومقروء، الفوم والحليب والثلج بحركة واقعية، البخار خفيف.

---

## كافيه 1 — صبّة الإسبريسو (Espresso pour macro)
الموديل: Seedance 2.5 / Cinema Studio 4.0
```
Task: {DURATION} cafe spot, espresso extraction macro, no faces.
Model: Seedance 2.5 omni_reference. Ratio {RATIO}, 1080p.
References: @Image1 = exact cup/glass shape and logo (and machine if shown).
Product lock: {PRODUCT_LOCK}.
Opening frame: macro of the portafilter spouts, a first dark bead of espresso forming.
Timed action:
0-4s: two thick streams of espresso pour into the cup, tiger-striped crema building.
4-7s: camera pulls back slowly revealing the cup on the drip tray, logo facing camera.
7-10s: barista's hand slides the cup onto a saucer on a wooden counter, steam rising.
10-12s: locked hero of the cup; logo "{BRAND_NAME}", text "{CTA_TEXT}".
Camera: 100mm macro feel, slow pull-back, then static. Motivation: follow the coffee from source to cup.
Lighting: warm 3200K side light, dark background, backlight catching the steam.
Audio: machine hiss, pour, cup on saucer, soft lo-fi beat. No voiceover.
Negatives: liquid flowing upward, cup logo changing, overflowing cup, extra cups, thick fake smoke.
Acceptance: logo readable in the final frame; pour physics real.
```

## كافيه 2 — لاتيه آرت من فوق (Top-down latte art)
الموديل: Kling 3.0 / Seedance 2.5
```
Task: 10s top-down latte art reveal.
Model: Kling 3.0. Ratio {RATIO}.
References: @Image1 = exact cup and logo.
Product lock: {PRODUCT_LOCK}.
Opening frame: perfectly top-down shot of the cup with espresso, a milk pitcher entering frame-top.
Timed action:
0-6s: steamed milk pours in a steady stream and the barista draws a {ART, default rosetta} pattern, the pattern forms naturally.
6-8s: pitcher lifts out; a tiny wobble in the foam settles.
8-10s: a hand slides a small card with "{BRAND_NAME}" next to the cup; text "{CTA_TEXT}".
Camera: locked top-down, 50mm, no movement.
Lighting: soft window daylight from top-left, natural shadows on a {SURFACE, default light marble} table.
Audio: pour sound, cafe ambience murmur, soft acoustic guitar.
Negatives: pattern appearing instantly, milk not mixing, cup rotating, logo warping.
Acceptance: the art builds progressively; cup static.
```

## كافيه 3 — صباح الديرة (Morning ritual / city to cup)
الموديل: Kling 3.0 Omni multi-shot (refs: الكوب + صورة المكان)
```
Task: {DURATION} lifestyle spot: a young Kuwaiti grabs morning coffee at {BRAND_NAME}.
Model: Kling 3.0 Omni multi-shot. Ratio {RATIO}.
References: @Image1 = exact cup and logo; @Image2 (optional) = cafe storefront/interior.
Cast: Kuwaiti man or woman, mid 20s, smart-casual, sunglasses.
Shot 1 (0-3s): exterior, morning sun, he pushes the cafe door open, bell rings.
Shot 2 (3-6s): over-the-shoulder, barista hands him the cup across the counter; he nods "{DIALOGUE, default: يعطيك العافية}".
Shot 3 (6-9s): close-up: first sip, eyes close for a beat, he exhales through his nose.
Shot 4 (9-12s): he walks out into the light holding the cup, logo toward camera; "{CTA_TEXT}".
Camera: 35mm, gimbal follow, close-up on 85mm.
Lighting: warm morning sun 4500K through glass, bright airy interior.
Audio: door bell, cafe ambience, one spoken line, upbeat light music.
Negatives: cup logo changing between shots, cup size changing, extra people staring at camera, mouth artifacts.
Acceptance: same cup in all four shots; dialogue line exact.
```

## كافيه 4 — الآيس الصيفي (Iced drink splash)
الموديل: Seedance 2.5
```
Task: 10s iced {DRINK, default iced latte} hero spot.
Model: Seedance 2.5 omni_reference. Ratio {RATIO}.
References: @Image1 = exact glass/cup shape and logo.
Product lock: {PRODUCT_LOCK}.
Opening frame: empty clear cup on a {BACKGROUND, default sand-colored} backdrop, bright summer light.
Timed action:
0-3s: three ice cubes drop in slow motion, small realistic splash of cold water droplets.
3-6s: milk pours, then espresso layers slowly over it, swirling marble pattern.
6-8s: condensation beads form on the outside; a straw slides in.
8-10s: static hero; logo "{BRAND_NAME}", text "{CTA_TEXT}".
Camera: 85mm, slow slide right then static.
Lighting: hard bright sun from back-left creating glowing drink edges, white bounce front.
Audio: ice clinks, pour, refreshing upbeat music.
Negatives: drink overflowing, ice floating unrealistically, logo smeared by condensation, glass shape change.
Acceptance: layering visible; logo readable at end.
```

## كافيه 5 — جولة بالمكان (Space walkthrough)
لازم صورة المكان. الموديل: Seedance 2.5 (لقطة وحدة) / Veo 3.1
```
Task: {DURATION} single continuous walkthrough of the cafe interior.
Model: Seedance 2.5 omni_reference. Ratio {RATIO}.
References: @Image1 = exact interior design, furniture, colors and signage of the cafe. Do not invent a different layout.
Opening frame: just outside the entrance, door handle in foreground.
Timed action:
0-3s: camera glides through the opening door into the space.
3-7s: smooth path past seating, a couple chatting softly, a barista working the bar.
7-10s: camera arrives at the counter where a {DRINK} sits ready, logo facing camera.
10-12s: settle on the drink; "{BRAND_NAME}" and "{CTA_TEXT}".
Camera: 24mm, steady gimbal glide at chest height, one continuous move.
Lighting: matches @Image1 lighting; warm practicals, daylight from windows.
Audio: cafe ambience, grinder in background, warm music bed.
Negatives: layout changes, signage text changes, warped furniture, people with distorted faces, camera passing through walls.
Acceptance: interior recognisable as @Image1 throughout.
```

## كافيه 6 — قهوة وحلا (Dessert pairing)
الموديل: Kling 3.0 Omni multi-shot (refs: الكوب + الحلا)
```
Task: 10s pairing spot: {DRINK} with {DESSERT, default pistachio cake}.
Model: Kling 3.0 Omni multi-shot. Ratio {RATIO}.
References: @Image1 = exact cup/logo; @Image2 = exact dessert appearance.
Shot 1 (0-3s): fork cuts into the dessert, soft layers revealed, crumbs fall.
Shot 2 (3-6s): steam rising from the cup next to it, slow push-in.
Shot 3 (6-10s): two hands from opposite sides reach in, one lifts the cup, one takes the plate; frame ends on the table with logo; "{BRAND_NAME}" "{CTA_TEXT}".
Camera: 85mm macro feel, 45° angle.
Lighting: soft warm side light, shallow background bokeh.
Audio: fork on plate, soft cafe ambience, light jazz.
Negatives: dessert changing shape, cup logo change, sticky unreal textures, extra hands.
Acceptance: dessert matches @Image2; cup matches @Image1.
```
