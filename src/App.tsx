import { useState, useLayoutEffect, useEffect } from "react";
import { ConfigProvider, message } from "antd";
import { Header } from "./components/Header";
import { Avatar } from "./components/Avatar";
import { CarrousselCardSkeleton } from "./components/CarrousselCardSkeleton";
import { FaRegHandPeace } from "react-icons/fa6";
import { GitHub, Linkedin } from "react-feather";
import imgAboutMe from "./assets/imgAboutMe.svg";
import copy from "copy-to-clipboard";
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
  Lightning,
  Suitcase,
  EnvelopeSimple,
  PaperPlaneTilt,
  Copy,
  ArrowUp,
  Copyright,
} from "phosphor-react";
import { ExperienceCard } from "./components/ExperienceCard";
import { ExperienceText } from "./components/ExperienceText";
import { TagSection } from "./components/TagSection";
import { CarrousselFilter } from "./components/CarrousselFilter";
import curriculo from "./assets/Andre_Luiz_Ferreira_da_Silva.pdf";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiNestjs,
  SiFlutter,
  SiMongodb,
  SiTailwindcss,
  SiDialogflow,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import {
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaCss3Alt,
  FaSass,
  FaGitAlt,
  FaGithub,
  FaReact,
  FaBootstrap,
} from "react-icons/fa";
import {
  CarrousselCard,
  CarrousselCardProps,
} from "./components/CarrousselCard";
import { Monster } from "./components/Monster";
import { AreaAcademicaCard } from "./components/AreaAcademicaCard";
import { ANDRoidE } from "./components/ANDRoidE";
// import { AreaAcademicaCardSkeleton } from "./components/AreaAcademicaCardSkeleton";

export function App() {
  const [theme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const [isCarrousselCardsLoading, setIsCarrousselCardsLoading] =
    useState(true);
  // const [isAreaAcademicaCardsLoading, setIsAreaAcademicaCardsLoading] =
  //   useState(true);
  const [carrousselCards, setCarrousselCards] = useState<CarrousselCardProps[]>(
    []
  );
  // const [areaAcademicaCards, setAreaAcademicaCards] = useState([]);

  const [messageApi, contextHolder] = message.useMessage();
  useLayoutEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  //https://backend-portfolio-bna7.onrender.com
  useEffect(() => {
    fetch("https://backend-portfolio-bna7.onrender.com/favoriteCards")
      .then((data) => data.json())
      .then((result) => {
        const cards = result;
        setCarrousselCards(cards);
        setIsCarrousselCardsLoading(false);
      });

    // fetch("https://backend-portfolio-bna7.onrender.com/areaAcademica")
    //   .then((data) => data.json())
    //   .then((cards) => {
    //     setAreaAcademicaCards(cards);
    //     setIsAreaAcademicaCardsLoading(false);
    //   });
  }, []);

  function handleThemeSwitcher() {
    setTheme(!theme);
  }
  function copyEmail() {
    messageApi.success({
      type: "success",
      content: "Email copiado com sucesso",
    });
    copy("andreluiz01bhz@gmail.com");
  }

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <ConfigProvider
      message={{
        style: {
          border: `2px solid ${theme ? "#7b4ae2" : "#61398F"}`,
          borderRadius: "10px",
          width: "fit-content",
          margin: "0 auto",
        },
      }}
      drawer={{
        style: {
          background: `${theme ? "#090E16" : "#F5F3F7"}`,
          color: `${theme ? "#FFFFFF" : "#4A4A4A"}`,
        },
        styles: {
          body: {
            padding: "5px",
          },
        },
      }}
      theme={{
        components: {
          Message: {
            contentBg: theme ? "#261D4A" : "#d0c4dc",
            colorText: theme ? "#FFFFFF" : "#4A4A4A",
          },
          Skeleton: {
            gradientToColor: theme ? "#7A4AE288" : "#61398F88",
            colorFillContent: theme ? "#7A4AE241" : "#61398F41",
          },
        },
      }}
    >
      <div className="bg-background-l dark:bg-background-d transition duration-1000 pt-[0.94rem] antialiased font-ralaway overflow-x-hidden ">
        <ANDRoidE />
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
            <a href={curriculo} download>
              <div className="flex items-center gap-2 max-w-fit opacity-50 font-bold text-lg my-4 hover:opacity-100 transition duration-200">
                <button className="text-main-d ">Baixar CV</button>
                <Download size={25} className="text-main-d" weight="fill" />
              </div>
            </a>
            <a
              href="https://wa.me/5531993206431?text=Olá, vim pelo seu portfólio, e gostaria de conversar um pouco com você..."
              target="_blank"
            >
              <div className=" flex items-center gap-2 max-w-fit opacity-50 font-bold text-lg p-1 hover:opacity-100 border rounded-md border-main-l dark:border-main-d transition duration-200 h-fit">
                <WhatsappLogo size={25} className="text-main-d" />
                <button className="text-main-d">Vamos conversar</button>
              </div>
            </a>
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
                Estou sempre buscando aprimorar minhas habilidades e estou
                pronto para enfrentar novos desafios emocionantes.
              </p>
              <p className="indent-2 text-[0.95rem] text-text-l dark:text-text-d text-justify">
                <RocketLaunch
                  weight="fill"
                  size={30}
                  className="text-main-l dark:text-main-d inline"
                />{" "}
                Se você procura um programador apaixonado e dedicado, basta me
                dar uma chance, estou aqui para ajudar.{" "}
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
              <p className="flex flex-col font-extrabold text-4xl sm:flex-row sm:justify-center sm:gap-2">
                Trabalhos <span>e Projetos</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <form className="flex 300sx:max-320sx:self-center self-start sm:self-end gap-2">
              <CarrousselFilter icon={<FaHtml5 size={30} />} tecnology="HTML" />
              <CarrousselFilter
                icon={<FaReact size={30} />}
                tecnology="React"
              />
              <CarrousselFilter
                icon={<FaNodeJs size={30} />}
                tecnology="Node.JS"
              />
            </form>
            <div className="w-full overflow-y-hidden scrollbar-hide">
              <div className="flex gap-4 lg:flex-wrap lg:justify-center">
                {isCarrousselCardsLoading && (
                  <CarrousselCardSkeleton quantity={2} />
                )}
                {carrousselCards.map((card) => (
                  <CarrousselCard
                    key={card._id}
                    imgLink={card.imgLink}
                    description={card.description}
                    title={card.title}
                    tags={card.tags}
                    link={card.link}
                  />
                ))}
              </div>
            </div>
            <a
              href="#"
              className="text-main-l dark:text-main-d flex gap-2 items-center self-end border border-main-l dark:border-main-d py-2 px-4 rounded-md font-bold dark:hover:bg-main-opaca-d hover:bg-main-opaca-l"
            >
              VER TODOS <ArrowRight weight="bold" size={20} />
            </a>
          </div>
        </section>
        <section className="mx-[0.94rem] flex flex-col gap-12 mb-20">
          <div className="flex flex-col gap-4 sm:items-center">
            <TagSection
              icon={
                <Lightning
                  size={25}
                  weight="fill"
                  className="dark:text-main-d text-main-l drop-shadow-lg "
                />
              }
              content="Habilidades"
            />
            <div className="text-text-l dark:text-text-d">
              <p className="flex flex-col font-extrabold text-4xl sm:flex-row sm:justify-center sm:gap-2">
                Tecnologias <span>e Habilidades</span>
              </p>
            </div>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col gap-3 sm:items-center">
              <strong className="text-text-l dark:text-text-d opacity-50 font-normal text-xl">
                Tecnolgias que conheço
              </strong>
              <div className="overflow-y-hidden w-full scrollbar-hide">
                <div className="flex gap-3 w-full 1250sx:justify-center ">
                  <FaHtml5
                    size={70}
                    className="shrink-0 text-main-opaca-l dark:text-main-opaca-d hover:text-main-l dark:hover:text-main-d transition duration-500"
                  />
                  <FaCss3Alt
                    size={70}
                    className="shrink-0 text-main-opaca-l dark:text-main-opaca-d hover:text-main-l dark:hover:text-main-d transition duration-500"
                  />
                  <SiJavascript
                    size={70}
                    className="shrink-0 text-main-opaca-l dark:text-main-opaca-d hover:text-main-l dark:hover:text-main-d transition duration-500"
                  />
                  <SiTypescript
                    size={70}
                    className="shrink-0 text-main-opaca-l dark:text-main-opaca-d hover:text-main-l dark:hover:text-main-d transition duration-500"
                  />
                  <FaReact
                    size={70}
                    className="shrink-0 text-main-opaca-l dark:text-main-opaca-d hover:text-main-l dark:hover:text-main-d transition duration-500"
                  />
                  <FaNodeJs
                    size={70}
                    className="shrink-0 text-main-opaca-l dark:text-main-opaca-d hover:text-main-l dark:hover:text-main-d transition duration-500"
                  />
                  <SiTailwindcss
                    size={70}
                    className="shrink-0 text-main-opaca-l dark:text-main-opaca-d hover:text-main-l dark:hover:text-main-d transition duration-500"
                  />
                  <FaBootstrap
                    size={70}
                    className="shrink-0 text-main-opaca-l dark:text-main-opaca-d hover:text-main-l dark:hover:text-main-d transition duration-500"
                  />
                  <FaPython
                    size={70}
                    className="shrink-0 text-main-opaca-l dark:text-main-opaca-d hover:text-main-l dark:hover:text-main-d transition duration-500"
                  />
                  <FaSass
                    size={70}
                    className="shrink-0 text-main-opaca-l dark:text-main-opaca-d hover:text-main-l dark:hover:text-main-d transition duration-500"
                  />
                  <FaGitAlt
                    size={70}
                    className="shrink-0 text-main-opaca-l dark:text-main-opaca-d hover:text-main-l dark:hover:text-main-d transition duration-500"
                  />
                  <FaGithub
                    size={70}
                    className="shrink-0 text-main-opaca-l dark:text-main-opaca-d hover:text-main-l dark:hover:text-main-d transition duration-500"
                  />
                  <GrMysql
                    size={70}
                    className="shrink-0 text-main-opaca-l dark:text-main-opaca-d hover:text-main-l dark:hover:text-main-d transition duration-500"
                  />
                  <SiMongodb
                    size={70}
                    className="shrink-0 text-main-opaca-l dark:text-main-opaca-d hover:text-main-l dark:hover:text-main-d transition duration-500"
                  />
                  <SiDialogflow
                    size={70}
                    className="shrink-0 text-main-opaca-l dark:text-main-opaca-d hover:text-main-l dark:hover:text-main-d transition duration-500"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-3 sm:items-center">
                <strong className="text-text-l dark:text-text-d opacity-50 font-normal text-xl">
                  Tecnolgias que ainda vou aprender
                </strong>
                <div className="overflow-y-hidden w-full">
                  <div className="flex gap-3 w-full sm:justify-center">
                    <SiNextdotjs
                      size={70}
                      className="shrink-0 text-main-opaca-l dark:text-main-opaca-d hover:text-main-l dark:hover:text-main-d transition duration-500"
                    />
                    <SiNestjs
                      size={70}
                      className="shrink-0 text-main-opaca-l dark:text-main-opaca-d hover:text-main-l dark:hover:text-main-d transition duration-500"
                    />
                    <SiFlutter
                      size={70}
                      className="shrink-0 text-main-opaca-l dark:text-main-opaca-d hover:text-main-l dark:hover:text-main-d transition duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-[0.94rem] flex flex-col gap-12 mb-20">
          <div className="flex flex-col gap-4 sm:items-center">
            <TagSection
              icon={
                <Suitcase
                  size={25}
                  weight="fill"
                  className="dark:text-main-d text-main-l drop-shadow-lg "
                />
              }
              content="Carreira"
            />
            <div className="text-text-l dark:text-text-d">
              <p className="flex flex-col font-extrabold text-4xl sm:flex-row sm:justify-center sm:gap-2">
                Trajetória <span>até aqui</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8 sm:flex-row sm:justify-center">
            <div>
              <div className="text-text-l dark:text-text-d sm:flex sm:flex-col sm:items-center">
                <h2 className="flex flex-col font-bold text-3xl sm:flex-row  sm:gap-2 ">
                  Área <span>Profissional</span>
                </h2>
                <span className="opacity-50 text-sm">xxxx - Atualmente</span>
              </div>
              <div>
                <div className="sm:flex sm:flex-col max-h-96">
                  <div className="border border-main-l dark:border-main-d flex gap-8 rounded-2xl items-center w-fit pr-4">
                    <Monster theme={theme} />
                    <strong className="text-text-l dark:text-text-d font-medium">
                      Ainda a procura da
                      <br /> primeira{" "}
                      <b className="text-main-l dark:text-main-d font-black">
                        vaga
                      </b>
                    </strong>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-text-l dark:text-text-d sm:flex sm:flex-col sm:items-center">
                <h2 className="flex flex-col font-bold text-3xl sm:flex-row  sm:gap-2 ">
                  Área <span>Acadêmica</span>
                </h2>
                <span className="opacity-50 text-sm">xxxx - Atualmente</span>
              </div>
              <div>
                <div className="overflow-y-auto max-h-96 scrollbar-hide">
                  <div className=" flex gap-4 rounded-2xl sm:flex-col ">
                    <AreaAcademicaCard />
                    <AreaAcademicaCard />
                    <AreaAcademicaCard />
                    <AreaAcademicaCard />
                    <AreaAcademicaCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-[0.94rem] flex flex-col gap-12 mb-20">
          <div className="flex flex-col gap-4 sm:items-center">
            <TagSection
              icon={
                <EnvelopeSimple
                  size={25}
                  weight="bold"
                  className="dark:text-main-d text-main-l drop-shadow-lg "
                />
              }
              content="Contato"
            />
            <div className="text-text-l dark:text-text-d">
              <p className="flex flex-col font-extrabold text-4xl sm:flex-row sm:justify-center sm:gap-2">
                Entre <span>em contato</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 sm:items-center ">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
              <a
                href="https://wa.me/5531993206431?text=Olá, vim pelo seu portfólio, e gostaria de conversar um pouco com você..."
                target="_blank"
              >
                <div className=" flex items-center gap-2 max-w-fit opacity-50 font-bold text-lg p-1 hover:opacity-100 border rounded-md border-main-l dark:border-main-d transition duration-200 h-fit">
                  <WhatsappLogo size={25} className="text-main-d" />
                  <button className="text-main-d">Vamos conversar</button>
                </div>
              </a>
              <div>
                <PaperPlaneTilt
                  size={25}
                  weight="bold"
                  className="dark:text-main-d text-main-l drop-shadow-lg opacity-70"
                />
                <h3 className="text-main-l dark:text-main-d font-bold text-xl">
                  E-mail
                </h3>
                <span className="text-text-l dark:text-text-d flex gap-2 items-center">
                  andreluiz01bhz@gmail.com {contextHolder}
                  <Copy
                    size={30}
                    weight="bold"
                    className="dark:text-main-d text-main-l drop-shadow-lg opacity-70 transition duration-500 hover:opacity-100 cursor-pointer"
                    onClick={copyEmail}
                  />
                </span>
              </div>
            </div>
            <button
              className="text-main-l dark:text-main-d opacity-70 hover:opacity-100 text-lg flex gap-3 font-extrabold"
              onClick={goTop}
            >
              Voltar ao topo{" "}
              <ArrowUp
                size={30}
                weight="bold"
                className="dark:text-main-d text-main-l drop-shadow-lg opacity-70 transition duration-500 hover:opacity-100"
              />
            </button>
          </div>
        </section>
        <footer className="bg-main-opaca-l dark:bg-main-opaca-d space-y-4 py-4">
          <div className="flex items-center justify-center gap-4">
            <div className="bg-icone-l dark:bg-icone-d opacity-50 p-2 rounded-full  hover:opacity-100 transition duration-500">
              <a href="#" target="_blank">
                <Linkedin
                  size={25}
                  className="text-background-l dark:text-background-d"
                  strokeWidth={2}
                  fill={theme ? "#090e16" : "#F5F3F7"}
                />
              </a>
            </div>
            <div className="bg-icone-l dark:bg-icone-d opacity-50 p-2 rounded-full hover:opacity-100 transition duration-500">
              <a href="https://github.com/Andre-Luiz22" target="_blank">
                <GitHub
                  size={25}
                  className="text-background-l dark:text-background-d "
                  strokeWidth={2}
                  fill={theme ? "#090e16" : "#F5F3F7"}
                />
              </a>
            </div>
          </div>
          <span className="flex gap-2 items-center text-text-l dark:text-text-d opacity-50 justify-center ">
            Copyright <Copyright /> André Luiz - 2024
          </span>
        </footer>
      </div>
    </ConfigProvider>
  );
}
