"use client";

import { Task } from "@/types";
import { Button } from "@/components/ui";

interface TaskItemProps {
  task: Task;
  onToggle: (id: Task["_id"]) => void;
  onRemove: (id: Task["_id"]) => void;
}

export function TaskItem({ task, onToggle, onRemove }: TaskItemProps) {
  return (
    <li className="flex items-center gap-3 p-4 bg-white border rounded-lg shadow-sm">
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => onToggle(task._id)}
        className="w-5 h-5 cursor-pointer"
      />
      <span
        className={`flex-1 ${
          task.isCompleted ? "line-through text-gray-400" : "text-gray-800"
        }`}
      >
        {task.text}
      </span>
      <Button variant="danger" size="sm" onClick={() => onRemove(task._id)}>
        Delete
      </Button>
    </li>
  );
}
