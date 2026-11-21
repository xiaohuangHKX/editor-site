import React from 'react';
import { createRoot } from 'react-dom/client';

const h = React.createElement;
const { useEffect, useState } = React;
const videoUrl = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_063509_7d167302-4fd4-480b-8260-18ab572333d4.mp4';

const pages = {
  platform: {
    index: '01',
    title: '让每一次网购少暴露一点',
    intro: 'securify 在授权范围内管理收货信息、联系方式与交易记录，帮助用户识别异常使用并及时处置。',
    items: [
      ['信息保险箱', '集中查看已授权保存的姓名、电话与地址。'],
      ['交易提醒', '登录设备、联系方式或交易状态异常时及时提醒。'],
      ['授权管理', '随时查看、撤回或删除保存的信息。'],
    ],
  },
  solutions: {
    index: '02',
    title: '覆盖购买前后的信息风险',
    intro: '从填写收货信息到完成交易，按最少必要原则减少敏感信息暴露。',
    items: [
      ['个人购物', '为常用地址与联系方式提供统一管理。'],
      ['家庭共享', '为家庭成员建立独立权限和风险提醒。'],
      ['商家协作', '帮助小型商家规范处理订单中的个人信息。'],
    ],
  },
  company: {
    index: '03',
    title: '隐私保护就是产品本身',
    intro: 'securify 目前由项目团队运营，正在准备正式公司主体与合规资质。我们不会虚构认证或合作机构。',
    items: [
      ['我们的目标', '让普通消费者也能清楚掌控自己的购物信息。'],
      ['透明原则', '说明收集目的、保存期限和删除方式。'],
      ['当前阶段', '网站处于产品验证期，正式运营信息上线前补齐。'],
    ],
  },
  support: {
    index: '04',
    title: '需要时，快速找到答案',
    intro: '查看账户、安全提醒、订阅和数据删除相关说明。',
    items: [
      ['使用文档', '注册、登录、开启保护与管理授权。'],
      ['账户安全', '修改密码、退出设备和开启双重验证。'],
      ['联系支持', '客服邮箱将在正式运营前公布。'],
    ],
  },
  privacy: { index: '06', title: '隐私政策', intro: '我们只处理提供服务所必需的信息，并为用户提供访问、更正、删除和撤回授权的入口。', items: [['处理范围', '姓名、电话、收货地址、订单标识与必要的交易状态；不保存银行卡密码。'], ['保存期限', '按服务需要保存；账户注销后在法律要求期限内删除或匿名化。'], ['你的权利', '可在账户中心导出、更正或申请删除个人信息。']] },
  terms: { index: '07', title: '服务条款', intro: '本页面为产品验证阶段条款草案，正式收费前将由合资格法律顾问审核并补充运营主体。', items: [['订阅服务', '按所选周期计费，续费前清晰展示金额。'], ['合理使用', '不得利用服务从事欺诈、攻击或侵犯他人隐私的行为。'], ['退款与终止', '正式收费规则将在支付接入前公布并由用户确认。']] },
};

const plans = [
  ['个人版', '¥19', '每月', ['1 个账户', '异常交易提醒', '地址与电话管理']],
  ['家庭版', '¥39', '每月', ['最多 5 位成员', '家庭安全看板', '优先风险提醒']],
  ['商家版', '¥199', '每月', ['最多 10 位员工', '订单信息权限', '操作审计记录']],
];

function Logo() {
  return h('svg', { viewBox: '0 0 256 256', className: 'h-5 w-5', 'aria-hidden': true },
    h('path', { fill: '#ffffff', d: 'M 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 128 L 64 128 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z M 128 64 L 128 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 Z M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 128 0 L 192 0 Z' })
  );
}

function Stat({ position, number, label, divider, align = '' }) {
  const line = h('span', { className: `hidden md:block h-px w-24 bg-white/40 ${divider}` });
  return h('div', { className: position },
    h('div', { className: `flex items-center gap-3 ${align}` },
      align ? line : null,
      h('strong', { className: 'text-4xl md:text-5xl font-medium tracking-tight' }, number),
      align ? null : line,
    ),
    h('p', { className: `text-xs md:text-sm text-white/70 mt-1 ${align ? 'text-right' : ''}` }, label),
  );
}

function App() {
  const [activePage, setActivePage] = useState(null);
  const [showForm, setShowForm] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('securify_demo_user') || 'null'));

  const closeOverlay = () => {
    setActivePage(null);
    setShowForm(null);
    setSubmitted(false);
  };

  useEffect(() => {
    const onKeyDown = (event) => event.key === 'Escape' && closeOverlay();
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const openPage = (page) => {
    setShowForm(null);
    setSubmitted(false);
    setActivePage(page);
  };

  const openForm = (mode = 'register') => {
    setActivePage(null);
    setSubmitted(false);
    setShowForm(mode);
  };

  const navLinks = ['platform', 'solutions', 'pricing', 'company', 'support'].map((item) =>
    h('button', { key: item, type: 'button', onClick: () => openPage(item), className: `text-sm px-5 py-2 rounded-full ${activePage === item ? 'text-white bg-white/10' : 'text-neutral-300 hover:text-white transition-colors'}` }, item)
  );

  const page = activePage && activePage !== 'pricing' ? pages[activePage] : null;

  const submitAuth = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nextUser = { email: data.get('email'), name: data.get('name') || 'securify 用户' };
    localStorage.setItem('securify_demo_user', JSON.stringify(nextUser));
    setUser(nextUser);
    setSubmitted(true);
  };

  return h('section', { className: 'relative h-screen w-full overflow-hidden bg-black' },
    h('video', { className: 'absolute inset-0 w-full h-full object-cover', autoPlay: true, loop: true, muted: true, playsInline: true, src: videoUrl, 'aria-hidden': true }),
    h('div', { className: 'absolute inset-0 bg-black/10', 'aria-hidden': true }),
    h('header', { className: 'absolute z-20 px-6 md:px-10 pt-6 top-0 left-0 right-0' },
      h('nav', { className: 'flex items-center justify-between gap-4', 'aria-label': 'primary navigation' },
        h('button', { type: 'button', onClick: closeOverlay, className: 'flex items-center gap-2 bg-neutral-900/90 backdrop-blur rounded-full pl-4 pr-6 py-3', 'aria-label': 'securify home' }, h(Logo), h('span', { className: 'text-white text-sm font-normal tracking-tight' }, 'securify')),
        h('div', { className: 'hidden md:flex items-center gap-1 bg-neutral-900/90 backdrop-blur rounded-full px-3 py-2' }, ...navLinks),
        h('div', { className: 'auth-actions' },
          h('button', { type: 'button', onClick: () => openForm('menu'), className: 'mobile-menu' }, '菜单'),
          !user && h('button', { type: 'button', onClick: () => openForm('login'), className: 'login-link' }, '登录'),
          h('button', { type: 'button', onClick: () => user ? openForm('account') : openForm('register'), className: 'bg-white text-black text-sm font-normal rounded-full px-6 py-3 hover:bg-neutral-200 transition-colors' }, user ? '账户中心' : '免费注册'),
        ),
      )
    ),
    h('main', { id: 'home', className: 'relative h-full w-full' },
      h('h1', { className: 'hero-title absolute text-white font-medium text-[14vw] md:text-[13vw] left-4 md:left-10 top-[18%]' }, 'protect'),
      h('h1', { className: 'hero-title absolute text-white font-medium text-[14vw] md:text-[13vw] right-4 md:right-10 top-[38%]' }, 'your'),
      h('h1', { className: 'hero-title absolute text-white font-medium text-[14vw] md:text-[13vw] left-[18%] md:left-[28%] top-[58%]' }, 'data'),
      h('p', { className: 'absolute left-6 md:left-10 top-[46%] max-w-[240px] text-[15px] leading-snug text-white/90' }, 'we can guarding your data with utmost care, empowering you with privacy everywhere'),
      h(Stat, { position: 'absolute right-6 md:right-24 top-[14%]', number: '+65k', label: 'startups use', divider: 'rotate-[20deg]', align: 'justify-end' }),
      h('div', { className: 'pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black' }),
      h(Stat, { position: 'absolute left-6 md:left-20 bottom-20 md:bottom-24 z-10', number: '+1.5b', label: 'gb data was protected', divider: 'rotate-[-20deg]' }),
      h(Stat, { position: 'absolute right-6 md:right-20 bottom-16 md:bottom-20 z-10', number: '+300k', label: 'downloads', divider: 'rotate-[-20deg]', align: 'justify-end' }),
      h('div', { className: 'legal-links' },
        h('button', { onClick: () => openPage('privacy') }, '隐私政策'),
        h('button', { onClick: () => openPage('terms') }, '服务条款'),
      ),
    ),
    (page || activePage === 'pricing' || showForm) && h('div', { className: 'overlay-shell', role: 'dialog', 'aria-modal': true, 'aria-label': showForm ? 'account' : (page?.title || 'pricing') },
      h('button', { type: 'button', className: 'overlay-backdrop', onClick: closeOverlay, 'aria-label': 'close panel' }),
      h('aside', { className: 'content-panel' },
        h('div', { className: 'panel-topline' },
          h('span', null, showForm ? '账户与订阅' : activePage === 'pricing' ? '05 / 价格' : `${page.index} / ${activePage}`),
          h('button', { type: 'button', onClick: closeOverlay, className: 'close-button', 'aria-label': 'close' }, '×'),
        ),
        showForm
          ? h('div', { className: 'panel-body auth-panel' },
              submitted
                ? h('div', { className: 'success-state' },
                    h('span', { className: 'success-mark' }, '✓'),
                    h('h2', null, '登录成功'),
                    h('p', null, '你现在可以选择套餐并进入账户中心。'),
                    h('button', { type: 'button', onClick: () => { setSubmitted(false); setShowForm('account'); }, className: 'form-submit' }, '进入账户中心'),
                  )
                : showForm === 'menu'
                ? h(React.Fragment, null,
                    h('h2', null, '浏览 securify'),
                    h('div', { className: 'mobile-page-list' }, ...['platform', 'solutions', 'pricing', 'company', 'support', 'privacy', 'terms'].map((item) => h('button', { key: item, onClick: () => openPage(item) }, item === 'platform' ? '产品平台' : item === 'solutions' ? '解决方案' : item === 'pricing' ? '价格' : item === 'company' ? '公司' : item === 'support' ? '文档与支持' : item === 'privacy' ? '隐私政策' : '服务条款'))),
                  )
                : showForm === 'account' && user
                ? h(React.Fragment, null,
                    h('h2', null, `你好，${user.name}`),
                    h('p', { className: 'panel-intro' }, `${user.email} · 当前为免费体验账户`),
                    h('div', { className: 'account-grid' }, h('article', null, h('span', null, '保护状态'), h('strong', null, '等待选择套餐')), h('article', null, h('span', null, '订单记录'), h('strong', null, '暂无订单')), h('article', null, h('span', null, '双重验证'), h('strong', null, '未开启'))),
                    h('button', { className: 'form-submit', onClick: () => { localStorage.removeItem('securify_demo_user'); setUser(null); closeOverlay(); } }, '退出登录'),
                  )
                : h(React.Fragment, null,
                    h('h2', null, showForm === 'login' ? '欢迎回来' : '开始保护网购信息'),
                    h('p', { className: 'panel-intro' }, '当前为产品演示环境，不会发送验证码或发起真实扣款。'),
                    h('form', { className: 'start-form', onSubmit: submitAuth },
                      showForm !== 'login' && h('label', null, h('span', null, '姓名'), h('input', { type: 'text', name: 'name', placeholder: '你的姓名', required: true, autoFocus: true })),
                      h('label', null, h('span', null, '邮箱'), h('input', { type: 'email', name: 'email', placeholder: 'you@example.com', required: true, autoFocus: showForm === 'login' })),
                      h('label', null, h('span', null, '密码'), h('input', { type: 'password', name: 'password', minLength: 8, placeholder: '至少 8 位', required: true })),
                      h('button', { type: 'submit', className: 'form-submit' }, showForm === 'login' ? '登录' : '创建账户'),
                      h('button', { type: 'button', className: 'switch-auth', onClick: () => openForm(showForm === 'login' ? 'register' : 'login') }, showForm === 'login' ? '没有账户？立即注册' : '已有账户？立即登录'),
                    ),
                  ),
            )
          : activePage === 'pricing'
          ? h('div', { className: 'panel-body pricing-body' },
              h('h2', null, '选择适合你的保护方案'),
              h('p', { className: 'panel-intro' }, '人民币按月订阅。正式支付将在取得运营主体和商户资质后开放。'),
              h('div', { className: 'pricing-grid' }, ...plans.map(([name, price, cycle, features], index) => h('article', { className: index === 1 ? 'featured-plan' : '', key: name }, h('span', null, name), h('strong', null, price), h('small', null, cycle), h('ul', null, ...features.map((item) => h('li', { key: item }, item))), h('button', { onClick: () => user ? openForm('account') : openForm('register') }, user ? '选择方案' : '登录后订阅')))),
            )
          : h('div', { className: 'panel-body' },
              h('h2', null, page.title),
              h('p', { className: 'panel-intro' }, page.intro),
              h('div', { className: 'panel-list' }, ...page.items.map(([title, copy], index) =>
                h('button', { type: 'button', key: title },
                  h('span', null, `0${index + 1}`),
                  h('strong', null, title),
                  h('p', null, copy),
                  h('b', { 'aria-hidden': true }, '↗'),
                )
              )),
            ),
      )
    )
  );
}

createRoot(document.getElementById('root')).render(h(App));
