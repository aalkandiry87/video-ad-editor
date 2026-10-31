import React from 'react';
import {AbsoluteFill, Audio, Sequence, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig, Easing} from 'remotion';

const C = {bg: '#14062B', purple: '#7C3AED', violet: '#A78BFA', lime: '#C6FF3D', white: '#F7F3FF'};
const font = 'Cairo';
const FontFace = () => (
  <style>{`@font-face{font-family:'Cairo';src:url('${staticFile('Cairo-VF.ttf')}') format('truetype');font-weight:200 1000;}`}</style>
);

const useSpring = (delay = 0, damping = 12, mass = 0.6) => {
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  return spring({frame: f - delay, fps, config: {damping, mass}});
};

const Background: React.FC = () => {
  const f = useCurrentFrame();
  const b1x = 540 + Math.sin(f / 50) * 300, b1y = 600 + Math.cos(f / 70) * 250;
  const b2x = 540 + Math.cos(f / 60) * 320, b2y = 1400 + Math.sin(f / 45) * 200;
  return (
    <AbsoluteFill style={{background: C.bg, overflow: 'hidden'}}>
      <div style={{position: 'absolute', left: b1x - 500, top: b1y - 500, width: 1000, height: 1000, borderRadius: '50%', background: `radial-gradient(circle, ${C.purple}cc 0%, transparent 65%)`, filter: 'blur(40px)'}} />
      <div style={{position: 'absolute', left: b2x - 400, top: b2y - 400, width: 800, height: 800, borderRadius: '50%', background: `radial-gradient(circle, ${C.lime}33 0%, transparent 65%)`, filter: 'blur(50px)'}} />
      <AbsoluteFill style={{
        backgroundImage: `linear-gradient(${C.violet}22 2px, transparent 2px), linear-gradient(90deg, ${C.violet}22 2px, transparent 2px)`,
        backgroundSize: '90px 90px', backgroundPosition: `0px ${(f * 1.5) % 90}px`,
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)'}} />
    </AbsoluteFill>
  );
};

const Center: React.FC<{children: React.ReactNode; style?: React.CSSProperties}> = ({children, style}) => (
  <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', direction: 'rtl', fontFamily: font, color: C.white, textAlign: 'center', ...style}}>{children}</AbsoluteFill>
);

// exit helper: scale/fade out in the last frames of a sequence
const useExit = (len: number, d = 8) => {
  const f = useCurrentFrame();
  return interpolate(f, [len - d, len], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
};

const Word: React.FC<{text: string; delay: number; size: number; color?: string; weight?: number}> = ({text, delay, size, color = C.white, weight = 900}) => {
  const s = useSpring(delay);
  return (
    <span style={{display: 'inline-block', fontSize: size, fontWeight: weight, color, transform: `translateY(${(1 - s) * 120}px) scale(${0.6 + 0.4 * s})`, opacity: Math.min(1, s * 1.5), margin: '0 14px', lineHeight: 1.25}}>{text}</span>
  );
};

// 1. Hook 0-3s
const S1: React.FC = () => {
  const f = useCurrentFrame();
  const out = useExit(90);
  const pulse = 1 + Math.sin(f / 4) * 0.02;
  const ring = useSpring(18, 14);
  return (
    <Center style={{opacity: out}}>
      <div style={{position: 'absolute', width: 900 * ring, height: 900 * ring, borderRadius: '50%', border: `10px solid ${C.lime}`, opacity: 0.5 * (1 - ring) + 0.15}} />
      <div style={{transform: `scale(${pulse})`}}>
        <div><Word text="بدّك" delay={0} size={150} /></div>
        <div><Word text="موشن" delay={6} size={230} color={C.lime} /></div>
        <div><Word text="جرافيك؟" delay={12} size={200} /></div>
      </div>
    </Center>
  );
};

// 2. Chaos 3-7s
const S2: React.FC = () => {
  const f = useCurrentFrame();
  const out = useExit(120);
  const words = ['ألوان', 'مشاهد', 'حركة', 'مقاس', 'صوت', 'ستايل', 'مدة', 'سكربت'];
  const pos = [[-300, -600], [280, -450], [-250, 450], [300, 600], [-340, -300], [340, 300], [0, -780], [0, 780]];
  const title = useSpring(20);
  return (
    <Center style={{opacity: out}}>
      {words.map((w, i) => {
        const s = useSpring(i * 3, 10);
        const jx = Math.sin((f + i * 20) / 3) * 6, jy = Math.cos((f + i * 13) / 3) * 6;
        return <div key={w} style={{position: 'absolute', transform: `translate(${pos[i][0] * s + jx}px, ${pos[i][1] * s + jy}px) rotate(${(i % 2 ? 1 : -1) * 10}deg) scale(${s})`, fontSize: 80, fontWeight: 700, color: C.violet, padding: '10px 36px', border: `4px solid ${C.violet}88`, borderRadius: 60, background: '#ffffff08'}}>{w}</div>;
      })}
      <div style={{transform: `scale(${title})`, opacity: title}}>
        <div style={{fontSize: 120, fontWeight: 900, lineHeight: 1.2}}>بس ما بتعرف</div>
        <div style={{fontSize: 120, fontWeight: 900, lineHeight: 1.2, color: C.lime}}>من وين تبلّش؟</div>
      </div>
    </Center>
  );
};

// 3. One prompt 7-12s
const S3: React.FC = () => {
  const f = useCurrentFrame();
  const out = useExit(150);
  const card = useSpring(10, 14, 0.8);
  const typed = 'أنت مخرج موشن جرافيك ومبرمج Remotion محترف…';
  const chars = Math.floor(interpolate(f, [35, 110], [0, typed.length], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}));
  const caret = Math.floor(f / 8) % 2 === 0;
  return (
    <Center style={{opacity: out}}>
      <div style={{position: 'absolute', top: 330}}>
        <Word text="برومبت" delay={0} size={150} />
        <Word text="واحد" delay={5} size={150} color={C.lime} />
      </div>
      <div style={{width: 880, minHeight: 640, borderRadius: 48, background: '#1F0D3D', border: `3px solid ${C.violet}66`, boxShadow: `0 40px 120px ${C.purple}88`, transform: `translateY(${(1 - card) * 900}px) rotate(${(1 - card) * -8}deg)`, padding: 60, boxSizing: 'border-box', textAlign: 'right', marginTop: 200}}>
        <div style={{display: 'flex', gap: 18, direction: 'ltr', marginBottom: 40}}>
          {['#FF5F57', '#FEBC2E', '#28C840'].map((c) => <div key={c} style={{width: 30, height: 30, borderRadius: 15, background: c}} />)}
        </div>
        <div style={{fontSize: 62, fontWeight: 700, lineHeight: 1.5}}>{typed.slice(0, chars)}<span style={{color: C.lime, opacity: caret ? 1 : 0}}>|</span></div>
      </div>
      <div style={{position: 'absolute', bottom: 260, fontSize: 64, fontWeight: 700, color: C.violet, opacity: interpolate(f, [100, 120], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}}>بيتكيّف مع أي فكرة</div>
    </Center>
  );
};

// 4. Five sections 12-20s
const S4: React.FC = () => {
  const f = useCurrentFrame();
  const out = useExit(240);
  const items = [['الهدف', 'الفكرة والجمهور'], ['الستايل', 'ألوان ومرجع'], ['المشاهد', 'سكربت بالثواني'], ['الحركة', 'سريعة أو فخمة'], ['المخرجات', 'مقاس · مدة · صوت']];
  const head = useSpring(0);
  return (
    <Center style={{opacity: out, justifyContent: 'flex-start', paddingTop: 230}}>
      <div style={{fontSize: 110, fontWeight: 900, transform: `scale(${head})`, marginBottom: 70}}>عبّي <span style={{color: C.lime}}>[ ]</span> بس</div>
      {items.map(([t, sub], i) => {
        const d = 20 + i * 30;
        const s = useSpring(d, 13);
        const fill = interpolate(f, [d + 10, d + 26], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic)});
        return (
          <div key={t} style={{width: 900, height: 210, marginBottom: 34, borderRadius: 40, background: '#ffffff0d', border: `3px solid ${fill > 0.99 ? C.lime : C.violet + '55'}`, display: 'flex', alignItems: 'center', padding: '0 46px', boxSizing: 'border-box', transform: `translateX(${(1 - s) * -1200}px)`, gap: 40}}>
            <div style={{width: 110, height: 110, borderRadius: 30, background: C.purple, fontSize: 70, fontWeight: 900, display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0}}>{i + 1}</div>
            <div style={{textAlign: 'right'}}>
              <div style={{fontSize: 72, fontWeight: 900, lineHeight: 1.1}}>{t}</div>
              <div style={{fontSize: 46, fontWeight: 600, color: C.lime, lineHeight: 1.4, display: 'flex', alignItems: 'center', gap: 6}}>
                <span style={{display: 'inline-block', whiteSpace: 'nowrap', unicodeBidi: 'isolate', clipPath: `inset(0 0 0 ${(1 - fill) * 100}%)`}}>{'[ ' + sub + ' ]'}</span>
              </div>
            </div>
          </div>
        );
      })}
    </Center>
  );
};

// 5. Leave it empty 20-25s
const S5: React.FC = () => {
  const f = useCurrentFrame();
  const out = useExit(150);
  const a = useSpring(0);
  const open = useSpring(55, 9);
  const glow = interpolate(f, [55, 75], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const sparks = Array.from({length: 14});
  return (
    <Center style={{opacity: out}}>
      <div style={{position: 'absolute', top: 380, transform: `scale(${a})`}}>
        <div style={{fontSize: 96, fontWeight: 900}}>اللي ما بتعرفه؟</div>
        <div style={{fontSize: 96, fontWeight: 900, color: C.violet}}>خلّيه فاضي</div>
      </div>
      <div style={{fontSize: 360, fontWeight: 300, color: C.lime, display: 'flex', alignItems: 'center', gap: 40 + 520 * open, marginTop: 120, textShadow: `0 0 ${60 * glow}px ${C.lime}`}}>
        <span>[</span>
        <span style={{position: 'absolute', left: '50%', transform: `translateX(-50%) scale(${open})`, fontSize: 150, fontWeight: 900, color: C.white, whiteSpace: 'nowrap', textShadow: 'none'}}>Claude</span>
        <span>]</span>
      </div>
      {sparks.map((_, i) => {
        const ang = (i / sparks.length) * Math.PI * 2;
        const r = 120 + 520 * open;
        return <div key={i} style={{position: 'absolute', width: 18, height: 18, borderRadius: 9, background: i % 2 ? C.lime : C.violet, transform: `translate(${Math.cos(ang) * r}px, ${Math.sin(ang) * r + 60}px) scale(${(1 - open) * 2 + 0.2})`, opacity: glow * (1 - open * 0.7)}} />;
      })}
      <div style={{position: 'absolute', bottom: 380, fontSize: 90, fontWeight: 900, opacity: glow, transform: `translateY(${(1 - glow) * 40}px)`}}>بيختارلك <span style={{color: C.lime}}>هو</span></div>
    </Center>
  );
};

// 6. Steps + CTA 25-30s
const S6: React.FC = () => {
  const f = useCurrentFrame();
  const steps = ['بيخطّط', 'بيبني', 'بيرندر'];
  const cta = useSpring(70, 10);
  const shine = interpolate(f, [90, 130], [-400, 1400], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <Center>
      <div style={{position: 'absolute', top: 420, display: 'flex', gap: 30, alignItems: 'center'}}>
        {steps.map((s, i) => {
          const sp = useSpring(i * 12, 12);
          return (
            <React.Fragment key={s}>
              <div style={{fontSize: 92, fontWeight: 900, transform: `scale(${sp})`, color: i === 2 ? C.lime : C.white}}>{s}</div>
              {i < 2 && <div style={{width: 24, height: 24, borderRadius: 12, background: C.violet, transform: `scale(${sp})`}} />}
            </React.Fragment>
          );
        })}
      </div>
      <div style={{position: 'absolute', top: 600, fontSize: 60, fontWeight: 600, color: C.violet, opacity: interpolate(f, [36, 50], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}}>وبيطلعلك الفيديو جاهز</div>
      <div style={{transform: `scale(${cta})`, marginTop: 300, position: 'relative', overflow: 'hidden', borderRadius: 70, background: C.lime, color: C.bg, padding: '50px 90px', boxShadow: `0 30px 100px ${C.lime}66`}}>
        <div style={{fontSize: 110, fontWeight: 1000, lineHeight: 1.1}}>الهدية إلك</div>
        <div style={{fontSize: 56, fontWeight: 700, lineHeight: 1.5}}>البرومبت كامل بالكومنتات</div>
        <div style={{position: 'absolute', top: 0, left: shine, width: 160, height: '100%', background: 'linear-gradient(90deg, transparent, #ffffffaa, transparent)', transform: 'skewX(-20deg)'}} />
      </div>
    </Center>
  );
};

const Flash: React.FC = () => {
  const f = useCurrentFrame();
  const o = interpolate(f, [0, 6], [0.5, 0], {extrapolateRight: 'clamp'});
  return <AbsoluteFill style={{background: C.lime, opacity: o, pointerEvents: 'none'}} />;
};

export const Video: React.FC = () => {
  const cuts: [number, number, React.FC][] = [[0, 90, S1], [90, 120, S2], [210, 150, S3], [360, 240, S4], [600, 150, S5], [750, 150, S6]];
  return (
    <AbsoluteFill>
      <FontFace />
      <Background />
      {cuts.map(([from, len, C2], i) => (
        <Sequence key={i} from={from} durationInFrames={len}><C2 /></Sequence>
      ))}
      {cuts.slice(1).map(([from], i) => <Sequence key={'f' + i} from={from} durationInFrames={8}><Flash /></Sequence>)}
      <Audio src={staticFile('music.wav')} />
    </AbsoluteFill>
  );
};
