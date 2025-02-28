import React from "react";
import Image from "next/image";
import fly from "@/public/images/fly.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

type Props = { title: string; content: string; theme: string };

export default function Box({ title, content, theme }: Props) {
  return (
    <div className="w-full p-5 flex items-center justify-between bg-[#1F2937] rounded-2xl">
      <div className="flex flex-col items-start justify-center gap-2">
        <h1 className="text-3xl">{title}</h1>
        <p className="text-sm">{content}</p>
        <div className="flex items-center gap-3">
          <span className="px-2 bg-green-600 text-[#111827] rounded-[3px]">
            {theme}
          </span>
          <FontAwesomeIcon
            className="size-4"
            icon={faChevronDown}
          ></FontAwesomeIcon>
        </div>
      </div>
      <div>
        <Image src={fly} alt="" width={400} height={400} />
      </div>
    </div>
  );
}
