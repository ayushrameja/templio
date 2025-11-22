"use client";

import { useState } from "react";
import { Button, Input } from "@/components/ui";

interface TaskFormProps {
  onSubmit: (text: string) => Promise<void>;
}

export function TaskForm({ onSubmit }: TaskFormProps) {
  const [newTaskText, setNewTaskText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskText.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await onSubmit(newTaskText);
      setNewTaskText("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
      <Input
        type="text"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1"
        disabled={isSubmitting}
      />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Adding..." : "Add"}
      </Button>
    </form>
  );
}
