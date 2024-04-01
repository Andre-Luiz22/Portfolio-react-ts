import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Avatar } from "./components/Avatar";
import { FaRegHandPeace } from "react-icons/fa6";
import imgAboutMe from "./assets/imgAboutMe.svg";
import {
  Download,
  WhatsappLogo,
  Code,
  Laptop,
  CodesandboxLogo,
  Smiley,
  RocketLaunch,
  Link,
  ArrowRight,
} from "phosphor-react";
import { ExperienceCard } from "./components/ExperienceCard";
import { ExperienceText } from "./components/ExperienceText";
import { TagSection } from "./components/TagSection";
import { CarrousselFilter } from "./components/CarrousselFilter";
import { FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { CarrousselCard, CarrousselCardProps} from "./components/CarrousselCard";



const cards: CarrousselCardProps[] = [
  {
    id: 1,
    title: "Title 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dignissimos itaque fugit veritatis esse am sunt doloremque, voluptatibus quos neque ullam",
    img: "https://picsum.photos/id/10/300/200",
    tags: [
      {
        id: 1,
        value :"html",
      },
      {
        id: 2,
        value :"react",
      },
      {
        id: 3,
        value :"node",
      },
    ],
  },
  {
    id: 2,
    title: "Title 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dignissimos itaque fugit veritatis esse am sunt doloremque, voluptatibus quos neque ullam",
    img: "https://picsum.photos/id/11/300/200",
    tags: [
      {
        id: 1,
        value :"html",
      },
      {
        id: 2,
        value :"react",
      },
    ],
  },
  {
    id: 3,
    title: "Title 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dignissimos itaque fugit veritatis esse am sunt doloremque, voluptatibus quos neque ullam",
    img: "https://picsum.photos/id/12/300/200",
    tags: [
      {
        id: 1,
        value :"html",
      },
      {
        id: 2,
        value :"react",
      },
      {
        id: 3,
        value :"node",
      },
    ],
  },
  {
    id: 4,
    title: "Title 4",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dignissimos itaque fugit veritatis esse am sunt doloremque, voluptatibus quos neque ullam",
    img: "https://picsum.photos/id/13/300/200",
    tags: [
      {
        id: 1,
        value :"html",
      },
      {
        id: 2,
        value :"react",
      },
      {
        id: 3,
        value :"node",
      },
    ],
  },
  {
    id: 5,
    title: "Title 5",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dignissimos itaque fugit veritatis esse am sunt doloremque, voluptatibus quos neque ullam",
    img: "https://picsum.photos/id/14/300/200",
    tags: [
      {
        id: 1,
        value :"react",
      },
      {
        id: 2,
        value :"node",
      },
    ],
  },
  {
    id: 6,
    title: "Title 6",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dignissimos itaque fugit veritatis esse am sunt doloremque, voluptatibus quos neque ullam",
    img: "https://picsum.photos/id/15/300/200",
    tags: [
      {
        id: 1,
        value :"node",
      },
    ],
  },
  {
    id: 7,
    title: "Title 7",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dignissimos itaque fugit veritatis esse am sunt doloremque, voluptatibus quos neque ullam",
    img: "https://picsum.photos/id/16/300/200",
    tags: [
      {
        id: 1,
        value :"html",
      },
    ],
  },
  {
    id: 8,
    title: "Title 8",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dignissimos itaque fugit veritatis esse am sunt doloremque, voluptatibus quos neque ullam",
    img: "https://picsum.photos/id/17/300/200",
    tags: [
      {
        id: 1,
        value :"html",
      },
      {
        id: 2,
        value :"react",
      },
      {
        id: 3,
        value :"node",
      },
    ],
  },
  {
    id: 9,
    title: "Title 9",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dignissimos itaque fugit veritatis esse am sunt doloremque, voluptatibus quos neque ullam",
    img: "https://picsum.photos/id/18/300/200",
    tags: [
      {
        id: 1,
        value :"react",
      },
    ],
  },
  {
    id: 10,
    title: "Title 10",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dignissimos itaque fugit veritatis esse am sunt doloremque, voluptatibus quos neque ullam",
    img: "https://picsum.photos/id/19/300/200",
    tags: [
      {
        id: 1,
        value :"html",
      },
      {
        id: 2,
        value :"react",
      },
      {
        id: 3,
        value :"node",
      },
    ],
  },
];

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
    <div className="bg-background-l dark:bg-background-d transition duration-1000 pt-[0.94rem] antialiased font-ralaway overflow-x-hidden ">
      <Header onChangeTheme={handleThemeSwitcher} theme={theme} />
      <section className="flex flex-col mt-8 mx-[0.94rem] mb-24 aboutMe:flex-row aboutMe:items-center aboutMe:justify-evenly">
        <Avatar />
        <div className="aboutMe:order-1">
          <TagSection
            icon={
              <FaRegHandPeace
                size={22}
                className="dark:text-main-d text-main-l drop-shadow-lg"
                strokeWidth={11}
              />
            }
            content="Olá, bem vindo(a)!"
          />
          <h1 className="text-text-l dark:text-text-d font-bold text-[2.7rem] leading-tight">
            André <br />
            Luiz
          </h1>
          <h2 className="text-text-l dark:text-text-d opacity-50 text-xl">
            Fullstack developer | Back-end
          </h2>
        </div>

        <div className="flex flex-col  sm:flex-row sm:gap-4 sm:items-center aboutMe:order-3">
          <div className="flex items-center gap-2 max-w-fit opacity-80 font-bold text-lg my-4 hover:opacity-100 transition duration-200">
            <button className="text-main-d ">Baixar CV</button>
            <Download size={25} className="text-main-d" weight="fill" />
          </div>
          <div className=" flex items-center gap-2 max-w-fit opacity-80 font-bold text-lg p-1 hover:opacity-100 border rounded-md border-main-l dark:border-main-d transition duration-200 h-fit">
            <WhatsappLogo size={25} className="text-main-d" />
            <button className="text-main-d">Vamos conversar</button>
          </div>
        </div>
      </section>
      <section className="text-text-l dark:text-text-d flex flex-col items-center mb-16">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col gap-8 sm:flex-row">
            <ExperienceCard
              duration="0 anos como"
              role="Programador"
              icon={
                <Code
                  size={40}
                  weight="bold"
                  className="text-main-l dark:text-main-d opacity-60 group-hover:opacity-100"
                />
              }
            />
            <ExperienceCard
              duration="0 anos de"
              role="Trabalho"
              icon={
                <Laptop
                  size={40}
                  weight="bold"
                  className="text-main-l dark:text-main-d opacity-60 group-hover:opacity-100"
                />
              }
            />
            <ExperienceCard
              duration="0 anos de"
              role="Trabalho"
              icon={
                <CodesandboxLogo
                  size={40}
                  weight="bold"
                  className="text-main-l dark:text-main-d opacity-60 group-hover:opacity-100"
                />
              }
            />
          </div>
          <div className="w-full hidden sm:flex justify-around gap-10 py-4 bg-main-opaca-l dark:bg-main-opaca-d rounded-lg border border-main-l dark:border-main-d">
            <ExperienceText role="Fullstack" complement="Desenvolvedor" />
            <ExperienceText
              role="Experiências"
              complement="Dezenas de projetos"
            />
            <ExperienceText role="Dedicado" complement="Bastante" />
          </div>
        </div>
      </section>
      <section className="mx-[0.94rem] flex flex-col aboutMe:flex-row aboutMe:gap-4 aboutMe:justify-center mb-20">
        <div className="flex justify-center w-auto">
          <img className="max-w-96 w-full" src={imgAboutMe} alt="" />
        </div>
        <div className="w-fit aboutMe:w-3/5">
          <TagSection
            icon={
              <Smiley
                size={25}
                weight="bold"
                className="dark:text-main-d text-main-l drop-shadow-lg "
              />
            }
            content="Sobre mim"
          />
          <h1 className="text-text-l dark:text-text-d font-bold text-[2.7rem] w-fit leading-tight">
            André <br />
            Luiz
          </h1>
          <div className="opacity-90 flex flex-col gap-4 ">
            <p className="indent-2 text-[0.95rem] text-text-l dark:text-text-d text-justify">
              Meu nome é André Luiz, tenho 21 anos e sou apaixonado por
              programação. Estou estudando para ser um desenvolvedor versátil,
              habilidoso tanto no back-end quanto no front-end.{" "}
              <b className="text-main-l dark:text-main-d">
                Gosto muito de aprender coisas novas sempre.
              </b>
            </p>
            <p className="indent-2 text-[0.95rem] text-text-l dark:text-text-d text-justify">
              Além da programação, sou um grande fã dos filmes de heróis da
              Marvel, também gosto muito de jogos online,{" "}
              <b className="text-main-l dark:text-main-d">
                adoro explorar novos mundos virtuais
              </b>{" "}
              e trabalhar em equipe para superar desafios.
            </p>
            <p className="indent-2 text-[0.95rem] text-text-l dark:text-text-d text-justify">
              Meu portfólio reflete minha paixão pela programação e minha
              dedicação em desenvolver projetos{" "}
              <b className="text-main-l dark:text-main-d">eficientes</b> e{" "}
              <b className="text-main-l dark:text-main-d">
                esteticamente agradáveis.
              </b>{" "}
              Estou sempre buscando aprimorar minhas habilidades e estou pronto
              para enfrentar novos desafios emocionantes.
            </p>
            <p className="indent-2 text-[0.95rem] text-text-l dark:text-text-d text-justify">
              <RocketLaunch
                weight="fill"
                size={30}
                className="text-main-l dark:text-main-d inline"
              />{" "}
              Se você procura um programador apaixonado e dedicado, basta me dar
              uma chance, estou aqui para ajudar.{" "}
              <b className="text-main-l dark:text-main-d">
                Vamos criar algo incrível juntos!
              </b>
            </p>
          </div>
        </div>
      </section>
      <section className="mx-[0.94rem] flex flex-col gap-12 mb-20">
        <div className="flex flex-col gap-4 sm:items-center">
          <TagSection
            icon={
              <Link
                size={25}
                weight="bold"
                className="dark:text-main-d text-main-l drop-shadow-lg "
              />
            }
            content="Portfólio"
          />
          <div className="text-text-l dark:text-text-d">
            <p className="flex flex-col font-extrabold text-4xl sm:flex-row sm:justify-center">
              Trabalhos <span>e Projetos</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <form className="flex 300sx:max-320sx:self-center self-start sm:self-end gap-2">
            <CarrousselFilter icon={<FaHtml5 size={30} />} tecnology="HTML" />
            <CarrousselFilter icon={<FaReact size={30} />} tecnology="React" />
            <CarrousselFilter
              icon={<FaNodeJs size={30} />}
              tecnology="Node.JS"
            />
          </form>
          <div className="w-full overflow-y-hidden">
            <div className="flex gap-4 lg:flex-wrap lg:justify-center">
              {cards.map((card) => (
                <CarrousselCard key={card.id} img={card.img} desc={card.desc} title={card.title} tags={card.tags}/>
              ))}
            </div>
          </div>
          <a
            href="#"
            className="text-main-l dark:text-main-d flex gap-2 items-center self-end border border-main-l dark:border-main-d py-2 px-4 rounded-md font-bold"
          >
            VER TODOS <ArrowRight weight="bold" size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
