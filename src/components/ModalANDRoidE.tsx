import { useEffect, useRef } from "react";

interface ModalANDRoidProps {
  setModalANDRoidEVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  visibilityModalANDRoidE: boolean;
}

export function ModalANDRoidE({
  visibilityModalANDRoidE,
  setModalANDRoidEVisibility,
}: ModalANDRoidProps) {
  const modal = useRef<HTMLDivElement>(null);
  const modalCloseChildren = useRef<HTMLDivElement>(null);

  function handleModalClickOut() {
    setModalANDRoidEVisibility(false);
  }

  useEffect(() => {
    visibilityModalANDRoidE
      ? (modal.current?.classList.remove("max-sm:translate-y-full"),
        modal.current?.classList.remove("sm:translate-x-full"),
        modal.current?.classList.remove("opacity-0"))
      : (modal.current?.classList.add("max-sm:translate-y-full"),
        modal.current?.classList.add("sm:translate-x-full"),
        setTimeout(() => modal.current?.classList.add("opacity-0"), 600));
  }, [visibilityModalANDRoidE]);

  return (
    <>
      <div
        ref={modal}
        className="top-0 bottom-0 w-full fixed backdrop-blur-sm z-20 max-sm:translate-y-full transition-transform  duration-500 sm:translate-x-full sm:w-1/2 sm:right-0 flex items-end opacity-0"
      >
        <div className="h-[80%] w-full bg-main-l z-30">a</div>
        <div
          ref={modalCloseChildren}
          onClick={handleModalClickOut}
          className="w-full h-full bg-transparent absolute"
        ></div>
      </div>
    </>
  );
}
