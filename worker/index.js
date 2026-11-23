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
    *{box-sizing:border-box}html{scroll-behavior:smooth;scroll-snap-type:y mandatory}html,body{margin:0;min-height:100%;background:#000;color:#fff;font-family:'Noto Sans SC',system-ui,sans-serif}body{overflow-x:hidden}button,a,input{font:inherit}button,a{touch-action:manipulation}.display{font-family:'Anta','Noto Sans SC',sans-serif;font-weight:400}.shell{min-height:100svh;background:#000}.topbar{position:fixed;z-index:50;top:0;left:0;right:0;display:flex;align-items:center;justify-content:space-between;padding:22px 32px}.brand{display:flex;align-items:center;gap:10px;color:#fff;text-decoration:none;font-family:'Anta',sans-serif;font-size:22px}.mark{display:grid;place-items:center;width:36px;height:36px;border-radius:50%;background:#fff;color:#000}.mark svg{width:19px}.nav{display:flex;gap:8px;padding:6px;border:1px solid var(--line);border-radius:999px;background:rgba(10,10,10,.58);backdrop-filter:blur(18px)}.nav a{padding:9px 18px;border-radius:999px;color:rgba(255,255,255,.64);text-decoration:none;font-size:14px}.nav a:hover,.nav a.active{background:rgba(255,255,255,.1);color:#fff}.menu-btn,.admin-btn{border:1px solid var(--line);background:rgba(10,10,10,.58);color:#fff;border-radius:999px;backdrop-filter:blur(18px)}.admin-btn{padding:11px 18px}.menu-btn{display:none;width:42px;height:42px;font-size:20px}.hero{position:relative;min-height:100svh;overflow:hidden;background:#000;scroll-snap-align:start;scroll-snap-stop:always}.hero-media{position:absolute;inset:0;overflow:hidden}.hero-media iframe{position:absolute;top:50%;left:50%;width:max(100vw,177.78vh);height:max(100vh,56.25vw);transform:translate(-50%,-50%) scale(1.06);border:0;opacity:.62;filter:saturate(.7) contrast(1.08)}.shade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.42),rgba(0,0,0,.2) 55%,#000 100%)}.hero-content{position:relative;z-index:5;display:flex;min-height:100svh;flex-direction:column;align-items:center;justify-content:center;padding:120px 24px;text-align:center}h1{max-width:1050px;margin:0 0 24px;font-size:clamp(4rem,9vw,9rem);line-height:.91;letter-spacing:-.045em}.hero-copy{max-width:760px;margin:0;color:rgba(255,255,255,.76);font-size:clamp(1rem,1.5vw,1.2rem);line-height:1.8}.pill{display:inline-flex;align-items:center;justify-content:center;gap:9px;min-height:48px;padding:0 22px;border-radius:999px;text-decoration:none;border:0;cursor:pointer}.primary{background:#fff;color:#030103}.page{min-height:100svh;padding:140px 5vw 80px;background:#000;scroll-snap-align:start;scroll-snap-stop:always}.page-head{display:grid;grid-template-columns:1.4fr .6fr;gap:40px;align-items:end;margin-bottom:56px}.eyebrow{color:var(--ember);font-size:14px}.page h1{margin:12px 0 0;max-width:720px;font-size:clamp(2.35rem,4.4vw,4.7rem);line-height:1.05;letter-spacing:-.035em}.page-intro{max-width:420px;justify-self:end;color:var(--muted);font-size:17px;line-height:1.8}.toolbar{display:flex;align-items:center;justify-content:space-between;margin:0 0 28px;padding-top:20px;border-top:1px solid var(--line)}.toolbar p{margin:0;color:var(--muted)}.upload-trigger{display:inline-flex;align-items:center;gap:8px;border:1px solid var(--line);border-radius:999px;background:#fff;color:#000;padding:11px 18px;cursor:pointer}.grid{display:grid;grid-template-columns:repeat(12,1fr);gap:18px}.card{grid-column:span 4;position:relative;overflow:hidden;min-height:380px;border:1px solid var(--line);border-radius:8px;background:#0b0b0b}.card:nth-child(5n+1){grid-column:span 7}.card:nth-child(5n+2){grid-column:span 5}.card-media{aspect-ratio:16/10;overflow:hidden;background:#111}.card img,.card video{width:100%;height:100%;object-fit:cover;display:block}.card video{cursor:pointer}.card-body{display:flex;align-items:end;justify-content:space-between;gap:20px;padding:20px}.card h2{margin:0;font-size:clamp(1.25rem,2vw,1.8rem);font-weight:500}.card small{color:var(--muted)}.empty{grid-column:1/-1;display:grid;place-items:center;min-height:330px;border:1px dashed rgba(255,255,255,.24);border-radius:8px;color:var(--muted);text-align:center}.sample-label{position:absolute;top:14px;left:14px;padding:6px 10px;border-radius:999px;background:rgba(0,0,0,.62);font-size:12px}.contact-layout{display:grid;grid-template-columns:.75fr 1.25fr;gap:8vw;align-items:start}.contact-card{position:sticky;top:130px;padding:28px;border:1px solid var(--line);border-radius:8px;background:rgba(255,255,255,.04)}.contact-card a{display:block;margin:24px 0;color:#fff;font-size:clamp(1rem,2vw,1.5rem);word-break:break-all}.contact-card span{color:var(--muted)}.brief{margin:0;padding:clamp(24px,5vw,56px);border:1px solid var(--line);border-radius:8px;background:rgba(255,255,255,.025);font-size:16px;line-height:1.9;white-space:pre-line}.modal{position:fixed;z-index:100;inset:0;display:none;place-items:center;padding:20px;background:rgba(0,0,0,.76);backdrop-filter:blur(15px)}.modal.open{display:grid}.dialog{width:min(560px,100%);padding:28px;border:1px solid var(--line);border-radius:8px;background:#0a0a0a}.dialog-head{display:flex;justify-content:space-between;align-items:center}.dialog h2{margin:0;font-size:28px}.close{width:40px;height:40px;border:1px solid var(--line);border-radius:50%;background:transparent;color:#fff;font-size:20px}.form{display:grid;gap:18px;margin-top:26px}.form label{display:grid;gap:8px;color:var(--muted);font-size:14px}.form input,.form select{width:100%;border:1px solid var(--line);border-radius:6px;background:#111;color:#fff;padding:13px}.drop{display:grid;place-items:center;min-height:145px;border:1px dashed rgba(255,255,255,.32);border-radius:6px;text-align:center;cursor:pointer}.drop input{position:absolute;width:1px;height:1px;opacity:0}.status{min-height:22px;color:#ffc078;font-size:14px}.mobile-nav{display:none}.loading{grid-column:1/-1;color:var(--muted)}
    @media(max-width:800px){.topbar{padding:16px}.nav,.admin-btn{display:none}.menu-btn{display:block}.hero-content{padding:110px 18px}.page{padding:110px 18px 50px}.page-head{grid-template-columns:1fr;gap:20px}.page-intro{justify-self:start}.grid{grid-template-columns:1fr}.card,.card:nth-child(n){grid-column:1;min-height:auto}.contact-layout{grid-template-columns:1fr}.contact-card{position:static}.mobile-nav{position:fixed;z-index:60;top:68px;left:16px;right:16px;display:none;padding:10px;border:1px solid var(--line);border-radius:8px;background:rgba(5,5,5,.94);backdrop-filter:blur(18px)}.mobile-nav.open{display:grid}.mobile-nav a{padding:13px;color:#fff;text-decoration:none;border-bottom:1px solid var(--line)}.toolbar{align-items:flex-start;gap:18px;flex-direction:column}}
    .cursor-glow{position:fixed;z-index:45;top:0;left:0;width:320px;height:320px;border-radius:50%;pointer-events:none;opacity:0;transform:translate3d(-50%,-50%,0);background:radial-gradient(circle,rgba(255,255,255,.15) 0,rgba(255,170,82,.12) 24%,rgba(255,128,40,.055) 48%,transparent 72%);filter:blur(8px);mix-blend-mode:screen;will-change:transform,opacity;transition:opacity .35s ease}
    :is(a,button,input,select):focus-visible{outline:2px solid #fff;outline-offset:4px}.nav a,.admin-btn,.upload-trigger,.pill,.menu-btn{transition:transform .5s cubic-bezier(.22,1,.36,1),background-color .3s cubic-bezier(.22,1,.36,1),color .3s cubic-bezier(.22,1,.36,1),border-color .3s cubic-bezier(.22,1,.36,1),opacity .3s cubic-bezier(.22,1,.36,1)}.nav a:hover{transform:translateY(-2px)}.admin-btn:hover,.upload-trigger:hover,.pill:hover{transform:translateY(-2px);background:#f0f0f0}.admin-btn:active,.upload-trigger:active,.pill:active,.menu-btn:active{transform:scale(.98)}.card{transition:transform .5s cubic-bezier(.22,1,.36,1),border-color .3s cubic-bezier(.22,1,.36,1),background-color .3s cubic-bezier(.22,1,.36,1)}.card img,.card video{transition:transform .6s cubic-bezier(.22,1,.36,1)}.card:hover{transform:translateY(-6px);border-color:rgba(255,255,255,.3);background:#101010}.card:hover img,.card:hover video{transform:scale(1.025)}.drop{transition:border-color .3s cubic-bezier(.22,1,.36,1),background-color .3s cubic-bezier(.22,1,.36,1),transform .5s cubic-bezier(.22,1,.36,1)}.drop:hover,.drop.dragging{border-color:rgba(255,255,255,.72);background:#181818;transform:translateY(-2px)}[data-reveal]{opacity:0;transform:translateY(32px);transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1)}[data-reveal].is-visible{opacity:1;transform:translateY(0)}.loading{min-height:320px;border-radius:8px;background:#181818;position:relative;overflow:hidden;color:transparent}.loading:after{content:'';position:absolute;top:0;bottom:0;left:0;width:35%;background:rgba(255,255,255,.055);transform:translateX(-110%);animation:skeleton 1.5s cubic-bezier(.22,1,.36,1) infinite}@keyframes skeleton{to{transform:translateX(390%)}}.menu-btn{position:relative}.menu-btn span{position:absolute;left:12px;width:18px;height:1.5px;background:#fff;transition:transform .5s cubic-bezier(.22,1,.36,1),top .5s cubic-bezier(.22,1,.36,1)}.menu-btn span:first-child{top:16px}.menu-btn span:last-child{top:24px}.menu-btn.open span:first-child{top:20px;transform:rotate(45deg)}.menu-btn.open span:last-child{top:20px;transform:rotate(-45deg)}
    @media(pointer:coarse),(max-width:800px){.cursor-glow{display:none}}
    @media(max-width:800px){.mobile-nav{top:0;left:0;right:0;bottom:0;padding:96px 24px 32px;border:0;border-radius:0;background:rgba(0,0,0,.94);align-content:start}.mobile-nav a{font-size:24px;line-height:32px;padding:20px 0;opacity:0;transform:translateY(24px);transition:opacity .5s cubic-bezier(.22,1,.36,1),transform .5s cubic-bezier(.22,1,.36,1)}.mobile-nav.open a{opacity:1;transform:translateY(0)}.mobile-nav.open a:nth-child(2){transition-delay:60ms}.mobile-nav.open a:nth-child(3){transition-delay:120ms}.mobile-nav.open a:nth-child(4){transition-delay:180ms}}
    .product-card .card-media{position:relative}.product-lock{position:absolute;right:12px;bottom:12px;display:flex;align-items:center;gap:8px;padding:8px 12px;border-radius:999px;background:rgba(0,0,0,.72);backdrop-filter:blur(16px);font-size:12px}.product-lock svg{width:14px;height:14px}.product-meta{display:flex;align-items:center;gap:16px}.product-price{font-size:20px;font-weight:600;letter-spacing:-.02em}.buy-button,.unlock-link{min-height:40px;padding:8px 16px;border:0;border-radius:999px;background:#fff;color:#000;font-size:14px;font-weight:600;cursor:pointer;text-decoration:none;transition:transform .5s cubic-bezier(.22,1,.36,1),background-color .3s cubic-bezier(.22,1,.36,1)}.buy-button:hover,.unlock-link:hover{transform:translateY(-2px);background:#e8e8ed}.buy-button:active,.unlock-link:active{transform:scale(.98)}.payment-modal{background:rgba(0,0,0,.58)}.payment-sheet{position:relative;width:min(440px,100%);padding:40px 32px 32px;border-radius:24px;background:#f5f5f7;color:#1d1d1f;box-shadow:0 32px 90px rgba(0,0,0,.45);text-align:center}.payment-close{position:absolute;top:16px;right:16px;width:32px;height:32px;border:0;border-radius:50%;background:#e8e8ed;color:#1d1d1f;font-size:20px;cursor:pointer}.payment-mark{display:grid;place-items:center;width:56px;height:56px;margin:0 auto 16px;border-radius:16px;background:#1677ff;color:#fff;font-size:32px;font-weight:600}.payment-kicker{color:#6e6e73;font-size:14px}.payment-sheet h2{margin:12px 0 8px;font-size:30px;line-height:36px}.payment-note{margin:0 auto 24px;max-width:340px;color:#6e6e73;font-size:14px;line-height:20px}.payment-amount{display:flex;align-items:center;justify-content:space-between;padding:16px;border-radius:16px;background:#fff;text-align:left}.payment-amount span{color:#6e6e73;font-size:14px}.payment-amount strong{font-size:30px;line-height:36px}.payment-action{width:100%;margin-top:16px;padding:12px 16px;border:0;border-radius:12px;background:#d2d2d7;color:#86868b;font-size:16px;font-weight:600}.payment-sheet small{display:block;margin-top:12px;color:#86868b;line-height:20px}
    @media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}.hero-media iframe{display:none}[data-reveal]{opacity:1;transform:none}}
  </style>
</head>
<body>
  <div id="app" class="shell"></div>
  <div id="cursorGlow" class="cursor-glow" aria-hidden="true"></div>
  <div id="uploadModal" class="modal" aria-hidden="true"><div class="dialog"><div class="dialog-head"><h2 class="display">添加内容</h2><button class="close" type="button" aria-label="关闭">×</button></div><form id="uploadForm" class="form"><label>分类<select name="type"><option value="work">作品</option><option value="product">产品</option></select></label><label>标题<input name="title" maxlength="80" required placeholder="输入作品或产品标题"></label><label id="priceField" hidden>价格（人民币）<input name="price" type="number" min="0.01" max="999999" step="0.01" placeholder="例如 29.90"></label><label class="drop"><span id="fileText">选择图片或视频<br><small>支持 JPG、PNG、WebP、MP4、WebM，最大 2GB</small></span><input name="file" type="file" accept="image/*,video/mp4,video/webm" required></label><label class="drop" id="contentField" hidden><span id="contentFileText">选择购买后解锁的文件<br><small>最大 2GB</small></span><input name="contentFile" type="file"></label><button class="pill primary" type="submit">上传并发布</button><div id="uploadStatus" class="status"></div></form></div></div>
  <div id="paymentModal" class="modal payment-modal" aria-hidden="true"><div class="payment-sheet"><button class="payment-close" type="button" aria-label="关闭支付页面">×</button><div class="payment-mark">支</div><span class="payment-kicker">支付宝安全支付</span><h2 id="paymentTitle">确认购买</h2><p class="payment-note">金额已由商品价格自动填写。正式支付接入后，将跳转到支付宝官方收银台输入密码。</p><div class="payment-amount"><span>应付金额</span><strong id="paymentAmount">¥0.00</strong></div><button class="payment-action" type="button" disabled>支付接口待接入</button><small>当前页面不会扣款，也不会收集支付密码。</small></div></div>
  <script>
  const MUX='${MUX_ID}';
  const paths={home:'/',works:'/works',products:'/products',contact:'/contact'};
  const nav=[['首页','#home'],['作品','#works'],['产品','#products'],['联系方式','#contact']];
  const brief='老板您好！\\n\\n为保障项目进度、减少反复沟通确认，保证成片交付符合预期，麻烦您抽空提供以下项目资料与需求说明：\\n\\n1. 项目基础信息：项目名称、使用场景与发布平台、目标成片时长、画幅比例、输出分辨率；\\n2. 交付节点：明确的初稿、终版截止交付时间；同时请告知项目最终审核负责人；\\n3. 素材资料：原始音视频、图片、LOGO、脚本 / 口播文稿、字幕文本等全部素材，附带网盘 / 下载链接；如自备配音、背景音乐，请一并提供，并备注版权要求；\\n4. 风格参考：参考样片链接，同时说明偏好的节奏、调性、调色、特效方向，以及需要规避的效果；\\n5. 包装需求：是否需要添加字幕、花字、动态图文、片头片尾、封面等附加内容；\\n6. 交付与修订约定：成片输出格式、是否需要提供工程文件；本次包含的免费修改轮次，超出修改范围的调整规则；反馈建议请尽量标注时间码，方便精准调整；\\n7. 品牌规范：如有固定品牌字体、标准色、LOGO 摆放规范或其他内容禁忌，烦请同步。\\n\\n资料齐全后我会第一时间排期启动制作，如有任何疑问，欢迎随时和我沟通。';
  const app=document.getElementById('app');
  const modal=document.getElementById('uploadModal');
  function setupCursorGlow(){const glow=document.getElementById('cursorGlow');if(!glow||matchMedia('(pointer:coarse)').matches||matchMedia('(prefers-reduced-motion: reduce)').matches)return;let targetX=innerWidth/2,targetY=innerHeight/2,currentX=targetX,currentY=targetY,visible=false;const move=e=>{targetX=e.clientX;targetY=e.clientY;const overHome=document.elementFromPoint(e.clientX,e.clientY)?.closest('#home');visible=!overHome;glow.style.opacity=visible?'1':'0'};const hide=()=>{visible=false;glow.style.opacity='0'};addEventListener('pointermove',move,{passive:true});document.documentElement.addEventListener('mouseleave',hide);const tick=()=>{currentX+=(targetX-currentX)*.16;currentY+=(targetY-currentY)*.16;glow.style.transform='translate3d('+(currentX-160)+'px,'+(currentY-160)+'px,0)';requestAnimationFrame(tick)};requestAnimationFrame(tick)}
  function header(){return '<header class="topbar"><a class="brand" href="/" data-link><span class="mark"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1c.7 6.3 4.7 10.3 11 11-6.3.7-10.3 4.7-11 11C11.3 16.7 7.3 12.7 1 12 7.3 11.3 11.3 7.3 12 1Z" fill="currentColor"/></svg></span><span>EXPLORE</span></a><nav class="nav">'+nav.map(n=>'<a href="'+n[1]+'" data-link>'+n[0]+'</a>').join('')+'</nav><button class="admin-btn" id="adminOpen">＋ 添加内容</button><button class="menu-btn" id="menuOpen" aria-label="打开菜单" aria-expanded="false"><span></span><span></span></button></header><nav class="mobile-nav" id="mobileNav">'+nav.map(n=>'<a href="'+n[1]+'" data-link>'+n[0]+'</a>').join('')+'</nav>'}
  function hero(){return '<section class="hero" id="home"><div class="hero-media"><iframe src="https://player.mux.com/'+MUX+'?autoplay=muted&loop=1&controls=0&muted=1" allow="autoplay; fullscreen" title="背景视频"></iframe><div class="shade"></div></div><div class="hero-content"><div class="headline-clip"><h1 class="display">无限探索</h1></div><p class="hero-copy">追求品质，不断越过边界。用影像、设计与产品，把每一次好奇变成一次沉浸式体验。</p></div></section>'}
  function listing(type){const isWork=type==='work';const id=isWork?'works':'products';return '<section class="page" id="'+id+'"><div class="page-head"><div><span class="eyebrow display">'+(isWork?'SELECTED WORKS':'CREATIVE PRODUCTS')+'</span><h1 class="display">'+(isWork?'作品，是探索留下的轨迹。':'把想法做成可触达的体验。')+'</h1></div><p class="page-intro">'+(isWork?'影像、视觉与动态叙事。每个项目都从一次未知开始，在反复打磨中抵达更好的表达。':'从创意概念到完整产品，以同样的品质标准，构建值得停留、观看与使用的体验。')+'</p></div><div class="toolbar"><p>鼠标移入视频即可预览，移开后自动暂停。</p><button class="upload-trigger" data-upload="'+type+'">＋ 添加'+(isWork?'作品':'产品')+'</button></div><div class="grid" id="mediaGrid-'+type+'"><div class="loading">正在加载内容…</div></div></section>'}
  function contact(){return '<section class="page" id="contact"><div class="page-head"><div><span class="eyebrow display">START A PROJECT</span><h1 class="display">一起把下一次探索做得更好。</h1></div><p class="page-intro">合作咨询、影像制作、创意产品与沉浸式体验项目，欢迎直接邮件联系。</p></div><div class="contact-layout"><aside class="contact-card"><span>EMAIL</span><a class="display" href="mailto:hkx18153145308@gmail.com">hkx18153145308@gmail.com</a><button class="pill primary" id="copyEmail">复制邮箱</button></aside><p class="brief">'+brief+'</p></div></section>'}
  function home(){return header()+hero()+listing('work')+listing('product')+contact()}
  function render(){app.innerHTML=home();bind();setupSnapScroll();loadItems('work');loadItems('product');animateIn();setupReveal();if(location.hash)setTimeout(()=>document.querySelector(location.hash)?.scrollIntoView(),50)}
  function bind(){document.querySelectorAll('[data-link]').forEach(a=>a.onclick=e=>{e.preventDefault();const target=document.querySelector(a.getAttribute('href'));target?.scrollIntoView({behavior:'smooth'});const mobile=document.getElementById('mobileNav');const menu=document.getElementById('menuOpen');mobile?.classList.remove('open');menu?.classList.remove('open');menu?.setAttribute('aria-expanded','false')});const menu=document.getElementById('menuOpen');if(menu)menu.onclick=()=>{const mobile=document.getElementById('mobileNav');const open=mobile.classList.toggle('open');menu.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open))};const admin=document.getElementById('adminOpen');if(admin)admin.onclick=()=>openUpload('work');document.querySelectorAll('[data-upload]').forEach(trigger=>trigger.onclick=()=>openUpload(trigger.dataset.upload));const copy=document.getElementById('copyEmail');if(copy)copy.onclick=async()=>{await navigator.clipboard.writeText('hkx18153145308@gmail.com');copy.textContent='已复制'};const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){document.querySelectorAll('.nav a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id))}}),{threshold:.45});document.querySelectorAll('#home,#works,#products,#contact').forEach(section=>observer.observe(section))}
  function setupSnapScroll(){const sections=[...document.querySelectorAll('#home,#works,#products,#contact')];let locked=false;let touchY=0;const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;const move=direction=>{if(locked||modal.classList.contains('open'))return;const current=sections.reduce((best,section,index)=>Math.abs(section.getBoundingClientRect().top)<best.distance?{index,distance:Math.abs(section.getBoundingClientRect().top)}:best,{index:0,distance:Infinity}).index;const next=Math.max(0,Math.min(sections.length-1,current+direction));if(next===current)return;locked=true;sections[next].scrollIntoView({behavior:reduced?'auto':'smooth',block:'start'});history.replaceState({},'',location.pathname+'#'+sections[next].id);setTimeout(()=>locked=false,reduced?120:900)};window.onwheel=e=>{if(Math.abs(e.deltaY)<4||e.target.closest('.modal'))return;e.preventDefault();move(e.deltaY>0?1:-1)};window.ontouchstart=e=>{touchY=e.touches[0].clientY};window.ontouchend=e=>{const delta=touchY-e.changedTouches[0].clientY;if(Math.abs(delta)>24)move(delta>0?1:-1)};window.onkeydown=e=>{if(['ArrowDown','PageDown',' '].includes(e.key)){e.preventDefault();move(1)}else if(['ArrowUp','PageUp'].includes(e.key)){e.preventDefault();move(-1)}}}
  function animateIn(){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const items=[...document.querySelectorAll('.brand,.nav,.admin-btn,.headline-clip,.hero-copy')];items.forEach((el,i)=>el.animate([{opacity:0,transform:'translateY(18px)'},{opacity:1,transform:'translateY(0)'}],{duration:650,delay:80+i*90,easing:'cubic-bezier(.22,1,.36,1)',fill:'both'}))}
  function setupReveal(root=document){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const items=[...root.querySelectorAll('.page-head,.toolbar,.contact-layout,.card')].filter(el=>!el.hasAttribute('data-reveal'));const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -8%'});items.forEach((el,index)=>{el.dataset.reveal='';el.style.transitionDelay=(index%4)*60+'ms';observer.observe(el)})}
  async function loadItems(type){const grid=document.getElementById('mediaGrid-'+type);try{const res=await fetch('/api/items?type='+type);const items=await res.json();if(type==='product'){if(!items.length){grid.innerHTML='<div class="empty">产品正在准备中。发布后，这里会展示海报、价格与购买入口。</div>';return}grid.innerHTML=items.map(x=>'<article class="card product-card"><div class="card-media"><img src="/media/'+encodeURIComponent(x.media_key)+'" alt="'+escapeHtml(x.title)+' 产品海报" loading="lazy"><span class="product-lock"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>'+(x.purchased?'已解锁':'购买后解锁')+'</span></div><div class="card-body"><div><h2>'+escapeHtml(x.title)+'</h2><small>DIGITAL PRODUCT</small></div><div class="product-meta"><strong class="product-price">¥'+(x.price_cents/100).toFixed(2)+'</strong>'+(x.purchased?'<a class="unlock-link" href="'+x.download_url+'">下载内容</a>':'<button class="buy-button" data-buy="'+x.id+'" data-title="'+escapeHtml(x.title)+'" data-price="'+x.price_cents+'">购买</button>')+'</div></div></article>').join('');document.querySelectorAll('[data-buy]').forEach(button=>button.onclick=()=>openPayment(button.dataset));setupReveal(grid);return}const samples=[{title:'无限探索 · 动态视觉',media_type:'image/jpeg',url:'https://image.mux.com/'+MUX+'/thumbnail.jpg?time=2&width=1400',sample:true}];const all=[...items,...samples];grid.innerHTML=all.map(x=>'<article class="card"><div class="card-media">'+(x.media_type.startsWith('video')?'<video src="'+(x.url||'/media/'+encodeURIComponent(x.media_key))+'" muted loop playsinline preload="metadata" controls></video>':'<img src="'+(x.url||'/media/'+encodeURIComponent(x.media_key))+'" alt="'+escapeHtml(x.title)+'" loading="lazy">')+'</div>'+(x.sample?'<span class="sample-label">示例内容</span>':'')+'<div class="card-body"><h2>'+escapeHtml(x.title)+'</h2><small>'+(x.media_type.startsWith('video')?'VIDEO':'IMAGE')+'</small></div></article>').join('');bindVideoHover(grid);setupReveal(grid)}catch(e){grid.innerHTML='<div class="empty">内容加载失败，请稍后刷新。</div>'}}
  function bindVideoHover(root){root.querySelectorAll('video').forEach(video=>{video.addEventListener('mouseenter',()=>video.play().catch(()=>{}));video.addEventListener('mouseleave',()=>video.pause())})}
  function escapeHtml(s){const d=document.createElement('div');d.textContent=s;return d.innerHTML}
  function openPayment(data){const payment=document.getElementById('paymentModal');document.getElementById('paymentTitle').textContent=data.title;document.getElementById('paymentAmount').textContent='¥'+(Number(data.price)/100).toFixed(2);payment.classList.add('open');payment.setAttribute('aria-hidden','false')}
  function setUploadType(type){const product=type==='product';document.getElementById('priceField').hidden=!product;document.getElementById('contentField').hidden=!product;const price=document.querySelector('[name=price]');const content=document.querySelector('[name=contentFile]');price.required=product;content.required=product;document.getElementById('fileText').innerHTML=product?'选择产品海报<br><small>支持 JPG、PNG、WebP，最大 20MB</small>':'选择图片或视频<br><small>支持 JPG、PNG、WebP、MP4、WebM，最大 2GB</small>';document.querySelector('[name=file]').accept=product?'image/*':'image/*,video/mp4,video/webm'}
  function openUpload(type){modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.querySelector('#uploadForm [name=type]').value=type;setUploadType(type)}
  document.querySelector('.close').onclick=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true')};modal.onclick=e=>{if(e.target===modal)document.querySelector('.close').click()};const paymentModal=document.getElementById('paymentModal');document.querySelector('.payment-close').onclick=()=>{paymentModal.classList.remove('open');paymentModal.setAttribute('aria-hidden','true')};paymentModal.onclick=e=>{if(e.target===paymentModal)document.querySelector('.payment-close').click()};document.querySelector('[name=type]').onchange=e=>setUploadType(e.target.value);const drop=document.querySelector('.drop');['dragenter','dragover'].forEach(name=>drop.addEventListener(name,e=>{e.preventDefault();drop.classList.add('dragging')}));['dragleave','drop'].forEach(name=>drop.addEventListener(name,e=>{e.preventDefault();drop.classList.remove('dragging')}));drop.addEventListener('drop',e=>{const file=e.dataTransfer.files[0];if(!file)return;const input=document.querySelector('[name=file]');const transfer=new DataTransfer();transfer.items.add(file);input.files=transfer.files;document.getElementById('fileText').textContent=file.name});document.querySelector('[name=file]').onchange=e=>{document.getElementById('fileText').textContent=e.target.files[0]?.name||'选择图片或视频'};document.querySelector('[name=contentFile]').onchange=e=>{document.getElementById('contentFileText').textContent=e.target.files[0]?.name||'选择购买后解锁的文件'};
  document.getElementById('uploadForm').onsubmit=async e=>{e.preventDefault();const form=e.currentTarget;const status=document.getElementById('uploadStatus');const file=form.elements.file.files[0];if(!file)return;if(file.size>2*1024*1024*1024){status.textContent='文件不能超过 2GB。';return}const submit=form.querySelector('[type=submit]');submit.disabled=true;try{if(form.elements.type.value==='product')await uploadProduct(form,status);else if(file.size<=100*1024*1024)await uploadSmall(file,form,status);else await uploadLarge(file,form,status);status.textContent='上传完成，正在刷新…';setTimeout(()=>{document.querySelector('.close').click();render()},350)}catch(error){if(error.status===401){status.innerHTML='请先 <a href="/signin-with-chatgpt?return_to='+encodeURIComponent(location.pathname)+'" target="_top" style="color:#fff">登录</a> 后上传。'}else if(error.status===403)status.textContent='仅网站所有者邮箱可以发布内容。';else status.textContent='上传中断：'+(error.message||'请检查网络后重试。')}finally{submit.disabled=false}};
  async function uploadProduct(form,status){const poster=form.elements.file.files[0];const content=form.elements.contentFile.files[0];const price=Math.round(Number(form.elements.price.value)*100);if(!poster?.type.startsWith('image/'))throw new Error('产品海报必须是图片。');if(poster.size>20*1024*1024)throw new Error('产品海报不能超过 20MB。');if(!content)throw new Error('请选择购买后解锁的文件。');if(content.size>2*1024*1024*1024)throw new Error('产品文件不能超过 2GB。');if(!Number.isInteger(price)||price<1)throw new Error('请输入有效的人民币价格。');status.textContent='正在上传产品海报…';const params=new URLSearchParams({title:form.elements.title.value,filename:poster.name,priceCents:String(price)});const product=await xhrFile('/api/products/poster?'+params,poster,value=>{status.textContent='正在上传产品海报 '+Math.round(value/poster.size*100)+'%'});const meta={purpose:'product_content',productId:product.id,type:'product',title:form.elements.title.value,filename:content.name,contentType:content.type||'application/octet-stream',size:content.size,priceCents:price};if(content.size<=100*1024*1024){status.textContent='正在上传产品文件…';const contentParams=new URLSearchParams({id:product.id,filename:content.name,contentType:meta.contentType,priceCents:String(price)});await xhrFile('/api/products/content?'+contentParams,content,value=>{status.textContent='正在上传产品文件 '+Math.round(value/content.size*100)+'%'})}else await uploadLargeFile(content,meta,status)}
  function xhrFile(url,file,onProgress){return new Promise((resolve,reject)=>{const xhr=new XMLHttpRequest();xhr.open('POST',url);xhr.setRequestHeader('Content-Type',file.type||'application/octet-stream');xhr.upload.onprogress=e=>{if(e.lengthComputable)onProgress(e.loaded)};xhr.onload=()=>{if(xhr.status>=200&&xhr.status<300){try{resolve(JSON.parse(xhr.responseText))}catch(e){resolve({})}}else reject(Object.assign(new Error('服务器未能保存文件。'),{status:xhr.status}))};xhr.onerror=()=>reject(new Error('网络连接中断，请重试。'));xhr.send(file)})}
  function uploadSmall(file,form,status){return new Promise((resolve,reject)=>{const params=new URLSearchParams({type:form.elements.type.value,title:form.elements.title.value,filename:file.name});const xhr=new XMLHttpRequest();xhr.open('POST','/api/upload?'+params);xhr.setRequestHeader('Content-Type',file.type||'application/octet-stream');xhr.upload.onprogress=event=>{if(event.lengthComputable){const percent=Math.min(99,Math.round(event.loaded/event.total*100));status.textContent='正在上传 '+percent+'% · '+formatBytes(event.loaded)+' / '+formatBytes(event.total)}};xhr.onload=()=>xhr.status>=200&&xhr.status<300?resolve():reject(Object.assign(new Error('服务器未能保存文件。'),{status:xhr.status}));xhr.onerror=()=>reject(new Error('网络连接中断，请重试。'));xhr.send(file)})}
  async function uploadLarge(file,form,status){const meta={type:form.elements.type.value,title:form.elements.title.value,filename:file.name,contentType:file.type||'application/octet-stream',size:file.size};const start=await fetch('/api/uploads/start',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(meta)});if(!start.ok)throw Object.assign(new Error('无法开始大文件上传。'),{status:start.status});const session=await start.json();const partSize=10*1024*1024;const totalParts=Math.ceil(file.size/partSize);const parts=new Array(totalParts);const loaded=new Array(totalParts).fill(0);let cursor=0;const update=()=>{const sent=loaded.reduce((a,b)=>a+b,0);const percent=Math.min(99,Math.floor(sent/file.size*100));status.textContent='分片上传 '+percent+'% · '+formatBytes(sent)+' / '+formatBytes(file.size)};const worker=async()=>{while(true){const index=cursor++;if(index>=totalParts)return;const blob=file.slice(index*partSize,Math.min(file.size,(index+1)*partSize));parts[index]=await uploadPart(session,index+1,blob,value=>{loaded[index]=value;update()});loaded[index]=blob.size;update()}};await Promise.all([worker(),worker(),worker()]);status.textContent='正在合并 '+totalParts+' 个分片…';const complete=await fetch('/api/uploads/complete',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({...meta,...session,parts})});if(!complete.ok)throw Object.assign(new Error('视频分片已上传，但合并失败。'),{status:complete.status})}
  async function uploadLargeFile(file,meta,status){const start=await fetch('/api/uploads/start',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(meta)});if(!start.ok)throw Object.assign(new Error('无法开始大文件上传。'),{status:start.status});const session=await start.json();const partSize=10*1024*1024;const totalParts=Math.ceil(file.size/partSize);const parts=new Array(totalParts);const loaded=new Array(totalParts).fill(0);let cursor=0;const update=()=>{const sent=loaded.reduce((a,b)=>a+b,0);status.textContent='产品文件上传 '+Math.min(99,Math.floor(sent/file.size*100))+'% · '+formatBytes(sent)+' / '+formatBytes(file.size)};const worker=async()=>{while(true){const index=cursor++;if(index>=totalParts)return;const blob=file.slice(index*partSize,Math.min(file.size,(index+1)*partSize));parts[index]=await uploadPart(session,index+1,blob,value=>{loaded[index]=value;update()});loaded[index]=blob.size;update()}};await Promise.all([worker(),worker(),worker()]);status.textContent='正在合并产品文件…';const complete=await fetch('/api/uploads/complete',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({...meta,...session,parts})});if(!complete.ok)throw Object.assign(new Error('产品文件合并失败。'),{status:complete.status})}
  function uploadPart(session,partNumber,blob,onProgress,attempt=1){return new Promise((resolve,reject)=>{const params=new URLSearchParams({key:session.key,uploadId:session.uploadId,part:String(partNumber)});const xhr=new XMLHttpRequest();xhr.open('PUT','/api/uploads/part?'+params);xhr.setRequestHeader('Content-Type','application/octet-stream');xhr.upload.onprogress=e=>{if(e.lengthComputable)onProgress(e.loaded)};xhr.onload=()=>{if(xhr.status>=200&&xhr.status<300){try{resolve(JSON.parse(xhr.responseText))}catch(e){reject(new Error('分片响应无效。'))}}else if(attempt<3)setTimeout(()=>uploadPart(session,partNumber,blob,onProgress,attempt+1).then(resolve,reject),500*attempt);else reject(Object.assign(new Error('第 '+partNumber+' 个分片上传失败。'),{status:xhr.status}))};xhr.onerror=()=>attempt<3?setTimeout(()=>uploadPart(session,partNumber,blob,onProgress,attempt+1).then(resolve,reject),500*attempt):reject(new Error('网络中断，第 '+partNumber+' 个分片未上传。'));xhr.send(blob)})}
  function formatBytes(bytes){if(bytes<1024)return bytes+' B';if(bytes<1024*1024)return(bytes/1024).toFixed(1)+' KB';return(bytes/1024/1024).toFixed(1)+' MB'}
  addEventListener('popstate',render);setupCursorGlow();render();
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
  if (type === 'product') {
    const buyerId = request.headers.get('oai-authenticated-user-id') || '';
    const owner = ownerEmail(request) === OWNER_EMAIL;
    const result = await env.DB.prepare("SELECT p.id, p.type, p.title, p.media_key, p.media_type, p.created_at, a.price_cents, a.content_key, CASE WHEN q.status = 'paid' THEN 1 ELSE 0 END AS purchased FROM portfolio_items p JOIN product_assets a ON a.item_id = p.id LEFT JOIN product_purchases q ON q.item_id = p.id AND q.buyer_id = ? WHERE p.type = 'product' ORDER BY p.created_at DESC").bind(buyerId).all();
    return json((result.results || []).map(row=>({ id:row.id, type:row.type, title:row.title, media_key:row.media_key, media_type:row.media_type, created_at:row.created_at, price_cents:row.price_cents, purchased:owner||Boolean(row.purchased), download_url:owner||row.purchased?'/api/products/'+encodeURIComponent(row.id)+'/download':null })));
  }
  const result = await env.DB.prepare('SELECT id, type, title, media_key, media_type, created_at FROM portfolio_items WHERE type = ? ORDER BY created_at DESC').bind(type).all();
  return json(result.results || []);
}

async function uploadProductPoster(request, env) {
  const email = ownerEmail(request);
  if (!email) return json({ error: 'sign in required' }, 401);
  if (email !== OWNER_EMAIL) return json({ error: 'owner only' }, 403);
  const url = new URL(request.url);
  const title = String(url.searchParams.get('title') || '').trim().slice(0, 80);
  const filename = String(url.searchParams.get('filename') || 'poster.jpg');
  const priceCents = Number(url.searchParams.get('priceCents') || 0);
  const contentType = String(request.headers.get('content-type') || '').split(';')[0];
  const size = Number(request.headers.get('content-length') || 0);
  if (!title || !Number.isInteger(priceCents) || priceCents < 1 || !contentType.startsWith('image/') || !request.body || size <= 0 || size > 20 * 1024 * 1024) return json({ error: 'invalid poster' }, 400);
  const id = crypto.randomUUID();
  const ext = (filename.split('.').pop() || 'jpg').replace(/[^a-z0-9]/gi, '').slice(0, 8);
  const key = 'product/posters/' + id + '.' + ext;
  await env.BUCKET.put(key, request.body, { httpMetadata: { contentType } });
  await env.DB.prepare('INSERT INTO portfolio_items (id, type, title, media_key, media_type, created_at) VALUES (?, ?, ?, ?, ?, ?)').bind(id, 'product', title, key, contentType, new Date().toISOString()).run();
  return json({ id, price_cents: priceCents }, 201);
}

async function uploadProductContent(request, env) {
  const email = ownerEmail(request);
  if (!email) return json({ error: 'sign in required' }, 401);
  if (email !== OWNER_EMAIL) return json({ error: 'owner only' }, 403);
  const url = new URL(request.url);
  const id = String(url.searchParams.get('id') || '');
  const filename = String(url.searchParams.get('filename') || 'content.bin');
  const contentType = String(url.searchParams.get('contentType') || request.headers.get('content-type') || 'application/octet-stream').split(';')[0];
  const priceRow = await env.DB.prepare("SELECT id FROM portfolio_items WHERE id = ? AND type = 'product'").bind(id).first();
  const size = Number(request.headers.get('content-length') || 0);
  if (!priceRow || !request.body || size <= 0 || size > 100 * 1024 * 1024) return json({ error: 'invalid content' }, 400);
  const ext = (filename.split('.').pop() || 'bin').replace(/[^a-z0-9]/gi, '').slice(0, 8);
  const key = 'product/content/' + id + '.' + ext;
  await env.BUCKET.put(key, request.body, { httpMetadata: { contentType } });
  const priceCents = Number(url.searchParams.get('priceCents') || 0);
  if (!Number.isInteger(priceCents) || priceCents < 1) { await env.BUCKET.delete(key); return json({ error: 'invalid price' }, 400); }
  await env.DB.prepare('INSERT INTO product_assets (item_id, price_cents, content_key, content_type, content_name, created_at) VALUES (?, ?, ?, ?, ?, ?)').bind(id, priceCents, key, contentType, filename.slice(0, 180), new Date().toISOString()).run();
  return json({ id }, 201);
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

async function startMultipart(request, env) {
  const email = ownerEmail(request);
  if (!email) return json({ error: 'sign in required' }, 401);
  if (email !== OWNER_EMAIL) return json({ error: 'owner only' }, 403);
  const input = await request.json();
  const type = String(input.type || '');
  const purpose = String(input.purpose || '');
  const productId = String(input.productId || '');
  const title = String(input.title || '').trim().slice(0, 80);
  const filename = String(input.filename || 'video.bin');
  const contentType = String(input.contentType || 'application/octet-stream').split(';')[0].trim();
  const size = Number(input.size || 0);
  const productContent = purpose === 'product_content';
  if ((!productContent && (!['work', 'product'].includes(type) || !/^(image\/|video\/)/.test(contentType))) || (productContent && !/^[a-f0-9-]+$/i.test(productId)) || !title || size <= 0 || size > 2 * 1024 * 1024 * 1024) return json({ error: 'invalid upload' }, 413);
  const id = productContent ? productId : crypto.randomUUID();
  const ext = (filename.split('.').pop() || 'bin').replace(/[^a-z0-9]/gi, '').slice(0, 8);
  const key = productContent ? 'product/content/' + id + (ext ? '.' + ext : '') : type + '/' + id + (ext ? '.' + ext : '');
  const upload = await env.BUCKET.createMultipartUpload(key, { httpMetadata: { contentType } });
  return json({ id, key, uploadId: upload.uploadId });
}

async function uploadMultipartPart(request, env) {
  const email = ownerEmail(request);
  if (!email) return json({ error: 'sign in required' }, 401);
  if (email !== OWNER_EMAIL) return json({ error: 'owner only' }, 403);
  const url = new URL(request.url);
  const key = String(url.searchParams.get('key') || '');
  const uploadId = String(url.searchParams.get('uploadId') || '');
  const partNumber = Number(url.searchParams.get('part') || 0);
  const size = Number(request.headers.get('content-length') || 0);
  if (!/^(work\/[a-f0-9-]+|product\/(?:[a-f0-9-]+|content\/[a-f0-9-]+))\.[a-z0-9]+$/i.test(key) || !uploadId || !Number.isInteger(partNumber) || partNumber < 1 || partNumber > 10000 || !request.body || size <= 0 || size > 11 * 1024 * 1024) return json({ error: 'invalid part' }, 400);
  const upload = env.BUCKET.resumeMultipartUpload(key, uploadId);
  const part = await upload.uploadPart(partNumber, request.body);
  return json({ partNumber: part.partNumber, etag: part.etag });
}

async function completeMultipart(request, env) {
  const email = ownerEmail(request);
  if (!email) return json({ error: 'sign in required' }, 401);
  if (email !== OWNER_EMAIL) return json({ error: 'owner only' }, 403);
  const input = await request.json();
  const id = String(input.id || '');
  const key = String(input.key || '');
  const uploadId = String(input.uploadId || '');
  const type = String(input.type || '');
  const purpose = String(input.purpose || '');
  const productId = String(input.productId || '');
  const priceCents = Number(input.priceCents || 0);
  const filename = String(input.filename || 'content.bin').slice(0, 180);
  const title = String(input.title || '').trim().slice(0, 80);
  const contentType = String(input.contentType || 'application/octet-stream').split(';')[0].trim();
  const parts = Array.isArray(input.parts) ? input.parts.map(p=>({ partNumber:Number(p.partNumber), etag:String(p.etag || '') })).sort((a,b)=>a.partNumber-b.partNumber) : [];
  const productContent = purpose === 'product_content';
  const validKey = productContent ? key.indexOf('product/content/' + productId + '.') === 0 : key.indexOf(type + '/' + id + '.') === 0;
  if ((!productContent && !['work', 'product'].includes(type)) || (productContent && (!/^[a-f0-9-]+$/i.test(productId) || !Number.isInteger(priceCents) || priceCents < 1)) || !validKey || !uploadId || !title || !parts.length || parts.some((p,i)=>p.partNumber!==i+1||!p.etag)) return json({ error: 'invalid completion' }, 400);
  const upload = env.BUCKET.resumeMultipartUpload(key, uploadId);
  await upload.complete(parts);
  try {
    if (productContent) await env.DB.prepare('INSERT INTO product_assets (item_id, price_cents, content_key, content_type, content_name, created_at) VALUES (?, ?, ?, ?, ?, ?)').bind(productId, priceCents, key, contentType, filename, new Date().toISOString()).run();
    else await env.DB.prepare('INSERT INTO portfolio_items (id, type, title, media_key, media_type, created_at) VALUES (?, ?, ?, ?, ?, ?)').bind(id, type, title, key, contentType, new Date().toISOString()).run();
  } catch (error) {
    await env.BUCKET.delete(key);
    throw error;
  }
  return json({ id, type, title, media_key: key, media_type: contentType }, 201);
}

async function downloadProduct(request, env, itemId) {
  const buyerId = request.headers.get('oai-authenticated-user-id') || '';
  const owner = ownerEmail(request) === OWNER_EMAIL;
  if (!buyerId && !owner) return Response.redirect(new URL('/signin-with-chatgpt?return_to='+encodeURIComponent('/#products'), request.url), 302);
  const row = await env.DB.prepare("SELECT a.content_key, a.content_type, a.content_name, q.status FROM product_assets a LEFT JOIN product_purchases q ON q.item_id = a.item_id AND q.buyer_id = ? WHERE a.item_id = ?").bind(buyerId, itemId).first();
  if (!row) return new Response('Not found', { status: 404 });
  if (!owner && row.status !== 'paid') return json({ error: 'purchase required' }, 403);
  const object = await env.BUCKET.get(row.content_key);
  if (!object) return new Response('Not found', { status: 404 });
  const safeName = String(row.content_name || 'download').replace(/["\\\r\n]/g, '_');
  return new Response(object.body, { headers: { 'content-type': row.content_type || 'application/octet-stream', 'content-length': String(object.size), 'content-disposition': 'attachment; filename="'+safeName+'"', 'cache-control': 'private, no-store' } });
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
      if (url.pathname === '/api/products/poster' && request.method === 'POST') return uploadProductPoster(request, env);
      if (url.pathname === '/api/products/content' && request.method === 'POST') return uploadProductContent(request, env);
      if (url.pathname === '/api/uploads/start' && request.method === 'POST') return startMultipart(request, env);
      if (url.pathname === '/api/uploads/part' && request.method === 'PUT') return uploadMultipartPart(request, env);
      if (url.pathname === '/api/uploads/complete' && request.method === 'POST') return completeMultipart(request, env);
      const productDownload = url.pathname.match(/^\/api\/products\/([^/]+)\/download$/);
      if (productDownload && request.method === 'GET') return downloadProduct(request, env, decodeURIComponent(productDownload[1]));
      if (url.pathname.startsWith('/media/') && (request.method === 'GET' || request.method === 'HEAD')) return media(decodeURIComponent(url.pathname.slice(7)), env, request);
      if (request.method === 'GET') return new Response(html, { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-cache', 'content-security-policy': "default-src 'self' https: data: blob:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; frame-src https://player.mux.com; media-src 'self' https: blob:; img-src 'self' https: data: blob:; connect-src 'self' https:;" } });
      return new Response('Method not allowed', { status: 405 });
    } catch (error) {
      return json({ error: 'request failed' }, 500);
    }
  }
};

