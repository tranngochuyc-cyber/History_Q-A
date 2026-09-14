export type Difficulty = "Easy" | "Medium" | "Hard";
export type Era =
  "Ancient" | "Medieval" | "Early Modern" | "Modern" | "Contemporary";
export interface Country {
  id: string;
  name: string;
  code: string;
  continent: string;
  region: string;
}
export interface Source {
  title: string;
  publisher: string;
  url: string;
}
export interface HistoricalEvent {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  startYear: number;
  endYear: number;
  startDate?: string;
  endDate?: string;
  summary: string;
  shortSummary: string;
  importance: number;
  significance?: string;
  fact?: string;
  scale: "National" | "Regional" | "Global";
  difficulty: Difficulty;
  locationText: string;
  latitude?: number;
  longitude?: number;
  image?: string;
  imageAlt: string;
  imageAttribution?: Source;
  era: Era;
  countries: string[];
  categories: string[];
  keyFigures: string[];
  causes: string;
  whatHappened: string;
  consequences: string;
  sources: Source[];
  relatedEvents: string[];
  tags: string[];
}
interface BaseQuestion {
  id: string;
  eventId: string;
  difficulty: Difficulty;
  prompt: string;
  explanation: string;
}
export type Question = BaseQuestion &
  (
    | {
        type: "multiple-choice";
        options: { id: string; text: string }[];
        answer: string;
      }
    | { type: "true-false"; answer: boolean }
    | { type: "year"; answer: number }
  );
export interface Filters {
  countries: string[];
  regions: string[];
  eras: string[];
  categories: string[];
  difficulty: Difficulty | "All";
}
export interface Settings extends Filters {
  rounds: number;
}
export interface GameAnswer {
  id: string;
  sessionId: string;
  eventId: string;
  questionId: string;
  answer: string | number | boolean;
  correct: boolean;
  points: number;
  at: string;
}
export type Phase =
  | "SELECT_EVENT"
  | "EVENT_BRIEF"
  | "QUESTION"
  | "QUESTION_RESULT"
  | "GAME_COMPLETE";
export interface GameSession {
  id: string;
  startedAt: string;
  completedAt?: string;
  settings: Settings;
  phase: Phase;
  round: number;
  score: number;
  streak: number;
  bestStreak: number;
  choices: string[];
  shown: Record<string, number>;
  selected?: string;
  questionId?: string;
  answers: GameAnswer[];
  initialDiscovered: string[];
  hintQuestionIds?: string[];
}
export interface Progress {
  version: 1;
  bookmarks?: string[];
  recent?: string[];
  answers: GameAnswer[];
  games: GameSession[];
  discovered: string[];
  active: GameSession | null;
  settings: Settings;
}

