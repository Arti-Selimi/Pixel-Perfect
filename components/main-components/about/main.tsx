import React from "react";
import Box from "./box";

export default function Main() {
  return (
    <div className="flex flex-col w-full gap-2">
      <Box
        title="Lore"
        content="I’m a cool guy because I embrace challenges, stay curious, and always bring positive energy. I love learning, creating, and connecting with others—keeping things chill and fun along the way!"
        theme="Me"
      />
      <Box
        title="Skills"
        content="I'm all about crafting sleek, efficient web experiences using React, Next.js, and Tailwind. Whether it’s front-end magic or problem-solving, I thrive on making things smooth and intuitive."
        theme="Tech"
      />
      <Box
        title="Passions"
        content="Beyond coding, I love gambling, music, and design. Whether it's crushing a new game, discovering fresh beats, or refining pixel-perfect details, I'm always exploring something new and exciting."
        theme="Life"
      />
    </div>
  );
}
