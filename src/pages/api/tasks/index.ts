import { NextApiRequest, NextApiResponse } from "next";

// Interface cho Task
interface Task {
  id: string;
  title: string;
  completed: boolean;
}

// Giả lập cơ sở dữ liệu in-memory
let tasks: Task[] = [
  { id: "1", title: "Learning Next.js", completed: false },
  { id: "2", title: "Created API", completed: true },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      // Lấy tất cả tasks
      return res.status(200).json(tasks);
    }

    if (req.method === "POST") {
      // Thêm task mới
      const { title } = req.body;

      if (!title || typeof title !== "string") {
        return res
          .status(400)
          .json({ error: "Title is required and must be a string" });
      }

      const newTask: Task = {
        id: crypto.randomUUID(),
        title,
        completed: false,
      };

      tasks.push(newTask);
      return res.status(201).json(newTask);
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
