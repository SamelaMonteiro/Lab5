import { SetStateAction } from "react";

type Props = {
  newTask: string;
  setNewTask: React.Dispatch<SetStateAction<string>>;
  createNewTask: () => void;
};

export function FormTasks({ createNewTask, newTask, setNewTask }: Props) {
  return (
    <div className="flex items-center justify-center gap-2 w-full">
      <input
        className="p-2 rounded-md w-full"
        type="text"
        placeholder="Nova Tarefa"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      <button
        onClick={createNewTask}
        className="bg-violet-800 rounded-md text-wrap text-white whitespace-nowrap p-2 border border-violet-800"
      >
        Criar Tarefa
      </button>
    </div>
  );
}
