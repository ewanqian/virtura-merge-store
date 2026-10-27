const params=new URLSearchParams(location.search);const id=params.get('id')||'OBJ-002';
const descriptions={
 'OBJ-001':{cn:'同步物件',desc:'一个紧凑的可编程光物件，在本地监听声音，并把声音翻译成克制的时间状态。',specs:[['核心 CORE','ESP32-S3 / WebAudio twin'],['输入 INPUT','MEMS microphone'],['输出 OUTPUT','Addressable light field'],['状态 STATES','LISTEN / LOCK / FOLLOW / HOLD / RELEASE']],cls:'sync',glyph:'SYNC',twin:'AVAILABLE',digital:null},
 'OBJ-002':{cn:'时间 / 倒流',desc:'一个可翻转的计时器与空间物件。正向、保持、倒流与残影被当作同一套可感知的时间状态。',specs:[['输入 INPUT','Orientation / IMU'],['时间 TIME','Forward + reverse'],['空间 SPATIAL','visionOS tracking study'],['状态 STATES','FORWARD / HOLD / REWIND / RESIDUE']],cls:'timer',glyph:'TIME',twin:'AVAILABLE',digital:'timer.html'},
 'OBJ-003':{cn:'滴落 / 无限',desc:'一个没有明显循环接缝的持续流动物件。实体与数字版本共同研究光、透明介质、流体与重力。',specs:[['运动 MOTION','Continuous downward flow'],['媒介 MEDIA','Optical / LED / digital'],['输入 INPUT','Gravity / audio optional'],['状态 STATES','LAMINAR / FLOW / TURBULENT']],cls:'flow',glyph:'∞',twin:'AVAILABLE',digital:null},
 'OBJ-004':{cn:'操作员贴章',desc:'为实时演出操作、工具、箱包与设备箱设计的 PVC 魔术贴状态系统。',specs:[['材料 MATERIAL','Soft-touch molded PVC'],['背衬 BACKING','Hook-and-loop'],['系统 SYSTEM','LIVE / HOLD / READY / EXIT'],['履约 FULFILLMENT','Low inventory / single-order']],cls:'patch',glyph:'LIVE',twin:'DIGITAL LABEL',digital:null},
 'OBJ-005':{cn:'信号键组',desc:'一组可更换 3D 打印键帽的超薄控制按钮。每个按键发射不同短音/编码音，由附近麦克风识别后映射成控制事件。',specs:[['输入 INPUT','Physical key press'],['编码 CODE','Distinct acoustic chirp / tone'],['识别 DETECT','Microphone + local classifier'],['电源 POWER','Coin-cell prototype / low duty cycle']],cls:'patch',glyph:'KEY',twin:'AVAILABLE',digital:'signal.html'},
 'OBJ-006':{cn:'沙漏 10',desc:'一个更安静的时间物件。将计时重新变成材料、重力与缓慢发生的过程。',specs:[['周期 CYCLE','10 minute study'],['材料 MATERIAL','Glass / dark mineral media'],['电子 ELECTRONICS','None'],['状态 STATUS','Concept']],cls:'flow',glyph:'10',twin:'OPTIONAL',digital:null},
 'OBJ-007':{cn:'流动块',desc:'透明桌面物件，内部液体和气泡让重力、倾斜与节律变成持续可见的状态。',specs:[['材料 MATERIAL','Clear acrylic / glass'],['媒介 MEDIA','Liquid / bubble'],['输入 INPUT','Gravity / orientation'],['状态 STATUS','Concept']],cls:'flow',glyph:'FLOW',twin:'OPTIONAL',digital:null},
 'OBJ-008':{cn:'流动挂件',desc:'把 Drop Flow 的语言压缩成可以随身携带的小型透明挂件。',specs:[['材料 MATERIAL','Clear resin / acrylic'],['结构 FORM','Capsule / key ring'],['媒介 MEDIA','Droplet / suspended element'],['状态 STATUS','Concept']],cls:'digital',glyph:'DROP',twin:'OPTIONAL',digital:null},
 'DIG-001':{cn:'液态场',desc:'纯数字流体场。黏度、折射与密度会随交互发生变化。',specs:[['格式 FORMAT','Interactive digital object'],['渲染 RENDER','WebGL / shader'],['输入 INPUT','Pointer / microphone'],['实体 PHYSICAL','None']],cls:'digital',glyph:'LIQUID',twin:'NONE',digital:null},
 'DIG-002':{cn:'时间残留',desc:'纯数字时间物件，把交互与运动留下的轨迹持续保存在空间里。',specs:[['格式 FORMAT','Interactive digital object'],['系统 SYSTEM','Temporal residue'],['输入 INPUT','Pointer / spatial input'],['实体 PHYSICAL','None']],cls:'digital',glyph:'TRACE',twin:'NONE',digital:null},
 'DIG-003':{cn:'重力研究',desc:'一个持续由重力和朝向重新定义形态的数字物件。',specs:[['格式 FORMAT','Interactive digital object'],['系统 SYSTEM','Gravity field'],['输入 INPUT','Pointer / device orientation'],['实体 PHYSICAL','None']],cls:'digital',glyph:'G',twin:'NONE',digital:null}
};
fetch('data/products.json').then(r=>r.json()).then(({products})=>{
 const p=products.find(x=>x.id===id)||products[0];const d=descriptions[p.id]||descriptions['OBJ-002'];
 document.title=`${d.cn} / ${p.name} — VIRTURA MERGE`;
 document.getElementById('productCode').textContent=p.id;
 document.getElementById('productGlyph').textContent=d.glyph;
 document.getElementById('productState').textContent=p.status.toUpperCase();
 document.getElementById('productMeta').textContent=`${p.id} / ${p.type.toUpperCase()} / COLLECTION 00`;
 document.getElementById('productNameCN').textContent=d.cn;
 document.getElementById('productName').textContent=p.name;
 document.getElementById('productTagline').textContent=`${p.tagline}。${d.desc}`;
 document.getElementById('productPrice').textContent=p.price_display.replace('concept price','概念价');
 document.getElementById('productShape').classList.add(d.cls);
 document.getElementById('productSpecs').innerHTML=d.specs.map(([k,v])=>`<div class="spec"><span>${k}</span><b>${v}</b></div>`).join('');
 const prefix=p.id.startsWith('OBJ')?p.id.replace('OBJ-','OBJ'):'DIG';
 const serial=`${prefix}-2026-0047`;
 document.getElementById('passportNumber').textContent=serial;
 document.getElementById('passportObject').textContent=`${d.cn} / ${p.name}`;
 document.getElementById('passportTwin').textContent=d.twin;
 const digitalButton=document.getElementById('digitalObjectButton');
 if(d.digital){digitalButton.href=d.digital;digitalButton.hidden=false}
 document.getElementById('reserveButton').addEventListener('click',()=>{document.getElementById('reserveButton').textContent='已保存 / SAVED';});
 document.getElementById('claimButton').addEventListener('click',()=>{const b=document.getElementById('claimButton');b.classList.add('claimed');b.textContent='已模拟领取 / CLAIMED';document.getElementById('claimStatus').textContent=`${serial} 目前仅在本地原型中显示为已领取；没有发生钱包签名或区块链交易。`;});
});
