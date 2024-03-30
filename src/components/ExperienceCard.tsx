

interface ExperienceCardProps {
  icon: JSX.Element
  duration: string;
  role: string;
}



export function ExperienceCard({icon, duration, role}:ExperienceCardProps) {
  return (
    <div className="group w-[184px] gap-2 flex flex-col items-center border border-main-l dark:border-main-d p-8 rounded-lg  hover:bg-main-opaca-l transition duration-200">
      <div className="relative opacity-70 group-hover:opacity-100">
        {icon}
        <div className="w-2/3 h-2/3 bg-main-opaca-l absolute top-2 right-0 rounded-full dark:bg-main-opaca-d"></div>
      </div>
      <div className="flex flex-col items-center opacity-60 group-hover:opacity-100">
        <p className="text-[0.7rem] font-normal">{duration}</p>
        <strong className="font-bold">{role}</strong>
      </div>
    </div>
  );
}
