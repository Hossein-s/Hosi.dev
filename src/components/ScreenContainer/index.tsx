import { Box, PropsOf } from "@chakra-ui/react";

export function ScreenContainer({ children, ...props }: PropsOf<typeof Box>) {
  return (
    <Box
      {...props}
      px={{ base: "30px", lg: 0 }}
      ml={{ base: 0, lg: "320px" }}
      mr={{ base: 0, lg: "100px" }}
    >
      {children}
    </Box>
  );
}
