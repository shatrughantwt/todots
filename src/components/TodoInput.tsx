import { useState } from "react";

interface Props {
  addTodo: (text: string) => void;
}

export default function TodoInput({ addTodo }: Props) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="px-3 py-2 rounded bg-gray-700 outline-none w-64"
        placeholder="Enter a task..."
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
      >
        Add
      </button>
    </form>
  );
}
