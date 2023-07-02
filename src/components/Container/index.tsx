import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return <Box w={[500, 500, 500, 500]}>{children}</Box>;
}
