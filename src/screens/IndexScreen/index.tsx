"use client";

import { ProfileBox } from "@/components/ProfileBox";
import { StickyNavbar } from "@/components/StickyNavbar";
import { AppDataProvider } from "@/hooks/useAppData";
import { AppData } from "@/types/AppData";
import Aos from "aos";
import { useEffect, useState } from "react";
import { ExperienceScreen } from "../ExperienceScreen";
import { HomeScreen } from "../HomeScreen";
import { SkillsScreen } from "../SkillsScreen";

export function IndexScreen({ data }: { data: AppData }) {
  const [offsetTop, setOffsetTop] = useState<number>(32);

  useEffect(() => {
    setTimeout(Aos.init, 400);
    setTimeout(() => document.body.classList.add("animations-settled"), 1500);
  }, []);

  return (
    <AppDataProvider value={data}>
      <div className="relative lg:max-w-[1050px] mx-auto pb-12 overflow-hidden page-wrapper">
        <ProfileBox onPadUpdate={setOffsetTop} />
        <StickyNavbar />
        <main className="px-8 lg:px-0 mx-0 lg:ml-80 lg:max-w-[630px]">
          <HomeScreen pad={offsetTop!} />
          <ExperienceScreen />
          <SkillsScreen />
        </main>
      </div>
    </AppDataProvider>
  );
}
