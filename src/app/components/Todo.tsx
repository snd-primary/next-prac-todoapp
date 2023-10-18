"use client";
import { deleteTodo, editTodo } from "@/api";
import { Task } from "@/types";
import { useEffect, useRef, useState } from "react";

interface TodoProps {
  todo: Task;
}

const Todo = ({ todo }: TodoProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const [isEtiding, setIsEditing] = useState(false);
  const [editedTaskTitle, setEtitedTaskTitle] = useState(todo.text);
  const handleEdit = async () => {
    setIsEditing(true);
  };
  const handleSave = async () => {
    await editTodo(todo.id, editedTaskTitle);
    setIsEditing(false);
  };
  const handleDelete = async () => {
    await deleteTodo(todo.id);
  };

  useEffect(() => {
    if (isEtiding) {
      ref.current?.focus();
    }
  }, [isEtiding]);

  return (
    <li
      key={todo.id}
      className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow"
    >
      {isEtiding ? (
        <input
          ref={ref}
          type="text"
          className="mr-2 py-1 px-2 rounded border-gray-400 border"
          value={editedTaskTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEtitedTaskTitle(e.target.value)
          }
        />
      ) : (
        <span>{todo.text}</span>
      )}
      <div>
        {isEtiding ? (
          <button className="text-blue-500 mr-3" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button className="text-green-500 mr-3" onClick={handleEdit}>
            Edit
          </button>
        )}

        <button className="text-red-500" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Todo;
