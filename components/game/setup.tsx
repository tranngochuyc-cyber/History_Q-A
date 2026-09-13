"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Compass, Route } from "lucide-react";
import { useProgress } from "../providers";
import { FilterPanel } from "../filters";
import { events } from "@/lib/data/events";
import { DEFAULT_SETTINGS } from "@/lib/config";
import { filterEvents } from "@/lib/game/filters";
import { startSession } from "@/lib/game/game-state";
import type { Settings } from "@/lib/types";
export function Setup() {
  const store = useProgress();
  return store.ready ? (
    <SetupForm initial={store.data.settings} />
  ) : (
    <div className="loading-skeleton" aria-label="Loading saved settings" />
  );
}
function SetupForm({ initial }: { initial: Settings }) {
  const { data, update } = useProgress(),
    router = useRouter();
  const [settings, setLocalSettings] = useState(initial);
  function setSettings(next: Settings) {
    setLocalSettings(next);
    update((p) => ({ ...p, settings: next }));
  }
  const matching = filterEvents(events, settings);
  const [replace, setReplace] = useState(false);
  const active = data.active && data.active.phase !== "GAME_COMPLETE";
  function start() {
    if (active && !replace) {
      setReplace(true);
      return;
    }
    const activeGame = startSession(settings, data.discovered);
    update((p) => ({ ...p, settings, active: activeGame }));
    router.push("/game");
  }
  return (
    <>
      <div className="page-heading">
        <div className="eyebrow">CREATE AN EXPEDITION</div>
        <h1>Let curiosity set the course.</h1>
        <p>
          Choose your corner of history. We’ll take care of the discoveries.
        </p>
      </div>
      {active && (
        <div className="notice">
          <span>
            You have a journey in progress: round {data.active!.round} of{" "}
            {data.active!.settings.rounds}.
          </span>
          <Link href="/game" className="text-link">
            Resume journey <ArrowRight size={16} />
          </Link>
        </div>
      )}
      <div className="setup-layout">
        <div className="setup-main">
          <fieldset className="round-picker">
            <legend>
              <Route size={18} /> Journey length
            </legend>
            <div className="round-options">
              {[10, 20, 30].map((n) => (
                <button
                  key={n}
                  aria-pressed={settings.rounds === n}
                  className={settings.rounds === n ? "selected" : ""}
                  onClick={() => setSettings({ ...settings, rounds: n })}
                >
                  <strong>{n}</strong>
                  <span>rounds</span>
                  <small>~{n} min</small>
                </button>
              ))}
            </div>
          </fieldset>
          <FilterPanel
            value={settings}
            onChange={(f) => {
              setSettings({ ...settings, ...f });
              setReplace(false);
            }}
          />
        </div>
        <aside className="expedition-summary">
          <Compass size={42} strokeWidth={1} />
          <div className="eyebrow">YOUR JOURNEY</div>
          <h2>
            {settings.rounds} moments.
            <br />
            Endless perspectives.
          </h2>
          <div className="summary-count">
            <strong>{matching.length}</strong>
            <span>events in your selection</span>
          </div>
          <p>
            {matching.length < 3
              ? "At least three events are needed for a journey. Remove one or more filters to widen your selection."
              : matching.length < settings.rounds * 3
                ? "All available events appear before any repeat. In this selection, some events will return with different questions."
                : "A fresh collection of moments is waiting to be explored."}
          </p>
          <div className="summary-line">
            <span>Question types</span>
            <strong>3</strong>
          </div>
          <div className="summary-line">
            <span>Progress</span>
            <strong>Saved automatically</strong>
          </div>
          {replace && (
            <div className="notice">
              Starting replaces the unfinished journey. Your discoveries and
              answers remain saved.
            </div>
          )}
          <button
            className="button primary full"
            disabled={matching.length < 3}
            onClick={start}
          >
            {replace ? "Replace & start journey" : "Begin your journey"}
            <ArrowRight size={18} />
          </button>
          {replace && (
            <button
              className="button ghost full"
              onClick={() => setReplace(false)}
            >
              Keep current journey
            </button>
          )}
          <button
            className="text-link"
            onClick={() => {
              setSettings({ ...DEFAULT_SETTINGS });
              setReplace(false);
            }}
          >
            Reset filters
          </button>
        </aside>
      </div>
    </>
  );
}
