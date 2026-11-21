const OWNER_EMAIL = 'hkx18153145308@gmail.com';
const MUX_ID = 'BxHcDOXZQatxsu7dW9ihu200NFrubE62UE3X1YCZ4YvA';

const html = `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
  <meta name="theme-color" content="#000000">
  <meta name="description" content="无限探索，无限进步。个人影像、创意产品与沉浸式体验。">
  <title>无限探索｜个人创作网站</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Anta&family=Noto+Sans+SC:wght@300;400;500;600&display=swap" rel="stylesheet">
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='30' fill='%23000'/%3E%3Cpath d='M32 8c2 14 8 20 24 24-16 4-22 10-24 24-2-14-8-20-24-24C24 28 30 22 32 8Z' fill='%23ff9a31'/%3E%3C/svg%3E">
  <style>
    :root{--ember:#ff9638;--ink:#050505;--muted:rgba(255,255,255,.62);--line:rgba(255,255,255,.16)}
    *{box-sizing:border-box}html{scroll-behavior:smooth;scroll-snap-type:y mandatory}html,body{margin:0;min-height:100%;background:#000;color:#fff;font-family:'Noto Sans SC',system-ui,sans-serif}body{overflow-x:hidden}button,a,input{font:inherit}button,a{touch-action:manipulation}.display{font-family:'Anta','Noto Sans SC',sans-serif;font-weight:400}.shell{min-height:100svh;background:#000}.topbar{position:fixed;z-index:50;top:0;left:0;right:0;display:flex;align-items:center;justify-content:space-between;padding:22px 32px}.brand{display:flex;align-items:center;gap:10px;color:#fff;text-decoration:none;font-family:'Anta',sans-serif;font-size:22px}.mark{display:grid;place-items:center;width:36px;height:36px;border-radius:50%;background:#fff;color:#000}.mark svg{width:19px}.nav{display:flex;gap:8px;padding:6px;border:1px solid var(--line);border-radius:999px;background:rgba(10,10,10,.58);backdrop-filter:blur(18px)}.nav a{padding:9px 18px;border-radius:999px;color:rgba(255,255,255,.64);text-decoration:none;font-size:14px}.nav a:hover,.nav a.active{background:rgba(255,255,255,.1);color:#fff}.menu-btn,.admin-btn{border:1px solid var(--line);background:rgba(10,10,10,.58);color:#fff;border-radius:999px;backdrop-filter:blur(18px)}.admin-btn{padding:11px 18px}.menu-btn{display:none;width:42px;height:42px;font-size:20px}.hero{position:relative;min-height:100svh;overflow:hidden;background:#000;scroll-snap-align:start;scroll-snap-stop:always}.hero-media{position:absolute;inset:0;overflow:hidden}.hero-media iframe{position:absolute;top:50%;left:50%;width:max(100vw,177.78vh);height:max(100vh,56.25vw);transform:translate(-50%,-50%) scale(1.06);border:0;opacity:.62;filter:saturate(.7) contrast(1.08)}.shade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.42),rgba(0,0,0,.2) 55%,#000 100%)}.hero-content{position:relative;z-index:5;display:flex;min-height:100svh;flex-direction:column;align-items:center;justify-content:center;padding:120px 24px;text-align:center}h1{max-width:1050px;margin:0 0 24px;font-size:clamp(4rem,9vw,9rem);line-height:.91;letter-spacing:-.045em}.hero-copy{max-width:760px;margin:0;color:rgba(255,255,255,.76);font-size:clamp(1rem,1.5vw,1.2rem);line-height:1.8}.pill{display:inline-flex;align-items:center;justify-content:center;gap:9px;min-height:48px;padding:0 22px;border-radius:999px;text-decoration:none;border:0;cursor:pointer}.primary{background:#fff;color:#030103}.page{min-height:100svh;padding:140px 5vw 80px;background:#000;scroll-snap-align:start;scroll-snap-stop:always}.page-head{display:grid;grid-template-columns:1.4fr .6fr;gap:40px;align-items:end;margin-bottom:56px}.eyebrow{color:var(--ember);font-size:14px}.page h1{margin:12px 0 0;max-width:850px;font-size:clamp(3.1rem,6.5vw,6.8rem)}.page-intro{max-width:420px;justify-self:end;color:var(--muted);font-size:17px;line-height:1.8}.toolbar{display:flex;align-items:center;justify-content:space-between;margin:0 0 28px;padding-top:20px;border-top:1px solid var(--line)}.toolbar p{margin:0;color:var(--muted)}.upload-trigger{display:inline-flex;align-items:center;gap:8px;border:1px solid var(--line);border-radius:999px;background:#fff;color:#000;padding:11px 18px;cursor:pointer}.grid{display:grid;grid-template-columns:repeat(12,1fr);gap:18px}.card{grid-column:span 4;position:relative;overflow:hidden;min-height:380px;border:1px solid var(--line);border-radius:8px;background:#0b0b0b}.card:nth-child(5n+1){grid-column:span 7}.card:nth-child(5n+2){grid-column:span 5}.card-media{aspect-ratio:16/10;overflow:hidden;background:#111}.card img,.card video{width:100%;height:100%;object-fit:cover;display:block}.card video{cursor:pointer}.card-body{display:flex;align-items:end;justify-content:space-between;gap:20px;padding:20px}.card h2{margin:0;font-size:clamp(1.25rem,2vw,1.8rem);font-weight:500}.card small{color:var(--muted)}.empty{grid-column:1/-1;display:grid;place-items:center;min-height:330px;border:1px dashed rgba(255,255,255,.24);border-radius:8px;color:var(--muted);text-align:center}.sample-label{position:absolute;top:14px;left:14px;padding:6px 10px;border-radius:999px;background:rgba(0,0,0,.62);font-size:12px}.contact-layout{display:grid;grid-template-columns:.75fr 1.25fr;gap:8vw;align-items:start}.contact-card{position:sticky;top:130px;padding:28px;border:1px solid var(--line);border-radius:8px;background:rgba(255,255,255,.04)}.contact-card a{display:block;margin:24px 0;color:#fff;font-size:clamp(1rem,2vw,1.5rem);word-break:break-all}.contact-card span{color:var(--muted)}.brief{margin:0;padding:clamp(24px,5vw,56px);border:1px solid var(--line);border-radius:8px;background:rgba(255,255,255,.025);font-size:16px;line-height:1.9;white-space:pre-line}.modal{position:fixed;z-index:100;inset:0;display:none;place-items:center;padding:20px;background:rgba(0,0,0,.76);backdrop-filter:blur(15px)}.modal.open{display:grid}.dialog{width:min(560px,100%);padding:28px;border:1px solid var(--line);border-radius:8px;background:#0a0a0a}.dialog-head{display:flex;justify-content:space-between;align-items:center}.dialog h2{margin:0;font-size:28px}.close{width:40px;height:40px;border:1px solid var(--line);border-radius:50%;background:transparent;color:#fff;font-size:20px}.form{display:grid;gap:18px;margin-top:26px}.form label{display:grid;gap:8px;color:var(--muted);font-size:14px}.form input,.form select{width:100%;border:1px solid var(--line);border-radius:6px;background:#111;color:#fff;padding:13px}.drop{display:grid;place-items:center;min-height:145px;border:1px dashed rgba(255,255,255,.32);border-radius:6px;text-align:center;cursor:pointer}.drop input{position:absolute;width:1px;height:1px;opacity:0}.status{min-height:22px;color:#ffc078;font-size:14px}.mobile-nav{display:none}.loading{grid-column:1/-1;color:var(--muted)}
    @media(max-width:800px){.topbar{padding:16px}.nav,.admin-btn{display:none}.menu-btn{display:block}.hero-content{padding:110px 18px}.page{padding:110px 18px 50px}.page-head{grid-template-columns:1fr;gap:20px}.page-intro{justify-self:start}.grid{grid-template-columns:1fr}.card,.card:nth-child(n){grid-column:1;min-height:auto}.contact-layout{grid-template-columns:1fr}.contact-card{position:static}.mobile-nav{position:fixed;z-index:60;top:68px;left:16px;right:16px;display:none;padding:10px;border:1px solid var(--line);border-radius:8px;background:rgba(5,5,5,.94);backdrop-filter:blur(18px)}.mobile-nav.open{display:grid}.mobile-nav a{padding:13px;color:#fff;text-decoration:none;border-bottom:1px solid var(--line)}.toolbar{align-items:flex-start;gap:18px;flex-direction:column}}
    @media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}.hero-media iframe{display:none}}
  </style>
</head>
<body>
  <div id="app" class="shell"></div>
  <div id="uploadModal" class="modal" aria-hidden="true"><div class="dialog"><div class="dialog-head"><h2 class="display">添加内容</h2><button class="close" type="button" aria-label="关闭">×</button></div><form id="uploadForm" class="form"><label>分类<select name="type"><option value="work">作品</option><option value="product">产品</option></select></label><label>标题<input name="title" maxlength="80" required placeholder="输入作品或产品标题"></label><label class="drop"><span id="fileText">选择图片或视频<br><small>支持 JPG、PNG、WebP、MP4、WebM</small></span><input name="file" type="file" accept="image/*,video/mp4,video/webm" required></label><button class="pill primary" type="submit">上传并发布</button><div id="uploadStatus" class="status"></div></form></div></div>
  <script>
  const MUX='${MUX_ID}';
  const paths={home:'/',works:'/works',products:'/products',contact:'/contact'};
  const nav=[['首页','#home'],['作品','#works'],['产品','#products'],['联系方式','#contact']];
  const brief='老板您好！\\n\\n为保障项目进度、减少反复沟通确认，保证成片交付符合预期，麻烦您抽空提供以下项目资料与需求说明：\\n\\n1. 项目基础信息：项目名称、使用场景与发布平台、目标成片时长、画幅比例、输出分辨率；\\n2. 交付节点：明确的初稿、终版截止交付时间；同时请告知项目最终审核负责人；\\n3. 素材资料：原始音视频、图片、LOGO、脚本 / 口播文稿、字幕文本等全部素材，附带网盘 / 下载链接；如自备配音、背景音乐，请一并提供，并备注版权要求；\\n4. 风格参考：参考样片链接，同时说明偏好的节奏、调性、调色、特效方向，以及需要规避的效果；\\n5. 包装需求：是否需要添加字幕、花字、动态图文、片头片尾、封面等附加内容；\\n6. 交付与修订约定：成片输出格式、是否需要提供工程文件；本次包含的免费修改轮次，超出修改范围的调整规则；反馈建议请尽量标注时间码，方便精准调整；\\n7. 品牌规范：如有固定品牌字体、标准色、LOGO 摆放规范或其他内容禁忌，烦请同步。\\n\\n资料齐全后我会第一时间排期启动制作，如有任何疑问，欢迎随时和我沟通。';
  const app=document.getElementById('app');
  const modal=document.getElementById('uploadModal');
  function header(){return '<header class="topbar"><a class="brand" href="/" data-link><span class="mark"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1c.7 6.3 4.7 10.3 11 11-6.3.7-10.3 4.7-11 11C11.3 16.7 7.3 12.7 1 12 7.3 11.3 11.3 7.3 12 1Z" fill="currentColor"/></svg></span><span>EXPLORE</span></a><nav class="nav">'+nav.map(n=>'<a href="'+n[1]+'" data-link>'+n[0]+'</a>').join('')+'</nav><button class="admin-btn" id="adminOpen">＋ 添加内容</button><button class="menu-btn" id="menuOpen" aria-label="打开菜单">☰</button></header><nav class="mobile-nav" id="mobileNav">'+nav.map(n=>'<a href="'+n[1]+'" data-link>'+n[0]+'</a>').join('')+'</nav>'}
  function hero(){return '<section class="hero" id="home"><div class="hero-media"><iframe src="https://player.mux.com/'+MUX+'?autoplay=muted&loop=1&controls=0&muted=1" allow="autoplay; fullscreen" title="背景视频"></iframe><div class="shade"></div></div><div class="hero-content"><div class="headline-clip"><h1 class="display">无限探索</h1></div><p class="hero-copy">追求品质，不断越过边界。用影像、设计与产品，把每一次好奇变成一次沉浸式体验。</p></div></section>'}
  function listing(type){const isWork=type==='work';const id=isWork?'works':'products';return '<section class="page" id="'+id+'"><div class="page-head"><div><span class="eyebrow display">'+(isWork?'SELECTED WORKS':'CREATIVE PRODUCTS')+'</span><h1 class="display">'+(isWork?'作品，是探索留下的轨迹。':'把想法做成可触达的体验。')+'</h1></div><p class="page-intro">'+(isWork?'影像、视觉与动态叙事。每个项目都从一次未知开始，在反复打磨中抵达更好的表达。':'从创意概念到完整产品，以同样的品质标准，构建值得停留、观看与使用的体验。')+'</p></div><div class="toolbar"><p>鼠标移入视频即可预览，移开后自动暂停。</p><button class="upload-trigger" data-upload="'+type+'">＋ 添加'+(isWork?'作品':'产品')+'</button></div><div class="grid" id="mediaGrid-'+type+'"><div class="loading">正在加载内容…</div></div></section>'}
  function contact(){return '<section class="page" id="contact"><div class="page-head"><div><span class="eyebrow display">START A PROJECT</span><h1 class="display">一起把下一次探索做得更好。</h1></div><p class="page-intro">合作咨询、影像制作、创意产品与沉浸式体验项目，欢迎直接邮件联系。</p></div><div class="contact-layout"><aside class="contact-card"><span>EMAIL</span><a class="display" href="mailto:hkx18153145308@gmail.com">hkx18153145308@gmail.com</a><button class="pill primary" id="copyEmail">复制邮箱</button></aside><p class="brief">'+brief+'</p></div></section>'}
  function home(){return header()+hero()+listing('work')+listing('product')+contact()}
  function render(){app.innerHTML=home();bind();setupSnapScroll();loadItems('work');loadItems('product');animateIn();if(location.hash)setTimeout(()=>document.querySelector(location.hash)?.scrollIntoView(),50)}
  function bind(){document.querySelectorAll('[data-link]').forEach(a=>a.onclick=e=>{e.preventDefault();const target=document.querySelector(a.getAttribute('href'));target?.scrollIntoView({behavior:'smooth'});document.getElementById('mobileNav')?.classList.remove('open')});const menu=document.getElementById('menuOpen');if(menu)menu.onclick=()=>document.getElementById('mobileNav').classList.toggle('open');const admin=document.getElementById('adminOpen');if(admin)admin.onclick=()=>openUpload('work');document.querySelectorAll('[data-upload]').forEach(trigger=>trigger.onclick=()=>openUpload(trigger.dataset.upload));const copy=document.getElementById('copyEmail');if(copy)copy.onclick=async()=>{await navigator.clipboard.writeText('hkx18153145308@gmail.com');copy.textContent='已复制'};const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){document.querySelectorAll('.nav a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id))}}),{threshold:.45});document.querySelectorAll('#home,#works,#products,#contact').forEach(section=>observer.observe(section))}
  function setupSnapScroll(){const sections=[...document.querySelectorAll('#home,#works,#products,#contact')];let locked=false;let touchY=0;const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;const move=direction=>{if(locked||modal.classList.contains('open'))return;const current=sections.reduce((best,section,index)=>Math.abs(section.getBoundingClientRect().top)<best.distance?{index,distance:Math.abs(section.getBoundingClientRect().top)}:best,{index:0,distance:Infinity}).index;const next=Math.max(0,Math.min(sections.length-1,current+direction));if(next===current)return;locked=true;sections[next].scrollIntoView({behavior:reduced?'auto':'smooth',block:'start'});history.replaceState({},'',location.pathname+'#'+sections[next].id);setTimeout(()=>locked=false,reduced?120:900)};window.onwheel=e=>{if(Math.abs(e.deltaY)<4||e.target.closest('.modal'))return;e.preventDefault();move(e.deltaY>0?1:-1)};window.ontouchstart=e=>{touchY=e.touches[0].clientY};window.ontouchend=e=>{const delta=touchY-e.changedTouches[0].clientY;if(Math.abs(delta)>24)move(delta>0?1:-1)};window.onkeydown=e=>{if(['ArrowDown','PageDown',' '].includes(e.key)){e.preventDefault();move(1)}else if(['ArrowUp','PageUp'].includes(e.key)){e.preventDefault();move(-1)}}}
  function animateIn(){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const items=[...document.querySelectorAll('.brand,.nav,.admin-btn,.headline-clip,.hero-copy,.page-head,.toolbar,.contact-layout')];items.forEach((el,i)=>el.animate([{opacity:0,transform:'translateY(18px)'},{opacity:1,transform:'translateY(0)'}],{duration:650,delay:80+i*90,easing:'cubic-bezier(.2,.8,.2,1)',fill:'both'}))}
  async function loadItems(type){const grid=document.getElementById('mediaGrid-'+type);try{const res=await fetch('/api/items?type='+type);const items=await res.json();const samples=[{title:type==='work'?'无限探索 · 动态视觉':'沉浸式品牌体验',media_type:'image/jpeg',url:'https://image.mux.com/'+MUX+'/thumbnail.jpg?time='+(type==='work'?'2':'4')+'&width=1400',sample:true}];const all=[...items,...samples];grid.innerHTML=all.map(x=>'<article class="card"><div class="card-media">'+(x.media_type.startsWith('video')?'<video src="'+(x.url||'/media/'+encodeURIComponent(x.media_key))+'" muted loop playsinline preload="metadata" controls></video>':'<img src="'+(x.url||'/media/'+encodeURIComponent(x.media_key))+'" alt="'+escapeHtml(x.title)+'" loading="lazy">')+'</div>'+(x.sample?'<span class="sample-label">示例内容</span>':'')+'<div class="card-body"><h2>'+escapeHtml(x.title)+'</h2><small>'+(x.media_type.startsWith('video')?'VIDEO':'IMAGE')+'</small></div></article>').join('');bindVideoHover(grid)}catch(e){grid.innerHTML='<div class="empty">内容加载失败，请稍后刷新。</div>'}}
  function bindVideoHover(root){root.querySelectorAll('video').forEach(video=>{video.addEventListener('mouseenter',()=>video.play().catch(()=>{}));video.addEventListener('mouseleave',()=>video.pause())})}
  function escapeHtml(s){const d=document.createElement('div');d.textContent=s;return d.innerHTML}
  function openUpload(type){modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.querySelector('#uploadForm [name=type]').value=type}
  document.querySelector('.close').onclick=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true')};modal.onclick=e=>{if(e.target===modal)document.querySelector('.close').click()};document.querySelector('[name=file]').onchange=e=>{document.getElementById('fileText').textContent=e.target.files[0]?.name||'选择图片或视频'};
  document.getElementById('uploadForm').onsubmit=e=>{e.preventDefault();const form=e.currentTarget;const status=document.getElementById('uploadStatus');const file=form.elements.file.files[0];if(!file)return;if(file.size>100*1024*1024){status.textContent='文件不能超过 100MB。';return}const submit=form.querySelector('[type=submit]');submit.disabled=true;const params=new URLSearchParams({type:form.elements.type.value,title:form.elements.title.value,filename:file.name});const xhr=new XMLHttpRequest();xhr.open('POST','/api/upload?'+params);xhr.setRequestHeader('Content-Type',file.type||'application/octet-stream');xhr.upload.onprogress=event=>{if(event.lengthComputable){const percent=Math.min(99,Math.round(event.loaded/event.total*100));status.textContent='正在上传 '+percent+'% · '+formatBytes(event.loaded)+' / '+formatBytes(event.total)}else status.textContent='正在上传…'};xhr.onload=()=>{submit.disabled=false;if(xhr.status===401){status.innerHTML='请先 <a href="/signin-with-chatgpt?return_to='+encodeURIComponent(location.pathname)+'" target="_top" style="color:#fff">登录</a> 后上传。';return}if(xhr.status===403){status.textContent='仅网站所有者邮箱可以发布内容。';return}if(xhr.status<200||xhr.status>=300){status.textContent='上传失败，请检查文件格式或网络后重试。';return}status.textContent='上传完成，正在刷新…';setTimeout(()=>{document.querySelector('.close').click();render()},350)};xhr.onerror=()=>{submit.disabled=false;status.textContent='网络中断，上传未完成，请重试。'};status.textContent='准备上传…';xhr.send(file)};
  function formatBytes(bytes){if(bytes<1024)return bytes+' B';if(bytes<1024*1024)return(bytes/1024).toFixed(1)+' KB';return(bytes/1024/1024).toFixed(1)+' MB'}
  addEventListener('popstate',render);render();
  </script>
</body></html>`;

function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json; charset=utf-8' } });
}

function ownerEmail(request) {
  return (request.headers.get('oai-authenticated-user-email') || '').toLowerCase();
}

async function listItems(request, env) {
  const type = new URL(request.url).searchParams.get('type');
  if (!['work', 'product'].includes(type)) return json({ error: 'invalid type' }, 400);
  const result = await env.DB.prepare('SELECT id, type, title, media_key, media_type, created_at FROM portfolio_items WHERE type = ? ORDER BY created_at DESC').bind(type).all();
  return json(result.results || []);
}

async function addItem(request, env) {
  const email = ownerEmail(request);
  if (!email) return json({ error: 'sign in required' }, 401);
  if (email !== OWNER_EMAIL) return json({ error: 'owner only' }, 403);
  const form = await request.formData();
  const type = String(form.get('type') || '');
  const title = String(form.get('title') || '').trim().slice(0, 80);
  const file = form.get('file');
  if (!['work', 'product'].includes(type) || !title || !(file instanceof File)) return json({ error: 'invalid form' }, 400);
  if (!/^(image\/|video\/)/.test(file.type) || file.size > 100 * 1024 * 1024) return json({ error: 'unsupported file' }, 413);
  const id = crypto.randomUUID();
  const ext = (file.name.split('.').pop() || 'bin').replace(/[^a-z0-9]/gi, '').slice(0, 8);
  const key = type + '/' + id + (ext ? '.' + ext : '');
  await env.BUCKET.put(key, file.stream(), { httpMetadata: { contentType: file.type } });
  await env.DB.prepare('INSERT INTO portfolio_items (id, type, title, media_key, media_type, created_at) VALUES (?, ?, ?, ?, ?, ?)').bind(id, type, title, key, file.type, new Date().toISOString()).run();
  return json({ id, type, title, media_key: key, media_type: file.type }, 201);
}

async function uploadItem(request, env) {
  const email = ownerEmail(request);
  if (!email) return json({ error: 'sign in required' }, 401);
  if (email !== OWNER_EMAIL) return json({ error: 'owner only' }, 403);
  const url = new URL(request.url);
  const type = String(url.searchParams.get('type') || '');
  const title = String(url.searchParams.get('title') || '').trim().slice(0, 80);
  const filename = String(url.searchParams.get('filename') || 'media.bin');
  const contentType = String(request.headers.get('content-type') || 'application/octet-stream').split(';')[0].trim();
  const size = Number(request.headers.get('content-length') || 0);
  if (!['work', 'product'].includes(type) || !title || !request.body) return json({ error: 'invalid upload' }, 400);
  if (!/^(image\/|video\/)/.test(contentType) || !Number.isFinite(size) || size <= 0 || size > 100 * 1024 * 1024) return json({ error: 'unsupported file' }, 413);
  const id = crypto.randomUUID();
  const ext = (filename.split('.').pop() || 'bin').replace(/[^a-z0-9]/gi, '').slice(0, 8);
  const key = type + '/' + id + (ext ? '.' + ext : '');
  await env.BUCKET.put(key, request.body, { httpMetadata: { contentType } });
  try {
    await env.DB.prepare('INSERT INTO portfolio_items (id, type, title, media_key, media_type, created_at) VALUES (?, ?, ?, ?, ?, ?)').bind(id, type, title, key, contentType, new Date().toISOString()).run();
  } catch (error) {
    await env.BUCKET.delete(key);
    throw error;
  }
  return json({ id, type, title, media_key: key, media_type: contentType }, 201);
}

async function media(key, env, request) {
  const object = await env.BUCKET.get(key, { range: request.headers });
  if (!object) return new Response('Not found', { status: 404 });
  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set('etag', object.httpEtag);
  headers.set('cache-control', 'public, max-age=31536000, immutable');
  headers.set('accept-ranges', 'bytes');
  if (object.range) {
    const start = object.range.offset;
    const end = start + object.range.length - 1;
    headers.set('content-range', 'bytes ' + start + '-' + end + '/' + object.size);
    headers.set('content-length', String(object.range.length));
  } else {
    headers.set('content-length', String(object.size));
  }
  if (request.method === 'HEAD') return new Response(null, { status: 200, headers });
  return new Response(object.body, { status: object.range ? 206 : 200, headers });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    try {
      if (url.pathname === '/api/items' && request.method === 'GET') return listItems(request, env);
      if (url.pathname === '/api/items' && request.method === 'POST') return addItem(request, env);
      if (url.pathname === '/api/upload' && request.method === 'POST') return uploadItem(request, env);
      if (url.pathname.startsWith('/media/') && (request.method === 'GET' || request.method === 'HEAD')) return media(decodeURIComponent(url.pathname.slice(7)), env, request);
      if (request.method === 'GET') return new Response(html, { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-cache', 'content-security-policy': "default-src 'self' https: data: blob:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; frame-src https://player.mux.com; media-src 'self' https: blob:; img-src 'self' https: data: blob:; connect-src 'self' https:;" } });
      return new Response('Method not allowed', { status: 405 });
    } catch (error) {
      return json({ error: 'request failed' }, 500);
    }
  }
};

