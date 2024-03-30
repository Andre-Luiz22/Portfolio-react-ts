import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Avatar } from "./components/Avatar";
import { FaRegHandPeace } from "react-icons/fa6";
import { Download, WhatsappLogo } from "phosphor-react";

export function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const prefersColorScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    setTheme(prefersColorScheme.matches ? "light" : "dark");
  }, []);

  function handleThemeSwitcher() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className="bg-background-l dark:bg-background-d transition-mine duration-1000 pt-[0.94rem] antialiased font-ralaway overflow-x-hidden ">
      <Header onChangeTheme={handleThemeSwitcher} theme={theme} />
      <section className="flex flex-col mt-8 mx-[0.94rem] ">
        <Avatar />
        <div className="flex bg-main-opaca-l w-fit gap-2 p-2 border rounded-md border-main-l dark:border-main-d">
          <FaRegHandPeace
            size={22}
            className="dark:text-main-d text-main-l drop-shadow-lg"
            strokeWidth={11}
          />
          <strong className="text-main-l font-black dark:text-main-d">
            Olá, bem vindo(a)!
          </strong>
        </div>
        <h1 className="text-text-l dark:text-text-d font-bold text-[2.7rem] leading-tight">
          André <br />
          Luiz
        </h1>
        <h2 className="text-text-l dark:text-text-d opacity-50 text-xl">
          Fullstack developer | Back-end
        </h2>
        <div className="flex items-center gap-2 max-w-fit opacity-50 font-bold text-[1.2rem] my-4 hover:opacity-100">
          <button className="text-main-d ">Baixar CV</button>
          <Download size={25} className="text-main-d" weight="fill" />
        </div>
        <div className=" flex items-center gap-2 max-w-fit opacity-50 font-bold text-[1.2rem] p-2 hover:opacity-100 border rounded-md border-main-l dark:border-main-d">
          <WhatsappLogo size={25} className="text-main-d" />
          <button className="text-main-d">Vamos conversar</button>
        </div>
      </section>
    </div>
  );
}
