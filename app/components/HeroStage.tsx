"use client";
import { useEffect, useRef, useState, type CSSProperties } from "react";

// Two short product demos take turns in the hero: meeting audio becoming a
// transcript (WavePlume) and a compare-and-merge pass over a file (DeltaTxt).
// The demos themselves are CSS animations. This component decides which card
// is in front and remounts a demo so it restarts when its card returns.

const HOLD_MS = 9800;

const apps = [
  { id: "waveplume", name: "WavePlume", icon: "/apps/waveplume/app-assets/png/waveplume-128.png", summary: "Meeting audio becomes a transcript" },
  { id: "deltatxt", name: "DeltaTxt", icon: "/apps/deltatxt/icon-160.webp", summary: "Two versions become one file" },
] as const;

const bars = [12,45,72,86,51,44,46,34,46,51,18,24,38,57,43,58,62,21,47,76,58,62,55,15,43,60,67,32,33,42,20,39,56,30,29,49,77,62,70,65,18,50,71,46,46,44,14,26,35,53,31,35,50,42,64,75,38,27,55,80,59,60,55,20];

// A fictional meeting, in the spirit of the WavePlume product screenshots.
const transcript = [
  ["0:00", "Let’s walk through the plan for the next release."],
  ["0:18", "First priority is a simpler welcome for new customers."],
  ["0:42", "Keep the setup short. Explain each choice as it appears."],
  ["1:05", "Design review is Thursday. Bring the updated screens."],
  ["1:31", "Research pointed to clearer labels and faster search."],
  ["2:04", "Test the whole flow, from recording to exported notes."],
];

type Token = [kind: "kw" | "type" | "str" | "fn" | "plain", text: string];
type CodeLine = { n: number; change?: "del" | "add"; tokens: Token[] };

const code: CodeLine[] = [
  { n: 19, tokens: [["plain", "@dataclass(slots="], ["kw", "True"], ["plain", ")"]] },
  { n: 20, tokens: [["kw", "class "], ["type", "Row"], ["plain", ":"]] },
  { n: 21, tokens: [["plain", "    "], ["str", '"""A single normalized record."""']] },
  { n: 22, tokens: [["plain", "    record_id: "], ["type", "str"]] },
  { n: 23, tokens: [["plain", "    customer: "], ["type", "str"]] },
  { n: 24, change: "del", tokens: [["plain", "    amount: "], ["type", "float"]] },
  { n: 24, change: "add", tokens: [["plain", "    amount: "], ["type", "Decimal"]] },
  { n: 25, tokens: [["plain", "    booked_on: "], ["type", "date"]] },
  { n: 26, change: "del", tokens: [["plain", "    tags: "], ["type", "list"], ["plain", " = []"]] },
  { n: 26, change: "add", tokens: [["plain", "    tags: "], ["type", "list"], ["plain", "["], ["type", "str"], ["plain", "] = "], ["fn", "field"], ["plain", "(default_factory="], ["type", "list"], ["plain", ")"]] },
  { n: 27, tokens: [["plain", ""]] },
  { n: 28, tokens: [["plain", "    "], ["kw", "def "], ["fn", "to_dict"], ["plain", "(self) -> "], ["type", "dict"], ["plain", ":"]] },
];

export function HeroStage() {
  const [active, setActive] = useState(0);
  const [cycle, setCycle] = useState(0);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const arm = () => {
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => {
        setActive((index) => (index + 1) % apps.length);
        setCycle((count) => count + 1);
      }, HOLD_MS);
    };
    const visibility = () => {
      if (document.hidden) window.clearTimeout(timer.current);
      else setCycle((count) => count + 1);
    };
    arm();
    document.addEventListener("visibilitychange", visibility);
    return () => {
      window.clearTimeout(timer.current);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, [active, cycle]);

  const choose = (index: number) => {
    if (index === active) return;
    setActive(index);
    setCycle((count) => count + 1);
  };

  return <div className="hero-stage" data-active={apps[active].id}>
    <div className="stage-scene" aria-hidden="true">
      <div className="stage-glow" />

      <figure className={`stage-card stage-wave${active === 0 ? " is-front" : ""}`}>
        <figcaption className="stage-bar">
          <img src={apps[0].icon} alt="" width={22} height={22} />
          <b>WavePlume</b>
          <span className="stage-status"><i className="stage-rec" />Recording · 24:16</span>
        </figcaption>
        <div className="stage-body" key={active === 0 ? cycle : "rest"}>
          <div className="stage-waveform">
            {bars.map((height, index) => <span key={index} style={{ "--h": `${height}%`, "--i": index } as CSSProperties} />)}
            <i className="stage-playhead" />
          </div>
          <ol className="stage-transcript">
            {transcript.map(([time, text], index) => <li key={time} style={{ "--k": index } as CSSProperties}><time>{time}</time><span>{text}</span></li>)}
          </ol>
          <p className="stage-note">Transcribed on this computer. Nothing uploaded.</p>
        </div>
      </figure>

      <figure className={`stage-card stage-delta${active === 1 ? " is-front" : ""}`}>
        <figcaption className="stage-bar">
          <img src={apps[1].icon} alt="" width={22} height={22} />
          <b>DeltaTxt</b>
          <span className="stage-status">Compare · normalize.py</span>
        </figcaption>
        <div className="stage-body" key={active === 1 ? cycle : "rest"}>
          <div className="stage-tabs"><span className="is-current">normalize.py</span><span>baseline/normalize.py</span><em className="stage-merge"><b>2 changes</b><b>Merged</b></em></div>
          <ol className="stage-code">
            {code.map((line, index) => <li key={index} className={line.change ? `diff-${line.change}` : undefined} style={{ "--k": index } as CSSProperties}>
              <span className="stage-gutter">{line.n}</span>
              <span className="stage-sign">{line.change === "del" ? "−" : line.change === "add" ? "+" : ""}</span>
              <code>{line.tokens.map(([kind, text], tokenIndex) => kind === "plain" ? <span key={tokenIndex}>{text}</span> : <span key={tokenIndex} className={`tok-${kind}`}>{text}</span>)}</code>
            </li>)}
          </ol>
        </div>
      </figure>
    </div>

    <div className="stage-switch" role="group" aria-label="Choose which app to preview">
      {apps.map((app, index) => <button key={app.id} type="button" aria-pressed={index === active} onClick={() => choose(index)}>
        <b>{app.name}</b><span>{app.summary}</span>
        {index === active && <i key={cycle} className="stage-progress" style={{ "--hold": `${HOLD_MS}ms` } as CSSProperties} />}
      </button>)}
    </div>
  </div>;
}
