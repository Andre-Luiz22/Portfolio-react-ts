import {
  ChatTeardropText,
  PaperPlaneRight,
  User,
  XCircle,
} from "phosphor-react";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import type { DrawerProps } from "antd";
import { Drawer } from "antd";
import { UserMsg } from "./UserMsg";
import { ANDRoidEMsg } from "./ANDRoidEMsg";
import { v4 as uuidv4 } from "uuid";

export interface Message {
  id?: string;
  content: string;
  author: "Você" | "ANDRoidE";
}

export function ANDRoidE() {
  const { innerWidth } = window;
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>(
    innerWidth >= 640 ? "right" : "bottom"
  );
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "inicio1",
      content:
        "Olá, sou o ANDRoidE, criado pelo André para te ajudar a conhecê-lo melhor. Pergunte o que quiser sobre ele.",
      author: "ANDRoidE",
    },
    {
      id: "inicio2",
      content:
        "Apesar de estar em desenvolvimento e farei o meu melhor para responder. Desculpe qualquer erro, estou sempre melhorando.",
      author: "ANDRoidE",
    },
  ]);

  const chat = useRef<HTMLDivElement>(null);

  const [textMsg, setTextMsg] = useState("");

  function handleNewMsgChange(e: ChangeEvent<HTMLInputElement>) {
    setTextMsg(e.target.value);
  }

  function scrollBottom() {
    if (chat?.current) {
      chat.current.scrollIntoView({ block: "end", behavior: "instant" });
    }
  }

  function handleSendNewMessage(e: FormEvent) {
    e.preventDefault();
    const newMessage: Message = {
      id: uuidv4(),
      content: textMsg,
      author: "Você",
    };
    setMessages([...messages, newMessage]);
    setTimeout(() => {
      scrollBottom();
    }, 100);
    setTextMsg("");

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        languageCode: "pt-br",
        queryText: newMessage.content,
        sessionId: "123",
      }),
    };

    fetch("https://backend-portfolio-bna7.onrender.com/ANDRoidE", options)
      .then((result) => result.json())
      .then((data) => {
        const ANDRoidEMsg: Message = {
          id: uuidv4(),
          author: "ANDRoidE",
          content: data.response,
        };
        setMessages([...messages, newMessage, ANDRoidEMsg]);
        scrollBottom();
        setTimeout(() => {
          scrollBottom();
        }, 500);
      });
  }

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
        title={<h2 className="dark:text-main-d text-main-l">BETA</h2>}
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
              <div className="h-[26rem] sm:h-[68vh] w-full scrollbar-hide overflow-auto mx-4 mb-4 rounded-2xl bg-main-opaca-l dark:bg-main-opaca-d">
                <div
                  className="p-4   w-full h-max flex flex-col gap-8"
                  ref={chat}
                >
                  {/*  Logica de enviar msg aqui*/}
                  {messages.map((message) => {
                    return message.author === "ANDRoidE" ? (
                      <ANDRoidEMsg
                        key={message.id}
                        author={message.author}
                        content={message.content}
                      />
                    ) : (
                      <UserMsg
                        key={message.id}
                        author={message.author}
                        content={message.content}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <form
            className="grid  grid-cols-botForm gap-2 justify-center items-center "
            onSubmit={handleSendNewMessage}
          >
            <input
              className="border-2 h-2/3 border-main-l dark:border-main-d rounded-xl p-2 bg-transparent text-text-l dark:text-text-d placeholder:text-[#C5B2D5] dark:placeholder:text-[#85888C]"
              type="text"
              onChange={handleNewMsgChange}
              value={textMsg}
              placeholder="Escreva uma pergunta..."
              required
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
