// sections.jsx — About / Projects / Workflow / DesignSystem / Experience / Contact / Footer

const { useEffect: useEf, useRef: useRf, useState: useSt } = React;

/* ──────────────────────────────── About ──────────────────────────────── */

function About() {
  return (
    <section id="about">
      <div className="wrap about-grid">
        <div className="about-left">
          <div className="eyebrow"><span className="dot"></span> 01 · About</div>
          <h2 className="h-1" style={{ marginTop: 18, maxWidth: "14ch" }}>
            Designing Future<br />Interfaces<span style={{ color: "var(--accent)" }}>.</span>
          </h2>
          <p className="body" style={{ marginTop: 28 }}>
            我是<strong style={{color:"var(--ink)",fontWeight:500}}>刘伟</strong>，<strong style={{color:"var(--ink)",fontWeight:500}}>一名专注 AI 产品体验与企业级 SaaS 的产品设计师</strong>。过去在百度和斗象科技的 8 年里，我完整经历了后台系统、数据看板、业务流程工具、移动端产品及 Design System 的建设，覆盖从需求梳理、信息架构、交互原型、视觉规范到落地协作的全流程。同时，我将 ChatGPT、Codex、Figma Make 等 AI 工具深度嵌入设计与交付环节。
          </p>
          <p className="body" style={{ marginTop: 14 }}>
            我相信，<strong style={{ color: "var(--ink)", fontWeight: 500 }}>未来的设计师不仅是界面的创作者，更是 AI 时代的产品构建者</strong>。从业务出发，抽象信息，用系统化设计语言，把复杂能力转译为清晰、可信赖的体验。
          </p>

          <div className="creed">
            {[
            { k: "01", t: "Product first", d: "先理解业务与用户，再决定像素。", i: "target" },
            { k: "02", t: "System over screens", d: "用 Token 与组件，把设计沉淀为资产。", i: "grid" },
            { k: "03", t: "AI as collaborator", d: "AI 是放大器，不是替代品。", i: "spark" },
            { k: "04", t: "Ship to learn", d: "上线，是设计的开始而不是结束。", i: "rocket" }].
            map((x) =>
            <div className="creed-row" key={x.k}>
                <span className="mono creed-k">{x.k}</span>
                <div>
                  <div className="creed-t">
                    <span className="creed-ic" aria-hidden="true"><CreedIcon name={x.i}/></span>
                    {x.t}
                  </div>
                  <div className="creed-d">{x.d}</div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="about-right">
          <div className="portrait">
            <div className="p-bg" aria-hidden="true">
              <span className="p-blob"></span>
              <div className="p-rings">
                <span></span><span></span><span></span>
              </div>
              <div className="p-grid"></div>
            </div>
            <img className="p-img" src="assets/portrait.png" alt="Liu Wei portrait" />

            {/* floating glass chips */}
            <div className="p-chip p-chip-status">
              <span className="p-pulse"></span>
              <span>Available · 2026</span>
            </div>
            <div className="p-chip p-chip-name">
              <div className="p-name-l mono">// designer</div>
              <div className="p-name-v">Liu Wei</div>
            </div>
            <div className="p-chip p-chip-coding">
              <span className="p-coding-i" aria-hidden="true">
                <svg width="13" height="13" viewBox="0 0 20 20" fill="none">
                  <path d="M3 10 L7 6 M3 10 L7 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 10 L13 6 M17 10 L13 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11.5 4 L8.5 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </span>
              <span>AI Coding</span>
            </div>
            <div className="p-tag mono">L.W — 2026</div>
          </div>
          <div className="caps">
            {["Product Design", "Design System", "SaaS / B2B", "AI Workflow", "AI-Assisted Design", "Design to Code"].map((c) =>
            <span key={c} className="cap">{c}</span>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .about-grid{display:grid;grid-template-columns:1.2fr 1fr;gap:96px;align-items:start}
        @media(max-width:980px){
          .about-grid{grid-template-columns:1fr;gap:48px}
          .about-right{display:none}
        }
        .creed{
          margin-top:64px;padding-top:64px;
          border-top:1px solid var(--line);
          display:grid;grid-template-columns:1fr 1fr;gap:24px 40px;max-width:560px;
        }
        @media(max-width:640px){.creed{grid-template-columns:1fr}}
        .creed-row{display:flex;gap:14px;align-items:flex-start}
        .creed-k{color:var(--mute-2);font-size:11px;letter-spacing:.06em;padding-top:8px}
        .creed-t{
          font-size:15px;font-weight:500;color:var(--ink);margin-bottom:4px;
          display:inline-flex;align-items:center;gap:10px;
        }
        .creed-ic{
          display:inline-flex;align-items:center;justify-content:center;
          width:26px;height:26px;border-radius:8px;flex-shrink:0;
          color:var(--accent);
          background:rgba(32,139,255,.10);
          border:1px solid rgba(32,139,255,.18);
        }
        .creed-ic svg{display:block}
        .creed-d{font-size:13.5px;color:var(--mute);line-height:1.55}

        .portrait{
          aspect-ratio:4/5;width:100%;max-width:460px;position:relative;
          display:flex;align-items:flex-end;justify-content:center;
          isolation:isolate;
        }
        .portrait .p-bg{
          position:absolute;inset:0;overflow:hidden;
          z-index:0;
        }
        .portrait .p-blob{
          position:absolute;left:50%;top:42%;transform:translate(-50%,-50%);
          width:88%;aspect-ratio:1;border-radius:50%;
          background:
            radial-gradient(circle at 35% 35%, #43BFFF, transparent 55%),
            radial-gradient(circle at 70% 70%, #2066F0, transparent 60%);
          filter:blur(60px);opacity:.32;
          animation:portraitGlow 9s ease-in-out infinite;
        }
        [data-theme="dark"] .portrait .p-blob{opacity:.5}
        .portrait .p-grid{
          position:absolute;inset:0;
          background-image:
            linear-gradient(to right, color-mix(in srgb, var(--ink) 5%, transparent) 1px, transparent 1px),
            linear-gradient(to bottom, color-mix(in srgb, var(--ink) 5%, transparent) 1px, transparent 1px);
          background-size:32px 32px;
          mask-image:radial-gradient(ellipse at 50% 60%, #000 30%, transparent 80%);
        }
        .portrait .p-rings{position:absolute;inset:0;display:grid;place-items:center}
        .portrait .p-rings span{
          position:absolute;border-radius:50%;
          border:1px solid color-mix(in srgb, var(--ink) 10%, transparent);
        }
        .portrait .p-rings span:nth-child(1){width:56%;aspect-ratio:1}
        .portrait .p-rings span:nth-child(2){width:76%;aspect-ratio:1;opacity:.55;border-style:dashed}
        .portrait .p-rings span:nth-child(3){width:96%;aspect-ratio:1;opacity:.35}

        .portrait .p-img{
          position:relative;z-index:1;
          width:96%;height:auto;max-height:100%;
          object-fit:contain;object-position:bottom center;
          filter:drop-shadow(0 30px 40px rgba(15,40,90,.18))
                 drop-shadow(0 60px 80px rgba(32,102,240,.12));
        }
        [data-theme="dark"] .portrait .p-img{
          filter:drop-shadow(0 30px 40px rgba(0,0,0,.5))
                 drop-shadow(0 60px 80px rgba(67,163,255,.18));
        }

        .portrait .p-chip{
          position:absolute;z-index:3;
          display:inline-flex;align-items:center;gap:8px;
          padding:9px 14px;border-radius:999px;
          background:color-mix(in srgb, var(--surface) 55%, transparent);
          border:1px solid rgba(255,255,255,.9);
          -webkit-backdrop-filter:blur(18px) saturate(160%);
          backdrop-filter:blur(18px) saturate(160%);
          box-shadow:
            0 1px 0 rgba(255,255,255,.6) inset,
            0 0 0 1px rgba(255,255,255,.18) inset,
            0 20px 40px -16px rgba(15,40,90,.18);
          font-size:12.5px;color:var(--ink-2);font-weight:500;letter-spacing:-0.005em;
        }
        [data-theme="dark"] .portrait .p-chip{
          background:rgba(20,20,20,.55);
          border-color:rgba(255,255,255,.1);
          box-shadow:
            0 1px 0 rgba(255,255,255,.06) inset,
            0 0 0 1px rgba(255,255,255,.04) inset,
            0 20px 40px -16px rgba(0,0,0,.6);
        }
        .portrait .p-chip-status{
          top:24px;left:-12px;transform:rotate(-2deg);
          animation:portraitFloatA 8s ease-in-out infinite;
        }
        .portrait .p-pulse{
          width:8px;height:8px;border-radius:50%;background:#00B64A;
          box-shadow:0 0 0 0 rgba(0,182,74,.6);
          animation:portraitPulse 1.8s ease-out infinite;
        }
        .portrait .p-chip-name{
          right:-16px;top:34%;border-radius:14px;
          padding:12px 16px;text-align:right;
          transform:rotate(2deg);
          animation:portraitFloatB 10s ease-in-out infinite;
        }
        .portrait .p-chip-coding{
          left:-14px;bottom:64px;border-radius:14px;
          padding:10px 14px;gap:10px;
          transform:rotate(-2deg);
          animation:portraitFloatA 9s ease-in-out infinite reverse;
        }
        .portrait .p-coding-i{
          display:inline-flex;align-items:center;justify-content:center;
          width:24px;height:22px;
          font-size:11px;font-weight:500;
          color:var(--accent);
          border-radius:6px;
          background:rgba(32,139,255,.12);
          border:1px solid rgba(32,139,255,.22);
          letter-spacing:0;line-height:1;
        }
        .portrait .p-name-l{font-size:10.5px;color:var(--mute);letter-spacing:.04em}
        .portrait .p-name-v{font-size:17px;font-weight:500;letter-spacing:-0.015em;color:var(--ink);margin-top:2px}

        .portrait .p-tag{
          position:absolute;bottom:18px;right:18px;z-index:3;
          font-size:11px;padding:6px 11px;border-radius:999px;
          background:color-mix(in srgb, var(--surface) 60%, transparent);
          border:1px solid rgba(255,255,255,.9);
          -webkit-backdrop-filter:blur(14px) saturate(160%);
          backdrop-filter:blur(14px) saturate(160%);
          color:var(--ink);letter-spacing:.04em;
          box-shadow:0 12px 24px -10px rgba(15,40,90,.2);
        }
        [data-theme="dark"] .portrait .p-tag{
          background:rgba(20,20,20,.55);border-color:rgba(255,255,255,.1);
        }

        @keyframes portraitGlow{
          0%,100%{transform:translate(-50%,-50%) scale(1);opacity:.32}
          50%{transform:translate(-48%,-52%) scale(1.06);opacity:.42}
        }
        @keyframes portraitFloatA{
          0%,100%{transform:rotate(-2deg) translateY(0)}
          50%{transform:rotate(-1deg) translateY(-6px)}
        }
        @keyframes portraitFloatB{
          0%,100%{transform:rotate(2deg) translateY(0)}
          50%{transform:rotate(1deg) translateY(-8px)}
        }
        @keyframes portraitPulse{
          0%{box-shadow:0 0 0 0 rgba(0,182,74,.55)}
          70%{box-shadow:0 0 0 10px rgba(0,182,74,0)}
          100%{box-shadow:0 0 0 0 rgba(0,182,74,0)}
        }
        @media (prefers-reduced-motion: reduce){
          .portrait .p-blob, .portrait .p-chip, .portrait .p-pulse{animation:none !important}
        }
        .caps{display:flex;flex-wrap:wrap;gap:8px;margin-top:22px;max-width:420px}
        .cap{
          font-family:var(--font-mono);font-size:11px;letter-spacing:.04em;
          padding:6px 10px;border-radius:999px;border:1px solid var(--line);color:var(--mute);
        }
      `}</style>
    </section>);

}

/* ─────────────────────────── Featured Projects ───────────────────────────── */

const PROJECTS = [
{
  id: "nimbus",
  n: "01",
  name: "2025 Design Portfolio",
  kind: "2025 Selected Works",
  year: "2026",
  desc: "精选 2025 年核心项目案例，涵盖企业级后台、运营设计与设计系统建设等。",
  tags: ["Workflow", "Product Design", "UI Design"],
  accent: "#7FB8FF",
  detail: true,
  confirmBeforeOpen: true,
  detailUrl: "https://www.figma.com/proto/fjkSpzmputz6ohIIve8Ynh/2025-Portfolio?node-id=1-33&p=f&t=WwY7avVwhglJ8nNq-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
},
{
  id: "case-governance",
  n: "02",
  name: "AI 驱动的 B 端设计规范梳理",
  kind: "Enterprise B-side · AI Workflow",
  year: "2026",
  desc: "用 AI 辅助治理 100+ 页面后台规范，把 3 周人工周期压缩到 7 天。",
  tags: ["AI Workflow", "Design System", "Tokens"],
  accent: "#2066F0",
  detail: true,
  detailUrl: "case-governance.html"
},
{
  id: "lumen",
  n: "03",
  name: "AI 位图转矢量工具",
  kind: "Frontend Tool · Local-first",
  year: "2026",
  desc: "浏览器本地运行的位图转 SVG 工具，支持彩色 / 单色矢量化与 SVG 导出。",
  tags: ["React", "SVG", "GitHub Pages"],
  accent: "#43BFFF",
  detail: true,
  detailUrl: "case-bitmap-vector.html"
},
{
  id: "more-work",
  n: "04",
  name: "More work in progress",
  kind: "敬请期待",
  year: "2026",
  desc: "新的 Case Study 正在撰写 —— 涵盖更多 AI 产品与企业级系统的实战。想聊聊可随时联系我。",
  tags: [],
  accent: "#208BFF",
  comingSoon: true
}];


function Projects() {
  const [page, setPage] = useSt(0);
  const [compact, setCompact] = useSt(false);
  const [pendingProject, setPendingProject] = useSt(null);
  const pageSize = compact ? 1 : 2;
  const totalPages = Math.max(1, Math.ceil(PROJECTS.length / pageSize));
  const maxPage = totalPages - 1;
  const currentStart = page * pageSize + 1;
  const currentEnd = Math.min(PROJECTS.length, (page + 1) * pageSize);

  useEf(() => {
    const mq = window.matchMedia("(max-width: 880px)");
    const sync = () => setCompact(mq.matches);
    sync();
    if (mq.addEventListener) {
      mq.addEventListener("change", sync);
      return () => mq.removeEventListener("change", sync);
    }
    mq.addListener(sync);
    return () => mq.removeListener(sync);
  }, []);

  useEf(() => {
    setPage((value) => Math.min(value, maxPage));
  }, [maxPage]);

  const goPage = (next) => {
    setPage(Math.max(0, Math.min(maxPage, next)));
  };

  const requestProjectOpen = (project, event) => {
    if (!project.confirmBeforeOpen) return;
    event.preventDefault();
    setPendingProject(project);
  };

  const closeProjectNotice = () => {
    setPendingProject(null);
  };

  const confirmProjectOpen = () => {
    const href = pendingProject?.detailUrl;
    setPendingProject(null);
    if (href) window.open(href, "_blank", "noopener,noreferrer");
  };

  const projectPages = Array.from({ length: totalPages }, (_, pageIndex) =>
    PROJECTS.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize));

  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span> 02 · Selected work</div>
            <h2 className="h-1" style={{ marginTop: 18, maxWidth: "18ch" }}>
              Featured Projects<span style={{ color: "var(--accent)" }}>.</span>
            </h2>
          </div>
          <p className="body">
            Design System 与 AI 产品项目，
            点击查看其中之一的完整 Case Study。
          </p>
        </div>

        <div className="proj-carousel">
          <div className="proj-carousel-head">
            <div className="proj-count">
              {String(currentStart).padStart(2, "0")} - {String(currentEnd).padStart(2, "0")}
              <span>/</span>{String(PROJECTS.length).padStart(2, "0")}
            </div>
            <div className="proj-controls" aria-label="项目切换">
              <button
                type="button"
                className="proj-nav"
                aria-label="上一个项目"
                disabled={page === 0}
                onClick={() => goPage(page - 1)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                type="button"
                className="proj-nav"
                aria-label="下一个项目"
                disabled={page === maxPage}
                onClick={() => goPage(page + 1)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="proj-window">
            <div className="proj-track" style={{ transform: `translateX(-${page * 100}%)` }}>
              {projectPages.map((items, pageIndex) => (
                <div className="proj-page" key={pageIndex} aria-hidden={pageIndex !== page}>
                  {items.map((p) => {
                    const idx = PROJECTS.findIndex((item) => item.id === p.id);
                    return <ProjectCard key={p.id} p={p} idx={idx} inactive={pageIndex !== page} onRequestOpen={requestProjectOpen} />;
                  })}
                </div>
              ))}
            </div>
          </div>

          <div className="proj-dots" aria-label="项目分页">
            {projectPages.map((_, dotIndex) => (
              <button
                type="button"
                key={dotIndex}
                className={"proj-dot" + (dotIndex === page ? " is-active" : "")}
                aria-label={`查看第 ${dotIndex + 1} 页项目`}
                aria-current={dotIndex === page ? "true" : undefined}
                onClick={() => goPage(dotIndex)}
              />
            ))}
          </div>
        </div>
      </div>

      {pendingProject && (
        <div className="project-notice" role="dialog" aria-modal="true" aria-labelledby="project-notice-title" onClick={closeProjectNotice}>
          <div className="project-notice-shell" onClick={(event) => event.stopPropagation()}>
            <div className="project-notice-box">
              <div className="project-notice-corner" aria-hidden="true"></div>
              <div className="project-notice-title" id="project-notice-title">温馨提示</div>
              <div className="project-notice-text">
                <span>作品集页面图片较多，加载会慢一点哈～</span>
                <span>确定后打开在线作品集。或者先 <a className="project-preview-link" href="portfolio-preview.html" target="_blank" rel="noreferrer">预览作品图片</a>～</span>
              </div>
              <div className="project-notice-actions">
                <button type="button" className="project-notice-btn is-ghost" onClick={closeProjectNotice}>取消</button>
                <button type="button" className="project-notice-btn is-primary" onClick={confirmProjectOpen}>确定</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .proj-carousel{position:relative}
        .proj-carousel-head{
          display:flex;align-items:center;justify-content:space-between;
          gap:18px;margin-bottom:16px;
        }
        .proj-count{
          font-family:var(--font-mono);font-size:11px;letter-spacing:.1em;
          color:var(--mute);display:flex;align-items:center;gap:8px;
        }
        .proj-controls{display:flex;gap:8px}
        .proj-nav{
          width:38px;height:38px;display:grid;place-items:center;
          border:1px solid var(--line);border-radius:14px;
          background:var(--surface);color:var(--ink);
          cursor:pointer;transition:color .2s ease,border-color .2s ease,transform .2s ease,opacity .2s ease;
        }
        .proj-nav:hover:not(:disabled){color:var(--accent);border-color:var(--accent);transform:translateY(-1px)}
        .proj-nav:disabled{opacity:.34;cursor:not-allowed}
        .proj-window{
          overflow:hidden;
          padding:10px 0 36px;
          margin:-10px 0 0;
        }
        .proj-track{
          display:flex;transition:transform .48s cubic-bezier(.2,.7,.2,1);
          will-change:transform;
        }
        .proj-page{
          min-width:100%;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:28px;
        }
        .proj-dots{display:flex;justify-content:center;gap:8px;margin-top:18px}
        .proj-dot{
          width:8px;height:8px;border:0;border-radius:999px;padding:0;
          background:color-mix(in srgb, var(--ink) 16%, transparent);
          cursor:pointer;transition:width .22s ease,background .22s ease,transform .22s ease;
        }
        .proj-dot:hover{background:var(--accent);transform:translateY(-1px)}
        .proj-dot.is-active{width:24px;background:var(--accent)}
        @media(max-width:880px){
          .proj-page{grid-template-columns:1fr}
          .proj-carousel-head{margin-bottom:12px}
        }
        .proj{
          padding:28px;display:flex;flex-direction:column;gap:24px;
          min-height:430px;position:relative;overflow:hidden;
        }
        .proj.card-hov:hover{
          z-index:2;
          box-shadow:0 20px 52px -34px rgba(10,10,10,.24);
        }
        .proj-head{display:flex;justify-content:space-between;align-items:flex-start;gap:24px}
        .proj-n{font-family:var(--font-mono);font-size:11px;letter-spacing:.1em;color:var(--mute)}
        .proj-year{font-family:var(--font-mono);font-size:11px;letter-spacing:.1em;color:var(--mute)}
        .proj-name{font-size:26px;font-weight:500;letter-spacing:-0.015em;line-height:1.15;margin:6px 0 6px}
        .proj-kind{font-size:13px;color:var(--mute);font-family:var(--font-mono);letter-spacing:.02em}
        .proj-desc{font-size:14.5px;line-height:1.6;color:var(--ink-2);margin-top:14px}
        .proj-cover{
          position:relative;height:220px;border-radius:14px;overflow:hidden;
          background:var(--bg-soft);border:1px solid var(--line);
        }
        .proj-cover-img{
          position:absolute;inset:0;width:100%;height:100%;
          object-fit:cover;object-position:center;
          background:linear-gradient(135deg,#f6f8ff 0%,#ffffff 46%,#eef8ff 100%);
        }
        .proj-vector .proj-cover{
          background:
            radial-gradient(220px circle at 76% 28%, color-mix(in srgb, var(--cv-acc) 16%, transparent), transparent 62%),
            linear-gradient(135deg, #ffffff 0%, #f7fbff 44%, #eefaff 100%);
        }
        .proj-tags{display:flex;gap:6px;flex-wrap:wrap}
        .proj-tag{font-family:var(--font-mono);font-size:10.5px;letter-spacing:.04em;padding:4px 8px;border-radius:6px;background:var(--bg-soft);color:var(--mute)}
        .proj-link{
          display:inline-flex;align-items:center;gap:8px;
          font-size:13px;color:var(--ink);font-weight:500;margin-top:6px;
        }
        .proj-link .arr{transition:transform .25s ease}
        .proj:hover .proj-link .arr{transform:translateX(4px)}
        .project-notice{
          position:fixed;inset:0;z-index:80;display:grid;place-items:center;
          padding:24px;background:rgba(244,247,251,.5);
          backdrop-filter:blur(18px) saturate(122%);-webkit-backdrop-filter:blur(18px) saturate(122%);
          animation:projectNoticeFade .18s ease both;
        }
        .project-notice-shell{
          width:min(440px,100%);border-radius:20px;padding:1px;
          background:linear-gradient(145deg,rgba(255,255,255,.96),rgba(32,139,255,.24) 58%,rgba(67,191,255,.13));
          box-shadow:0 34px 100px -46px rgba(18,32,54,.4);
          animation:projectNoticePop .22s cubic-bezier(.2,.7,.2,1) both;
        }
        .project-notice-box{
          position:relative;overflow:hidden;border-radius:19px;
          background:linear-gradient(155deg,rgba(255,255,255,.985) 0%,rgba(250,253,255,.97) 39%,rgba(229,246,255,.95) 100%);
          padding:50px 30px 32px;display:grid;justify-items:center;text-align:center;
          color:var(--ink);
          box-shadow:inset 0 1px 0 rgba(255,255,255,.9),0 0 0 1px rgba(15,23,42,.035);
        }
        .project-notice-box::before{
          content:"";position:absolute;inset:0;pointer-events:none;
          background:
            radial-gradient(270px 170px at 74% -18%,rgba(32,139,255,.22),transparent 72%),
            radial-gradient(230px 150px at -10% 4%,rgba(67,191,255,.14),transparent 68%),
            linear-gradient(180deg,rgba(255,255,255,0) 0%,rgba(255,255,255,.52) 74%);
        }
        .project-notice-box::after{
          content:"";position:absolute;inset:0;pointer-events:none;opacity:.42;
          background-image:
            linear-gradient(to right,rgba(32,139,255,.048) 1px,transparent 1px),
            linear-gradient(to bottom,rgba(32,139,255,.048) 1px,transparent 1px);
          background-size:28px 28px;
          mask-image:linear-gradient(180deg,#000 0%,rgba(0,0,0,.5) 42%,transparent 76%);
        }
        .project-notice-corner{
          position:absolute;right:24px;top:22px;width:42px;height:42px;border-radius:14px;
          background:linear-gradient(145deg,rgba(32,139,255,.1),rgba(255,255,255,.54));
          box-shadow:inset 0 1px rgba(255,255,255,.8);opacity:.82;
        }
        .project-notice-corner::before,
        .project-notice-corner::after{
          content:"";position:absolute;border-radius:999px;background:#208bff;opacity:.34;
        }
        .project-notice-corner::before{left:11px;top:14px;width:20px;height:3px}
        .project-notice-corner::after{left:11px;top:23px;width:13px;height:3px}
        .project-notice-title,
        .project-notice-text,
        .project-notice-actions{position:relative;z-index:1}
        .project-notice-title{
          display:inline-block;font-size:24px;font-weight:780;letter-spacing:-.025em;line-height:1.15;
          text-align:center;text-shadow:0 3px 0 rgba(255,255,255,.82),0 12px 26px rgba(32,139,255,.16);
        }
        .project-notice-title::before{
          content:"";position:absolute;left:-12px;right:-12px;bottom:1px;height:14px;border-radius:999px;
          background:linear-gradient(90deg,rgba(255,255,255,.92),rgba(255,255,255,.62));z-index:-1;
        }
        .project-notice-text{
          margin:30px auto 0;max-width:360px;font-size:16px;line-height:1.82;color:#666b72;
          font-weight:400;letter-spacing:-.015em;text-align:center;
        }
        .project-notice-text span{display:block}
        .project-preview-link{
          color:#208bff;text-decoration:none;font-weight:500;
          border-bottom:1px solid color-mix(in srgb,#208bff 34%,transparent);
          transition:color .2s ease,border-color .2s ease;
        }
        .project-preview-link:hover{
          color:#0b73e0;border-color:#0b73e0;
        }
        .project-notice-actions{
          display:flex;justify-content:center;gap:12px;width:100%;margin-top:34px;
        }
        .project-notice-btn{
          flex:0 0 160px;width:160px;height:48px;border-radius:14px;border:1px solid rgba(9,10,13,.12);
          font-size:16px;font-weight:650;letter-spacing:-.01em;cursor:pointer;
          transition:transform .2s ease,border-color .2s ease,background .2s ease,color .2s ease;
        }
        .project-notice-btn:hover{transform:translateY(-1px)}
        .project-notice-btn.is-ghost{
          background:rgba(255,255,255,.8);color:#15161a;
          box-shadow:inset 0 1px rgba(255,255,255,.95),0 12px 26px -24px rgba(10,10,10,.25);
        }
        .project-notice-btn.is-ghost:hover{border-color:color-mix(in srgb,var(--ink) 28%,var(--line))}
        .project-notice-btn.is-primary{
          border:0;background:linear-gradient(135deg,#267cff,#43bfff);color:#fff;
          box-shadow:0 18px 36px -22px rgba(32,139,255,.9),inset 0 1px rgba(255,255,255,.34);
        }
        @media(max-width:520px){
          .project-notice-shell{width:100%}
          .project-notice-box{padding:42px 20px 24px}
          .project-notice-corner{right:18px;top:18px;transform:scale(.88)}
          .project-notice-title{font-size:24px}
          .project-notice-text{font-size:16px;line-height:1.75;margin-top:24px}
          .project-notice-actions{margin-top:28px}
          .project-notice-btn{flex:1 1 0;width:auto;min-width:0}
        }
        @keyframes projectNoticeFade{from{opacity:0}to{opacity:1}}
        @keyframes projectNoticePop{from{opacity:0;transform:translateY(8px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}
        .proj-coming{
          cursor:default;justify-content:flex-start;align-items:stretch;gap:0;
          min-height:430px;text-align:center;
          background:
            linear-gradient(180deg,rgba(235,247,255,.78) 0%,rgba(246,251,255,.86) 38%,#fff 68%),
            var(--surface);
          border-color:#8EC8FF;
          border-style:dashed;
          box-shadow:none;
          transition:
            transform .45s cubic-bezier(.2,.7,.2,1),
            border-color .35s ease,
            box-shadow .35s ease,
            background .45s ease;
        }
        .proj-coming::before{
          content:"";position:absolute;inset:0;pointer-events:none;opacity:.62;
          background-image:
            linear-gradient(to right,rgba(32,139,255,.055) 1px,transparent 1px),
            linear-gradient(to bottom,rgba(32,139,255,.055) 1px,transparent 1px);
          background-size:28px 28px;
          mask-image:linear-gradient(180deg,#000 0%,#000 48%,transparent 82%);
          animation:comingGridDrift 11s linear infinite;
          transition:opacity .35s ease;
        }
        .proj-coming:hover{
          z-index:2;
          transform:translateY(-6px);
          border-color:#61B4FF;
          box-shadow:0 20px 52px -36px rgba(32,139,255,.28);
        }
        .proj-coming:hover::before{opacity:.9}
        .proj-coming-main{
          position:relative;z-index:1;
          min-height:206px;display:grid;place-items:center;
          margin-top:12px;margin-bottom:20px;
        }
        .coming-cover{
          position:relative;display:grid;place-items:center;gap:16px;text-align:center;
          font-family:var(--font-mono);color:var(--mute);
        }
        .coming-star{
          width:88px;height:88px;border-radius:22px;display:grid;place-items:center;
          color:#208BFF;font-family:var(--font-sans);font-size:31px;line-height:1;
          background:rgba(255,255,255,.72);
          border:1px solid rgba(32,139,255,.11);
          box-shadow:
            0 20px 46px -28px rgba(32,139,255,.5),
            0 1px 0 rgba(255,255,255,.85) inset;
          animation:comingStarFloat 3.8s ease-in-out infinite;
          transition:transform .45s cubic-bezier(.2,.7,.2,1),box-shadow .35s ease,background .35s ease;
        }
        .coming-star span{
          display:inline-block;
          transform-origin:50% 50%;
          animation:comingStarSpin 2.8s linear infinite;
          will-change:transform;
        }
        .coming-label{
          font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;
          color:#0B73E0;padding:9px 18px;border-radius:999px;
          background:rgba(231,245,255,.82);
          border:1px solid rgba(32,139,255,.32);
          box-shadow:0 12px 28px -24px rgba(32,139,255,.35);
          transition:transform .38s cubic-bezier(.2,.7,.2,1),background .35s ease,border-color .35s ease;
        }
        .proj-coming:hover .coming-star{
          animation-play-state:paused;
          transform:translateY(-8px) scale(1.04);
          box-shadow:
            0 24px 54px -26px rgba(32,139,255,.62),
            0 1px 0 rgba(255,255,255,.92) inset;
        }
        .proj-coming:hover .coming-label{
          transform:translateY(-3px);
          background:rgba(220,241,255,.92);
          border-color:rgba(32,139,255,.46);
        }
        .coming-dots{display:flex;justify-content:center;gap:6px;margin-top:4px}
        .coming-dots span{
          width:6px;height:6px;border-radius:999px;background:#9BD0FF;opacity:.72;
          animation:comingDotPulse 1.8s ease-in-out infinite;
        }
        .coming-dots span:nth-child(2){opacity:.9;animation-delay:.16s}
        .coming-dots span:nth-child(3){opacity:.5;animation-delay:.32s}
        .coming-dots span:nth-child(4){opacity:.38;animation-delay:.48s}
        .proj-coming-copy{
          position:relative;z-index:1;
          max-width:350px;margin:0 auto 24px;
        }
        .proj-coming .proj-name{
          margin:0 0 14px;font-size:24px;line-height:1.15;font-weight:600;
          letter-spacing:-0.02em;
        }
        .proj-coming .proj-desc{
          max-width:none;margin:0;color:var(--mute);line-height:1.72;font-size:14px;
        }
        .proj-contact{
          position:relative;z-index:1;display:inline-flex;align-items:center;justify-content:center;gap:8px;
          width:max-content;margin:0 auto 2px;padding:11px 20px;border-radius:999px;
          font-size:13px;color:var(--ink);font-weight:500;
          border:1px solid var(--ink);background:transparent;
          transition:color .22s ease,border-color .22s ease,background .22s ease,transform .22s ease;
        }
        .proj-contact .arr{transition:transform .25s ease}
        .proj-contact:hover{color:#fff;border-color:var(--ink);background:var(--ink);transform:translateY(-1px)}
        .proj-contact:hover .arr{transform:translateX(4px)}
        @keyframes comingGridDrift{
          0%{background-position:0 0,0 0}
          100%{background-position:28px 28px,28px 28px}
        }
        @keyframes comingStarFloat{
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(-7px)}
        }
        @keyframes comingStarSpin{
          0%{transform:rotate(0deg)}
          100%{transform:rotate(360deg)}
        }
        @keyframes comingDotPulse{
          0%,100%{transform:translateY(0) scale(1);opacity:.42}
          50%{transform:translateY(-2px) scale(1.18);opacity:1}
        }
        @media (prefers-reduced-motion: reduce){
          .proj-coming::before,.coming-star,.coming-star span,.coming-dots span{animation:none !important}
          .proj-coming,.coming-star,.coming-label,.proj-contact{transition:none !important}
        }

        /* cover visuals */
        .cv-base{position:absolute;inset:0}
        .cv-grid{
          background-image:
            linear-gradient(to right, color-mix(in srgb, var(--ink) 6%, transparent) 1px, transparent 1px),
            linear-gradient(to bottom, color-mix(in srgb, var(--ink) 6%, transparent) 1px, transparent 1px);
          background-size:24px 24px;
        }
        .cv-glow{
          position:absolute;inset:-20%;
          background:radial-gradient(380px circle at 70% 30%, var(--cv-acc, var(--accent)), transparent 60%);
          opacity:.35;filter:blur(8px);
          transition:transform .8s ease, opacity .35s ease;
        }
        .proj:hover .cv-glow{transform:translate3d(-20px,-10px,0);opacity:.5}
        .proj-vector .cv-grid{opacity:0}
        .proj-vector .cv-glow{
          inset:auto -8% -28% 36%;height:80%;opacity:.26;filter:blur(22px);
          background:radial-gradient(240px circle at 50% 50%, var(--cv-acc, var(--accent)), transparent 68%);
        }
        .proj-vector:hover .cv-glow{transform:translate3d(-12px,-8px,0);opacity:.34}
        .cv-card{
          position:absolute;background:var(--surface);border:1px solid var(--line);
          border-radius:10px;padding:12px;box-shadow:var(--shadow-md);
        }
        .cv-bar{height:6px;background:var(--bg-soft);border-radius:3px;margin-bottom:7px}
        .gov-cover{position:absolute;inset:0;font-family:var(--font-mono);color:var(--ink)}
        .gov-panel{
          position:absolute;top:28px;height:112px;border:0;border-radius:12px;
          background:rgba(255,255,255,.86);box-shadow:var(--shadow-md);backdrop-filter:blur(10px);
        }
        .gov-before{left:22px;width:154px;padding:13px 14px}
        .gov-after{right:22px;width:178px;padding:13px 14px}
        .gov-label{font-size:10px;letter-spacing:.08em;color:var(--mute);margin-bottom:10px}
        .gov-noise{display:grid;gap:7px}
        .gov-noise-row{height:8px;border-radius:999px;background:var(--bg-soft)}
        .gov-noise-row:nth-child(1){width:74%;background:#ffeded}
        .gov-noise-row:nth-child(2){width:92%;background:#fff2dd}
        .gov-noise-row:nth-child(3){width:62%}
        .gov-noise-row:nth-child(4){width:82%;background:#eef3ff}
        .gov-token-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}
        .gov-token-title{font-family:var(--font-sans);font-size:12px;font-weight:650;letter-spacing:0}
        .gov-token-count{font-size:10px;color:var(--accent)}
        .gov-token-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-bottom:10px}
        .gov-token{height:16px;border-radius:5px;background:var(--bg-soft);border:1px solid var(--line)}
        .gov-token:nth-child(2),.gov-token:nth-child(6){background:var(--cv-acc);border-color:var(--cv-acc);opacity:.92}
        .gov-token:nth-child(4){background:#780650;border-color:#780650}
        .gov-token:nth-child(7){background:#FA8C16;border-color:#FA8C16}
        .gov-component{display:flex;align-items:center;gap:6px}
        .gov-component span{height:6px;border-radius:999px;background:var(--bg-soft);flex:1}
        .gov-component b{width:22px;height:12px;border-radius:4px;background:var(--cv-acc);display:block}
        .gov-flow-line{
          position:absolute;left:164px;right:172px;top:84px;height:2px;
          background:linear-gradient(90deg,transparent,var(--cv-acc),transparent);opacity:.7;
        }
        .gov-ai{
          position:absolute;left:50%;top:84px;transform:translate(-50%,-50%);
          width:52px;height:52px;border-radius:50%;display:grid;place-items:center;
          color:#fff;font-family:var(--font-sans);font-size:15px;font-weight:700;
          background:linear-gradient(135deg,var(--cv-acc),#43BFFF);
          box-shadow:0 16px 34px -18px var(--cv-acc), inset 0 0 0 1px rgba(255,255,255,.35);
        }
        .gov-ai::before,.gov-ai::after{content:"";position:absolute;border:1px solid rgba(32,102,240,.2);border-radius:50%}
        .gov-ai::before{inset:-8px}
        .gov-ai::after{inset:-16px}
        .gov-metrics{
          position:absolute;left:22px;right:22px;bottom:20px;display:grid;grid-template-columns:repeat(3,1fr);gap:8px;
        }
        .gov-metric{
          min-width:0;border:0;border-radius:10px;background:rgba(255,255,255,.78);
          padding:9px 10px;box-shadow:0 10px 22px -18px rgba(10,10,10,.28);
        }
        .gov-metric b{display:block;font-family:var(--font-sans);font-size:17px;line-height:1;color:var(--ink);letter-spacing:0}
        .gov-metric span{display:block;margin-top:5px;font-size:9px;letter-spacing:.06em;color:var(--mute);white-space:nowrap}
        .vec-cover{position:absolute;inset:0;font-family:var(--font-mono);color:var(--ink)}
        .vec-cover::before{
          content:"";position:absolute;right:18px;top:18px;width:260px;height:170px;border-radius:20px;
          background:
            radial-gradient(circle at 64% 42%, color-mix(in srgb, var(--cv-acc) 14%, transparent), transparent 56%),
            repeating-linear-gradient(0deg, color-mix(in srgb, var(--ink) 4%, transparent) 0 1px, transparent 1px 18px),
            repeating-linear-gradient(90deg, color-mix(in srgb, var(--ink) 4%, transparent) 0 1px, transparent 1px 18px);
          opacity:.65;
        }
        .vec-file{
          position:absolute;left:26px;top:42px;width:142px;height:96px;border:1px solid var(--line);
          border-radius:14px;background:rgba(255,255,255,.9);box-shadow:0 18px 36px -24px rgba(10,10,10,.28);
          padding:14px;backdrop-filter:blur(10px);
        }
        .vec-file-title{font-family:var(--font-sans);font-size:11px;font-weight:650;letter-spacing:0;margin-bottom:9px}
        .vec-file-art{position:relative;height:42px;border-radius:8px;background:linear-gradient(135deg,#fff,var(--bg-soft));border:1px solid var(--line);overflow:hidden}
        .vec-file-art::before{content:"";position:absolute;left:15px;top:10px;width:24px;height:22px;background:#0A0A0A;border-radius:6px}
        .vec-file-art::after{content:"";position:absolute;right:18px;top:8px;width:0;height:0;border-left:17px solid transparent;border-right:17px solid transparent;border-bottom:32px solid #16A9E6}
        .vec-file-grid{position:absolute;inset:0;opacity:.22;background-image:linear-gradient(to right,#0A0A0A 1px,transparent 1px),linear-gradient(to bottom,#0A0A0A 1px,transparent 1px);background-size:5px 5px}
        .vec-file-meta{display:flex;justify-content:space-between;margin-top:8px;font-size:8.5px;letter-spacing:.06em;color:var(--mute)}
        .vec-arrow{
          position:absolute;left:180px;top:83px;width:44px;height:44px;border-radius:50%;display:grid;place-items:center;
          background:linear-gradient(135deg,var(--cv-acc),#43BFFF);color:#fff;font-family:var(--font-sans);font-size:19px;font-weight:700;
          box-shadow:0 18px 34px -20px var(--cv-acc),inset 0 0 0 1px rgba(255,255,255,.35);z-index:2;
        }
        .vec-workbench{
          position:absolute;right:26px;top:34px;width:240px;height:146px;border-radius:16px;overflow:hidden;
          background:#0D0E10;border:0;box-shadow:0 22px 42px -24px rgba(10,10,10,.5);
        }
        .vec-work-head{height:24px;display:flex;align-items:center;gap:6px;padding:0 12px;background:#fff;border-bottom:1px solid var(--line)}
        .vec-work-head span{width:7px;height:7px;border-radius:50%;background:#E5484D}
        .vec-work-head span:nth-child(2){background:#F5A524}
        .vec-work-head span:nth-child(3){background:#00B64A}
        .vec-work-body{display:grid;grid-template-columns:74px 1fr;gap:10px;padding:10px;height:122px}
        .vec-tools{display:grid;gap:8px}
        .vec-upload{border:1px dashed rgba(255,255,255,.2);border-radius:8px;background:rgba(255,255,255,.04);display:grid;place-items:center;color:rgba(255,255,255,.58);font-family:var(--font-sans);font-size:10px;font-weight:600}
        .vec-slider{height:7px;border-radius:999px;background:rgba(255,255,255,.12);overflow:hidden}
        .vec-slider i{display:block;height:100%;border-radius:inherit;background:linear-gradient(90deg,var(--cv-acc),#43BFFF)}
        .vec-preview{position:relative;border:1px solid rgba(255,255,255,.12);border-radius:10px;background:linear-gradient(135deg,rgba(255,255,255,.03),rgba(255,255,255,.08));display:grid;place-items:center}
        .vec-svg{position:relative;width:112px;height:58px;background:#fff;border-radius:5px;overflow:hidden}
        .vec-svg::before{content:"";position:absolute;left:15px;top:13px;width:31px;height:28px;background:#0A0A0A;border-radius:7px}
        .vec-svg::after{content:"";position:absolute;right:14px;top:8px;width:0;height:0;border-left:23px solid transparent;border-right:23px solid transparent;border-bottom:44px solid #16A9E6}
        .vec-hole{position:absolute;left:30px;top:23px;width:14px;height:14px;border-radius:50%;background:#fff;z-index:2}
        .vec-stripe{position:absolute;right:24px;top:35px;width:36px;height:5px;background:#fff;z-index:2}
        .vec-svg path{fill:none;stroke:var(--cv-acc);stroke-width:3;stroke-linecap:round;stroke-linejoin:round}
        .vec-export{
          position:absolute;left:44px;bottom:24px;width:166px;padding:10px 12px;border:1px solid var(--line);
          border-radius:12px;background:rgba(255,255,255,.86);box-shadow:0 16px 34px -26px rgba(10,10,10,.32);backdrop-filter:blur(10px);
        }
        .vec-export b{display:block;font-family:var(--font-sans);font-size:12px;line-height:1;color:var(--ink);letter-spacing:0}
        .vec-export span{display:block;margin-top:6px;font-size:9px;letter-spacing:.06em;color:var(--mute)}
      `}</style>
    </section>);

}

function ProjectCard({ p, idx, inactive = false, onRequestOpen }) {
  if (p.comingSoon) {
    return (
      <div className="card proj proj-coming" aria-label={p.kind}>
        <div className="proj-head">
          <div className="proj-n">{p.n} / 04</div>
          <div className="proj-year">{p.year}</div>
        </div>

        <div className="proj-coming-main" aria-hidden="true">
          <ComingSoonArt />
        </div>

        <div className="proj-coming-copy">
          <div className="proj-name">{p.name}</div>
          <div className="proj-desc">{p.desc}</div>
        </div>

        <a className="proj-contact" href="#contact" tabIndex={inactive ? -1 : undefined}>
          联系我 <span className="arr">→</span>
        </a>
      </div>);

  }

  const href = p.detail ? p.detailUrl || "project-detail.html" : "#";
  return (
    <a href={href} className={`card card-hov proj ${p.id === "lumen" ? "proj-vector" : ""}`} style={{ "--cv-acc": p.accent }}
    aria-label={p.name} tabIndex={inactive ? -1 : undefined} onClick={(event) => onRequestOpen?.(p, event)}>
      <div className="proj-head">
        <div className="proj-n">{p.n} / 04</div>
        <div className="proj-year">{p.year}</div>
      </div>

      <div className="proj-cover" aria-hidden="true">
        <div className="cv-base cv-grid"></div>
        <div className="cv-glow"></div>
        <CoverArt id={p.id} accent={p.accent} />
      </div>

      <div>
        <div className="proj-kind">{p.kind}</div>
        <div className="proj-name">{p.name}</div>
        <div className="proj-desc">{p.desc}</div>
      </div>

      <div className="proj-tags">
        {p.tags.map((t) => <span key={t} className="proj-tag">{t}</span>)}
      </div>

      <div className="proj-link">
        {p.detail ? "View case study" : "Case study coming"}
        <span className="arr">→</span>
      </div>
    </a>);

}

function ComingSoonArt() {
  return (
    <div className="coming-cover">
      <div className="coming-star"><span>✦</span></div>
      <div className="coming-label">COMING SOON</div>
      <div className="coming-dots" aria-hidden="true">
        <span></span><span></span><span></span><span></span>
      </div>
    </div>);

}

function CoverArt({ id, accent }) {
  if (id === "case-governance") {
    return (
      <div className="gov-cover">
        <div className="gov-flow-line"></div>
        <div className="gov-panel gov-before">
          <div className="gov-label">BEFORE · FRAGMENTED</div>
          <div className="gov-noise">
            <div className="gov-noise-row"></div>
            <div className="gov-noise-row"></div>
            <div className="gov-noise-row"></div>
            <div className="gov-noise-row"></div>
          </div>
        </div>
        <div className="gov-ai">AI</div>
        <div className="gov-panel gov-after">
          <div className="gov-token-top">
            <div className="gov-token-title">Design System</div>
            <div className="gov-token-count">42 Tokens</div>
          </div>
          <div className="gov-token-grid">
            {Array.from({ length: 8 }).map((_, i) => <div className="gov-token" key={i}></div>)}
          </div>
          <div className="gov-component">
            <b></b><span></span><span></span><span></span>
          </div>
        </div>
        <div className="gov-metrics">
          <div className="gov-metric"><b>100+</b><span>Pages</span></div>
          <div className="gov-metric"><b>127→42</b><span>Tokens</span></div>
          <div className="gov-metric"><b>3w→7d</b><span>Cycle</span></div>
        </div>
      </div>);

  }
  if (id === "lumen") {
    return (
      <div className="vec-cover">
        <div className="vec-file">
          <div className="vec-file-title">Bitmap input</div>
          <div className="vec-file-art">
            <span className="vec-file-grid"></span>
          </div>
        </div>
        <div className="vec-arrow">→</div>
        <div className="vec-workbench">
          <div className="vec-work-head"><span></span><span></span><span></span></div>
          <div className="vec-work-body">
            <div className="vec-tools">
              <div className="vec-upload">Upload</div>
              <div className="vec-slider"><i style={{ width: "72%" }}></i></div>
              <div className="vec-slider"><i style={{ width: "54%" }}></i></div>
              <div className="vec-slider"><i style={{ width: "66%" }}></i></div>
            </div>
            <div className="vec-preview">
            <div className="vec-svg">
              <span className="vec-hole"></span>
              <span className="vec-stripe"></span>
              <svg viewBox="0 0 116 58" width="116" height="58" aria-hidden="true">
                <path d="M18 45h35V14H18zM35.5 35a7 7 0 1 0 0-14a7 7 0 0 0 0 14zM74 50l24-45l24 45H74z" />
              </svg>
            </div>
            </div>
          </div>
        </div>
        <div className="vec-export">
          <b>Export SVG</b>
          <span>Editable paths · No upload</span>
        </div>
      </div>);

  }
  if (id === "nimbus") {
    return (
      <img className="proj-cover-img" src="assets/portfolio-cover-2025.png" alt="" />);

  }
  // Axiom data dense
  return (
    <div className="cv-card" style={{ left: 20, top: 20, right: 20, bottom: 20, padding: 16, background: "#0b0b0d", borderColor: "#1c1c20" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
        <div className="cv-bar" style={{ width: 60, background: "#222" }}></div>
        <div className="cv-bar" style={{ width: 30, background: accent, opacity: .9 }}></div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) =>
        <div key={i} style={{ height: 14, borderRadius: 3, background: i % 4 === 0 ? accent : "#1c1c20", opacity: i % 4 === 0 ? .9 : 1 }}></div>
        )}
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 38, marginTop: 14 }}>
        {[20, 40, 30, 60, 50, 80, 45, 70, 90, 55, 65, 40].map((h, i) =>
        <div key={i} style={{ flex: 1, height: h + "%", background: i === 8 ? accent : "#222", borderRadius: 2 }}></div>
        )}
      </div>
    </div>);

}

/* ─────────────────────────── AI Workflow ─────────────────────────── */

const FLOW = [
{ k: "01", t: "需求分析", d: "梳理业务目标、用户场景与竞品差异，明确问题边界和设计机会。", tools: ["用户研究", "竞品分析"] },
{ k: "02", t: "AI 生成 PRD", d: "用 AI 快速生成 PRD 草案，再由设计师校准范围、优先级与验收标准。", tools: ["ChatGPT", "Gemini", "Stitch"] },
{ k: "03", t: "生成设计稿", d: "基于已确认的需求和流程，生成关键界面方案并迭代视觉细节。", tools: ["Figma Make", "Claude Design"] },
{ k: "04", t: "设计系统约束", d: "用组件、Token 与交互规范约束产出，保证界面一致且可复用。", tools: ["Design System", "Design Token"] },
{ k: "05", t: "代码实现", d: "通过 Codex 与 AI 辅助把设计转成可运行页面，设计师参与走查和细节修正。", tools: ["Cursor", "Claude", "Codex"] },
{ k: "06", t: "交付上线", d: "跟进开发落地、验收与上线反馈，把真实问题回流到下一轮迭代。", tools: ["落地跟进", "AI 辅助验收"] }];


function Workflow() {
  return (
    <section id="workflow" className="workflow-sec">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span> 03 · AI Workflow</div>
            <h2 className="h-1" style={{ marginTop: 18, maxWidth: "18ch" }}>
              AI Design Workflow<span style={{ color: "var(--accent)" }}>.</span>
            </h2>
          </div>
          <p className="body">
            AI 不再只是辅助工具，而是贯穿需求分析、设计生成、系统沉淀与代码落地的协作伙伴。
            通过 AI 增强工作流的同时大幅提升设计效率与交付速度。
          </p>
        </div>

        <div className="flow">
          {FLOW.map((f, i) =>
          <div className="flow-node" key={f.k} style={{ "--i": i }}>
              <div className="flow-k mono">{f.k}</div>
              <div className="flow-t">{f.t}</div>
              <div className="flow-d">{f.d}</div>
              <div className="flow-tools">
                {f.tools.map((t) => <span key={t} className="flow-tool">{t}</span>)}
              </div>
              {i < FLOW.length - 1 && <div className="flow-link" aria-hidden="true"></div>}
            </div>
          )}
        </div>
      </div>

      <style>{`
        .workflow-sec{
          overflow:hidden;
          isolation:isolate;
        }
        .workflow-sec::before{
          content:"";
          position:absolute;
          left:0;right:0;top:0;height:360px;
          z-index:0;
          pointer-events:none;
          background:
            linear-gradient(110deg, rgba(32,139,255,.12) 0%, rgba(32,139,255,.06) 28%, transparent 62%),
            linear-gradient(250deg, rgba(125,92,255,.08) 0%, rgba(125,92,255,.04) 20%, transparent 50%);
          mask-image:linear-gradient(180deg, #000 0%, rgba(0,0,0,.75) 45%, transparent 100%);
        }
        .workflow-sec::after{
          content:"";
          position:absolute;
          left:max(24px,calc((100vw - var(--maxw)) / 2));
          top:78px;
          width:min(420px,42vw);
          height:190px;
          z-index:0;
          pointer-events:none;
          border-radius:999px;
          background:
            radial-gradient(circle at 35% 45%, rgba(32,139,255,.18), transparent 62%),
            radial-gradient(circle at 80% 35%, rgba(125,92,255,.10), transparent 58%);
          filter:blur(34px);
          opacity:.46;
        }
        .workflow-sec > .wrap{position:relative;z-index:1}
        [data-theme="dark"] .workflow-sec{
          background:var(--bg);
        }
        .flow{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1px;background:var(--line);border:1px solid var(--line);border-radius:var(--rad-lg);overflow:hidden}
        @media(max-width:880px){.flow{grid-template-columns:1fr}}
        .flow-node{position:relative;background:var(--surface);padding:32px 28px;min-height:200px;display:flex;flex-direction:column;gap:8px;transition:transform .35s cubic-bezier(.2,.7,.2,1), box-shadow .35s ease, background .35s ease;cursor:default}
        .flow-node:hover{transform:translateY(-4px);background:color-mix(in srgb, var(--accent) 4%, var(--surface));box-shadow:0 20px 40px -16px rgba(15,40,90,.18);z-index:2}
        .flow-k{font-size:11px;letter-spacing:.1em;color:var(--accent)}
        .flow-t{font-size:20px;font-weight:500;letter-spacing:-0.015em;margin-top:6px}
        .flow-d{font-size:13.5px;color:var(--mute);line-height:1.6;flex:1}
        .flow-tools{display:flex;gap:6px;flex-wrap:wrap;margin-top:14px}
        .flow-tool{font-family:var(--font-mono);font-size:10.5px;padding:4px 8px;border-radius:6px;background:var(--bg-soft);color:var(--ink-2);border:1px solid var(--line-2)}
        .flow-link{position:absolute;right:-12px;top:50%;width:24px;height:1px;background:var(--line);z-index:2}
        .flow-link::after{
          content:"→";position:absolute;right:-6px;top:-9px;
          font-family:var(--font-mono);font-size:12px;color:var(--mute-2);background:var(--bg);padding:0 4px;
        }
        @media(max-width:880px){.flow-link{display:none}}
      `}</style>
    </section>);

}

window.About = About;

function CreedIcon({ name }) {
  const s = 1.4, c = "currentColor";
  if (name === "target") return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7.5" stroke={c} strokeWidth={s}/>
      <circle cx="10" cy="10" r="3.5" stroke={c} strokeWidth={s}/>
      <circle cx="10" cy="10" r="1" fill={c}/>
    </svg>
  );
  if (name === "grid") return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
      <rect x="3" y="3" width="6" height="6" rx="1.5" stroke={c} strokeWidth={s}/>
      <rect x="11" y="3" width="6" height="6" rx="1.5" stroke={c} strokeWidth={s}/>
      <rect x="3" y="11" width="6" height="6" rx="1.5" stroke={c} strokeWidth={s}/>
      <rect x="11" y="11" width="6" height="6" rx="1.5" fill={c}/>
    </svg>
  );
  if (name === "spark") return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
      <path d="M10 2.5 L11.5 8.5 L17.5 10 L11.5 11.5 L10 17.5 L8.5 11.5 L2.5 10 L8.5 8.5 Z" fill={c}/>
    </svg>
  );
  if (name === "rocket") return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
      <path d="M14 3c-4 0-7 3-8 6l-1 1c-.4.4-.4 1 0 1.4L8.6 15c.4.4 1 .4 1.4 0l1-1c3-1 6-4 6-8 0-1.7-1.3-3-3-3z" stroke={c} strokeWidth={s} strokeLinejoin="round"/>
      <circle cx="13" cy="7" r="1.4" fill={c}/>
      <path d="M5.5 14.5l-2 2M3.5 13l-1 1M7 16l-1 1" stroke={c} strokeWidth={s} strokeLinecap="round"/>
    </svg>
  );
  return null;
}
window.CreedIcon = CreedIcon;
window.Projects = Projects;
window.Workflow = Workflow;
