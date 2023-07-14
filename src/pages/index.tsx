"use client";

import { ProfileBox } from "@/components/ProfileBox";
import { StickyNavbar } from "@/components/StickyNavbar";
import { ContactScreen } from "@/screens/ContactScreen";
import { ExperienceScreen } from "@/screens/ExperienceScreen";
import { HomeScreen } from "@/screens/HomeScreen";
import { SkillsScreen } from "@/screens/SkillsScreen";
import { AppData } from "@/types/AppData";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import { useEffect, useState } from "react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: "#FFF",
        bg: "#1F1F21",
      },
    },
  },
  colors: {
    "text.primary": "#FFF",
    "text.secondary": "#999",
    "text.accent": "#EEFC57",
    "bg.secondary": "#666666",
    stroke: "#666666",
    "bg.yellow": "#EEFC57",
  },
});

export default function Index(props: AppData) {
  const [offsetTop, setOffsetTop] = useState<number>(32);

  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 400);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Hossein&apos;s Personal Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Box width={{ base: "100%", lg: "1050px" }} mx="auto" position="relative" overflow="hidden">
        <ProfileBox onPadUpdate={(p) => setOffsetTop(p)} />

        <StickyNavbar />

        <HomeScreen pad={offsetTop!} info={props.basicInfo} />

        <ExperienceScreen experiences={props.experiences} />

        <SkillsScreen skillCategories={props.skillCategories} />

        <ContactScreen />
      </Box>
    </ChakraProvider>
  );
}

export function getStaticProps() {
  return {
    props: {
      basicInfo: {
        description:
          "I'm a skilled Full Stack Engineer with 7+ years of experience. I always like to bring new technologies and knowledge into work for solving problems.",
      },
      experiences: [
        {
          position: "SOFTWARE ENGINEER",
          company: "CHARGEPOINT",
          period: "AUG 2022 - CURRENT",
          current: true,
        },
        {
          position: "FREELANCE FULL-STACK ENGINEER",
          company: "Biztree",
          period: "SEP 2021 – AUG 2022",
          current: false,
        },
        {
          position: "SENIOR SOFTWARE ENGINEER",
          company: "SKYROOM - ONLINE COMMUNICATIONS",
          period: "MAY 2019 – SEP 2021",
          current: false,
        },
        {
          position: "SOFTWARE ENGINEER",
          company: "SKYROOM - ONLINE COMMUNICATIONS",
          period: "MAR 2017 – SEP 2021",
          current: false,
        },
        {
          position: "FREELANCE FULL-STACK DEVELOPER",
          company: "HAMYARSINA",
          period: "DEC 2016 – JAN 2017",
          current: false,
        },
        {
          position: "FREELANCE FULL-STACK DEVELOPER",
          company: "JOBDO",
          period: "SEP 2016 – NOV 2016",
          current: false,
        },
        {
          position: "FREELANCE FULL-STACK DEVELOPER",
          company: "SHAKIBI BTM",
          period: "JUN 2016 – JUL 2016",
          current: false,
        },
        {
          position: "BSc IN COMPUTER ENGINEERING",
          company: "Shahrood University of Technology",
          period: "NOV 2014 – JUL 2018",
          current: false,
        },
      ],
      skillCategories: [
        {
          name: "Languages",
          items: [
            { name: "TypeScript", image: "/icons/TypeScript.svg" },
            { name: "JavaScript", image: "/icons/JavaScript.svg" },
            { name: "PHP", image: "/icons/PHP.svg" },
          ],
        },
        {
          name: "Databases",
          items: [
            { name: "PostgreSQL", image: "/icons/PostgreSQL.svg" },
            { name: "MySQL", image: "/icons/MySQL.svg" },
            { name: "MongoDB", image: "/icons/MongoDB.svg" },
            { name: "Redis", image: "/icons/Redis.svg" },
          ],
        },
        {
          name: "Frameworks & Libraries",
          items: [
            { name: "NestJS", image: "/icons/NestJS.svg" },
            { name: "mediasoup (WebRTC)", image: "/icons/mediasoup.svg" },
            { name: "Symfony", image: "/icons/Symfony.svg" },
            { name: "Socket.io", image: "/icons/Socket.io.svg" },
            { name: "Express", image: "/icons/Express.svg" },
            { name: "Fastify", image: "/icons/Fastify.svg" },
          ],
        },
        {
          name: "Tools",
          items: [
            { name: "Git", image: "/icons/Git.svg" },
            { name: "Docker", image: "/icons/Docker.svg" },
            { name: "Kubernetes", image: "/icons/Kubernetes.svg" },
            { name: "Skaffold", image: "/icons/Skaffold.svg" },
            { name: "Kafka", image: "/icons/Kafka.svg" },
            { name: "RabbitMQ", image: "/icons/RabbitMQ.svg" },
            { name: "Centrifugo", image: "/icons/Centrifugo.svg" },
            { name: "AWS", image: "/icons/AWS.svg" },
            { name: "Kong", image: "/icons/Kong.svg" },
          ],
        },
        {
          name: "Frontend",
          items: [
            { name: "React", image: "/icons/React.svg" },
            { name: "Vue", image: "/icons/Vue.svg" },
          ],
        },
      ],
    } as AppData,
  };
}
