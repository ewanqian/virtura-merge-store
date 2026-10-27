const params=new URLSearchParams(location.search);const id=params.get('id')||'OBJ-002';
const descriptions={
 'OBJ-001':{desc:'A compact programmable light object that listens locally and translates sound into restrained temporal states.',specs:[['CORE','ESP32-S3 / WebAudio twin'],['INPUT','MEMS microphone'],['OUTPUT','Addressable light field'],['STATES','LISTEN / LOCK / FOLLOW / HOLD / RELEASE']],cls:'sync',glyph:'SYNC',twin:'AVAILABLE'},
 'OBJ-002':{desc:'A reversible timer and spatial object. Forward time, hold, rewind and residue are treated as material states.',specs:[['INPUT','Orientation / IMU'],['TIME','Forward + reverse'],['SPATIAL','visionOS tracking study'],['STATES','FORWARD / HOLD / REWIND / RESIDUE']],cls:'timer',glyph:'TIME',twin:'AVAILABLE'},
 'OBJ-003':{desc:'A continuous flow object without a visible loop seam. Physical and digital editions explore light, fluid and gravity.',specs:[['MOTION','Continuous downward flow'],['MEDIA','Optical / LED / digital'],['INPUT','Gravity / audio optional'],['STATES','LAMINAR / FLOW / TURBULENT']],cls:'flow',glyph:'∞',twin:'AVAILABLE'},
 'OBJ-004':{desc:'A functional PVC hook-and-loop patch system for live operators, tools, bags and equipment cases.',specs:[['MATERIAL','Soft-touch molded PVC'],['BACKING','Hook-and-loop'],['SYSTEM','LIVE / HOLD / READY / EXIT'],['FULFILLMENT','Low inventory / single-order']],cls:'patch',glyph:'LIVE',twin:'DIGITAL LABEL'},
 'DIG-001':{desc:'A digital-only fluid field whose viscosity and refraction shift with interaction.',specs:[['FORMAT','Interactive digital object'],['RENDER','WebGL / shader'],['INPUT','Pointer / microphone'],['PHYSICAL','None']],cls:'digital',glyph:'LIQUID',twin:'NONE'},
 'DIG-002':{desc:'A digital-only temporal object that stores traces left by interaction and movement.',specs:[['FORMAT','Interactive digital object'],['SYSTEM','Temporal residue'],['INPUT','Pointer / spatial input'],['PHYSICAL','None']],cls:'digital',glyph:'TRACE',twin:'NONE'},
 'DIG-003':{desc:'A digital object whose form is continuously defined by gravity and orientation.',specs:[['FORMAT','Interactive digital object'],['SYSTEM','Gravity field'],['INPUT','Pointer / device orientation'],['PHYSICAL','None']],cls:'digital',glyph:'G',twin:'NONE'}
};
fetch('data/products.json').then(r=>r.json()).then(({products})=>{
 const p=products.find(x=>x.id===id)||products[0];const d=descriptions[p.id]||descriptions['OBJ-002'];
 document.title=`${p.name} — VIRTURA / MERGE`;
 document.getElementById('productCode').textContent=p.id;
 document.getElementById('productGlyph').textContent=d.glyph;
 document.getElementById('productState').textContent=p.status.toUpperCase();
 document.getElementById('productMeta').textContent=`${p.id} / ${p.type.toUpperCase()}`;
 document.getElementById('productName').textContent=p.name;
 document.getElementById('productTagline').textContent=`${p.tagline}. ${d.desc}`;
 document.getElementById('productPrice').textContent=p.price_display;
 document.getElementById('productShape').classList.add(d.cls);
 document.getElementById('productSpecs').innerHTML=d.specs.map(([k,v])=>`<div class="spec"><span>${k}</span><b>${v}</b></div>`).join('');
 const prefix=p.id.startsWith('OBJ')?p.id.replace('OBJ-','OBJ'):'DIG';
 const serial=`${prefix}-2026-0047`;
 document.getElementById('passportNumber').textContent=serial;
 document.getElementById('passportObject').textContent=p.name;
 document.getElementById('passportTwin').textContent=d.twin;
 document.getElementById('reserveButton').addEventListener('click',()=>{
   document.getElementById('reserveButton').textContent='PROTOTYPE SAVED';
 });
 document.getElementById('claimButton').addEventListener('click',()=>{
   const b=document.getElementById('claimButton');b.classList.add('claimed');b.textContent='CLAIM SIMULATED';
   document.getElementById('claimStatus').textContent=`${serial} is now shown as claimed in this local prototype only. No wallet or blockchain transaction occurred.`;
 });
});
