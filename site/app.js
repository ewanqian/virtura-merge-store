fetch('data/products.json').then(r=>r.json()).then(({products})=>{
 const g=document.getElementById('grid');
 products.forEach(p=>{
  const d=document.createElement('article'); d.className='card';
  d.innerHTML=`<div><div class="visual"><div class="orb"></div></div><p>${p.id} / ${p.type.toUpperCase()}</p><h3>${p.name}</h3><p>${p.tagline}</p></div><div class="meta"><span>${p.status.toUpperCase()}</span><span>${p.price_display}</span></div>`;
  g.appendChild(d);
 })
})
