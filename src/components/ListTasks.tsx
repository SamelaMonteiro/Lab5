type Props = {
  id: string;
  title: string;
  deleteTasks: (_id: string) => void;
  loading: boolean;
};

export function ListTasks({ deleteTasks, id, loading, title }: Props) {
  return (
    <li
      key={id}
      className="w-full flex items-center justify-between mt-2 bg-neutral-700 rounded-md p-2 text-white"
    >
      <div>{title}</div>
      <div className="flex items-center justify-center gap-2">
        <button
          disabled={loading}
          className="border border-red-600 bg-red-600 rounded-md p-1"
          onClick={() => deleteTasks(id)}
        >
          {loading ? "Excluindo..." : "Excluir"}
        </button>
      </div>
    </li>
  );
}
