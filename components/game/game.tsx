"use client";
import { vi } from "@/lib/i18n";
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
    return (
      <div className="loading-skeleton" aria-label="Đang tải hành trình" />
    );
  if (!game)
    return (
      <div className="empty-state">
        <h1>Câu chuyện tiếp theo đang chờ bạn.</h1>
        <p>Chọn hành trình để bắt đầu khám phá lịch sử.</p>
        <Link className="button primary" href="/play">
          Tạo hành trình <ArrowRight size={17} />
        </Link>
      </div>
    );
  const dispatch = (action: Action) => update((p) => transition(p, action));
  if (game.phase === "GAME_COMPLETE") return <GameResults game={game} />;
  const event = game.selected ? eventById(game.selected) : null,
    q = questions.find((q) => q.id === game.questionId),
    answer = game.answers.at(-1),
    hideYear = q?.id.endsWith("-year");
  return (
    <>
      <div className="game-top">
        <Link href="/play" className="text-link">
          <ArrowLeft size={15} /> Lưu và rời đi
        </Link>
        <span>HÀNH TRÌNH / {game.settings.rounds} THỜI KHẮC</span>
      </div>
      <div className="game-header">
        <div>
          <span className="eyebrow">TIẾN TRÌNH</span>
          <strong>
            Vòng {String(game.round).padStart(2, "0")}{" "}
            <small>/ {game.settings.rounds}</small>
          </strong>
        </div>
        <div>
          <span className="eyebrow">ĐIỂM</span>
          <strong aria-live="polite">
            {game.score.toLocaleString("vi-VN")}
          </strong>
        </div>
        <div>
          <span className="eyebrow">CHUỖI ĐÚNG</span>
          <strong className={game.streak > 1 ? "gold" : ""}>
            <Flame size={22} /> ×{game.streak}
          </strong>
        </div>
      </div>
      <div
        className="progress-track"
        role="progressbar"
        aria-label="Tiến trình hành trình"
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
            <div className="eyebrow">01 / KHÁM PHÁ VÀ LỰA CHỌN</div>
            <h1 ref={heading} tabIndex={-1}>
              Ba thời khắc. Bạn chọn câu chuyện nào?
            </h1>
            <p>Mỗi lựa chọn mở ra một chương khác trong lịch sử nhân loại.</p>
          </div>
          <div className="event-grid">
            {game.choices.map((id) => (
              <EventCard
                key={id}
                event={eventById(id)}
                hideYear={nextQuestion(id, game, data.answers).id.endsWith("-year")}
                discovered={data.discovered.includes(id)}
                onSelect={() => dispatch({ type: "SELECT", eventId: id })}
              />
            ))}
          </div>
          {game.choices.length < 3 && (
            <p className="pool-note">
              Bộ lọc của bạn có {game.choices.length} sự kiện . Mỗi sự kiện phù
              hợp đều được hiển thị.
            </p>
          )}
        </section>
      ) : event && q ? (
        <section className="game-stage">
          <div className="stage-heading">
            <div className="eyebrow">
              {game.phase === "EVENT_BRIEF"
                ? "02 / CÂU CHUYỆN LỊCH SỬ"
                : game.phase === "QUESTION"
                  ? "03 / THỬ TÀI KIẾN THỨC"
                  : "04 / KHÁM PHÁ MỚI"}
            </div>
            <h1 ref={heading} tabIndex={-1}>
              {event.title}
            </h1>
          </div>
          <div className={game.phase === "QUESTION" ? "brief-layout quiz-layout" : "brief-layout"}>
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
                  <span className="tag" key={vi(c)}>
                    {vi(c)}
                  </span>
                ))}
                <span className="tag">{vi(event.scale)}</span>
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
                  <span className="eyebrow">GHI CHÉP LỊCH SỬ</span>
                  <h2>{event.shortSummary}</h2>
                  <p>{event.summary}</p>
                  {hideYear && (
                    <p className="quiz-note">
                      Niên đại được ẩn trong thử thách đoán năm này.
                    </p>
                  )}
                  <button
                    className="button primary"
                    onClick={() => dispatch({ type: "CONTINUE" })}
                  >
                    Tiếp tục đến câu hỏi <ArrowRight size={18} />
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
                      ? "BẠN NHỚ RẤT TỐT"
                      : "THÊM MỘT ĐIỀU ĐỂ NHỚ"}
                  </div>
                  <h2>
                    {answer.correct ? "Chính xác." : "Chưa chính xác."}{" "}
                    <span>+{answer.points}</span>
                  </h2>
                  <div className="answer-review">
                    <span>ĐÁP ÁN ĐÚNG</span>
                    <strong>
                      {q.type === "multiple-choice"
                        ? q.options.find((o) => o.id === q.answer)?.text
                        : q.type === "true-false"
                          ? q.answer
                            ? "Đúng"
                            : "Sai"
                          : formatYear(q.answer)}
                    </strong>
                  </div>
                  <p>{q.explanation}</p>
                  <div className="discovery-note">
                    <BookmarkPlus size={18} />
                    {game.initialDiscovered.includes(event.id)
                      ? "Kiến thức đã được lưu vào kho lịch sử."
                      : "Đã khám phá sự kiện và lưu vào kho lịch sử."}
                  </div>
                  <button
                    className="button primary"
                    onClick={() => dispatch({ type: "NEXT" })}
                  >
                    {game.round === game.settings.rounds
                      ? "Xem kết quả hành trình"
                      : "Khám phá sự kiện tiếp theo"}
                    <ArrowRight size={18} />
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ) : (
        <div className="empty-state">
          <h2>Sự kiện đã lưu này không còn khả dụng.</h2>
          <Link href="/play" className="button">
            Bắt đầu hành trình mới
          </Link>
        </div>
      )}
    </>
  );
}

