import Button from "@/components/button";
import {
  faComputer,
  faGamepad,
  faBook,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import ClickSound from "@/components/clickSound";
import Main from "@/components/main-components/about/main";
import ColorBox from "@/components/ColorBox";
import MovingSim from "@/components/MovingSim";

export default function Home() {
  return (
    <div className="bg-[#111827] z-0">
       <MovingSim />
       <MovingSim />
      <div className="flex flex-col items-center justify-start gap-5 py-10 text-green-600 w-full h-full font-extrabold -z-10">
        <ClickSound />
        <ColorBox />
        <div className="text-center">
          <h1 className="text-4xl">Pixel Perfect!</h1>
          <p className="text-m">The best place to find work suitable to you.</p>
          <div className="flex items-center justify-center text-center">
            <p className="text-m underline ">
              Tech <span> • </span> Gamer <span> • </span> Scholar
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Button text="Tech" icon={faComputer} />
          <Button text="Gaming" icon={faGamepad} />
          <Button text="Scholar" icon={faBook} />
        </div>
        <Button text="" icon={faMoon} />
        <div className="w-full p-5">
          <h1 className="text-3xl pb-5 underline">About Me</h1>
          <Main />
        </div>
      </div>
    </div>
  );
}
