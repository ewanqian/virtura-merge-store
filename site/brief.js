const form=document.getElementById('briefForm');
const outputSection=document.getElementById('outputSection');
const briefOutput=document.getElementById('briefOutput');
const copyBtn=document.getElementById('copyBtn');

const labels={
 project:'组织 / 项目',type:'项目类型',date:'计划上线时间',content:'核心内容 / IP',audience:'目标人群',use:'用途',quantity:'预计数量',price:'目标单价 / 零售价',creativeBudget:'创意 / 设计预算',productionBudget:'生产预算',interaction:'互动需求',packaging:'包装 / 陈列需求',region:'生产 / 发货地区',approval:'授权与审批限制',goal:'最希望 VIRTURA 解决的问题'
};

function clean(v){return (v||'').trim()||'未填写'}

form.addEventListener('submit',e=>{
 e.preventDefault();
 const fd=new FormData(form);
 const lines=[];
 lines.push('VIRTURA / PRODUCTIZATION — PROJECT BRIEF');
 lines.push('概念制品化 / 创意产品化');
 lines.push('');
 for(const [key,label] of Object.entries(labels)) lines.push(`${label}：${clean(fd.get(key))}`);
 lines.push('');
 lines.push('初步合作方向：');
 lines.push('请基于以上信息评估适合采用 Cultural Product Capsule / Interactive Object Edition / Retail + Activation System 中的哪一种结构，并明确创意设计、原型工程、供应商/样品、批量生产、包装和物流的边界。');
 lines.push('');
 lines.push('备注：当前简报仅用于第一次沟通；最终技术方案、交付周期、供应链、价格与生产可行性需要在正式评估后确认。');
 briefOutput.textContent=lines.join('\n');
 outputSection.hidden=false;copyBtn.disabled=false;
 outputSection.scrollIntoView({behavior:'smooth',block:'start'});
});

copyBtn.addEventListener('click',async()=>{
 try{
  await navigator.clipboard.writeText(briefOutput.textContent);
  copyBtn.textContent='已复制 / COPIED';
  setTimeout(()=>copyBtn.textContent='复制 / COPY',1600);
 }catch(e){
  const range=document.createRange();range.selectNodeContents(briefOutput);const sel=getSelection();sel.removeAllRanges();sel.addRange(range);copyBtn.textContent='已选中文本 / SELECTED';
 }
});