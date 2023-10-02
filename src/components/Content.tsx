type Props = {
  children: React.ReactNode;
};

export function Content({ children }: Props) {
  return (
    <div className="flex items-center mt-8 p-4 gap-4 flex-col w-2/3">
      <h1 className="text-2xl text-neutral-50">Lista de Tarefas</h1>
      {children}
    </div>
  );
}
