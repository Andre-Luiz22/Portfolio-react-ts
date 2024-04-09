import { User } from "phosphor-react";
import { Message } from "./ANDRoidE";

export function ANDRoidEMsg({ author, content }: Message) {
  return (
    <div className="flex items-start gap-2  justify-start w-fit self-start md:max-w-[75%]">
      <div className="bg-[#D0C4DC] dark:bg-[#261D4A] border border-main-l dark:border-main-d w-fit rounded-full p-2 h-fit mt-2">
        <User
          size={20}
          weight="fill"
          className="text-main-l dark:text-main-d"
        />
      </div>
      <div className="flex flex-col items-start">
        <span className="text-text-l opacity-50 dark:text-text-d">
          {author}
        </span>
        <div className=" py-2 px-4 rounded-lg bg-main-opaca-l dark:bg-main-opaca-d w-fit border border-main-l dark:border-main-d">
          {content}
        </div>
      </div>
    </div>
  );
}
