import { GitHub, Linkedin } from "react-feather";
import { Moon, Sun } from "phosphor-react";

interface HeaderProps {
  onChangeTheme: () => void;
  theme: boolean;
}

export function Header({ onChangeTheme, theme }: HeaderProps) {
  return (
    <header className=" mx-[0.94rem]">
      <div className="flex items-center justify-center gap-4">
        <a href="#" target="_blank">
          <div className=" p-2 rounded-full bg-icone-l dark:bg-icone-d opacity-50 flex items-center justify-center transition duration-500 hover:opacity-100">
            <Linkedin
              size={25}
              className="text-background-l dark:text-background-d"
              strokeWidth={2}
              fill={theme ? "#090e16" : "#F5F3F7"}
            />
          </div>
        </a>
        <a href="https://github.com/Andre-Luiz22" target="_blank">
          <div className="p-2 rounded-full bg-icone-l dark:bg-icone-d opacity-50  flex items-center justify-center transition duration-500 hover:opacity-100">
            <GitHub
              size={25}
              className="text-background-l dark:text-background-d"
              strokeWidth={2}
              fill={theme ? "#090e16" : "#F5F3F7"}
            />
          </div>
        </a>
        <button onClick={onChangeTheme}>
          {theme ? (
            <Sun size={30} weight="fill" color="yellow" />
          ) : (
            <Moon size={30} weight="fill" color="#090E16" />
          )}
        </button>
      </div>
    </header>
  );
}
