// MERGE storefront interactions — dependency free prototype.

const cnNames={
 'OBJ-001':'同步物件','OBJ-002':'时间 / 倒流','OBJ-003':'滴落 / 无限','OBJ-004':'操作员贴章',
 'DIG-001':'液态场','DIG-002':'时间残留','DIG-003':'重力研究'
};

// Catalog
fetch('data/products.json').then(r=>r.json()).then(({products})=>{
 const g=document.getElementById('grid');
 products.forEach(p=>{
  const d=document.createElement('a'); d.className='card'; d.href=`product.html?id=${encodeURIComponent(p.id)}`;
  const price=p.price_display.replace('concept price','概念价');
  d.innerHTML=`<div><div class="visual"><div class="card-code">${p.id}</div></div><p>${p.id} / ${p.type.toUpperCase()}</p><h3><span class="cn-serif">${cnNames[p.id]||p.name}</span><small>${p.name}</small></h3><p>${p.tagline}</p></div><div class="meta"><span>${p.status.toUpperCase()}</span><span>${price} →</span></div>`;
  g.appendChild(d);
 });
});

// TIMER / REWIND
let timerSeconds=600, timerDirection=-1;
const timerDisplay=document.getElementById('timerDisplay');
const timerState=document.getElementById('timerState');
const timerShell=document.getElementById('heroTimer');
const timerToggle=document.getElementById('timerToggle');
function formatTime(s){s=Math.max(0,Math.min(5999,Math.round(s)));return `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`}
timerToggle.addEventListener('click',()=>{
 timerDirection*=-1;
 timerState.textContent=timerDirection<0?'FORWARD':'REWIND';
 timerToggle.textContent=timerDirection<0?'REVERSE':'FORWARD';
 timerShell.classList.toggle('reversed',timerDirection>0);
});
setInterval(()=>{
 timerSeconds+=timerDirection;
 if(timerSeconds<=0){timerSeconds=0;timerDirection=1;timerState.textContent='REWIND';timerShell.classList.add('reversed')}
 if(timerSeconds>=600){timerSeconds=600;timerDirection=-1;timerState.textContent='FORWARD';timerShell.classList.remove('reversed')}
 timerDisplay.textContent=formatTime(timerSeconds);
},1000);

// Secondary time residue demo
let mini=42, miniDir=-1;
const miniTimer=document.getElementById('miniTimer');
const miniDirection=document.getElementById('miniDirection');
const residue=document.getElementById('residue');
setInterval(()=>{
 mini+=miniDir;
 if(mini<=0||mini>=59) miniDir*=-1;
 miniTimer.textContent=`00:${String(mini).padStart(2,'0')}`;
 miniDirection.textContent=miniDir<0?'→':'←';
 const trace=document.createElement('i');
 trace.style.left=`${36+Math.random()*28}%`;trace.style.top=`${30+Math.random()*30}%`;
 residue.appendChild(trace);setTimeout(()=>trace.remove(),2100);
},850);

// DROP FLOW / infinity canvas
const canvas=document.getElementById('flowCanvas');
const ctx=canvas.getContext('2d');
let flowMode='LAMINAR';
let drops=[];
function resizeFlow(){const dpr=Math.min(devicePixelRatio||1,2);canvas.width=canvas.clientWidth*dpr;canvas.height=canvas.clientHeight*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);seedDrops()}
function seedDrops(){drops=Array.from({length:70},()=>({x:Math.random()*canvas.clientWidth,y:Math.random()*canvas.clientHeight,r:1+Math.random()*3,v:.4+Math.random()*1.1,phase:Math.random()*Math.PI*2}))}
function drawFlow(t){
 ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
 const turbulent=flowMode==='TURBULENT', fast=flowMode==='FLOW';
 for(const d of drops){
  d.y+=d.v*(turbulent?2.7:fast?1.7:1);
  if(turbulent)d.x+=Math.sin(t*.003+d.phase)*1.2;
  if(d.y>canvas.clientHeight+8){d.y=-8;d.x=Math.random()*canvas.clientWidth}
  const a=.18+(d.r/4)*.5;
  ctx.beginPath();ctx.arc(d.x,d.y,d.r*(turbulent?1.25:1),0,Math.PI*2);
  ctx.fillStyle=`rgba(238,234,227,${a})`;ctx.fill();
 }
 requestAnimationFrame(drawFlow);
}
window.addEventListener('resize',resizeFlow);resizeFlow();requestAnimationFrame(drawFlow);
document.querySelectorAll('[data-flow]').forEach(b=>b.addEventListener('click',()=>{flowMode=b.dataset.flow;document.getElementById('flowMode').textContent=flowMode}));

// SYNC OBJECT — simulation by default, real microphone when permitted
const lightField=document.getElementById('lightField');
const syncState=document.getElementById('syncState');
const micButton=document.getElementById('micButton');
const micStatus=document.getElementById('micStatus');
let micActive=false,audioCtx,analyser,data;
function renderSync(){
 let level=.12+.08*(1+Math.sin(performance.now()/470));
 if(micActive&&analyser){analyser.getByteFrequencyData(data);level=data.reduce((a,b)=>a+b,0)/(data.length*255)}
 const scale=.45+Math.min(level*2.8,1.1);
 lightField.style.transform=`scale(${scale})`;lightField.style.opacity=String(.35+Math.min(level*1.5,.6));
 syncState.textContent=level>.42?'FOLLOW':level>.2?'LOCK':'LISTEN';
 requestAnimationFrame(renderSync);
}
renderSync();
micButton.addEventListener('click',async()=>{
 try{
  const stream=await navigator.mediaDevices.getUserMedia({audio:true});
  audioCtx=new (window.AudioContext||window.webkitAudioContext)();
  analyser=audioCtx.createAnalyser();analyser.fftSize=256;
  const src=audioCtx.createMediaStreamSource(stream);src.connect(analyser);
  data=new Uint8Array(analyser.frequencyBinCount);micActive=true;
  micButton.textContent='麦克风已启用 / MICROPHONE ACTIVE';
  micStatus.textContent='声音只在本地浏览器中分析，不会上传。';
 }catch(e){
  micStatus.textContent='麦克风不可用或权限被拒绝，继续使用模拟输入。';
 }
});
