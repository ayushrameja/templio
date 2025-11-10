import { useState } from 'react';

interface JSONEditorPopupProps {
  jsonData: object;
  onSave: (data: object) => void;
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
      setError('Invalid JSON format. Please check your syntax.');
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[80vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-gray-900">
            JSON Configuration Editor
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-auto p-4">
          <textarea
            value={editedJson}
            onChange={(e) => setEditedJson(e.target.value)}
            className="w-full h-full min-h-[400px] font-mono text-sm p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            spellCheck={false}
          />
          {error && <div className="mt-2 text-red-600 text-sm">{error}</div>}
        </div>

        <div className="flex items-center justify-end gap-3 p-4 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium"
          >
            Close
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
