import { create } from 'zustand'

export const useTokenStore = create((set) => ({
  tokens: "",
  saveTokens: () => set((state) => ({ tokens: state.tokens })),
  removeAllTokens: () => set({ tokens: "" }),
}))


export const useBearStore = create((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
  }))