import { FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";

type Type2 = {
  code: "html" | "react" | "node";
};

// interface Types1 {
//   html: {
//     content: "HTML";
//     icon: JSX.Element;
//   };
//   react: {
//     content: "REACT";
//     icon: JSX.Element;
//   };
//   node: {
//     content: "NODE";
//     icon: JSX.Element;
//   };
// }

export function CarrousselCardTag({ code }: Type2) {
  const types = {
    html: {
      content: "HTML",
      icon: <FaHtml5 className="text-main-l dark:text-main-d" size={18} />,
    },
    react: {
      content: "REACT",
      icon: <FaReact className="text-main-l dark:text-main-d" size={18} />,
    },
    node: {
      content: "NODE",
      icon: <FaNodeJs className="text-main-l dark:text-main-d" size={18} />,
    },
  };

  return (
    <div className="flex gap-2 bg-main-opaca-l w-fit p-2 rounded-xl items-center justify-center">
      {types[code].icon}
      <p className="text-main-l dark:text-main-d font-extrabold text-xs">
        {types[code].content}
      </p>
    </div>
  );
}
