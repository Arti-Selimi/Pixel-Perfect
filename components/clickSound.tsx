"use client";

import { useEffect } from "react";

export default function ClickSound() {
  useEffect(() => {
    const playSound = () => {
      const audio = new Audio("/sound/click.mp3"); 
      audio.play();
    };

    document.body.addEventListener("click", playSound);

    return () => {
      document.body.removeEventListener("click", playSound);
    };
  }, []);

  return null; 
}