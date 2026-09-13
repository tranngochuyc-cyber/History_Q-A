"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  ArrowRight,
  Check,
  X,
  Flame,
  BookmarkPlus,
  ArrowLeft,
} from "lucide-react";
import { useProgress } from "../providers";
import { EventCard, EventImage, EventMeta } from "../event/event-card";
import { QuizRenderer } from "../questions/quiz-renderer";
import { eventById, questions, formatYear } from "@/lib/data/events";
import { transition, nextQuestion } from "@/lib/game/game-state";
import type { Action } from "@/lib/game/game-state";
import { GameResults } from "./results";
export function Game() {
  const { data, ready, update } = useProgress(),
    game = data.active,
    heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    heading.current?.focus();
  }, [game?.phase, game?.round]);
  if (!ready)
    return <div className="loading-skeleton" aria-label="Loading journey" />;
  if (!game)
    return (
      <div className="empty-state">
        <h1>Your next chapter awaits.</h1>
        <p>Choose a journey to begin discovering history.</p>
        <Link className="button primary" href="/play">
          Plan a journey <ArrowRight size={17} />
        </Link>
      </div>
    );
  const dispatch = (action: Action) => update((p) => transition(p, action));
  if (game.phase === "GAME_COMPLETE") return <GameResults game={game} />;
  const event = game.selected ? eventById(game.selected) : null,
    q = questions.find((q) => q.id === game.questionId),
    answer = game.answers.at(-1),
    hideYear = q?.type === "year";
  return (
    <>
      <div className="game-top">
        <Link href="/play" className="text-link">
          <ArrowLeft size={15} /> Save & leave
        </Link>
        <span>EXPEDITION / {game.settings.rounds} MOMENTS</span>
      </div>
      <div className="game-header">
        <div>
          <span className="eyebrow">YOUR PROGRESS</span>
          <strong>
            Round {String(game.round).padStart(2, "0")}{" "}
            <small>/ {game.settings.rounds}</small>
          </strong>
        </div>
        <div>
          <span className="eyebrow">SCORE</span>
          <strong aria-live="polite">{game.score.toLocaleString()}</strong>
        </div>
        <div>
          <span className="eyebrow">STREAK</span>
          <strong className={game.streak > 1 ? "gold" : ""}>
            <Flame size={22} /> ×{game.streak}
          </strong>
        </div>
      </div>
      <div
        className="progress-track"
        role="progressbar"
        aria-label="Journey progress"
        aria-valuenow={game.answers.length}
        aria-valuemin={0}
        aria-valuemax={game.settings.rounds}
      >
        <div
          style={{
            width: `${(game.answers.length / game.settings.rounds) * 100}%`,
          }}
        />
      </div>
      {game.phase === "SELECT_EVENT" ? (
        <section className="game-stage">
          <div className="stage-heading">
            <div className="eyebrow">01 / DISCOVER & CHOOSE</div>
            <h1 ref={heading} tabIndex={-1}>
              Three moments. Which calls to you?
            </h1>
            <p>Every choice opens a different chapter of human history.</p>
          </div>
          <div className="event-grid">
            {game.choices.map((id) => (
              <EventCard
                key={id}
                event={eventById(id)}
                hideYear={nextQuestion(id, game, data.answers).type === "year"}
                discovered={data.discovered.includes(id)}
                onSelect={() => dispatch({ type: "SELECT", eventId: id })}
              />
            ))}
          </div>
          {game.choices.length < 3 && (
            <p className="pool-note">
              Your filters contain {game.choices.length} event
              {game.choices.length === 1 ? "" : "s"}. Each available event is
              shown.
            </p>
          )}
        </section>
      ) : event && q ? (
        <section className="game-stage">
          <div className="stage-heading">
            <div className="eyebrow">
              {game.phase === "EVENT_BRIEF"
                ? "02 / THE HISTORICAL BRIEF"
                : game.phase === "QUESTION"
                  ? "03 / TEST YOUR KNOWLEDGE"
                  : "04 / A NEW DISCOVERY"}
            </div>
            <h1 ref={heading} tabIndex={-1}>
              {event.title}
            </h1>
          </div>
          <div className="brief-layout">
            <aside className="brief-visual">
              <EventImage
                event={event}
                hideYear={hideYear && game.phase !== "QUESTION_RESULT"}
              />
              <EventMeta
                event={event}
                hideYear={hideYear && game.phase !== "QUESTION_RESULT"}
              />
              <div className="chips">
                {event.categories.map((c) => (
                  <span className="tag" key={c}>
                    {c}
                  </span>
                ))}
                <span className="tag">{event.scale}</span>
              </div>
              <p>{event.locationText}</p>
              {event.imageAttribution && (
                <a
                  className="image-credit"
                  href={event.imageAttribution.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {event.imageAttribution.title}
                </a>
              )}
            </aside>
            <div>
              {game.phase === "EVENT_BRIEF" ? (
                <div className="brief-copy reveal">
                  <span className="eyebrow">ARCHIVE FIELD NOTES</span>
                  <h2>{event.shortSummary}</h2>
                  <p>{event.summary}</p>
                  {hideYear && (
                    <p className="quiz-note">
                      The date is concealed for this year challenge.
                    </p>
                  )}
                  <button
                    className="button primary"
                    onClick={() => dispatch({ type: "CONTINUE" })}
                  >
                    Continue to question <ArrowRight size={18} />
                  </button>
                </div>
              ) : game.phase === "QUESTION" ? (
                <QuizRenderer
                  key={q.id}
                  question={q}
                  onAnswer={(value) => dispatch({ type: "ANSWER", value })}
                />
              ) : answer ? (
                <div
                  className={`question-result reveal ${answer.correct ? "correct" : "incorrect"}`}
                  role="status"
                >
                  <div className="result-icon">
                    {answer.correct ? <Check size={30} /> : <X size={30} />}
                  </div>
                  <div className="eyebrow">
                    {answer.correct
                      ? "WELL REMEMBERED"
                      : "ANOTHER PIECE OF THE STORY"}
                  </div>
                  <h2>
                    {answer.correct ? "Correct." : "Not quite."}{" "}
                    <span>+{answer.points}</span>
                  </h2>
                  <div className="answer-review">
                    <span>THE CORRECT ANSWER</span>
                    <strong>
                      {q.type === "multiple-choice"
                        ? q.options.find((o) => o.id === q.answer)?.text
                        : q.type === "true-false"
                          ? q.answer
                            ? "True"
                            : "False"
                          : formatYear(q.answer)}
                    </strong>
                  </div>
                  <p>{q.explanation}</p>
                  <div className="discovery-note">
                    <BookmarkPlus size={18} />
                    {game.initialDiscovered.includes(event.id)
                      ? "Knowledge added to your archive."
                      : "Event discovered. Added to your archive."}
                  </div>
                  <button
                    className="button primary"
                    onClick={() => dispatch({ type: "NEXT" })}
                  >
                    {game.round === game.settings.rounds
                      ? "View journey results"
                      : "Discover next events"}
                    <ArrowRight size={18} />
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ) : (
        <div className="empty-state">
          <h2>This saved event is unavailable.</h2>
          <Link href="/play" className="button">
            Start a fresh journey
          </Link>
        </div>
      )}
    </>
  );
}
