"use client";

import { useTasks } from "@/hooks/useTasks";
import { TaskForm } from "./TaskForm";
import { TaskItem } from "./TaskItem";

export function TaskList() {
  const { tasks, createTask, toggleTask, removeTask, isLoading } = useTasks();

  const handleCreateTask = async (text: string) => {
    await createTask({ text });
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Convex Task List Demo</h1>

      <TaskForm onSubmit={handleCreateTask} />

      {isLoading ? (
        <p className="text-gray-500">Loading tasks...</p>
      ) : tasks && tasks.length === 0 ? (
        <p className="text-gray-500">No tasks yet. Add one above!</p>
      ) : (
        <ul className="space-y-2">
          {tasks?.map((task) => (
            <TaskItem
              key={task._id}
              task={task}
              onToggle={(id) => toggleTask({ id })}
              onRemove={(id) => removeTask({ id })}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
