import type { Settings } from "./types";
export const APP_NAME = "ChronoQuest";
export const ERAS = [
  "Ancient",
  "Medieval",
  "Early Modern",
  "Modern",
  "Contemporary",
];
export const CATEGORIES = [
  "War",
  "Politics",
  "Science",
  "Technology",
  "Exploration",
  "Culture",
  "Religion",
  "Economy",
  "Revolution",
  "Disaster",
  "Diplomacy",
  "Social Change",
  "Art", "Medicine", "Space",
];
export const DEFAULT_SETTINGS: Settings = {
  rounds: 10,
  countries: [],
  regions: [],
  eras: [],
  categories: [],
  difficulty: "All",
};

