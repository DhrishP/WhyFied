import { create } from "zustand";

type Store = {
  coins: number;
  promptTokens: number;
  Streak: number;
  setCoins: (value: number) => void;
  setPromptTokens: (value: number) => void;
  setStreak: (value: number) => void;
};

export const useStore = create<Store>((set) => ({
  coins: 0,
  promptTokens: 0,
  Streak: 0,
  setCoins: (value) => set((state) => ({ ...state, coins: value })),
  setPromptTokens: (value) =>
    set((state) => ({ ...state, promptTokens: value })),
  setStreak: (value) => set((state) => ({ ...state, Streak: value })),
}));
