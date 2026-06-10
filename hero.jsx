// hero.jsx — Nav + Hero (mouse glow + visual style switcher)

const { useEffect, useRef, useState } = React;

/* ─────────────────────────────── Navigation ─────────────────────────────── */

const NAV_ITEMS = [
{ id: "about", en: "About", zh: "关于" },
{ id: "projects", en: "Projects", zh: "项目" },
{ id: "workflow", en: "Workflow", zh: "工作流" },
{ id: "system", en: "System", zh: "设计系统" },
{ id: "experience", en: "Experience", zh: "经历" }];


function Nav({ active, onContact }) {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-logo" aria-label="返回顶部">
          <span className="mark"><img src="assets/logo.png" alt="Liu Wei logo" /></span>
          <span>Liu Wei<span style={{ color: "var(--mute)", fontWeight: 400 }}> &nbsp;/ AI Product Designer</span></span>
        </a>
        <nav className="nav-links" aria-label="主导航">
          {NAV_ITEMS.map((i) =>
          <a key={i.id} href={"#" + i.id} className={active === i.id ? "is-active" : ""}>
              {i.en}
            </a>
          )}
        </nav>
        <div className="nav-right">
          <a href="#contact" className="nav-cta" onPointerDown={(e) => window.fireButtonConfetti?.(e.currentTarget)} onClick={onContact}>
            Let's talk <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </header>);

}

/* ───────────────────────────────── Hero ─────────────────────────────────── */

function Hero({ visual = "aurora" }) {
  const stageRef = useRef(null);
  const [pos, setPos] = useState({ x: 0.6, y: 0.4, active: false });

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    let raf = 0,next = { x: 0.6, y: 0.4 };
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      next = { x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height };
      if (!raf) raf = requestAnimationFrame(() => {
        setPos((p) => ({ ...next, active: true }));
        raf = 0;
      });
    };
    const onLeave = () => setPos((p) => ({ ...p, active: false }));
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="top" className="hero" ref={stageRef}>
      <div className="hero-bg" aria-hidden="true">
        {visual === "aurora" && <HeroAurora pos={pos} />}
        {visual === "grid" && <HeroGrid pos={pos} />}
        {visual === "cards" && <HeroCards pos={pos} />}
        <div className="hero-noise" />
      </div>

      <div className="wrap hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><span className="dot"></span> AI Product Designer · 2026 · UI · UX / Shanghai</div>
          <h1 className="h-display hero-title" aria-label="AI Product Designer">
            <span>AI</span>
            <span>Product</span>
            <span className="hero-title-grad">Designer.</span>
          </h1>
          <p className="lead" style={{ marginTop: 44 }}>
            8 年产品设计经验，专注企业级 SaaS、Design System 与 AI 驱动设计。用产品思维与 AI 工具链，将模糊想法转化为可上线的清晰体验。
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#projects" onPointerDown={(e) => window.fireButtonConfetti?.(e.currentTarget)}>查看作品 <span className="arrow">→</span></a>
            <a className="btn btn-ghost" href="#contact" onPointerDown={(e) => window.fireButtonConfetti?.(e.currentTarget)}>联系我</a>
          </div>
          <div className="hero-meta">
            <Stat k="8+" v="Years of Product Design" />
            <Stat k="40+" v="Shipped Products" />
          </div>
        </div>
        <div className="hero-art"><HeroArt /></div>
      </div>

      <div className="hero-scroll mono" aria-hidden="true">
        <span className="line"></span> Scroll
      </div>

      <HeroStyles />
    </section>);

}

function Stat({ k, v }) {
  return (
    <div className="stat">
      <div className="stat-k">{k}</div>
      <div className="stat-v">{v}</div>
    </div>);

}

/* ─────────────────────── Visual A · Aurora (gradient blob) ─────────────── */

function HeroAurora({ pos }) {
  const x = `${(pos.x * 100).toFixed(1)}%`;
  const y = `${(pos.y * 100).toFixed(1)}%`;
  return (
    <div className="bg-aurora" style={{ "--mx": x, "--my": y }}>
      <div className="blob b1" />
      <div className="blob b2" />
      <div className="blob b3" />
      <div className="spotlight" />
    </div>);

}

/* ─────────────────────── Visual B · Grid (spotlight reveal) ─────────────── */

function HeroGrid({ pos }) {
  const x = `${(pos.x * 100).toFixed(1)}%`;
  const y = `${(pos.y * 100).toFixed(1)}%`;
  return (
    <div className="bg-grid" style={{ "--mx": x, "--my": y }}>
      <div className="grid-layer" />
      <div className="grid-spot" />
      <div className="grid-dot d1" />
      <div className="grid-dot d2" />
      <div className="grid-dot d3" />
    </div>);

}

/* ─────────────────────── Visual C · Cards (stacked UI mock) ─────────────── */

function HeroCards({ pos }) {
  const dx = (pos.x - 0.5) * 24;
  const dy = (pos.y - 0.5) * 16;
  return (
    <div className="bg-cards">
      <div className="card-stack" style={{ transform: `translate3d(${dx * -0.4}px, ${dy * -0.4}px, 0)` }}>
        <div className="mockcard c1">
          <div className="mc-row">
            <div className="mc-chip"></div>
            <div className="mc-chip alt"></div>
          </div>
          <div className="mc-bar w70"></div>
          <div className="mc-bar w40"></div>
          <div className="mc-chart">
            <div className="bar" style={{ height: "42%" }}></div>
            <div className="bar" style={{ height: "68%" }}></div>
            <div className="bar accent" style={{ height: "84%" }}></div>
            <div className="bar" style={{ height: "54%" }}></div>
            <div className="bar" style={{ height: "72%" }}></div>
          </div>
        </div>
        <div className="mockcard c2" style={{ transform: `translate3d(${dx * 0.6}px, ${dy * 0.6}px, 0)` }}>
          <div className="mc-row"><div className="mc-dot"></div><div className="mc-bar w50"></div></div>
          <div className="mc-bar w80"></div>
          <div className="mc-bar w60"></div>
          <div className="mc-tag">AI generated · UI</div>
        </div>
        <div className="mockcard c3" style={{ transform: `translate3d(${dx * 0.3}px, ${dy * 0.3}px, 0)` }}>
          <div className="mc-kpi">98.4%</div>
          <div className="mc-bar w50"></div>
        </div>
      </div>
    </div>);

}

/* ─────────────────────────────── Hero styles ─────────────────────────────── */

function HeroStyles() {
  return (
    <style>{`
      .hero{
        position:relative; border-top:0;
        padding:calc(var(--nav-h) + 64px) 0 96px;
        min-height:min(900px, 96vh);
        overflow:hidden;
      }
      .hero-bg{position:absolute;inset:0;z-index:0;pointer-events:none;overflow:hidden}
      .hero-noise{
        position:absolute;inset:0;opacity:.45;mix-blend-mode:overlay;pointer-events:none;
        background-image:radial-gradient(rgba(0,0,0,.06) 1px, transparent 1px);
        background-size:3px 3px;
      }
      [data-theme="dark"] .hero-noise{opacity:.25;background-image:radial-gradient(rgba(255,255,255,.05) 1px, transparent 1px)}

      .hero-grid{
        position:relative;z-index:1;
        display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);
        gap:64px;align-items:center;min-height:560px;
      }
      .hero-copy{max-width:640px}
      .hero-title{
        margin-top:32px;
        font-family:"Syne","Geist",sans-serif;
        font-size:clamp(62px, 7.4vw, 104px);
        line-height:.88;
        font-weight:700;
        letter-spacing:-0.03em;
      }
      .hero-title span{display:block}
      .hero-title-grad{
        width:max-content;
        max-width:100%;
        background:linear-gradient(105deg,#2066F0 0%,#43BFFF 48%,#7D5CFF 100%);
        -webkit-background-clip:text;
        background-clip:text;
        color:transparent;
      }
      .hero-cta{display:flex;flex-wrap:wrap;gap:14px;margin-top:36px}
      .hero-meta{
        display:flex;gap:48px;margin-top:64px;padding-top:24px;
        border-top:1px solid var(--line);max-width:560px;flex-wrap:wrap;
      }
      .stat{display:flex;flex-direction:column;gap:6px}
      .stat-k{font-size:24px;font-weight:500;letter-spacing:-0.02em}
      .stat-v{font-family:var(--font-mono);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--mute)}

      .hero-art{height:520px}
      @media (max-width: 980px){
        .hero-grid{grid-template-columns:1fr;gap:32px}
        .hero-art{display:none}
      }
      @media (max-width: 640px){
        .hero-title{font-size:clamp(54px, 18vw, 78px);line-height:.9}
      }

      .hero-scroll{
        position:absolute;left:32px;bottom:32px;z-index:2;
        font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--mute);
        display:flex;align-items:center;gap:10px;
      }
      .hero-scroll .line{
        display:block;width:36px;height:1px;background:var(--mute);position:relative;overflow:hidden;
      }
      .hero-scroll .line::after{
        content:"";position:absolute;left:-36px;top:0;width:36px;height:1px;background:var(--ink);
        animation:scrollLine 2.2s ease-in-out infinite;
      }
      @keyframes scrollLine{0%{transform:translateX(0)}100%{transform:translateX(72px)}}

      /* ── Aurora ───────────────────────────────── */
      .bg-aurora{position:absolute;inset:0}
      .bg-aurora .blob{
        position:absolute;border-radius:50%;filter:blur(80px);opacity:.55;
        transition:transform 1.6s cubic-bezier(.2,.7,.2,1);
        will-change:transform;
      }
      .bg-aurora .b1{
        width:680px;height:680px;left:-180px;top:-160px;
        background:radial-gradient(circle at 30% 30%, #43BFFF, transparent 60%);
        transform:translate3d(calc((var(--mx) - 50%) * 0.4), calc((var(--my) - 50%) * 0.4), 0);
      }
      .bg-aurora .b2{
        width:620px;height:620px;right:-160px;top:80px;
        background:radial-gradient(circle at 60% 40%, #2066F0, transparent 60%);
        opacity:.4;
      }
      .bg-aurora .b3{
        width:480px;height:480px;left:40%;bottom:-200px;
        background:radial-gradient(circle at 50% 50%, #7FB8FF, transparent 60%);
        opacity:.35;
      }
      .bg-aurora .spotlight{
        position:absolute;inset:0;
        background:radial-gradient(380px circle at var(--mx) var(--my),
          color-mix(in srgb, var(--accent) 22%, transparent), transparent 70%);
        transition:background .25s ease-out;
      }
      [data-theme="dark"] .bg-aurora .blob{opacity:.35}
      [data-theme="dark"] .bg-aurora .b1{background:radial-gradient(circle at 30% 30%, #4FA3FF, transparent 60%)}

      /* ── Grid ─────────────────────────────────── */
      .bg-grid{position:absolute;inset:0}
      .bg-grid .grid-layer{
        position:absolute;inset:-1px;
        background-image:
          linear-gradient(to right, color-mix(in srgb, var(--ink) 7%, transparent) 1px, transparent 1px),
          linear-gradient(to bottom, color-mix(in srgb, var(--ink) 7%, transparent) 1px, transparent 1px);
        background-size:56px 56px;
        mask-image:radial-gradient(circle at 50% 40%, #000 30%, transparent 80%);
      }
      .bg-grid .grid-spot{
        position:absolute;inset:0;pointer-events:none;
        background:
          radial-gradient(220px circle at var(--mx) var(--my),
            color-mix(in srgb, var(--accent) 30%, transparent), transparent 60%),
          radial-gradient(520px circle at var(--mx) var(--my),
            color-mix(in srgb, var(--accent) 8%, transparent), transparent 65%);
        transition:background .15s ease-out;
        mix-blend-mode:plus-lighter;
      }
      .bg-grid .grid-dot{position:absolute;width:6px;height:6px;border-radius:50%;background:var(--accent);box-shadow:0 0 24px var(--accent)}
      .bg-grid .d1{left:18%;top:34%}
      .bg-grid .d2{right:22%;top:62%;opacity:.6}
      .bg-grid .d3{left:62%;top:24%;width:4px;height:4px;opacity:.5}

      /* ── Cards ────────────────────────────────── */
      .bg-cards{position:absolute;inset:0;display:flex;align-items:center;justify-content:flex-end;padding:0 5vw}
      .card-stack{position:relative;width:560px;height:520px;max-width:60vw;transition:transform .6s cubic-bezier(.2,.7,.2,1)}
      .mockcard{
        position:absolute;background:var(--surface);
        border:1px solid var(--line);border-radius:18px;
        box-shadow:var(--shadow-lg);padding:22px;
        transition:transform .6s cubic-bezier(.2,.7,.2,1);
      }
      .mockcard.c1{width:340px;height:260px;right:80px;top:30px;z-index:3}
      .mockcard.c2{width:280px;height:180px;left:0;top:180px;z-index:2}
      .mockcard.c3{width:200px;height:130px;right:0;bottom:30px;z-index:4}
      .mc-row{display:flex;gap:8px;align-items:center;margin-bottom:14px}
      .mc-chip{width:48px;height:18px;border-radius:6px;background:var(--bg-soft)}
      .mc-chip.alt{background:linear-gradient(135deg,#2066F0,#43BFFF);width:64px;opacity:.9}
      .mc-dot{width:10px;height:10px;border-radius:50%;background:var(--accent)}
      .mc-bar{height:8px;background:var(--bg-soft);border-radius:4px;margin-bottom:10px}
      .mc-bar.w80{width:80%}.mc-bar.w70{width:70%}.mc-bar.w60{width:60%}.mc-bar.w50{width:50%}.mc-bar.w40{width:40%}
      .mc-chart{display:flex;gap:8px;align-items:flex-end;height:88px;margin-top:16px}
      .mc-chart .bar{flex:1;background:var(--bg-soft);border-radius:4px;transition:height .4s ease}
      .mc-chart .bar.accent{background:linear-gradient(180deg,#43BFFF,#2066F0)}
      .mc-tag{
        margin-top:14px;display:inline-block;
        font-family:var(--font-mono);font-size:11px;
        padding:5px 10px;border-radius:999px;
        background:var(--accent-soft);color:var(--accent);
      }
      .mc-kpi{font-size:36px;font-weight:500;letter-spacing:-0.025em;margin-bottom:14px}

      @media (max-width: 980px){
        .bg-cards{display:none}
      }
    `}</style>);

}

window.Nav = Nav;
window.Hero = Hero;

/* ─────────────────────────── Hero right · Artwork ─────────────────────── */

function HeroArt() {
  const [toggles, setToggles] = useState({ email: true, threshold: true, marketing: false });
  const [savedFlag, setSavedFlag] = useState(0);
  const [dirty, setDirty] = useState(false);
  const initial = useRef({ email: true, threshold: true, marketing: false });

  const flip = (k) => {
    setToggles(t => {
      const next = { ...t, [k]: !t[k] };
      setDirty(JSON.stringify(next) !== JSON.stringify(initial.current));
      return next;
    });
  };

  const onCancel = (e) => {
    e.preventDefault();
    setToggles(initial.current);
    setDirty(false);
  };

  const onSave = (e) => {
    e.preventDefault();
    initial.current = { ...toggles };
    setDirty(false);
    window.dispatchEvent(new CustomEvent("app-toast", {
      detail: {
        title: "Settings saved",
        msg: "Notification preferences updated · synced to Atlas account.",
        tone: "success",
      }
    }));
    setSavedFlag(f => f + 1);
  };

  return (
    <div className="hart">
      {/* prompt chip */}
      <div className="hart-prompt">
        <span className="hart-spark">✦</span>
        <span className="hart-prompt-t">Design a settings panel for Atlas…</span>
        <span className="hart-cur"></span>
      </div>

      {/* connector */}
      <svg className="hart-wire" viewBox="0 0 200 80" preserveAspectRatio="none" aria-hidden="true">
        <path d="M30 4 C 30 40, 110 24, 110 76" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" fill="none" opacity=".5" />
      </svg>

      {/* main generated UI card */}
      <div className="hart-card">
        <div className="hart-card-head">
          <div className="hart-traffic">
            <span></span><span></span><span></span>
          </div>
          <div className="hart-badge mono">
            <span className="hart-badge-dot"></span> AI generated · v3
          </div>
        </div>

        <div className="hart-card-body">
          <div className="hart-title">Notification settings</div>
          <div className="hart-sub mono">Atlas · Account preferences</div>

          <div className="hart-rows">
            <button type="button" className="hart-row" onClick={() => flip("email")} aria-pressed={toggles.email}>
              <div>
                <div className="hart-rt">Email digests</div>
                <div className="hart-rd">Weekly summary, every Monday</div>
              </div>
              <div className={"hart-toggle" + (toggles.email ? " on" : "")}><span></span></div>
            </button>
            <button type="button" className="hart-row" onClick={() => flip("threshold")} aria-pressed={toggles.threshold}>
              <div>
                <div className="hart-rt">Threshold alerts</div>
                <div className="hart-rd">Push & email · critical only</div>
              </div>
              <div className={"hart-toggle" + (toggles.threshold ? " on" : "")}><span></span></div>
            </button>
            <button type="button" className="hart-row" onClick={() => flip("marketing")} aria-pressed={toggles.marketing}>
              <div>
                <div className="hart-rt">Marketing</div>
                <div className="hart-rd">Product updates, tips</div>
              </div>
              <div className={"hart-toggle" + (toggles.marketing ? " on" : "")}><span></span></div>
            </button>
          </div>

          <div className="hart-foot">
            <button type="button" className="hart-bg" onClick={onCancel} disabled={!dirty}>Cancel</button>
            <button type="button" className="hart-bp" onClick={onSave}>
              {dirty ? "Save changes" : (savedFlag ? "Saved ✓" : "Save changes")} <span>→</span>
            </button>
          </div>
        </div>
      </div>

      {/* floating token panel */}
      <div className="hart-tokens">
        <div className="hart-tk-head">
          <span className="mono">tokens.json</span>
          <span className="hart-tk-dot"></span>
        </div>
        <div className="hart-tk-row"><span className="sw" style={{ background: "#208BFF" }}></span><span className="mono">primary/500</span></div>
        <div className="hart-tk-row"><span className="sw" style={{ background: "#0B5BD1" }}></span><span className="mono">primary/700</span></div>
        <div className="hart-tk-row"><span className="sw" style={{ background: "#00B64A" }}></span><span className="mono">success/500</span></div>
        <div className="hart-tk-row"><span className="sw" style={{ background: "#F5A524" }}></span><span className="mono">warn/500</span></div>
        <div className="hart-tk-row"><span className="sw" style={{ background: "#0A0A0A" }}></span><span className="mono">ink/900</span></div>
      </div>

      {/* mini chips */}
      <div className="hart-mini hart-mini-coding">
        <span className="hart-mini-dot orange pulse"></span>
        <span>AI Coding</span>
      </div>
      <div className="hart-mini hart-mini-1">
        <span className="hart-mini-dot pulse"></span>
        <span>Design to Code</span>
      </div>
      <div className="hart-mini hart-mini-2">
        <span className="hart-mini-dot green pulse"></span>
        <span>Design System</span>
      </div>

      <style>{`
        .hart{
          position:relative;width:100%;height:100%;min-height:520px;
          transform:scale(.95);transform-origin:center right;
        }
        .hart > *{will-change:transform}

        /* prompt chip top-left */
        .hart-prompt{
          position:absolute;top:8px;left:64px;z-index:5;
          display:flex;align-items:center;gap:8px;
          padding:10px 14px;border-radius:999px;
          transform:rotate(-2deg);
          background:color-mix(in srgb, var(--surface) 55%, transparent);
          border:1px solid rgba(255,255,255,.9);
          -webkit-backdrop-filter:blur(18px) saturate(160%);
          backdrop-filter:blur(18px) saturate(160%);
          box-shadow:
            0 1px 0 rgba(255,255,255,.6) inset,
            0 0 0 1px rgba(255,255,255,.18) inset,
            0 20px 40px -16px rgba(15,40,90,.18);
          font-size:13px;color:var(--ink-2);
          animation:hartFloat 7s ease-in-out infinite;
        }
        .hart-spark{color:var(--accent);font-size:12px}
        .hart-prompt-t{font-family:var(--font-mono);letter-spacing:-.005em}
        .hart-cur{display:inline-block;width:1.5px;height:13px;background:var(--accent);margin-left:-2px;animation:hartBlink 1.1s steps(2) infinite}
        @keyframes hartBlink{0%,50%{opacity:1}51%,100%{opacity:0}}

        /* wire connector */
        .hart-wire{
          position:absolute;top:42px;left:88px;width:220px;height:120px;z-index:1;
          color:var(--accent);
        }

        /* main card */
        .hart-card{
          position:absolute;top:108px;left:36px;width:340px;
          transform:rotate(-1.2deg);
          background:color-mix(in srgb, var(--surface) 55%, transparent);
          border:1px solid rgba(255,255,255,.9);
          -webkit-backdrop-filter:blur(22px) saturate(180%);
          backdrop-filter:blur(22px) saturate(180%);
          border-radius:20px;
          box-shadow:
            0 1px 0 rgba(255,255,255,.55) inset,
            0 0 0 1px rgba(255,255,255,.18) inset,
            0 30px 60px -24px rgba(15,40,90,.28),
            0 60px 120px -40px rgba(32,102,240,.18);
          overflow:hidden;z-index:2;
          animation:hartFloatA 9s ease-in-out infinite;
        }
        .hart-card::before{
          content:"";position:absolute;left:0;right:0;top:0;height:1px;
          background:linear-gradient(90deg, transparent, rgba(255,255,255,.9), transparent);
          opacity:.7;pointer-events:none;
        }
        .hart-card::after{
          content:"";position:absolute;left:-30%;top:-30%;width:60%;height:60%;
          background:radial-gradient(circle, rgba(67,191,255,.35), transparent 65%);
          filter:blur(20px);opacity:.6;pointer-events:none;z-index:0;
        }
        .hart-card-head{
          position:relative;z-index:1;
          display:flex;align-items:center;justify-content:space-between;
          padding:12px 14px;
          border-bottom:1px solid color-mix(in srgb, var(--ink) 6%, transparent);
          background:linear-gradient(180deg, rgba(255,255,255,.35), transparent);
        }
        .hart-traffic{display:flex;gap:5px}
        .hart-traffic span{width:9px;height:9px;border-radius:50%;background:rgba(0,0,0,.12);box-shadow:inset 0 0 0 .5px rgba(0,0,0,.04)}
        .hart-traffic span:first-child{background:#FF5F57}
        .hart-traffic span:nth-child(2){background:#FEBC2E}
        .hart-traffic span:nth-child(3){background:#28C840}
        .hart-badge{
          display:inline-flex;align-items:center;gap:6px;
          font-size:10.5px;letter-spacing:.04em;
          padding:4px 8px;border-radius:6px;
          background:rgba(32,139,255,.14);
          color:var(--accent);
          border:1px solid rgba(32,139,255,.2);
        }
        .hart-badge-dot{
          position:relative;
          width:6px;height:6px;border-radius:50%;
          background:var(--accent);box-shadow:0 0 8px var(--accent);
        }
        .hart-badge-dot::after{
          content:"";position:absolute;inset:0;border-radius:50%;
          background:var(--accent);
          animation:hartDotPulse 1.8s ease-out infinite;
        }

        .hart-card-body{padding:20px;position:relative;z-index:1}
        .hart-title{font-size:17px;font-weight:500;letter-spacing:-0.015em;color:var(--ink)}
        .hart-sub{font-size:11px;color:var(--mute);margin-top:3px;letter-spacing:.02em}

        .hart-rows{margin-top:18px;display:flex;flex-direction:column;gap:0;
          border:1px solid color-mix(in srgb, var(--ink) 6%, transparent);
          border-radius:14px;overflow:hidden;
          background:color-mix(in srgb, var(--surface) 50%, transparent);
          -webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);
        }
        .hart-row{
          display:flex;align-items:center;justify-content:space-between;
          padding:12px 14px;gap:14px;
          border-bottom:1px solid color-mix(in srgb, var(--ink) 5%, transparent);
          background:transparent;border-left:0;border-right:0;border-top:0;
          width:100%;text-align:left;font:inherit;color:inherit;cursor:pointer;
          transition:background .2s ease;
        }
        .hart-row:hover{background:rgba(32,139,255,.04)}
        .hart-row:focus-visible{outline:2px solid var(--accent);outline-offset:-2px;border-radius:8px}
        .hart-row:last-child{border-bottom:0}
        .hart-rt{font-size:13px;color:var(--ink);font-weight:500}
        .hart-rd{font-size:11.5px;color:var(--mute);margin-top:2px}
        .hart-toggle{
          width:34px;height:20px;border-radius:999px;
          background:rgba(10,10,10,.08);
          border:1px solid rgba(10,10,10,.06);position:relative;flex-shrink:0;
          transition:background .3s ease, border-color .3s ease;
        }
        .hart-toggle span{
          position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
          background:rgba(255,255,255,.95);
          box-shadow:0 1px 2px rgba(0,0,0,.18), 0 0 0 .5px rgba(0,0,0,.06);
          transition:left .3s cubic-bezier(.6,.2,.2,1);
        }
        .hart-toggle.on{background:var(--accent);border-color:transparent;box-shadow:0 0 0 1px rgba(32,139,255,.2), 0 6px 16px -6px rgba(32,139,255,.5)}
        .hart-toggle.on span{left:16px}

        .hart-foot{display:flex;justify-content:flex-end;gap:8px;margin-top:18px}
        .hart-bg{
          font:inherit;font-size:12px;color:var(--ink-2);
          padding:8px 14px;border-radius:8px;
          border:1px solid color-mix(in srgb, var(--ink) 10%, transparent);
          background:color-mix(in srgb, var(--surface) 50%, transparent);
          -webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);
          cursor:pointer;transition:background .2s, opacity .2s;
        }
        .hart-bg:hover:not(:disabled){background:color-mix(in srgb, var(--surface) 80%, transparent)}
        .hart-bg:disabled{opacity:.5;cursor:not-allowed}
        .hart-bp{cursor:pointer}
        .hart-bp:hover{filter:brightness(1.06)}
        .hart-bp:active{transform:translateY(1px)}
        .hart-bp{
          font:inherit;font-size:12px;color:#fff;
          padding:8px 14px;border-radius:8px;border:0;cursor:default;
          background:linear-gradient(135deg,#2066F0,#43BFFF);
          box-shadow:0 6px 16px -6px rgba(32,102,240,.5), inset 0 0 0 1px rgba(255,255,255,.18);
          display:inline-flex;align-items:center;gap:6px;
        }

        /* token panel */
        .hart-tokens{
          position:absolute;right:-6px;top:42px;width:180px;z-index:3;
          transform:rotate(2.4deg);
          background:color-mix(in srgb, var(--surface) 50%, transparent);
          border:1px solid rgba(255,255,255,.9);
          -webkit-backdrop-filter:blur(20px) saturate(170%);
          backdrop-filter:blur(20px) saturate(170%);
          border-radius:16px;
          padding:12px 14px;
          box-shadow:
            0 1px 0 rgba(255,255,255,.55) inset,
            0 0 0 1px rgba(255,255,255,.16) inset,
            0 24px 50px -20px rgba(15,40,90,.22);
          animation:hartFloatB 8s ease-in-out infinite;
        }
        .hart-tk-head{
          display:flex;align-items:center;justify-content:space-between;
          padding-bottom:10px;margin-bottom:8px;
          border-bottom:1px solid color-mix(in srgb, var(--ink) 6%, transparent);
          font-size:11px;color:var(--mute);letter-spacing:.02em;
        }
        .hart-tk-dot{width:6px;height:6px;border-radius:50%;background:#00B64A;box-shadow:0 0 8px #00B64A}
        .hart-tk-row{
          display:flex;align-items:center;gap:8px;
          padding:5px 0;font-size:10.5px;color:var(--ink-2);letter-spacing:.02em;
        }
        .hart-tk-row .sw{width:14px;height:14px;border-radius:4px;border:1px solid color-mix(in srgb, var(--ink) 6%, transparent);flex-shrink:0}

        /* mini chips */
        .hart-mini{
          position:absolute;z-index:4;
          display:inline-flex;align-items:center;gap:8px;
          padding:7px 12px;border-radius:999px;
          background:color-mix(in srgb, var(--surface) 50%, transparent);
          border:1px solid rgba(255,255,255,.9);
          -webkit-backdrop-filter:blur(18px) saturate(160%);
          backdrop-filter:blur(18px) saturate(160%);
          box-shadow:
            0 1px 0 rgba(255,255,255,.55) inset,
            0 0 0 1px rgba(255,255,255,.18) inset,
            0 16px 30px -12px rgba(15,40,90,.2);
          font-family:var(--font-mono);font-size:11px;color:var(--ink-2);letter-spacing:.02em;
        }
        .hart-mini-dot{width:7px;height:7px;border-radius:50%;background:var(--accent);box-shadow:0 0 8px var(--accent);position:relative}
        .hart-mini-dot.green{background:#00B64A;box-shadow:0 0 8px #00B64A}
        .hart-mini-dot.orange{background:#F5A524;box-shadow:0 0 8px #F5A524}
        .hart-mini-dot.pulse::after{
          content:"";position:absolute;inset:0;border-radius:50%;
          background:inherit;
          animation:hartDotPulse 1.8s ease-out infinite;
        }
        @keyframes hartDotPulse{
          0%{transform:scale(1);opacity:.7}
          70%{transform:scale(3.4);opacity:0}
          100%{transform:scale(3.4);opacity:0}
        }
        .hart-mini-coding{left:-45px;top:148px;transform:rotate(-3deg);z-index:6;animation:hartFloatC 9s ease-in-out infinite}
        .hart-mini-1{right:18px;bottom:120px;transform:rotate(-3deg);animation:hartFloatC 10s ease-in-out infinite}
        .hart-mini-2{left:-6px;bottom:-16px;transform:rotate(2deg);animation:hartFloatA 11s ease-in-out infinite reverse}

        @keyframes hartFloat{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-6px) rotate(-1.4deg)}}
        @keyframes hartFloatA{0%,100%{transform:translateY(0) rotate(-1.2deg)}50%{transform:translateY(-8px) rotate(-.6deg)}}
        @keyframes hartFloatB{0%,100%{transform:translateY(0) rotate(2.4deg)}50%{transform:translateY(-10px) rotate(1.4deg)}}
        @keyframes hartFloatC{0%,100%{transform:translateY(0) rotate(-3deg)}50%{transform:translateY(-8px) rotate(-2deg)}}

        @media (max-width: 980px){
          .hart{display:none}
        }
        @media (prefers-reduced-motion: reduce){
          .hart-card,.hart-tokens,.hart-prompt,.hart-mini{animation:none !important}
          .hart-cur{animation:none}
        }

        /* Dark mode glass overrides */
        [data-theme="dark"] .hart-prompt,
        [data-theme="dark"] .hart-card,
        [data-theme="dark"] .hart-tokens,
        [data-theme="dark"] .hart-mini{
          background:rgba(20,20,20,.55);
          border-color:rgba(255,255,255,.08);
          box-shadow:
            0 1px 0 rgba(255,255,255,.06) inset,
            0 0 0 1px rgba(255,255,255,.05) inset,
            0 24px 50px -20px rgba(0,0,0,.7) !important;
        }
        [data-theme="dark"] .hart-card::before{
          background:linear-gradient(90deg, transparent, rgba(255,255,255,.18), transparent);
        }
        [data-theme="dark"] .hart-traffic span{background:rgba(255,255,255,.15)}
        [data-theme="dark"] .hart-traffic span:first-child{background:#FF5F57}
        [data-theme="dark"] .hart-traffic span:nth-child(2){background:#FEBC2E}
        [data-theme="dark"] .hart-traffic span:nth-child(3){background:#28C840}
        [data-theme="dark"] .hart-rows{
          background:rgba(255,255,255,.03);
          border-color:rgba(255,255,255,.06);
        }
        [data-theme="dark"] .hart-row{border-color:rgba(255,255,255,.05)}
        [data-theme="dark"] .hart-toggle{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.06)}
        [data-theme="dark"] .hart-toggle span{background:rgba(245,245,245,.95)}
        [data-theme="dark"] .hart-bg{
          background:rgba(255,255,255,.04);border-color:rgba(255,255,255,.1);
        }
      `}</style>
    </div>);

}

window.HeroArt = HeroArt;
