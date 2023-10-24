import { useAppData } from "@/hooks/useAppData";
import { useCenter } from "@/hooks/useCenter";
import Image from "next/image";
import { FaEnvelope } from "react-icons/fa6";
import { Socials } from "../Socials";

export function ProfileBox({ onPadUpdate }: { onPadUpdate: (p: number) => void }) {
  const elementRef = useCenter(onPadUpdate);
  const { socials } = useAppData();

  return (
    <aside
      ref={elementRef as any}
      className="absolute hidden lg:block border border-granite-gray rounded-xl px-3 py-5"
      data-aos="fade-right"
      data-aos-delay="500"
    >
      <p className="text-xl text-center text-white font-bold mb-4">Hossein Sadeghi</p>

      <Image
        className="rounded-2xl"
        src="/images/avatar.jpg"
        width={230}
        height={230}
        alt="Hossein Sadeghi"
      />

      <Socials items={socials} />

      <a
        className="flex justify-center items-center gap-2 bg-icterine p-2.5 mt-4 rounded-xl"
        href="mailto:mail@hosi.dev"
      >
        <FaEnvelope className="text-raisin-black" />
        <p className="text-sm font-bold text-raisin-black">Contact Me</p>
      </a>
    </aside>
  );
}
