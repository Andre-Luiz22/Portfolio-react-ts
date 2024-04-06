import { ChatTeardropText } from "phosphor-react";

interface ANDRoidEButtonProps {
  setModalANDRoidEVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  visibilityModalANDRoidE: boolean
}

export function ANDRoidEButton({setModalANDRoidEVisibility, visibilityModalANDRoidE}:ANDRoidEButtonProps) {
  
  function handleButtonClick() {
    setModalANDRoidEVisibility(!visibilityModalANDRoidE);
  }

  return (
    <button
      className="p-2 rounded-full bg-[#c7b3d6] dark:bg-[#83868B] fixed bottom-4 right-4 z-10"
      onClick={handleButtonClick}
    >
      <ChatTeardropText
        size={30}
        weight="bold"
        className="text-main-l dark:text-main-d transition-colors duration-500"
      />
    </button>
  );
}
