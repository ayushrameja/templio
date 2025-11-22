import { Id } from "@/convex/_generated/dataModel";

export interface Task {
  _id: Id<"tasks">;
  _creationTime: number;
  text: string;
  isCompleted: boolean;
}
