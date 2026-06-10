// sections2.jsx — DesignSystem / Experience / Contact / Footer

/* ─────────────────────────── Design System ─────────────────────────── */

const DS_COLORS = [
  { name:"primary/300",  v:"#43BFFF" },
  { name:"primary/500",  v:"#208BFF" },
  { name:"primary/700",  v:"#0B5BD1" },
  { name:"accent/violet",v:"#7B5BFF" },
  { name:"success/300",  v:"#4BD385" },
  { name:"success/500",  v:"#00B64A" },
  { name:"warning/500",  v:"#F5A524" },
  { name:"danger/500",   v:"#E5484D" },
  { name:"ink/300",      v:"#C4C4C4" },
  { name:"ink/500",      v:"#6B6B6B" },
  { name:"ink/900",      v:"#0A0A0A" },
  { name:"surface/000",  v:"#FFFFFF" },
];

const DS_TYPE = [
  { l:"Display / 64", n:"Hero", v:"AI Product Designer", style:{fontSize:48,fontWeight:500,letterSpacing:"-0.03em",lineHeight:1} },
  { l:"H1 / 40",      n:"Title",v:"Designing Future Interfaces", style:{fontSize:32,fontWeight:500,letterSpacing:"-0.02em"} },
  { l:"H2 / 28",      n:"Section",v:"Featured Projects", style:{fontSize:22,fontWeight:500,letterSpacing:"-0.015em"} },
  { l:"Body / 16",    n:"Paragraph",v:"用产品思维 + AI 工具链，构建可信赖的体验。", style:{fontSize:15,lineHeight:1.55,color:"var(--mute)"} },
  { l:"Mono / 12",    n:"Caption",v:"// design tokens v3.2.0", style:{fontFamily:"var(--font-mono)",fontSize:12,letterSpacing:".04em",color:"var(--mute)"} },
];

const DS_TOKENS = [
  { name:"Primary",      v:["#208BFF","#43BFFF"], note:"#208BFF → #43BFFF" },
  { name:"Success",      v:["#00B64A","#4BD385"], note:"#00B64A → #4BD385" },
  { name:"Background",   v:"#F5F7FB", note:"#F5F7FB" },
  { name:"Text Primary", v:"#0A0F1E", note:"#0A0F1E" },
  { name:"Warning",      v:"#FF6B35", note:"#FF6B35" },
];

function DesignSystem() {
  return (
    <section id="system">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span> 04 · Design System</div>
            <h2 className="h-1 ds-title" style={{marginTop:18,maxWidth:"18ch"}}>
              Token-Based System<span style={{color:"var(--accent)"}}>.</span>
            </h2>
          </div>
          <p className="body">
            系统化的设计语言，从 Token 到组件，确保跨产品线的一致性与可扩展性。
          </p>
        </div>

        <div className="ds-grid3">
          {/* Color Tokens */}
          <div className="ds-tile">
            <div className="ds-tile-h">
              <span className="ds-tile-t">Color Tokens</span>
              <span className="ds-tile-v mono">/ 16 tokens</span>
            </div>
            <div className="ds-tokens-list">
              {DS_TOKENS.map(t => (
                <div className="dst-row" key={t.name}>
                  <span
                    className="dst-chip"
                    style={{
                      background: Array.isArray(t.v)
                        ? `linear-gradient(135deg, ${t.v[0]}, ${t.v[1]})`
                        : t.v,
                    }}
                  ></span>
                  <span className="dst-meta">
                    <span className="dst-name">{t.name}</span>
                    <span className="dst-val mono">{t.note}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div className="ds-tile">
            <div className="ds-tile-h">
              <span className="ds-tile-t">Typography</span>
              <span className="ds-tile-v mono">/ Syne + Geist</span>
            </div>
            <div className="dst-type">
              <div className="dt-row">
                <div className="dt-meta mono">Heading <span className="sep">/</span> 48px <span className="sep">/</span> 800</div>
                <div className="dt-sample dt-heading">Design</div>
              </div>
              <div className="dt-row">
                <div className="dt-meta mono">Title <span className="sep">/</span> 24px <span className="sep">/</span> 700</div>
                <div className="dt-sample dt-title">AI Workflow</div>
              </div>
              <div className="dt-row">
                <div className="dt-meta mono">Body <span className="sep">/</span> 16px <span className="sep">/</span> 400</div>
                <div className="dt-sample dt-body">Building future interfaces with AI-augmented design process.</div>
              </div>
              <div className="dt-row">
                <div className="dt-meta mono">Mono <span className="sep">/</span> 12px <span className="sep">/</span> Code</div>
                <div className="dt-sample dt-mono">--color-primary: <span style={{color:"var(--accent)"}}>#208BFF</span></div>
              </div>
            </div>
          </div>

          {/* Components */}
          <div className="ds-tile">
            <div className="ds-tile-h">
              <span className="ds-tile-t">Components</span>
              <span className="ds-tile-v mono">/ 240+ items</span>
            </div>
            <div className="dst-cmp">
              <div className="cmpx">
                <span className="cmpx-l">Buttons</span>
                <div className="cmpx-row">
                  <button className="dsbtn dsbtn-primary">Primary</button>
                  <button className="dsbtn dsbtn-ghost">Ghost</button>
                </div>
              </div>
              <div className="cmpx">
                <span className="cmpx-l">Tags</span>
                <div className="cmpx-row">
                  <span className="dstag">AI</span>
                  <span className="dstag">SaaS</span>
                  <span className="dstag solid">Design</span>
                </div>
              </div>
              <div className="cmpx">
                <span className="cmpx-l">Input</span>
                <div className="dsinput">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" style={{flexShrink:0,opacity:.5}}>
                    <circle cx="9" cy="9" r="5" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M13 13l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span>Search components…</span>
                </div>
              </div>
              <div className="cmpx">
                <span className="cmpx-l">Radius Tokens</span>
                <div className="cmpx-row">
                  <span className="dsradius" style={{borderRadius:6}}></span>
                  <span className="dsradius" style={{borderRadius:10}}></span>
                  <span className="dsradius" style={{borderRadius:14}}></span>
                  <span className="dsradius" style={{borderRadius:99}}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .ds-title{
          font-family:"Syne","Geist",sans-serif;
          font-weight:700;letter-spacing:-0.02em;
        }
        .ds-grid3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}
        @media(max-width:980px){.ds-grid3{grid-template-columns:1fr}}
        .ds-tile{
          background:var(--surface);
          border:1px solid var(--line);
          border-radius:var(--rad-lg);
          padding:28px;display:flex;flex-direction:column;gap:22px;
          transition:transform .35s cubic-bezier(.2,.7,.2,1), box-shadow .35s ease, border-color .35s ease;
          cursor:default;
        }
        .ds-tile:hover{
          transform:translateY(-6px);
          border-color:var(--line);
          box-shadow:0 40px 80px -24px rgba(15,40,90,.22);
        }
        .ds-tile-h{display:flex;align-items:baseline;justify-content:space-between;gap:10px;padding-bottom:4px}
        .ds-tile-t{font-size:18px;font-weight:600;letter-spacing:-0.015em;color:var(--ink)}
        .ds-tile-v{font-size:11.5px;color:var(--mute);letter-spacing:.02em}

        /* Color tokens */
        .ds-tokens-list{display:flex;flex-direction:column;gap:14px}
        .dst-row{display:flex;align-items:center;gap:14px}
        .dst-chip{
          width:38px;height:38px;border-radius:10px;flex-shrink:0;
          border:1px solid color-mix(in srgb, var(--ink) 6%, transparent);
          box-shadow:0 4px 12px -6px rgba(15,40,90,.18);
        }
        .dst-meta{display:flex;flex-direction:column;gap:2px;min-width:0}
        .dst-name{font-size:14.5px;color:var(--ink);font-weight:500;letter-spacing:-0.005em}
        .dst-val{font-size:11.5px;color:var(--mute);letter-spacing:.02em}

        /* Typography */
        .dst-type{display:flex;flex-direction:column;gap:18px}
        .dt-row{display:flex;flex-direction:column;gap:6px}
        .dt-meta{font-size:10.5px;color:var(--mute);letter-spacing:.04em}
        .dt-meta .sep{margin:0 4px;opacity:.5}
        .dt-sample{color:var(--ink);font-family:"Geist",sans-serif}
        .dt-heading{font-family:"Syne","Geist",sans-serif;font-size:34px;font-weight:800;letter-spacing:-0.025em;line-height:1.05}
        .dt-title{font-size:20px;font-weight:700;letter-spacing:-0.015em}
        .dt-body{font-size:14px;line-height:1.55;font-weight:400;color:var(--ink-2)}
        .dt-mono{font-family:var(--font-mono);font-size:12.5px;color:var(--ink-2);letter-spacing:.02em}

        /* Components */
        .dst-cmp{display:flex;flex-direction:column;gap:18px}
        .cmpx{display:flex;flex-direction:column;gap:8px}
        .cmpx-l{font-size:10.5px;color:var(--mute);letter-spacing:.04em;font-family:var(--font-mono);text-transform:uppercase}
        .cmpx-row{display:flex;gap:8px;flex-wrap:wrap;align-items:center}
        .dsbtn{
          font:inherit;font-size:12.5px;padding:7px 14px;border-radius:8px;cursor:default;
          border:0;letter-spacing:-0.005em;font-weight:500;
        }
        .dsbtn-primary{
          background:linear-gradient(135deg,#2066F0,#43BFFF);color:#fff;
          box-shadow:0 6px 16px -8px rgba(32,102,240,.55), inset 0 0 0 1px rgba(255,255,255,.2);
        }
        .dsbtn-ghost{
          background:transparent;color:var(--ink);
          box-shadow:inset 0 0 0 1px var(--ink);
        }
        .dstag{
          font-size:12px;padding:5px 11px;border-radius:999px;
          background:var(--accent-soft);color:var(--accent);font-weight:500;
        }
        .dstag.solid{background:var(--accent);color:#fff}
        .dsinput{
          display:flex;align-items:center;gap:8px;
          padding:10px 12px;border-radius:10px;
          background:var(--bg-soft);border:1px solid var(--line);
          font-size:13px;color:var(--mute);
        }
        .dsradius{
          width:32px;height:32px;display:block;
          background:linear-gradient(135deg,#2066F0,#43BFFF);
          box-shadow:0 6px 14px -6px rgba(32,102,240,.45);
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────────── Experience ─────────────────────────── */

const EXP = [
  {
    range:"2019.07 — 2026.05",
    duration:"6 yr 11 mo",
    co:"斗象科技 / Tophant",
    role:"Senior Visual Interaction Designer",
    bullets:[
      "负责公司多款 B 端安全产品（PRS、VMS、APIE）的 UX / UI 设计工作，深度参与从业务需求、产品策略、交互设计到 Design to Code 的完整产品工作流。",
      "在 AI Coding 工作模式下，将 AI 能力嵌入需求分析、用户研究、界面生成、Design System、前端协作与交付等多个关键节点，显著提升设计与研发协同效率。",
      "主导并持续完善公司组件库与 Design Token 体系建设，推动设计规范标准化与系统化，建立统一的中后台设计语言，提升产品一致性与可扩展性。",
    ],
    tags:["Design System","B2B SaaS","Design to Code","AI Workflow"],
  },
  {
    range:"2017.10 — 2019.07",
    duration:"1 yr 9 mo",
    co:"百度 / Baidu",
    role:"Visual Interaction Designer",
    bullets:[
      "负责百度内部 AI 平台与运营类产品的 UX / UI 设计，包括 AI 自动化评测平台、AI 标注平台等产品的体验设计与视觉输出。",
      "深度参与产品需求分析、用户流程梳理与设计落地，能够结合业务目标、用户行为与数据反馈持续优化产品体验。",
      "在项目推进过程中，与产品、研发及算法团队保持高效协作，推动复杂业务场景下的设计方案快速落地。",
      "具备较强的系统化设计能力与跨团队沟通能力，能够在高复杂度 B 端场景中平衡业务效率、产品体验与设计一致性。",
    ],
    tags:["UX Design","Component Library","Enterprise"],
  },
];

function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span> 05 · Experience</div>
            <h2 className="h-1" style={{marginTop:18,maxWidth:"18ch"}}>
              Work Experience<span style={{color:"var(--accent)"}}>.</span>
            </h2>
          </div>
          <p className="body">
            围绕 AI 平台与 B 端安全产品，持续推进从 UX / UI、Design System 到 Design to Code 的系统化设计落地。
          </p>
        </div>

        <div className="exp-list">
          {EXP.map(e => (
            <article className="exp-row" key={e.co}>
              <div className="exp-time">
                <div className="mono exp-range">{e.range}</div>
                <div className="exp-dur">{e.duration}</div>
              </div>
              <div className="exp-main">
                <div className="exp-co">{e.co}</div>
                <div className="exp-role">{e.role}</div>
                <ul className="exp-bullets">
                  {e.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
                <div className="exp-tags">
                  {e.tags.map(t => <span key={t} className="exp-tag">{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .exp-list{display:flex;flex-direction:column}
        .exp-row{
          display:grid;grid-template-columns:220px 1fr;gap:64px;
          padding:48px 0;border-top:1px solid var(--line);
        }
        .exp-row:last-child{border-bottom:1px solid var(--line)}
        @media(max-width:880px){.exp-row{grid-template-columns:1fr;gap:18px;padding:32px 0}}
        .exp-range{font-size:11.5px;color:var(--ink-2);letter-spacing:.06em}
        .exp-dur{font-size:11px;color:var(--mute);margin-top:4px;font-family:var(--font-mono)}
        .exp-co{font-size:22px;font-weight:500;letter-spacing:-0.015em}
        .exp-role{font-size:14px;color:var(--mute);margin-top:6px;font-family:var(--font-mono);letter-spacing:.02em}
        .exp-bullets{margin:18px 0 0;padding:0;list-style:none;display:flex;flex-direction:column;gap:8px}
        .exp-bullets li{font-size:15px;line-height:1.6;color:var(--ink-2);position:relative;padding-left:18px}
        .exp-bullets li::before{content:"";position:absolute;left:0;top:11px;width:8px;height:1px;background:var(--mute)}
        .exp-tags{display:flex;gap:6px;flex-wrap:wrap;margin-top:18px}
        .exp-tag{font-family:var(--font-mono);font-size:10.5px;padding:4px 8px;border-radius:6px;background:var(--bg-soft);color:var(--mute);border:1px solid var(--line-2)}
      `}</style>
    </section>
  );
}

/* ─────────────────────────── Contact ─────────────────────────── */

function Contact() {
  const [nudge, setNudge] = React.useState(false);
  const focusContactMethods = (e) => {
    e.preventDefault();
    setNudge(false);
    requestAnimationFrame(() => {
      setNudge(true);
      window.setTimeout(() => setNudge(false), 720);
    });
  };

  return (
    <section id="contact" className="contact-sec">
      <div className="contact-bg" aria-hidden="true">
        <div className="cbg-blob b1"></div>
        <div className="cbg-blob b2"></div>
        <div className="cbg-blob b3"></div>
        <div className="cbg-grid"></div>
      </div>
      <div className="wrap">
        <div className="contact-card">
          <div className="contact-left">
            <div className="eyebrow"><span className="dot"></span> 06 · Contact</div>
            <h2 className="h-display contact-title" style={{marginTop:24}}>
              Let’s Build<br/>With AI<span style={{color:"var(--accent)"}}>.</span>
            </h2>
            <p className="lead contact-lead" style={{marginTop:24}}>
              AI 正在改变产品构建方式，而设计师也在重新定义自己的角色。
              期待与你交流关于产品、设计与 AI 的更多可能。
            </p>
            <div className="contact-cta" style={{marginTop:32}}>
              <a className="btn btn-primary" href="#contact-methods" onPointerDown={(e) => window.fireButtonConfetti?.(e.currentTarget)} onClick={focusContactMethods}>
                欢迎联系 <span className="arrow">→</span>
              </a>
            </div>
          </div>

          <div id="contact-methods" className={"contact-right" + (nudge ? " is-nudging" : "")}>
            <ContactRow label="Email"   v="1281829923@qq.com" copy />
            <ContactRow label="Phone"   v="+86 135 1219 0354" copyValue="+8613512190354" copy />
            <ContactRow label="WeChat"  v="D_LWei" wechat />
          </div>
        </div>
      </div>

      <style>{`
        .contact-sec{position:relative;overflow:hidden}
        .contact-bg{
          position:absolute;inset:0;z-index:0;pointer-events:none;overflow:hidden;
        }
        .contact-bg .cbg-blob{
          position:absolute;border-radius:50%;filter:blur(90px);
          will-change:transform;
        }
        .contact-bg .b1{
          width:720px;height:720px;left:-200px;top:-220px;
          background:radial-gradient(circle at 30% 30%, #43BFFF, transparent 60%);
          opacity:.5;
        }
        .contact-bg .b2{
          width:660px;height:660px;right:-200px;top:60px;
          background:radial-gradient(circle at 60% 40%, #2066F0, transparent 60%);
          opacity:.32;
        }
        .contact-bg .b3{
          width:560px;height:560px;left:30%;bottom:-260px;
          background:radial-gradient(circle at 50% 50%, #7FB8FF, transparent 60%);
          opacity:.3;
        }
        .contact-bg .cbg-grid{
          position:absolute;inset:0;
          background-image:
            linear-gradient(to right, color-mix(in srgb, var(--ink) 5%, transparent) 1px, transparent 1px),
            linear-gradient(to bottom, color-mix(in srgb, var(--ink) 5%, transparent) 1px, transparent 1px);
          background-size:48px 48px;
          mask-image:radial-gradient(ellipse at 50% 50%, rgba(0,0,0,.5) 30%, transparent 80%);
        }
        [data-theme="dark"] .contact-bg .b1,
        [data-theme="dark"] .contact-bg .b2,
        [data-theme="dark"] .contact-bg .b3{opacity:.38}

        .contact-card{
          display:grid;grid-template-columns:minmax(0,1fr) minmax(360px,.82fr);gap:64px;align-items:center;
          padding:72px;border-radius:var(--rad-lg);
          background:color-mix(in srgb, var(--surface) 55%, transparent);
          border:1px solid rgba(255,255,255,.9);
          -webkit-backdrop-filter:blur(22px) saturate(180%);
          backdrop-filter:blur(22px) saturate(180%);
          box-shadow:
            0 1px 0 rgba(255,255,255,.6) inset,
            0 0 0 1px rgba(255,255,255,.18) inset,
            0 40px 80px -24px rgba(15,40,90,.22);
          position:relative;overflow:hidden;z-index:1;
        }
        [data-theme="dark"] .contact-card{
          background:rgba(20,20,20,.55);
          border-color:rgba(255,255,255,.08);
          box-shadow:
            0 1px 0 rgba(255,255,255,.06) inset,
            0 0 0 1px rgba(255,255,255,.05) inset,
            0 40px 80px -24px rgba(0,0,0,.7);
        }
        .contact-card::before{
          content:"";position:absolute;right:-160px;top:-160px;width:520px;height:520px;border-radius:50%;
          background:radial-gradient(circle, var(--accent-soft), transparent 70%);
          pointer-events:none;
        }
        .contact-left{max-width:720px;position:relative;z-index:1}
        .contact-title{
          font-size:clamp(44px, 4.9vw, 72px);
          line-height:.96;
          max-width:9ch;
        }
        .contact-lead{max-width:680px}
        .contact-cta{display:flex;flex-wrap:wrap;gap:12px}
        .contact-right{
          display:flex;flex-direction:column;border-top:1px solid var(--line);
          position:relative;z-index:1;width:100%;max-width:560px;justify-self:end;
        }
        .contact-right.is-nudging{
          animation:contactNudge .62s cubic-bezier(.25,.7,.2,1);
        }
        .contact-right.is-nudging::after{
          content:"";position:absolute;inset:-10px -14px;border-radius:16px;
          border:1px solid rgba(32,139,255,.28);
          box-shadow:0 0 0 6px rgba(32,139,255,.08);
          pointer-events:none;animation:contactNudgeGlow .62s ease forwards;
        }
        .c-row{
          display:grid;grid-template-columns:112px minmax(0,1fr) 20px;gap:18px;align-items:center;
          padding:22px 0;border-bottom:1px solid var(--line);transition:padding .2s ease;
          width:100%;background:transparent;border-left:0;border-right:0;border-top:0;
          text-align:left;font:inherit;color:inherit;cursor:pointer;
        }
        .c-row.wechat{cursor:default}
        .c-row:hover{padding-left:8px}
        .c-row .c-l{font-family:var(--font-mono);font-size:11px;letter-spacing:.08em;color:var(--mute);text-transform:uppercase}
        .c-row .c-v{font-size:15px;color:var(--ink);font-weight:500;letter-spacing:-0.005em}
        .c-row .c-arr{
          color:var(--mute);transition:transform .2s ease, color .2s ease;
          display:grid;place-items:center;width:20px;height:20px;
        }
        .c-row .c-arr svg{display:block;width:16px;height:16px;stroke:currentColor}
        .c-row:hover .c-arr{color:var(--accent);transform:translateX(4px)}
        @keyframes contactNudge{
          0%,100%{transform:translateX(0)}
          18%{transform:translateX(7px)}
          36%{transform:translateX(-5px)}
          54%{transform:translateX(3px)}
          72%{transform:translateX(-2px)}
        }
        @keyframes contactNudgeGlow{
          0%{opacity:0;transform:scale(.99)}
          20%{opacity:1;transform:scale(1)}
          100%{opacity:0;transform:scale(1.015)}
        }
        @media(max-width:1040px){
          .contact-card{grid-template-columns:1fr;gap:48px;padding:48px}
          .contact-title{font-size:clamp(40px, 12vw, 64px)}
          .contact-lead{max-width:none}
          .contact-right{width:100%;max-width:100%;justify-self:stretch}
          .c-row{grid-template-columns:96px minmax(0,1fr) 18px;gap:14px;padding:18px 0}
        }
        @media(max-width:640px){
          .contact-card{padding:32px}
          .c-row{grid-template-columns:82px minmax(0,1fr) 18px;gap:12px}
        }

        .qr-pop{
          position:absolute;right:0;bottom:calc(100% + 8px);
          background:var(--surface);border:0;border-radius:14px;
          padding:12px;box-shadow:var(--shadow-lg);width:184px;
          opacity:0;transform:translateY(8px);pointer-events:none;
          transition:opacity .25s ease, transform .25s ease;z-index:5;
        }
        .c-row.wechat:hover .qr-pop{opacity:1;transform:translateY(0)}
        .qr-img{
          display:block;width:160px;height:164px;object-fit:contain;
          border-radius:8px;background:#fff;
        }
        .qr-cap{font-size:11px;color:var(--mute);font-family:var(--font-mono);margin-top:8px;text-align:center}
      `}</style>
    </section>
  );
}

function copyText(value, label) {
  const done = () => {
    window.dispatchEvent(new CustomEvent("app-toast", {
      detail: {
        title: "复制成功",
        msg: `${label} 已复制到剪贴板`,
      }
    }));
  };
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(value).then(done).catch(() => fallbackCopy(value, done));
  } else {
    fallbackCopy(value, done);
  }
}

function fallbackCopy(value, done) {
  const ta = document.createElement("textarea");
  ta.value = value;
  ta.setAttribute("readonly", "");
  ta.style.position = "fixed";
  ta.style.left = "-9999px";
  document.body.appendChild(ta);
  ta.select();
  document.execCommand("copy");
  document.body.removeChild(ta);
  done();
}

function ContactRow({ label, v, href, wechat, copy, copyValue }) {
  const cls = "c-row" + (wechat ? " wechat" : "");
  const inner = (
    <>
      <span className="c-l">{label}</span>
      <span className="c-v">{v}</span>
      <span className="c-arr" aria-hidden="true">
        <ContactIcon name={wechat ? "qr" : copy ? "copy" : "arrow"} />
      </span>
      {wechat && (
        <div className="qr-pop" aria-hidden="true">
          <img className="qr-img" src="assets/wechat-qr.png" alt="" />
          <div className="qr-cap">扫码加微信 · {v}</div>
        </div>
      )}
    </>
  );
  if (wechat) return <div className={cls} style={{position:"relative"}}>{inner}</div>;
  if (copy) return <button className={cls} type="button" onPointerDown={(e) => window.fireButtonConfetti?.(e.currentTarget)} onClick={() => copyText(copyValue || v, label)}>{inner}</button>;
  return <a className={cls} href={href}>{inner}</a>;
}

function ContactIcon({ name }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  if (name === "copy") {
    return (
      <svg {...common}>
        <rect x="8" y="8" width="10" height="10" rx="1.8" />
        <path d="M6 14H5.8A1.8 1.8 0 0 1 4 12.2V5.8A1.8 1.8 0 0 1 5.8 4h6.4A1.8 1.8 0 0 1 14 5.8V6" />
      </svg>
    );
  }
  if (name === "qr") {
    return (
      <svg {...common}>
        <rect x="4" y="4" width="6" height="6" rx="1.4" />
        <rect x="14" y="4" width="6" height="6" rx="1.4" />
        <rect x="4" y="14" width="6" height="6" rx="1.4" />
        <path d="M14 14h2.5v2.5H14zM19.5 14v6M14 19.5h6" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M7 17L17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

/* ─────────────────────────── Footer ─────────────────────────── */

function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap ftr-inner">
        <div className="ftr-l">
          <div className="nav-logo" style={{fontSize:14}}>
            <span className="mark"><img src="assets/logo.png" alt="Liu Wei logo"/></span>
            <span>Liu Wei · AI Product Designer</span>
          </div>
          <div className="ftr-mono mono">© 2026 · Built with curiosity, AI, and a lot of refactors.</div>
        </div>
        <div className="ftr-r mono">
          <span>v3.2.0</span>
          <span className="dot-sep">·</span>
          <span>Last updated 2026.05</span>
          <span className="dot-sep">·</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
      <style>{`
        .ftr{padding:48px 0;border-top:1px solid var(--line)}
        .ftr-inner{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:24px}
        .ftr-l{display:flex;flex-direction:column;gap:10px}
        .ftr-mono{font-size:11px;color:var(--mute);letter-spacing:.04em}
        .ftr-r{display:flex;gap:10px;align-items:center;font-size:11px;color:var(--mute);letter-spacing:.04em}
        .ftr-r .dot-sep{opacity:.4}
        .ftr-r a:hover{color:var(--ink)}
      `}</style>
    </footer>
  );
}

window.DesignSystem = DesignSystem;
window.Experience = Experience;
window.Contact = Contact;
window.Footer = Footer;
