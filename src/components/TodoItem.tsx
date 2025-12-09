import type { Todo } from "../App";
import { Check, Trash2 } from "lucide-react";

interface Props {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export default function TodoItem({ todo, toggleTodo, deleteTodo }: Props) {
  return (
    <div className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded">
      <div className="flex items-center gap-3">
        <button
          onClick={() => toggleTodo(todo.id)}
          className={`w-6 h-6 flex items-center justify-center rounded border
            ${todo.completed ? "bg-green-600" : "border-gray-500"}
          `}
        >
          {todo.completed && <Check size={16} />}
        </button>

        <p className={`${todo.completed ? "line-through text-gray-400" : ""}`}>
          {todo.text}
        </p>
      </div>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-400 hover:text-red-500"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}
