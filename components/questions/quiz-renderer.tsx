"use client";
import { vi } from "@/lib/i18n";
import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import type { Question } from "@/lib/types";
export function QuizRenderer({ question, onAnswer }: {
  question: Question; onAnswer: (v: string | number | boolean) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  if (question.type !== "multiple-choice") return null;
  const shift = question.id.split("").reduce((n, c) => n + c.charCodeAt(0), 0) % 4;
  const options = [...question.options.slice(shift), ...question.options.slice(0, shift)];
  return (
    <div className="quiz-panel reveal">
      <div className="eyebrow">CHỌN MỘT ĐÁP ÁN · {vi(question.difficulty)}</div>
      <h2 id="quiz-prompt">{question.prompt}</h2>
      <div className="answer-options" role="group" aria-labelledby="quiz-prompt">
        {options.map((option, index) => (
          <button type="button" key={option.id} aria-pressed={selected === option.id}
            className={selected === option.id ? "answer-selected" : ""}
            onClick={() => setSelected(option.id)}>
            <span>{String.fromCharCode(65 + index)}</span>
            <strong>{option.text}</strong>
            {selected === option.id && <Check size={22} aria-hidden="true" />}
          </button>
        ))}
      </div>
      <div className="quiz-actions">
        <p className="quiz-note">Chọn đáp án rồi xác nhận. Không giới hạn thời gian.</p>
        <button type="button" className="button primary" disabled={selected === null}
          onClick={() => { if (selected !== null) onAnswer(selected); }}>
          Xác nhận <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
