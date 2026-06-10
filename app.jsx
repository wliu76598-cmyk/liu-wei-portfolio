// app.jsx — wires Nav + Hero + sections + Tweaks; scroll-spy + reveal

const { useEffect: uE, useState: uS, useRef: uR } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "dark": false,
  "hero": "aurora"
}/*EDITMODE-END*/;

const HERO_OPTIONS = [
  { value: "aurora", label: "Aurora" },
  { value: "grid",   label: "Grid"   },
  { value: "cards",  label: "Cards"  },
];

/* ─────────────────────── Global Toast ─────────────────────── */

function ToastHost() {
  const [toasts, setToasts] = uS([]);
  uE(() => {
    let nextId = 1;
    const onToast = (e) => {
      const id = nextId++;
      const t = { id, ...e.detail };
      setToasts(arr => [...arr, t]);
      setTimeout(() => {
        setToasts(arr => arr.map(x => x.id === id ? { ...x, leaving: true } : x));
        setTimeout(() => setToasts(arr => arr.filter(x => x.id !== id)), 320);
      }, 3200);
    };
    window.addEventListener("app-toast", onToast);
    return () => window.removeEventListener("app-toast", onToast);
  }, []);

  return (
    <>
      <div className="toast-host" aria-live="polite" aria-atomic="true">
        {toasts.map(t => (
          <div key={t.id} className={"toast" + (t.leaving ? " leaving" : "")}>
            <span className="toast-ic" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" fill="#00B64A"/>
                <path d="M5.5 10.2l3 3 6-6" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </span>
            <div className="toast-body">
              <div className="toast-t">{t.title}</div>
              {t.msg && <div className="toast-m">{t.msg}</div>}
            </div>
            <button className="toast-x" aria-label="Dismiss" onClick={() => setToasts(a => a.filter(x => x.id !== t.id))}>×</button>
          </div>
        ))}
      </div>
      <style>{`
        .toast-host{
          position:fixed;top:calc(var(--nav-h) + 16px);left:50%;transform:translateX(-50%);
          z-index:80;display:flex;flex-direction:column;gap:10px;align-items:center;
          pointer-events:none;
        }
        .toast{
          pointer-events:auto;
          display:flex;align-items:center;gap:12px;
          min-width:320px;max-width:440px;
          padding:14px 14px;border-radius:14px;
          background:color-mix(in srgb, var(--surface) 80%, transparent);
          border:1px solid rgba(255,255,255,.9);
          -webkit-backdrop-filter:blur(22px) saturate(180%);
          backdrop-filter:blur(22px) saturate(180%);
          box-shadow:
            0 1px 0 rgba(255,255,255,.7) inset,
            0 0 0 1px rgba(255,255,255,.2) inset,
            0 24px 60px -20px rgba(15,40,90,.28);
          animation:toastIn .42s cubic-bezier(.2,.7,.2,1.1);
          color:var(--ink);
        }
        [data-theme="dark"] .toast{
          background:rgba(20,20,20,.7);
          border-color:rgba(255,255,255,.1);
          box-shadow:
            0 1px 0 rgba(255,255,255,.06) inset,
            0 24px 60px -20px rgba(0,0,0,.7);
        }
        .toast.leaving{animation:toastOut .32s ease forwards}
        .toast-ic{flex-shrink:0;display:grid;place-items:center;width:20px;height:20px}
        .toast-body{flex:1;min-width:0}
        .toast-t{font-size:13.5px;font-weight:500;letter-spacing:-0.005em;color:var(--ink);line-height:1.3}
        .toast-m{font-size:12px;color:var(--mute);margin-top:3px;line-height:1.5}
        .toast-x{
          background:transparent;border:0;cursor:pointer;color:var(--mute-2);
          font-size:18px;line-height:1;padding:2px 6px;border-radius:6px;
          align-self:center;
          transition:background .15s ease, color .15s ease;
        }
        .toast-x:hover{background:rgba(10,10,10,.06);color:var(--ink)}
        @keyframes toastIn{
          0%{opacity:0;transform:translateY(-12px) scale(.96)}
          100%{opacity:1;transform:translateY(0) scale(1)}
        }
        @keyframes toastOut{
          0%{opacity:1;transform:translateY(0) scale(1)}
          100%{opacity:0;transform:translateY(-10px) scale(.96)}
        }
      `}</style>
    </>
  );
}

function BackToTop() {
  const [show, setShow] = uS(false);

  uE(() => {
    const onScroll = () => setShow(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <button
        className={"back-top" + (show ? " is-show" : "")}
        type="button"
        aria-label="回到顶部"
        onPointerDown={(e) => fireButtonConfetti(e.currentTarget)}
        onMouseDown={(e) => fireButtonConfetti(e.currentTarget)}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 19V5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"/>
          <path d="M6.5 10.5L12 5l5.5 5.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <style>{`
        .back-top{
          position:fixed;right:24px;bottom:24px;z-index:70;
          display:grid;place-items:center;width:46px;height:46px;
          border:1px solid var(--ink);border-radius:14px;
          background:color-mix(in srgb, var(--surface) 78%, transparent);
          color:var(--ink);
          -webkit-backdrop-filter:blur(18px) saturate(160%);
          backdrop-filter:blur(18px) saturate(160%);
          box-shadow:0 18px 44px -18px rgba(15,40,90,.32);
          cursor:pointer;opacity:0;pointer-events:none;
          transform:translateY(10px) scale(.96);
          transition:opacity .22s ease, transform .22s ease, color .2s ease, background .2s ease, border-color .2s ease;
        }
        .back-top.is-show{opacity:1;pointer-events:auto;transform:translateY(0) scale(1)}
        .back-top:hover{color:var(--accent);border-color:var(--accent);transform:translateY(-2px) scale(1)}
        .back-top:active{transform:translateY(0) scale(.98)}
        [data-theme="dark"] .back-top{
          background:rgba(20,20,20,.72);
          border-color:var(--ink);
          box-shadow:0 18px 44px -18px rgba(0,0,0,.75);
        }
        @media(max-width:640px){
          .back-top{right:16px;bottom:16px;width:42px;height:42px}
        }
      `}</style>
    </>
  );
}

function ButtonConfetti() {
  uE(() => {
    const selector = "button, a.btn, a.nav-cta, [role='button']";
    const onPress = (e) => {
      const target = e.target.closest?.(selector);
      if (!target || target.disabled || target.getAttribute("aria-disabled") === "true") return;
      fireButtonConfetti(target);
    };

    document.addEventListener("pointerdown", onPress, true);
    document.addEventListener("mousedown", onPress, true);
    document.addEventListener("click", onPress, true);
    return () => {
      document.removeEventListener("pointerdown", onPress, true);
      document.removeEventListener("mousedown", onPress, true);
      document.removeEventListener("click", onPress, true);
    };
  }, []);

  return (
    <style>{`
      .button-confetti{
        position:fixed;left:0;top:0;z-index:120;pointer-events:none;
        width:0;height:0;overflow:visible;
      }
      .button-confetti span{
        position:absolute;left:0;top:0;width:7px;height:10px;border-radius:2px;
        background:var(--c);
        transform:translate(-50%,-50%) rotate(0deg) scale(var(--s));
        animation:buttonConfettiPop .82s cubic-bezier(.16,.9,.24,1) forwards;
        opacity:.95;
      }
      .button-confetti span:nth-child(3n){width:6px;height:6px;border-radius:50%}
      .button-confetti span:nth-child(4n){width:10px;height:4px;border-radius:999px}
      @keyframes buttonConfettiPop{
        0%{transform:translate(-50%,-50%) rotate(0deg) scale(.4);opacity:0}
        12%{opacity:1}
        100%{
          transform:
            translate(calc(-50% + var(--x)), calc(-50% + var(--y)))
            rotate(var(--r))
            scale(var(--s));
          opacity:0;
        }
      }
    `}</style>
  );
}

function launchButtonConfetti(anchor) {
  const rect = anchor.getBoundingClientRect();
  const burst = document.createElement("div");
  burst.className = "button-confetti";
  burst.style.left = `${rect.left + rect.width * .72}px`;
  burst.style.top = `${rect.top + rect.height / 2}px`;

  const colors = ["#208BFF", "#43BFFF", "#00B64A", "#F5A524", "#7B5BFF", "#E5484D"];
  const count = 20;
  for (let i = 0; i < count; i++) {
    const piece = document.createElement("span");
    const angle = (Math.PI * 2 * i) / count + (Math.random() - .5) * .65;
    const distance = 42 + Math.random() * 44;
    const fall = 18 + Math.random() * 34;
    piece.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
    piece.style.setProperty("--y", `${Math.sin(angle) * distance + fall}px`);
    piece.style.setProperty("--r", `${(Math.random() * 260 - 130).toFixed(1)}deg`);
    piece.style.setProperty("--s", `${(.72 + Math.random() * .58).toFixed(2)}`);
    piece.style.setProperty("--c", colors[i % colors.length]);
    burst.appendChild(piece);
  }

  document.body.appendChild(burst);
  window.setTimeout(() => burst.remove(), 900);
}

function fireButtonConfetti(anchor) {
  if (!anchor) return;
  const now = performance.now();
  if (anchor.__lastButtonConfettiAt && now - anchor.__lastButtonConfettiAt < 180) return;
  anchor.__lastButtonConfettiAt = now;
  launchButtonConfetti(anchor);
}

window.launchButtonConfetti = launchButtonConfetti;
window.fireButtonConfetti = fireButtonConfetti;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [active, setActive] = uS("about");

  // theme on body
  uE(() => {
    document.body.dataset.theme = t.dark ? "dark" : "light";
  }, [t.dark]);

  // scroll-spy: highlight the section currently in view
  uE(() => {
    const ids = ["about","projects","workflow","system","experience","contact"];
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;
    const io = new IntersectionObserver(entries => {
      // pick the most-visible entry that's intersecting
      const visible = entries.filter(e => e.isIntersecting)
        .sort((a,b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: "-40% 0px -50% 0px", threshold: [0, .25, .5, .75, 1] });
    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, []);

  // reveal-on-scroll
  uE(() => {
    const els = document.querySelectorAll("section");
    els.forEach(el => el.classList.add("reveal"));
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.05 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav active={active} />
      <main>
        <Hero visual={t.hero} />
        <About />
        <Projects />
        <Workflow />
        <DesignSystem />
        <Experience />
        <Contact />
      </main>
      <Footer />

      <ToastHost />
      <ButtonConfetti />
      <BackToTop />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme" />
        <TweakToggle
          label="Dark mode"
          value={t.dark}
          onChange={(v) => setTweak("dark", v)}
        />
        <TweakSection label="Hero visual" />
        <TweakRadio
          label="Style"
          value={t.hero}
          options={HERO_OPTIONS.map(o => ({ value: o.value, label: o.label }))}
          onChange={(v) => setTweak("hero", v)}
        />
        <div style={{
          fontSize:11, lineHeight:1.5, color:"rgba(41,38,27,.55)",
          padding:"4px 2px"
        }}>
          切换 Hero 区域的背景视觉。<br/>
          移动鼠标查看每种风格的交互效果。
        </div>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
