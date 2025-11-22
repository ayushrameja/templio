"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { useState } from "react";

export function TaskList() {
  const tasks = useQuery(api.tasks.get);
  const createTask = useMutation(api.tasks.create);
  const toggleTask = useMutation(api.tasks.toggle);
  const removeTask = useMutation(api.tasks.remove);
  const [newTaskText, setNewTaskText] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;

    await createTask({ text: newTaskText });
    setNewTaskText("");
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Convex Task List Demo</h1>

      <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Add
        </button>
      </form>

      {tasks === undefined ? (
        <p className="text-gray-500">Loading tasks...</p>
      ) : tasks.length === 0 ? (
        <p className="text-gray-500">No tasks yet. Add one above!</p>
      ) : (
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task._id}
              className="flex items-center gap-3 p-4 bg-white border rounded-lg shadow-sm"
            >
              <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => toggleTask({ id: task._id })}
                className="w-5 h-5 cursor-pointer"
              />
              <span
                className={`flex-1 ${
                  task.isCompleted
                    ? "line-through text-gray-400"
                    : "text-gray-800"
                }`}
              >
                {task.text}
              </span>
              <button
                onClick={() => removeTask({ id: task._id })}
                className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
