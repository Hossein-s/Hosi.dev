"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

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

export function ChakraProviders({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
