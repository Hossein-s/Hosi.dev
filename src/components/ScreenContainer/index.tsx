import { Box, PropsOf } from "@chakra-ui/react";
import React, { HTMLProps, ReactNode } from "react";

export function ScreenContainer({ children, ...props }: PropsOf<typeof Box>) {
  return (
    <Box {...props} ml="320px" mr="100px">
      {children}
    </Box>
  );
}
