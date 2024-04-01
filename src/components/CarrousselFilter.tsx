interface CarrousselFilterProps {
  tecnology: string;
  icon: JSX.Element;
}

export function CarrousselFilter({ icon, tecnology }: CarrousselFilterProps) {
  return (
    <button className="text-main-l dark:text-main-d flex gap-1 items-center justify-center self-end border border-main-l dark:border-main-d rounded p-1 text-sm opacity-80 hover:bg-main-opaca-l dark:hover:bg-main-opaca-d transition duration-500 hover:opacity-100">
      {icon}
      <p className="font-bold">{tecnology}</p>
    </button>
  );
}
