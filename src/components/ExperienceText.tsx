interface ExperienceTextProps {
  role: string;
  complement: string;
}

export function ExperienceText({role, complement}: ExperienceTextProps) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-[0.7rem] font-bold text-text-l dark:text-text-d">
        {complement}
      </span>
      <strong className="font-black text-xl text-main-l dark:text-main-d">
        {role}
      </strong>
    </div>
  );
}
