# قوالب السيارات (6)

**الفراغات المشتركة:** `{BRAND_NAME}` (الوكيل/المعرض) · `{CAR_LOCK}` (الموديل، اللون، الجنوط، الشبك، الشعار من الصورة) · `{CTA_TEXT}` · `{RATIO}` 9:16 · `{DURATION}` 12s
**قاعدة السيارات:** لا يتغير شكل البدي، الشبك، الشعار، الجنوط، اللون، ولا الحجم الحقيقي. الجنوط تدور باتجاه الحركة الصح. لا فيزياء مستحيلة. لوحات بدون أرقام حقيقية.

---

## سيارة 1 — الكشف بالستوديو (Studio reveal)
الموديل: Seedance 2.5 / Cinema Studio 4.0
```
Task: {DURATION} car reveal in a dark studio, no people.
Model: Seedance 2.5 omni_reference. Ratio {RATIO}, 1080p.
References: @Image1 = exact car body shape, paint color, grille, badge, wheels, lights.
Car lock: {CAR_LOCK}. Real proportions, plate blank.
Opening frame: total darkness; one thin horizontal light line at headlight height.
Timed action:
0-3s: headlights switch on, light signature glowing, haze in the beams.
3-6s: an overhead light strip slides front to back, revealing the bonnet and roof line with a long clean reflection.
6-9s: slow low orbit from front three-quarter to side profile, reflections flowing over the paint.
9-12s: camera stops at front three-quarter; logo "{BRAND_NAME}", text "{CTA_TEXT}".
Camera: 35mm low height, slow orbit on a dolly, then static. Motivation: let the light draw the body lines.
Lighting: black studio, large overhead softbox strips, light haze, glossy dark floor reflection.
Audio: engine start rumble at 0-3s, deep bass swell, subtle metallic hits on each light reveal.
Ending: front three-quarter hero with logo.
Negatives: body shape change, wrong badge, wheels changing design, paint color shift, floating car, warped reflections.
Acceptance: car matches @Image1 in first full reveal and final frame.
```

## سيارة 2 — طريق الصحرا وقت الغروب (Desert highway tracking)
الموديل: Kling 3.0 / Veo 3.1
```
Task: {DURATION} driving spot on an empty desert highway in Kuwait at golden hour.
Model: Kling 3.0 Omni. Ratio {RATIO}.
References: @Image1 = exact car exterior and color.
Car lock: {CAR_LOCK}.
Opening frame: low wide shot of an empty two-lane highway cutting through flat desert, sun low behind.
Timed action:
0-3s: the car enters frame from the distance toward camera, heat shimmer on the asphalt.
3-7s: tracking shot from a camera car alongside, side profile, wheels rotating correctly, dust whirling lightly behind.
7-10s: drone rises and pulls ahead, the car passing below toward the sun.
10-12s: car slows and stops on the shoulder, side profile against the sunset; logo "{BRAND_NAME}", "{CTA_TEXT}".
Camera: 50mm tracking from camera car at wheel height, then drone top-down-to-forward tilt.
Lighting: natural golden sun 3000K backlight, warm rim along the roofline.
Audio: engine and tire road noise, wind, driving electronic music.
Negatives: wheels spinning backward, car drifting sideways, body morphing, wrong number of doors, other cars, readable license plate.
Acceptance: same car geometry in every beat; motion believable.
```

## سيارة 3 — ليل المدينة (City night reflections)
الموديل: Kling 3.0 Omni multi-shot
```
Task: {DURATION} night city spot along a coastal road with the Kuwait skyline lights in the background.
Model: Kling 3.0 Omni multi-shot. Ratio {RATIO}.
References: @Image1 = exact car exterior.
Car lock: {CAR_LOCK}.
Shot 1 (0-3s): close-up: wet asphalt reflecting city lights; the car's headlights enter frame.
Shot 2 (3-6s): low side tracking, neon and street lights sliding across the paint.
Shot 3 (6-9s): interior from passenger seat: driver's hand on the wheel, ambient cabin light, city passing outside.
Shot 4 (9-12s): car parked at the seafront, skyline behind; logo "{BRAND_NAME}" "{CTA_TEXT}".
Camera: 35mm low tracking, interior 24mm static.
Lighting: practical city lights, cool 5600K street lamps, warm accents, wet ground reflections.
Audio: city night ambience, engine purr, deep house beat.
Negatives: car shape change, warped reflections, text on buildings in random letters, wrong dashboard design, readable plates.
Acceptance: exterior matches @Image1; interior plausible for the model.
```

## سيارة 4 — التفاصيل (Detail macro montage)
الموديل: Kling 3.0 Omni multi-shot (refs: صور تفاصيل إن وجدت)
```
Task: 10s detail montage, fast-paced, no people.
Model: Kling 3.0 Omni multi-shot. Ratio {RATIO}.
References: @Image1 = exact car; extra @Images = real interior/detail photos if provided.
Car lock: {CAR_LOCK}.
Shot 1 (0-2s): macro of the headlight turning on, internal elements lighting in sequence.
Shot 2 (2-4s): macro slide over the wheel and brake caliper.
Shot 3 (4-6s): leather seat stitching, light grazing across it.
Shot 4 (6-8s): finger presses the start button, dashboard lights up.
Shot 5 (8-10s): pull-back to full car front three-quarter; logo "{BRAND_NAME}", "{CTA_TEXT}".
Camera: 100mm macro feel, short slides, cut on each beat.
Lighting: dark studio, hard grazing light per detail.
Audio: punchy beat with a hit on each cut, start-button click, engine start on shot 4.
Negatives: invented interior parts, wrong badge on wheel, warped stitching, flicker.
Acceptance: each detail plausible for the model; final car matches @Image1.
```

## سيارة 5 — الطعس (Off-road dunes) · للـSUV والبكب
الموديل: Seedance 2.5 / Kling 3.0
```
Task: {DURATION} off-road spot climbing desert dunes.
Model: Seedance 2.5 omni_reference. Ratio {RATIO}.
References: @Image1 = exact vehicle exterior and color.
Car lock: {CAR_LOCK}.
Opening frame: base of a tall dune, afternoon sun, vehicle waiting at the bottom.
Timed action:
0-4s: vehicle accelerates up the dune, tires throwing realistic sand spray, suspension compressing.
4-7s: it crests the top, front wheels lifting slightly, then settling.
7-10s: drone orbit around it on the crest, vast dunes all around.
10-12s: static wide, vehicle on the crest; logo "{BRAND_NAME}", "{CTA_TEXT}".
Camera: 24mm low ground shot, then drone orbit.
Lighting: high afternoon sun with long shadows on dune ridges.
Audio: engine rev, sand spray, wind, epic percussion.
Negatives: vehicle flying unrealistically, body flexing, wheels detaching, sand passing through the car, shape change.
Acceptance: suspension and sand physics believable; vehicle matches @Image1.
```

## سيارة 6 — تسليم المفتاح (Showroom handover) · مع أشخاص
مناسب: معارض ووكالات. الموديل: Kling 3.0 Omni multi-shot
```
Task: {DURATION} showroom handover spot, a Kuwaiti family receives their new car.
Model: Kling 3.0 Omni multi-shot. Ratio {RATIO}.
References: @Image1 = exact car; @Image2 (optional) = showroom interior.
Cast: Kuwaiti father (dishdasha), mother (abaya), a 7-year-old boy; showroom sales rep in a suit.
Shot 1 (0-3s): the boy presses his face to the window glass, hands cupped, eyes wide.
Shot 2 (3-6s): close-up, the rep places the key in the father's palm; father closes his hand on it, half smile.
Shot 3 (6-9s): father opens the driver door, the boy jumps into the back seat, mother laughs.
Shot 4 (9-12s): wide: car under showroom lights, family inside; logo "{BRAND_NAME}", "{CTA_TEXT}". Optional line from the boy: "{DIALOGUE, default: يبه هذي لنا؟}".
Camera: 50mm, gentle handheld, wide on 24mm.
Lighting: bright clean showroom light, soft reflections on paint.
Audio: showroom ambience, key jingle, door thunk, warm music, one spoken line.
Negatives: car shape change, extra doors, distorted faces, key changing size, reflections showing camera crew.
Acceptance: car matches @Image1; emotions shown through actions, not text.
```
