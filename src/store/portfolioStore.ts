import { create } from 'zustand';
import type { PortfolioData } from '../types/portfolio';

interface PortfolioStore {
  portfolioData: PortfolioData | null;
  isLoading: boolean;
  error: string | null;
  fetchPortfolioData: () => Promise<void>;
  updatePortfolioData: (data: PortfolioData) => void;
}

export const usePortfolioStore = create<PortfolioStore>((set, get) => ({
  portfolioData: null,
  isLoading: false,
  error: null,

  fetchPortfolioData: async () => {
    const { portfolioData, isLoading } = get();
    
    if (portfolioData || isLoading) {
      return;
    }

    set({ isLoading: true, error: null });

    try {
      const response = await fetch('/portfolio.json');

      if (!response.ok) {
        throw new Error(
          `Failed to fetch portfolio data: ${response.statusText}`
        );
      }

      const data = await response.json();
      set({ portfolioData: data, isLoading: false });
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Failed to load portfolio data';
      set({ error: errorMessage, isLoading: false });
    }
  },

  updatePortfolioData: (data) => {
    set({ portfolioData: data });
  },
}));
