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
            <div className="w-full h-full border rounded-md border-main-l dark:border-main-d flex items-end b overflow-hidden">
              <div className="h-[26rem] sm:h-[30rem] w-full scrollbar-hide overflow-auto px-4">
                <div className="">
                  {/*  Logica de enviar msg aqui*/}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  facere incidunt, sed cum corporis vero reiciendis ut, veniam
                  ipsa mollitia amet temporibus odit earum dolore itaque,
                  aliquid veritatis consequuntur inventore. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Aliquam a et similique
                  pariatur? Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Maxime, quos incidunt. Quis repellendus dignissimos
                  laboriosam? Alias officiis commodi rerum! Odio beatae nihil
                  accusantium voluptatum cum incidunt, porro nisi quidem
                  perferendis quod quia, voluptates sint corporis doloremque
                  inventore optio commodi. Odit earum mollitia consequatur quo
                  laborum, voluptas facilis veniam doloribus itaque impedit
                  laudantium, culpa velit expedita inventore quae eligendi
                  temporibus numquam doloremque voluptatem atque nostrum
                  perspiciatis nesciunt cumque! Consectetur laboriosam doloribus
                  minima ut repudiandae facere veritatis temporibus sunt earum
                  perspiciatis. Incidunt cupiditate iste voluptatibus, cumque
                  asperiores et modi autem ratione adipisci! Ducimus fuga earum
                  dolorem illum cumque accusantium perferendis enim sunt! Quo
                  odio labore ducimus assumenda explicabo distinctio incidunt
                  voluptatum reiciendis consectetur id laborum quibusdam ab
                  tempore ut maiores pariatur nulla sunt eaque a tenetur
                  necessitatibus exercitationem, provident corrupti. Adipisci
                  illo quasi voluptas dolorum at illum, hic officiis expedita
                  sequi ea eius eos, ut repellat itaque sunt ad totam.
                  Explicabo, incidunt. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ipsum voluptas enim quasi. Ipsum dicta at
                  facere cumque quia dolorum nesciunt numquam in sint temporibus
                  autem fugiat itaque nisi cum, enim deleniti error earum minus!
                  Voluptates cumque enim quam assumenda delectus, praesentium,
                  nostrum harum culpa error velit beatae? Illum totam nam
                  deserunt ut? Culpa enim explicabo voluptate optio officiis
                  velit, necessitatibus temporibus vero praesentium deleniti
                  quasi mollitia corporis non, cupiditate aliquid asperiores
                  odio neque sit placeat, quos sed cumque rerum possimus sequi!
                  Totam quod consectetur accusamus obcaecati voluptatem ducimus
                  beatae natus et incidunt aspernatur consequuntur mollitia,
                  alias esse reiciendis neque aut itaque expedita molestiae rem
                  officia temporibus maxime cupiditate quo? Illum aliquid vero
                  ut id, eos soluta dolore! Enim quod aut eum ab sed explicabo,
                  provident, excepturi at ullam sequi assumenda maiores adipisci
                  amet commodi praesentium libero dolore soluta eius saepe
                  recusandae debitis voluptates. Eos, esse? Autem, est porro
                  obcaecati voluptatibus assumenda quis ducimus ullam quo eum,
                  earum natus id ipsam in, asperiores tempora? Explicabo
                  deserunt hic et ratione dignissimos maiores, sed ab
                  voluptatibus obcaecati itaque quod fugit expedita aspernatur
                  commodi voluptas earum reprehenderit, odio nam quas officiis
                  nihil atque similique eveniet officia. Minima quia deleniti
                  vitae laboriosam adipisci corrupti exercitationem obcaecati
                  autem ab officia! Error, hic. Voluptate obcaecati laudantium
                  labore, deleniti aut inventore alias repellendus! Laudantium
                  itaque quis hic atque modi voluptas? Iure ea, eveniet
                  consequatur dolor nobis similique ex, reprehenderit architecto
                  sed provident magni tempore laborum ipsum voluptatibus porro
                  at voluptas. Iusto perferendis assumenda dolores sed
                  distinctio praesentium expedita vitae deserunt consequuntur
                  sapiente ipsa, nobis nam porro ex culpa! Modi, pariatur
                  repellendus. Impedit, accusamus. Quaerat reprehenderit
                  eligendi laborum iusto optio rem vero deserunt sunt quisquam
                  nisi? Ex fuga maxime laborum non suscipit cum in modi ullam
                  tempora sed fugiat, tempore, perspiciatis incidunt! Harum,
                  explicabo voluptates. Nesciunt sequi a molestias vel veritatis
                  mollitia natus, aliquam magni architecto quae nemo impedit
                  consequuntur. Asperiores aut delectus, ducimus soluta fugiat
                  vitae deserunt corporis molestiae eos ut eligendi doloremque
                  repellat praesentium iure quidem quae numquam nulla nihil
                  fugit repellendus, ipsa voluptatibus magnam. Assumenda dolorum
                  ducimus corporis iste nobis reiciendis officiis, eveniet
                  obcaecati minus sit harum odio suscipit itaque. Deserunt
                  maxime natus suscipit nihil ducimus. Praesentium tenetur esse
                  minus rerum? Et voluptatum exercitationem culpa itaque
                  deserunt quam quisquam. Consequuntur quae delectus aperiam est
                  non? Quibusdam officiis optio inventore consequuntur itaque
                  doloribus quasi, odio corporis et dolorum? Provident explicabo
                  impedit tempore nostrum possimus saepe pariatur ad incidunt ea
                  quas reprehenderit enim, officia, culpa, labore dolorem
                  voluptatum et! Unde dolore placeat veniam doloremque eius quod
                  assumenda molestias, rerum culpa expedita. Adipisci quo
                  repellendus earum debitis illo soluta repudiandae recusandae,
                  aperiam harum architecto doloremque neque magni, commodi,
                  incidunt rem perspiciatis error quaerat beatae tenetur. Quasi
                  eligendi quos, nemo soluta dolor natus sequi incidunt aperiam
                  voluptate suscipit corporis perferendis quod inventore error
                  dolore laborum fuga magnam, temporibus debitis doloremque
                  tempora officiis tempore. Facilis dolorem, natus harum
                  sapiente fuga nesciunt, ea dignissimos voluptatibus ipsam nisi
                  sint distinctio blanditiis libero soluta reiciendis quaerat.
                  Excepturi numquam ducimus ipsum sed saepe hic molestiae.
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
