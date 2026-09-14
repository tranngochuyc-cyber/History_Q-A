"use client";
import { vi } from "@/lib/i18n";
import { useRef } from "react";
import { Check, X } from "lucide-react";
import type { Question, GameAnswer } from "@/lib/types";
export function QuizRenderer({ question, onAnswer, result }: {
  question: Question;
  onAnswer: (v: string | number | boolean) => void;
  result?: GameAnswer;
}) {
  const submitted = useRef(false);
  if (question.type !== "multiple-choice") return null;
  const shift = question.id.split("").reduce((n, c) => n + c.charCodeAt(0), 0) % 4;
  const options = [...question.options.slice(shift), ...question.options.slice(0, shift)];
  return (
    <div className="quiz-panel">
      <div className="eyebrow">CHỌN MỘT ĐÁP ÁN · {vi(question.difficulty)}</div>
      <h2 id="quiz-prompt">{question.prompt}</h2>
      <div className="answer-options" role="group" aria-labelledby="quiz-prompt">
        {options.map((option, index) => {
          const chosen = result?.answer === option.id;
          const correct = result && option.id === question.answer;
          const state = result ? correct ? "answer-correct" : chosen ? "answer-wrong" : "answer-muted" : "";
          return (
            <button type="button" key={option.id} aria-pressed={chosen}
              disabled={!!result} className={state}
              onClick={() => {
                if (submitted.current || result) return;
                submitted.current = true;
                onAnswer(option.id);
              }}>
              <span>{String.fromCharCode(65 + index)}</span>
              <strong>{option.text}</strong>
              {correct ? <Check size={24} aria-label="Đáp án đúng" /> : chosen ? <X size={24} aria-label="Đáp án sai" /> : null}
            </button>
          );
        })}
      </div>
      {result ? (
        <div className={"quiz-feedback " + (result.correct ? "is-correct" : "is-wrong")} role="status">
          <strong>{result.correct ? "Chính xác!" : "Chưa đúng — đáp án đúng đã sáng lên."}</strong>
          <span className="points-pop" key={result.id}>+{result.points} điểm</span>
        </div>
      ) : <p className="quiz-note">Bấm một đáp án để trả lời ngay.</p>}
    </div>
  );
}
