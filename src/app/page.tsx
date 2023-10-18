// "use client";
import Image from "next/image";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import { getAllTodos } from "@/api";

export default async function Home() {
  const todos = await getAllTodos();
  console.log(todos);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
      <h1 className="text-4xl font-bold text-gray-700 -mt-32">
        Nextjs 13 Todo App
      </h1>
      <div className="w-full max-w-xl mt-5">
        <div>
          <AddTask />
          <TodoList todos={todos} />
        </div>
      </div>
    </main>
  );
}
