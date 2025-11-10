import { useState } from 'react';
import { JSONEditorPopup } from './JSONEditorPopup';
import { usePortfolioStore } from '../store/portfolioStore';

export function DebugBar() {
  const [showJsonEditor, setShowJsonEditor] = useState(false);
  const { portfolioData, updatePortfolioData } = usePortfolioStore();

  const isDev = import.meta.env.DEV;

  if (!isDev || !portfolioData) {
    return null;
  }

  const handleSaveJson = (data: object) => {
    updatePortfolioData(data as any);
  };

  return (
    <>
      <div
        className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white shadow-lg z-40"
        style={{ height: '6vh' }}
      >
        <div className="flex items-center justify-between h-full px-6">
          <div className="font-bold text-lg">Templio</div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm">ENV:</span>
              <span className="text-green-400 text-sm font-medium">
                {import.meta.env.MODE}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm">Backend:</span>
              <span className="text-yellow-400 text-sm font-medium">
                Local Mock
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm">Config:</span>
              <span className="text-blue-400 text-sm font-medium">Loaded</span>
            </div>

            <button
              onClick={() => setShowJsonEditor(true)}
              className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 rounded text-sm font-medium transition-colors"
            >
              JSON Config
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
