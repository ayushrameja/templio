import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";

export function useTasks() {
  const tasks = useQuery(api.functions.tasks.get);
  const createTask = useMutation(api.functions.tasks.create);
  const toggleTask = useMutation(api.functions.tasks.toggle);
  const removeTask = useMutation(api.functions.tasks.remove);

  return {
    tasks,
    createTask,
    toggleTask,
    removeTask,
    isLoading: tasks === undefined,
  };
}
