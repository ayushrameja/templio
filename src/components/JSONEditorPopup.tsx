import { useState } from 'react';
import Editor from '@monaco-editor/react';
import type { PortfolioData } from '../types/portfolio';

interface JSONEditorPopupProps {
  jsonData: PortfolioData;
  onSave: (data: PortfolioData) => void;
  onClose: () => void;
}

export function JSONEditorPopup({
  jsonData,
  onSave,
  onClose,
}: JSONEditorPopupProps) {
  const [editedJson, setEditedJson] = useState(
    JSON.stringify(jsonData, null, 2)
  );
  const [error, setError] = useState<string | null>(null);

  const handleSave = () => {
    try {
      const parsed = JSON.parse(editedJson);
      onSave(parsed);
      setError(null);
      onClose();
    } catch (err) {
      setError(
        `Invalid JSON format: ${
          err instanceof Error ? err.message : 'Please check your syntax.'
        }`
      );
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-[#1e1e1e] rounded-lg shadow-2xl max-w-4xl w-full h-[80vh] flex flex-col border border-[#3e3e3e]"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex items-center justify-between px-4 py-3 border-b border-[#3e3e3e] bg-[#252526] shrink-0"
          style={{ padding: '0.5rem 0.75rem' }}
        >
          <h2 className="text-sm font-semibold text-[#cccccc]">
            JSON Configuration Editor
          </h2>
          <button
            onClick={onClose}
            className="text-[#cccccc] hover:text-white hover:bg-white/10 w-8 h-8 flex items-center justify-center rounded transition-colors"
            title="Close"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-hidden bg-[#1e1e1e] relative min-h-0">
          <Editor
            height="100%"
            defaultLanguage="json"
            value={editedJson}
            onChange={(value) => setEditedJson(value || '')}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: 'on',
              scrollBeyondLastLine: false,
              automaticLayout: true,
              tabSize: 2,
              wordWrap: 'on',
              formatOnPaste: true,
              formatOnType: true,
              padding: { top: 16, bottom: 16 },
              scrollbar: {
                verticalScrollbarSize: 10,
                horizontalScrollbarSize: 10,
              },
            }}
          />
          {error && (
            <div className="absolute bottom-4 left-4 right-4 text-[#f48771] text-sm bg-[#5a1d1d] border border-[#be1100] px-3 py-2 rounded shadow-lg">
              {error}
            </div>
          )}
        </div>

        <div
          className="flex items-center justify-end gap-3 px-4 py-3 border-t border-[#3e3e3e] bg-[#252526] shrink-0"
          style={{ padding: '0.5rem 0.75rem' }}
        >
          <button
            onClick={onClose}
            className="px-4 py-2 text-[#cccccc] bg-[#3e3e3e] hover:bg-[#505050] rounded text-sm transition-colors cursor-pointer"
            style={{ padding: '0.25rem 0.5rem' }}
          >
            Close
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-white bg-[#0e639c] hover:bg-[#1177bb] rounded text-sm transition-colors cursor-pointer"
            style={{ padding: '0.25rem 0.5rem' }}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
