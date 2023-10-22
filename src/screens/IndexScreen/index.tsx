"use client";

import { ProfileBox } from "@/components/ProfileBox";
import { StickyNavbar } from "@/components/StickyNavbar";
import { AppDataProvider } from "@/hooks/useAppData";
import { AppData } from "@/types/AppData";
import { Box } from "@chakra-ui/react";
import Aos from "aos";
import { useEffect, useState } from "react";
import { ExperienceScreen } from "../ExperienceScreen";
import { HomeScreen } from "../HomeScreen";
import { SkillsScreen } from "../SkillsScreen";

export function IndexScreen({ data }: { data: AppData }) {
  const [offsetTop, setOffsetTop] = useState<number>(32);

  useEffect(() => {
    document.body.classList.add("js");
  }, []);

  useEffect(() => {
    setTimeout(Aos.init, 400);
    setTimeout(() => document.body.classList.add("animations-settled"), 1500);
  }, []);

  return (
    <AppDataProvider value={data}>
      <Box
        width={{ base: "100%", lg: "1050px" }}
        mx="auto"
        pb="12"
        position="relative"
        overflow="hidden"
        className="page-wrapper"
      >
        <ProfileBox onPadUpdate={setOffsetTop} />

        <StickyNavbar />

        <HomeScreen pad={offsetTop!} />

        <ExperienceScreen />

        <SkillsScreen />
      </Box>
    </AppDataProvider>
  );
}
