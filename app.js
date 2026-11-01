const $=(s,r=document)=>r.querySelector(s),f=n=>'R$ '+n.toFixed(2).replace('.',',');
const B={bun:'#d9923a',lettuce:'#86b53a',patty:'#5a3322',cheese:'#f2b632',sauce:'#e0782a'};
const P=[
{id:1,cat:'Clássicos',name:'Burger Classic',price:29.9,desc:'Hambúrguer artesanal de 180g, queijo cheddar, alface, tomate e molho especial.',ingr:['Pão brioche','Carne 180g','Cheddar','Alface','Tomate','Molho especial'],...B},
{id:2,cat:'Especiais',name:'Bacon Supreme',price:34.9,desc:'Hambúrguer artesanal, cheddar derretido, bacon crocante e molho barbecue.',ingr:['Pão brioche','Carne artesanal','Cheddar','Bacon crocante','Molho barbecue'],...B,bacon:1,sauce:'#a8431e',bun:'#c8702a'},
{id:3,cat:'Clássicos',name:'Double Cheese',price:39.9,desc:'Dois hambúrgueres artesanais, queijo duplo e molho especial da casa.',ingr:['Pão brioche','2 carnes artesanais','Queijo duplo','Molho da casa'],...B,double:1,cheese:'#f7d26a',bun:'#e0a850'},
{id:4,cat:'Especiais',name:'Crispy Chicken',price:32.9,desc:'Frango empanado crocante, queijo, alface fresca e maionese especial.',ingr:['Pão brioche','Frango empanado','Queijo','Alface','Maionese especial'],...B,patty:'#c98a2e',sauce:'#f0e3c0',bun:'#e0a850'},
{id:5,cat:'Especiais',name:'BBQ Burger',price:36.9,desc:'Hambúrguer artesanal, cheddar, cebola caramelizada e molho barbecue.',ingr:['Pão brioche','Carne artesanal','Cheddar','Cebola caramelizada','Molho barbecue'],...B,lettuce:'#a2652a',sauce:'#7a2f14',bun:'#8a4a22'},
{id:6,cat:'Especiais',name:'Bacon Melt',price:37.9,desc:'Hambúrguer artesanal, queijo derretido, bacon e molho cremoso.',ingr:['Pão brioche','Carne artesanal','Queijo derretido','Bacon','Molho cremoso'],...B,bacon:1,cheese:'#f5c04a',sauce:'#f0d9a0',bun:'#d08236'}];
P.forEach(p=>p.kind='burger');
P.slice().forEach(b=>P.push({...b,id:b.id+10,cat:'Combos',kind:'combo',name:'Combo '+b.name,desc:b.name+' com batata frita e Coca-Cola.',price:+(b.price+15).toFixed(2),ingr:b.ingr.concat(['Batata frita','Coca-Cola 350ml'])}));
P.push({id:21,cat:'Acompanhamentos',kind:'fries',name:'Batata Frita',desc:'Porção crocante de batatas selecionadas, sequinhas e bem temperadas.',price:16.9,ingr:['Batata selecionada','Fritura crocante','Sal']},
{id:31,cat:'Bebidas',kind:'drink',name:'Coca-Cola',desc:'Lata de 350ml, bem gelada.',price:7.9,ingr:['350ml','Gelada'],cupc:'#c8102e'},
{id:32,cat:'Bebidas',kind:'drink',name:'Guaraná Antarctica',desc:'Lata de 350ml, bem gelada.',price:7.9,ingr:['350ml','Gelada'],cupc:'#2f8f3a'},
{id:33,cat:'Bebidas',kind:'drink',name:'Guaraná Mantiqueira',desc:'Garrafa de 350ml, bem gelada.',price:7.9,ingr:['350ml','Gelada'],cupc:'#e0a020'});
const WA='5524981182858';
function svg(p){const k=p.kind,fr=k==='fries',dr=k==='drink';
let s=`<svg viewBox="-30 0 260 215" role="img" aria-label="${p.name}"><ellipse cx="100" cy="205" rx="62" ry="6" fill="#000" opacity=".5"/>`;
if(k==='burger'||k==='combo')s+=`<path d="M30 70C30 20 170 20 170 70 170 78 150 82 100 82S30 78 30 70z" fill="${p.bun}"/><g fill="#f6e3b5">${[[70,46],[100,38],[132,48],[85,62],[118,64]].map(a=>`<ellipse cx="${a[0]}" cy="${a[1]}" rx="5" ry="2.5"/>`).join('')}</g><path d="M24 86q10-8 19 0t19 0 19 0 19 0 19 0 19 0 19 0 19 0v8q-76 10-152 0z" fill="${p.lettuce}"/>${p.bacon?'<path d="M28 98q14 8 28 0t28 0 28 0 28 0 28 0" stroke="#a8321f" stroke-width="6" fill="none"/>':''}<rect x="30" y="100" width="140" height="22" rx="11" fill="${p.patty}"/>${p.double?`<rect x="30" y="122" width="140" height="22" rx="11" fill="${p.patty}" stroke="#08090D" stroke-width="1.5"/>`:''}<g transform="translate(0 ${p.double?22:0})"><path d="M30 120h140q-6 6-14 4l-4 12q-3 6-6 0l-4-10-30 2-4 10q-3 6-6 0l-4-10-40 2-4 12q-3 6-6 0l-2-12q-10 0-12-4z" fill="${p.cheese}"/><path d="M30 142c0-6 6-8 16-8h108c10 0 16 2 16 8 0 14-14 22-34 22H64c-20 0-34-8-34-22z" fill="${p.bun}"/><path d="M60 160q0 22 6 22t6-22zM122 160q0 30 7 30t7-30z" fill="${p.sauce}"/></g>`;
if(k==='combo'||fr)s+=`<g transform="translate(${fr?60:176} ${fr?40:142}) scale(${fr?2.2:1})"><g fill="#f2c14a"><rect x="7" width="5" height="24"/><rect x="14" y="3" width="5" height="22"/><rect x="21" width="5" height="24"/><rect x="28" y="4" width="5" height="20"/></g><path d="M2 22h36l-4 38H6z" fill="#c8341f"/></g>`;
if(k==='combo'||dr)s+=`<g transform="translate(${dr?70:-26} ${dr?30:142}) scale(${dr?2.4:1})"><path d="M2 6h36l-4 54H6z" fill="${p.cupc||'#c8102e'}"/><rect y="2" width="40" height="6" rx="2" fill="#f4efe6"/><rect x="8" y="26" width="24" height="12" fill="#fff" opacity=".85"/></g>`;
return s+'</svg>'}
let cart={};try{cart=JSON.parse(localStorage.getItem('pb_cart'))||{}}catch(e){}
const find=id=>P.find(p=>p.id==id);
function toast(t){const e=$('.ts');e.textContent=t;e.hidden=false;clearTimeout(toast.t);toast.t=setTimeout(()=>e.hidden=true,1600)}
function save(){try{localStorage.setItem('pb_cart',JSON.stringify(cart))}catch(e){}renderCart()}
function setQ(id,n){if(n<1)delete cart[id];else cart[id]=n;save()}
function add(id,n=1){cart[id]=(cart[id]||0)+n;save();toast('Adicionado: '+find(id).name)}
function renderCart(){
const it=P.filter(p=>cart[p.id]),cnt=it.reduce((a,p)=>a+cart[p.id],0),tot=it.reduce((a,p)=>a+p.price*cart[p.id],0);
const b=$('.bd');b.textContent=cnt;b.hidden=!cnt;
const msg='Olá! Quero fazer um pedido:\n'+it.map(p=>cart[p.id]+'x '+p.name+' - '+f(p.price*cart[p.id])).join('\n')+'\nTotal: '+f(tot);
$('#ci').innerHTML=it.length?it.map(p=>`<div class="row"><strong>${p.name}</strong><small>${f(p.price)} cada</small><div class="rr"><div style="display:flex;align-items:center;gap:8px"><button class="sm" aria-label="Diminuir" data-a="dec" data-id="${p.id}" ${cart[p.id]<2?'disabled':''}>−</button><span>${cart[p.id]}</span><button class="sm" aria-label="Aumentar" data-a="inc" data-id="${p.id}">+</button></div><strong>${f(p.price*cart[p.id])}</strong></div><button class="sm" data-a="rm" data-id="${p.id}">Remover</button></div>`).join('')+`<div class="rr" style="font-size:18px"><span>Total</span><strong>${f(tot)}</strong></div><a class="b1" style="height:48px" target="_blank" rel="noopener" href="https://wa.me/${WA}?text=${encodeURIComponent(msg)}">Finalizar pelo WhatsApp</a>`:'<p class="ds">Seu carrinho está vazio.</p><a class="b1" style="height:48px" href="cardapio.html">Ver Cardápio</a>'}
const cartOpen=o=>{$('.dr').hidden=!o;$('.bk').hidden=!o};
document.body.insertAdjacentHTML('beforeend','<div class="bk" hidden></div><aside class="dr" hidden aria-label="Carrinho"><div class="dh"><strong>Carrinho</strong><button class="x" aria-label="Fechar" data-a="close">×</button></div><div id="ci"></div></aside><div class="ts" role="status" hidden></div>');
$('#cartBtn').onclick=()=>cartOpen(true);$('.bk').onclick=()=>{cartOpen(false);closeModal()};
document.addEventListener('click',e=>{const b=e.target.closest('[data-a]');if(!b)return;const id=+b.dataset.id,a=b.dataset.a;
if(a==='inc')setQ(id,cart[id]+1);if(a==='dec')setQ(id,cart[id]-1);if(a==='rm')setQ(id,0);if(a==='close'){cartOpen(false);closeModal()}
if(a==='add')add(id);if(a==='view')openModal(id)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){cartOpen(false);closeModal()}});
renderCart();
let modal=null;
function closeModal(){if(modal){modal.remove();modal=null;if($('.dr').hidden)$('.bk').hidden=true}}
function openModal(id){const p=find(id);let q=1;closeModal();$('.bk').hidden=false;
modal=document.createElement('div');modal.className='md';modal.setAttribute('role','dialog');modal.setAttribute('aria-modal','true');modal.setAttribute('aria-label',p.name);
const draw=()=>{modal.innerHTML=`<div class="mi">${svg(p)}</div><div class="mb"><button class="x" aria-label="Fechar detalhes" data-a="close">×</button><h2 class="t" style="font-size:40px">${p.name}</h2><p class="ds">${p.desc}</p><div class="tg">${p.ingr.map(g=>`<span>${g}</span>`).join('')}</div><div class="pr">${f(p.price)}</div><div class="rr"><div style="display:flex;align-items:center;gap:12px"><button class="sm" id="q-" aria-label="Diminuir quantidade" ${q<2?'disabled':''}>−</button><span>${q}</span><button class="sm" id="q+" aria-label="Aumentar quantidade">+</button></div><strong>${f(p.price*q)}</strong></div><button class="b1" id="qa" style="height:48px">Adicionar ao carrinho</button></div>`;
$('#q-',modal).onclick=()=>{q--;draw()};$('#q+',modal).onclick=()=>{q++;draw()};$('#qa',modal).onclick=()=>{add(id,q);closeModal()}};
draw();document.body.appendChild(modal)}
/* Home */
if($('#hero')){let sel=0;const H=P.slice(0,4),hero=$('#hero'),th=$('#th');
const draw=()=>{hero.style.opacity=0;setTimeout(()=>{hero.innerHTML=svg(H[sel]);hero.style.opacity=1},150);
th.innerHTML=H.map((p,i)=>`<button class="th ${i===sel?'sel':''}" aria-label="${p.name}" aria-pressed="${i===sel}" data-i="${i}">${i===sel?'<span class="tri"></span>':''}${svg(p)}</button>`).join('')};
th.onclick=e=>{const b=e.target.closest('[data-i]');if(b){sel=+b.dataset.i;draw()}};draw();hero.innerHTML=svg(H[0]);hero.style.opacity=1;
let likes=42,on=false;$('#like').onclick=function(){on=!on;likes+=on?1:-1;this.classList.toggle('on',on);this.setAttribute('aria-pressed',on);$('#lc').textContent=likes}}
/* Cardápio */
if($('#grid')){let cat='Todos',q='';const C=['Todos','Clássicos','Especiais','Combos','Acompanhamentos','Bebidas'];
const draw=()=>{$('#cats').innerHTML=C.map(c=>`<button class="cat ${c===cat?'on':''}" aria-pressed="${c===cat}" data-c="${c}">${c}</button>`).join('')+'<input class="in" id="q" type="search" placeholder="Buscar hambúrguer" aria-label="Buscar hambúrguer" value="'+q+'">';
const l=P.filter(p=>(cat==='Todos'||p.cat===cat)&&(!q||(p.name+p.desc).toLowerCase().includes(q.toLowerCase())));
$('#grid').innerHTML=l.length?l.map(p=>`<article class="card"><button class="im" aria-label="Ver detalhes: ${p.name}" data-a="view" data-id="${p.id}">${svg(p)}</button><div class="cb"><button class="nm" data-a="view" data-id="${p.id}">${p.name}</button><p class="ds">${p.desc}</p><div class="pr">${f(p.price)}</div><button class="add" data-a="add" data-id="${p.id}">Adicionar ao carrinho</button></div></article>`).join(''):'<p class="ds">Nenhum item encontrado.</p>';
const i=$('#q');i.oninput=()=>{q=i.value;const p=i.selectionStart;draw();const n=$('#q');n.focus();n.setSelectionRange(p,p)}};
$('#cats').onclick=e=>{const b=e.target.closest('[data-c]');if(b){cat=b.dataset.c;draw()}};draw()}
