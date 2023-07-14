import { ScreenContainer } from "@/components/ScreenContainer";
import { SectionTitle } from "@/components/SectionTitle";
import { Text, VStack } from "@chakra-ui/react";
import { Briefcase } from "iconsax-react";
import { TimelineItem } from "./components/TimelineItem";
import { AppData } from "@/types/AppData";

export function ExperienceScreen({ experiences }: { experiences: AppData["experiences"] }) {
  return (
    <ScreenContainer>
      <SectionTitle title="EXPERIENCES" Icon={Briefcase} />

      <Text
        fontSize={{ base: "3xl", lg: "4xl" }}
        color="text.accent"
        mt={7}
        mb={7}
        data-aos="fade-left"
      >
        Experiences
      </Text>

      <VStack alignItems="flex-start" gap={0} mb={16} data-aos="fade-left">
        {experiences.map((experience, idx) => (
          <TimelineItem
            key={idx}
            position={experience.position}
            period={experience.period}
            company={experience.company}
            current={experience.current}
          />
        ))}
      </VStack>
    </ScreenContainer>
  );
}
