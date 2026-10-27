const keys=[...document.querySelectorAll('[data-key]')];
const lastEvent=document.getElementById('lastEvent');
const eventMeta=document.getElementById('eventMeta');
const detectorState=document.getElementById('detectorState');
const detectorMeta=document.getElementById('detectorMeta');
const micButton=document.getElementById('micButton');
let audioCtx=null,analyser=null,micData=null,micActive=false,lastDetection=0;

function ensureAudio(){
  if(!audioCtx) audioCtx=new (window.AudioContext||window.webkitAudioContext)();
  if(audioCtx.state==='suspended') audioCtx.resume();
  return audioCtx;
}

function pulseKey(key,hz,button){
  const ctx=ensureAudio();
  const osc=ctx.createOscillator();
  const gain=ctx.createGain();
  osc.type='sine';
  osc.frequency.setValueAtTime(hz,ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(hz*1.065,ctx.currentTime+.075);
  gain.gain.setValueAtTime(.0001,ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(.18,ctx.currentTime+.008);
  gain.gain.exponentialRampToValueAtTime(.0001,ctx.currentTime+.105);
  osc.connect(gain).connect(ctx.destination);
  osc.start();osc.stop(ctx.currentTime+.11);
  lastEvent.textContent=`KEY ${key}`;
  eventMeta.textContent=`发送 ${Math.round(hz)} Hz → ${Math.round(hz*1.065)} Hz 短促 chirp / 约 110 ms`;
  button.classList.add('active');
  setTimeout(()=>button.classList.remove('active'),115);
}

keys.forEach(button=>button.addEventListener('click',()=>pulseKey(button.dataset.key,Number(button.dataset.hz),button)));

function nearestKey(freq){
  let best=null,dist=Infinity;
  keys.forEach(button=>{
    const hz=Number(button.dataset.hz);const d=Math.abs(hz-freq);
    if(d<dist){dist=d;best={button,key:button.dataset.key,hz,d};}
  });
  return best;
}

function detectLoop(){
  if(!micActive||!analyser) return;
  analyser.getByteFrequencyData(micData);
  const sr=audioCtx.sampleRate;const fft=analyser.fftSize;
  let bestIndex=0,bestValue=0;
  for(let i=1;i<micData.length;i++){
    const hz=i*sr/fft;
    if(hz<430||hz>2250) continue;
    if(micData[i]>bestValue){bestValue=micData[i];bestIndex=i;}
  }
  const freq=bestIndex*sr/fft;
  const match=nearestKey(freq);
  const now=performance.now();
  if(bestValue>105&&match&&match.d<70&&now-lastDetection>280){
    lastDetection=now;
    detectorState.textContent=`KEY ${match.key}`;
    detectorMeta.textContent=`检测到约 ${Math.round(freq)} Hz / 目标 ${match.hz} Hz · 本地识别`;
    match.button.classList.add('active');
    setTimeout(()=>match.button.classList.remove('active'),180);
  }
  requestAnimationFrame(detectLoop);
}

micButton.addEventListener('click',async()=>{
  if(micActive){
    micActive=false;micButton.classList.remove('active');micButton.textContent='启用麦克风 / ENABLE MIC';detectorState.textContent='OFFLINE';detectorMeta.textContent='监听已关闭。';return;
  }
  try{
    const ctx=ensureAudio();
    const stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:false,noiseSuppression:false,autoGainControl:false}});
    const source=ctx.createMediaStreamSource(stream);
    analyser=ctx.createAnalyser();analyser.fftSize=4096;analyser.smoothingTimeConstant=.2;
    micData=new Uint8Array(analyser.frequencyBinCount);source.connect(analyser);
    micActive=true;micButton.classList.add('active');micButton.textContent='关闭麦克风 / DISABLE MIC';
    detectorState.textContent='LISTENING';detectorMeta.textContent='本地 FFT 已启动。请让另一设备播放按键音，或让实体原型在附近发声。';
    detectLoop();
  }catch(err){
    detectorState.textContent='DENIED';detectorMeta.textContent='无法取得麦克风权限；按键发声 Demo 仍可使用。';
  }
});
