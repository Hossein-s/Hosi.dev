import { AppData } from "@/types/AppData";
import Image from "next/image";

export function Socials({ items }: { items: AppData["socials"] }) {
  return (
    <div className="flex justify-center gap-3 mt-5">
      {items.map(({ url, icon, name }, idx) => (
        <a
          key={idx}
          title={name}
          href={url}
          target="_blank"
          className={`flex justify-center items-center rounded-xl w-10 h-10
                    text-raisin-black bg-granite-gray hover:bg-gray-300
                    transition-all`}
        >
          <Image width={20} height={20} src={icon} alt={name} />
        </a>
      ))}
    </div>
  );
}
