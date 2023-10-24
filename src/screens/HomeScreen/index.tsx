import { SectionTitle } from "@/components/SectionTitle";
import { Socials } from "@/components/Socials";
import { useAppData } from "@/hooks/useAppData";
import { Home2 } from "iconsax-react";
import Image from "next/image";
import { StatTile } from "./components/StatTile";

export function HomeScreen({ pad }: { pad: number }) {
  const { description, socials } = useAppData();

  return (
    <section id="home" style={{ paddingTop: `${pad}px` }} className="lg:h-screen mb-12">
      <SectionTitle title="INTRODUCE" Icon={Home2} />

      <div
        className={`flex flex-col items-start pt-5 text-3xl lg:text-5xl
                    text-white leading-tight lg:leading-tight`}
      >
        <p data-aos="fade-up" data-aos-delay="200">
          Hello, I am <span className="font-bold text-icterine">Hossein</span>,
        </p>
        <p data-aos="fade-up" data-aos-delay="400">
          a Software Engineer
        </p>
      </div>

      <div className="flex lg:hidden justify-center mt-6" data-aos="zoom-out" data-aos-delay="500">
        <Image
          src="/images/avatar.jpg"
          width={200}
          height={200}
          alt="Hossein Sadeghi"
          style={{ borderRadius: "16px" }}
        />
      </div>

      <p className="text-sm mt-8 text-spanish-gray" data-aos="zoom-out" data-aos-delay="800">
        {description}
      </p>

      <div className="lg:hidden" data-aos="zoom-out" data-aos-delay="1000">
        <Socials items={socials} />
      </div>

      <div className="flex justify-around mt-10" data-aos="zoom-out" data-aos-delay="1000">
        <StatTile number="7+" description="YEARS OF EXPRIENCE" />
        <StatTile number="5+" description="PROJECTS COMPLETED" />
      </div>
    </section>
  );
}
