interface TagSectionProps {
  content: string;
  icon: JSX.Element;
}

export function TagSection({ icon, content }: TagSectionProps) {
  return (
    <div className="flex  bg-main-opaca-l w-fit gap-2 p-2 border rounded-md border-main-l dark:border-main-d items-center">
      {icon}
      <strong className="text-main-l font-black dark:text-main-d">
        {content}
      </strong>
    </div>
  );
}
