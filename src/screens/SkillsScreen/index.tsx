import { SectionTitle } from "@/components/SectionTitle";
import { useAppData } from "@/hooks/useAppData";
import { MainComponent } from "iconsax-react";
import Image from "next/image";

export function SkillsScreen() {
  const { skills } = useAppData();

  return (
    <section id="skills">
      <SectionTitle title="DIGITAL SKILLS" Icon={MainComponent} />

      <div className="text-3xl lg:text-4xl text-white my-7" data-aos="fade-left">
        Digital <span className="text-icterine">Skills</span>
      </div>

      <div>
        {skills.map(({ categoryName, items }, idx) => (
          <div key={idx} data-aos="zoom-out">
            <h6 className="text-xl text-icterine mb-5 mt-10">{categoryName}</h6>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {items.map(({ name, image }, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col items-center gap-2
                              h-full p-5 border border-granite-gray rounded-2xl`}
                >
                  <div className="flex items-center w-20 h-20">
                    <Image
                      src={image}
                      width={80}
                      height={80}
                      alt={name}
                      title={name}
                      className="max-w-20 max-h-20"
                    />
                  </div>
                  <p className="flex flex-grow text-base text-white text-center mt-6">{name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
