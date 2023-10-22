"use client";

import "@/app/globals.scss";
import { ProfileBox } from "@/components/ProfileBox";
import { StickyNavbar } from "@/components/StickyNavbar";
import { AppDataProvider } from "@/hooks/useAppData";
import { ExperienceScreen } from "@/screens/ExperienceScreen";
import { HomeScreen } from "@/screens/HomeScreen";
import { SkillsScreen } from "@/screens/SkillsScreen";
import { AppData } from "@/types/AppData";
import { loadAppData } from "@/utils/AppDataLoader";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import AOS from "aos";
import Head from "next/head";
import Script from "next/script";
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
    document.body.classList.add("js");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 400);
  }, []);

  useEffect(() => {
    // disable transition delay after first screen animations done
    // to avoid delays for items not visible on first screen when user scrolls
    setTimeout(() => {
      const style = document.createElement("style");
      style.textContent = `@media screen and (max-width: 480px) {
        [data-aos-delay] {
          transition-delay: 0s !important;
        }
      }`;

      document.head.appendChild(style);

      return () => {
        style.remove();
      };
    }, 1500);
  });

  return (
    <ChakraProvider theme={theme}>
      <AppDataProvider value={props}>
        <Head>
          <title>Hossein Sadeghi&apos;s Personal Page</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <noscript>
            <style>
              {`
                .page-wrapper {
                  visibility: visible !important;
                }
              `}
            </style>
          </noscript>
        </Head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-0XMT1C0GLB" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-0XMT1C0GLB');
        `}
        </Script>

        <Box
          width={{ base: "100%", lg: "1050px" }}
          mx="auto"
          pb="12"
          position="relative"
          overflow="hidden"
          className="page-wrapper"
        >
          <ProfileBox onPadUpdate={(p) => setOffsetTop(p)} />

          <StickyNavbar />

          <HomeScreen pad={offsetTop!} />

          <ExperienceScreen />

          <SkillsScreen />
        </Box>
      </AppDataProvider>
    </ChakraProvider>
  );
}

export function getStaticProps(): { props: AppData } {
  return { props: loadAppData() };
}
