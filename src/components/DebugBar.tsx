import { useState } from 'react';
import { JSONEditorPopup } from './JSONEditorPopup';
import { usePortfolioStore } from '../store/portfolioStore';
import type { PortfolioData } from '../types/portfolio';

export function DebugBar() {
  const [showJsonEditor, setShowJsonEditor] = useState(false);
  const { portfolioData, updatePortfolioData } = usePortfolioStore();

  const isDev = import.meta.env.DEV;

  if (!isDev || !portfolioData) {
    return null;
  }

  const handleSaveJson = (data: PortfolioData) => {
    updatePortfolioData(data);
  };

  return (
    <>
      <div
        className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-lg text-white border-t border-white/20 shadow-lg z-40"
        style={{ height: '6vh', padding: '0 1.5rem' }}
      >
        <div className="flex items-center justify-between h-full px-3 py-2 sm:px-4 md:px-6">
          <div className="font-bold text-sm sm:text-base md:text-lg">
            Templio
          </div>
          <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
            <div className="hidden sm:flex items-center gap-1 md:gap-2">
              <span className="text-gray-400 text-xs md:text-sm">ENV:</span>
              <span className="text-xs md:text-sm font-medium">
                {import.meta.env.MODE}
              </span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <span className="text-gray-400 text-sm">Backend:</span>
              <span className="text-sm font-medium">Local Mock</span>
            </div>
            <div className="hidden lg:flex items-center gap-2">
              <span className="text-gray-400 text-sm">Config:</span>
              <span className="text-sm font-medium">Loaded</span>
            </div>
            <button
              onClick={() => setShowJsonEditor(true)}
              className="bg-white/15 hover:bg-white/10 rounded text-xs sm:text-sm font-medium transition-colors cursor-pointer"
              style={{ padding: '0.25rem 0.5rem' }}
            >
              <span className="hidden sm:inline">JSON Config</span>
              <span className="sm:hidden">Config</span>
            </button>
          </div>
        </div>
      </div>
      {showJsonEditor && (
        <JSONEditorPopup
          jsonData={portfolioData}
          onSave={handleSaveJson}
          onClose={() => setShowJsonEditor(false)}
        />
      )}
    </>
  );
}
