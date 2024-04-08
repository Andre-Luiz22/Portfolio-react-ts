import {
  ChatTeardropText,
  PaperPlaneRight,
  User,
  XCircle,
} from "phosphor-react";
import { useState } from "react";
import type { DrawerProps } from "antd";
import { Drawer } from "antd";

export function ANDRoidE() {
  const { innerWidth } = window;
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>(
    innerWidth >= 640 ? "right" : "bottom"
  );

  const showDrawer = () => {
    const { innerWidth } = window;
    innerWidth >= 640 ? setPlacement("right") : setPlacement("bottom");

    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={showDrawer}
        className="dark:bg-[#85888C] bg-[#C5B2D5] p-2 rounded-full fixed bottom-4 right-4 z-10"
      >
        <ChatTeardropText
          weight="bold"
          className="text-main-l dark:text-main-d"
          size={30}
        />
      </button>
      <Drawer
        // title={
        //   <h2 className="dark:text-main-d text-main-l">Fale com o ANDRoidE</h2>
        // }
        placement={placement}
        onClose={onClose}
        open={open}
        height={650}
        width={500}
        closeIcon={
          <XCircle
            size={35}
            weight="bold"
            className="text-main-l dark:text-main-d"
          />
        }
      >
        <div className="w-full h-full  grid grid-rows-botContainer">
          <div className="flex flex-col h-full">
            <div className="bg-[#D0C4DC] dark:bg-[#261D4A] border-4 border-main-l dark:border-main-d w-fit rounded-full p-4 mx-auto top-2 z-30 absolute right-1/2 translate-x-1/2 ">
              <User
                size={100}
                weight="fill"
                className="text-main-l dark:text-main-d"
              />
            </div>
            <div className="w-full h-full border rounded-md border-main-l dark:border-main-d flex items-end overflow-hidden">
              <div className="h-[26rem] sm:h-[68vh] w-full scrollbar-hide overflow-auto mx-4 mb-4 rounded-2xl">
                <div className="p-4  bg-main-opaca-l dark:bg-main-opaca-d w-full h-full flex flex-col gap-8">
                  {/*  Logica de enviar msg aqui*/}
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
                        ANDRoidE
                      </span>
                      <div className=" py-2 px-4 rounded-lg bg-main-opaca-l dark:bg-main-opaca-d w-fit border border-main-l dark:border-main-d">
                        Olá, meu nome é ANDRoidE
                      </div>
                    </div>
                  </div>
                  {/**/}
                  <div className="flex items-start gap-2 flex-row-reverse justify-start w-fit self-end md:max-w-[75%]">
                    <div className="bg-[#D0C4DC] dark:bg-[#261D4A] border border-main-l dark:border-main-d w-fit rounded-full p-2 h-fit mt-2">
                      <User
                        size={20}
                        weight="fill"
                        className="text-main-l dark:text-main-d"
                      />
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-text-l opacity-50 dark:text-text-d">
                        Você
                      </span>
                      <div className=" py-2 px-4 rounded-lg bg-main-opaca-l dark:bg-main-opaca-d w-fit border border-main-l dark:border-main-d">
                        Olá, meu nome é ANDRoidE dasdasd dasd asdasd asdasdas da
                        caminhão caminhão caminhão
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form className="grid  grid-cols-botForm gap-2 justify-center items-center ">
            <input
              className="border-2 h-2/3 border-main-l dark:border-main-d rounded-xl p-2 bg-transparent text-text-l dark:text-text-d placeholder:text-[#C5B2D5] dark:placeholder:text-[#85888C]"
              type="text"
              placeholder="Escreva uma pergunta..."
            />
            <button className="bg-main-opaca-l dark:bg-main-opaca-d rounded-full w-fit h-fit p-2 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
              <PaperPlaneRight
                size={30}
                weight="bold"
                className="text-main-l dark:text-main-d"
              />
            </button>
          </form>
        </div>
      </Drawer>
    </>
  );
}
