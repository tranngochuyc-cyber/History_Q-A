"use client";
import { useState } from "react";
import { ArrowRight, Check, X } from "lucide-react";
import type { Question } from "@/lib/types";
function stableOptions(q: Extract<Question, { type: "multiple-choice" }>) {
  const shift =
    q.id.split("").reduce((n, c) => n + c.charCodeAt(0), 0) % q.options.length;
  return [...q.options.slice(shift), ...q.options.slice(0, shift)];
}
export function QuizRenderer({
  question,
  onAnswer,
}: {
  question: Question;
  onAnswer: (v: string | number | boolean) => void;
}) {
  return (
    <div className="quiz-panel reveal">
      <div className="eyebrow">
        {question.type.replace("-", " ")} · {question.difficulty}
      </div>
      <h2>{question.prompt}</h2>
      {question.type === "year" ? (
        <YearGuess onAnswer={onAnswer} />
      ) : question.type === "true-false" ? (
        <div className="answer-options binary">
          <button onClick={() => onAnswer(true)}>
            <Check size={20} /> True
          </button>
          <button onClick={() => onAnswer(false)}>
            <X size={20} /> False
          </button>
        </div>
      ) : (
        <div className="answer-options">
          {stableOptions(question).map((o, i) => (
            <button key={o.id} onClick={() => onAnswer(o.id)}>
              <span>{String.fromCharCode(65 + i)}</span>
              {o.text}
              <ArrowRight size={16} />
            </button>
          ))}
        </div>
      )}
      <p className="quiz-note">Take your time. There is no timer.</p>
    </div>
  );
}
function YearGuess({ onAnswer }: { onAnswer: (v: number) => void }) {
  const [year, setYear] = useState("");
  const number = Number(year),
    valid =
      year.trim() !== "" &&
      Number.isInteger(number) &&
      number !== 0 &&
      number >= -5000 &&
      number <= 2100;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (valid) onAnswer(number);
      }}
    >
      <label className="year-label" htmlFor="year">
        Your year
      </label>
      <input
        className="year-input"
        id="year"
        type="number"
        min={-5000}
        max={2100}
        step={1}
        placeholder="e.g. 1868"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        aria-describedby="year-help"
      />
      <p id="year-help">
        Use negative numbers for BCE (−221 = 221 BCE). There is no year zero.
        <br />
        Exact: 100 base points · within 5 years: 70 · within 10: 40
      </p>
      <button className="button primary" disabled={!valid}>
        Confirm year <ArrowRight size={18} />
      </button>
    </form>
  );
}
