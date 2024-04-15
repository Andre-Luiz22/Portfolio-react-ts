import { CarrousselCardTag } from "./CarrousselCardTag";
export type TagsCardCarroussel = {
  id: number;
  value: "html" | "react" | "node";
};

export interface CarrousselCardProps {
  _id?: number;
  title: string;
  description: string;
  tags: TagsCardCarroussel[];
  imgLink: string;
  imgPath?: string;
  imgName?: string;
  link: string;
}

//Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
//dignissimos itaque fugit veritatis esse nam sunt doloremque,
//voluptatibus quos neque ullam
//"https://picsum.photos/id/10/300/200"

export function CarrousselCard({
  title,
  description,
  tags,
  imgLink,
  link,
}: CarrousselCardProps) {
  return (
    <a href={link} target="_blank">
      <div className="w-[16.63rem] border-2 border-main-l dark:border-main-d rounded-xl p-4 space-y-3 group hover:bg-main-opaca-l dark:hover:bg-main-opaca-d transition duration-500 h-full flex flex-col justify-between">
        <div>
          <div className="text-text-l dark:text-text-d space-y-2">
            <h2 className="font-bold text-xl">{title}</h2>
            <p className="opacity-50 text-sm group-hover:opacity-100 transition duration-500">
              {description}
            </p>
          </div>
          <div className="flex gap-2 flex-wrap mt-2">
            {tags.map((tag) => (
              <CarrousselCardTag key={tag.id} code={tag.value} />
            ))}
          </div>
        </div>
        <div className="rounded-xl overflow-hidden">
          <img src={imgLink} alt="" />
        </div>
      </div>
    </a>
  );
}
