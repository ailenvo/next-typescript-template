import { NextApiRequest, NextApiResponse } from "next";

// Interface cho Task
interface Task {
  id: string;
  title: string;
  completed: boolean;
}

// Giả lập cơ sở dữ liệu in-memory (đồng bộ với index.ts)
let tasks: Task[] = [
  { id: "1", title: "Learning Next.js", completed: false },
  { id: "2", title: "Created API", completed: true },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;

    if (req.method === "GET") {
      // Lấy task theo ID
      const task = tasks.find(t => t.id === (id as string));

      if (!task) {
        return res.status(404).json({ error: "Task not found" });
      }

      return res.status(200).json(task);
    }

    if (req.method === "PUT") {
      // Cập nhật task theo ID
      const { title, completed } = req.body;
      const taskIndex = tasks.findIndex(t => t.id === (id as string));

      if (taskIndex === -1) {
        return res.status(404).json({ error: "Task not found" });
      }

      if (title && typeof title !== "string") {
        return res.status(400).json({ error: "Title must be a string" });
      }

      if (completed !== undefined && typeof completed !== "boolean") {
        return res.status(400).json({ error: "Completed must be a boolean" });
      }

      tasks[taskIndex] = {
        ...tasks[taskIndex],
        title: title ?? tasks[taskIndex].title,
        completed: completed ?? tasks[taskIndex].completed,
      };

      return res.status(200).json(tasks[taskIndex]);
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
