"use client";
import { createContext, useContext, useSyncExternalStore } from "react";
import type { Progress } from "@/lib/types";
import {
  subscribe,
  getSnapshot,
  getServerSnapshot,
  updateProgress,
} from "@/lib/storage/local";
interface Store {
  data: Progress;
  ready: boolean;
  warning: string;
  update: (fn: (p: Progress) => Progress) => void;
}
const Context = createContext<Store | null>(null);
export function AppProvider({ children }: { children: React.ReactNode }) {
  const snapshot = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  return (
    <Context.Provider value={{ ...snapshot, update: updateProgress }}>
      {snapshot.warning && (
        <div className="storage-warning" role="status">
          {snapshot.warning}
        </div>
      )}
      {children}
    </Context.Provider>
  );
}
export function useProgress() {
  const value = useContext(Context);
  if (!value) throw new Error("Missing progress provider");
  return value;
}
