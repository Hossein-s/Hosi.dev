"use client";

import { Hero } from "@/components/Hero";
import { StickyNavbar } from "@/components/StickyNavbar";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <Hero />

      <StickyNavbar />
    </Box>
  );
}
