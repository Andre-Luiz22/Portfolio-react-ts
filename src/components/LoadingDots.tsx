export function LoadingDots() {
  return (
    <div className=" flex gap-1 pt-2 items-center">
      <div className="w-3 h-3 rounded-full animate-bounce bg-main-l dark:bg-main-d [animation-delay:-0.3s]"></div>
      <div className="w-3 h-3 rounded-full animate-bounce bg-main-l dark:bg-main-d [animation-delay:-0.15s]"></div>
      <div className="w-3 h-3 rounded-full animate-bounce bg-main-l dark:bg-main-d"></div>
    </div>
  );
}
