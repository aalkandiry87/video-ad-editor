import numpy as np, wave
sr=48000; dur=30.0; n=int(sr*dur); t=np.arange(n)/sr
bpm=120; beat=60/bpm; out=np.zeros(n)
def env(start,length,decay):
    s=int(start*sr); L=min(int(length*sr),n-s)
    if L<=0: return None,None
    tt=np.arange(L)/sr; return s,np.exp(-tt*decay)
# kick
for i in range(int(dur/beat)):
    st=i*beat
    if 26.5<st<27.5: continue
    s,e=env(st,0.4,9)
    if s is None: continue
    tt=np.arange(len(e))/sr; f=50+120*np.exp(-tt*30)
    out[s:s+len(e)]+=0.9*np.sin(2*np.pi*np.cumsum(f)/sr)*e
# hats offbeat
rng=np.random.default_rng(1)
for i in range(int(dur/beat*2)):
    st=i*beat/2
    if i%2==0 or st<3: continue
    s,e=env(st,0.08,60)
    if s is None: continue
    out[s:s+len(e)]+=0.12*rng.standard_normal(len(e))*e
# clap on 2,4 after 7s
for i in range(int(dur/beat)):
    st=i*beat
    if i%2==1 and st>7:
        s,e=env(st,0.2,25)
        if s is None: continue
        out[s:s+len(e)]+=0.25*rng.standard_normal(len(e))*e
# bass + pad chords (Am F C G)
roots=[55.0,43.65,65.41,49.0]
bar=beat*4
for b in range(int(dur/bar)+1):
    r=roots[b%4]
    for k in range(8):
        st=b*bar+k*beat/2
        s,e=env(st,beat/2,6)
        if s is None: continue
        tt=np.arange(len(e))/sr
        out[s:s+len(e)]+=0.35*np.tanh(2*np.sin(2*np.pi*r*tt))*e
    s,e=env(b*bar,bar,0.6)
    if s is None: continue
    tt=np.arange(len(e))/sr
    for m in (2,2.52,3,4):
        out[s:s+len(e)]+=0.05*np.sin(2*np.pi*r*m*2*tt+np.sin(2*np.pi*0.3*tt))*e
# whooshes at scene cuts
for st in [3,7,12,20,25]:
    s=int((st-0.35)*sr); L=int(0.5*sr); tt=np.arange(L)/sr
    w=rng.standard_normal(L)*np.sin(np.pi*tt/0.5)**2*0.3
    out[s:s+L]+=np.convolve(w,np.ones(8)/8,'same')
fade=np.ones(n); fl=int(1.5*sr); fade[-fl:]=np.linspace(1,0,fl); fade[:int(0.05*sr)]=np.linspace(0,1,int(0.05*sr))
out=np.tanh(out*1.2)*fade*0.8
d=(out*32767).astype(np.int16); st=np.stack([d,d],1)
with wave.open('public/music.wav','wb') as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(sr); w.writeframes(st.tobytes())
