import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core"; 

type Props = { text: string; icon: IconProp };

export default function Button({ text, icon }: Props) {
  const isMoon = (icon as IconDefinition)?.iconName === "moon";

  return (
    <div className={`${isMoon ? "w-15 h-15": "w-25 h-25"} p-0.5 border-3 border-green-600 rounded-[5px]`}>
      <button className="w-full h-full flex items-center flex-col justify-center p-3 border-3 border-green-600 rounded-[3px] cursor-pointer hover:text-[#111827] hover:bg-green-600">
        <FontAwesomeIcon icon={icon} className={isMoon ? "size-10" : "size-7"}></FontAwesomeIcon>
        <span className="text-l font-extrabold">{text}</span>
      </button>
    </div>
  );
}
