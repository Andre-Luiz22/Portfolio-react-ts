import {
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import avatarAndre from "../assets/andre-avatar.svg";
import { SiTypescript } from "react-icons/si";

export function Avatar() {
  return (
    <div className="relative mx-[0.94rem] flex self-center  justify-center items-center w-fit my-6 gap-4 pb-4 aboutMe:order-2">
      <div className="w-[20vw] h-[20vw] min-h-[220px] min-w-[220px]  bg-main-l dark:bg-main-d opacity-50 rounded-full animate-spin-slow shadow-avatar shadow-main-l">
        <div className="p-2 bg-background-l dark:bg-background-d flex absolute rounded-full top-2 left-6 ">
          <FaHtml5
            size={"7vw"}
            className="text-main-l dark:text-main-d max-w-7 max-h-7"
          />
        </div>
        <div className="p-2 bg-background-l dark:bg-background-d flex absolute rounded-full top-40 left-0">
          <FaCss3
            size={"7vw"}
            className="text-main-l dark:text-main-d max-w-7 max-h-7"
          />
        </div>
        <div className=" p-2 bg-background-l dark:bg-background-d flex absolute rounded-full top-6 right-0">
          <FaJs
            size={"7vw"}
            className="text-main-l dark:text-main-d max-w-7 max-h-7"
          />
        </div>
        <div className="n p-2 bg-background-l dark:bg-background-d flex absolute rounded-full top-20 -right-4">
          <FaPython
            size={"7vw"}
            className="text-main-l dark:text-main-d max-w-7 max-h-7"
          />
        </div>
        <div className="item-avatar node item-avatar python p-2 bg-background-l dark:bg-background-d flex absolute rounded-full -top-6 left-20">
          <FaNodeJs
            strokeWidth={20}
            size={"8vw"}
            className="text-main-l dark:text-main-d max-w-7 max-h-7 "
          />
        </div>
        <div className=" p-2 bg-background-l dark:bg-background-d flex absolute rounded-full top-20 left-2 ">
          <SiTypescript
            size={"7vw"}
            className="text-main-l dark:text-main-d max-w-7 max-h-7"
          />
        </div>
        <div className=" p-2 bg-background-l dark:bg-background-d flex absolute rounded-full bottom-6 right-4">
          <FaGitAlt
            size={"8vw"}
            className="text-main-l dark:text-main-d max-w-7 max-h-7"
          />
        </div>
      </div>
      <div className="flex justify-center w-[25vw] absolute min-w-[18.75rem] bottom-0">
        <img
          className="w-[60%] max-w-[180px] aboutMe:max-w-[500px] rounded-bl-3xl rounded-br-3xl"
          src={avatarAndre}
          alt=""
          draggable={false}
        />
      </div>
    </div>
  );
}
