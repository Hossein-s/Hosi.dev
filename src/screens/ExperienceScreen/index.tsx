import { SectionTitle } from "@/components/SectionTitle";
import { useAppData } from "@/hooks/useAppData";
import { Briefcase } from "iconsax-react";
import { TimelineItem } from "./components/TimelineItem";

export function ExperienceScreen() {
  const { experiences } = useAppData();

  return (
    <section id="experiences">
      <SectionTitle title="EXPERIENCES" Icon={Briefcase} />

      <h3 className="text-xl lg:text-4xl text-icterine my-7" data-aos="fade-left">
        Experiences
      </h3>

      <div className="flex flex-col items-flex-start mb-16" data-aos="fade-left">
        {experiences.map((experience, idx) => (
          <TimelineItem
            key={idx}
            position={experience.position}
            period={experience.period}
            company={experience.company}
            current={experience.current}
          />
        ))}
      </div>
    </section>
  );
}
