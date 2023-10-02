type Props = {
  children: React.ReactNode;
};
export function Container({ children }: Props) {
  return (
    <div className="w-screen h-screen bg-neutral-800 flex justify-center overflow-auto">
      {children}
    </div>
  );
}
