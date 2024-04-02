import { Player } from "@lordicon/react";
import monster from "../assets/monster.json";
import { useEffect, useRef } from "react";

interface MonsterProps {
  theme: string;
}

export function Monster({ theme }: MonsterProps) {
  const playerRef = useRef<Player>(null);

  useEffect(() => {
    playerRef.current?.playFromBeginning();
  }, []);

  return (
    <Player
      ref={playerRef}
      size={100}
      colorize={theme === "light" ? "#61398F" : "#7b4ae2"}
      onComplete={() => playerRef.current?.playFromBeginning()}
      icon={monster}
    />
  );
}
