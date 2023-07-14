import { Box, Text } from "@chakra-ui/react";

export interface TimelineItemProps {
  period: string;
  position: string;
  company?: string;
  current: boolean;
}

export function TimelineItem({ period, position, company, current }: TimelineItemProps) {
  return (
    <Box
      borderLeftWidth={2}
      borderLeftColor="text.secondary"
      position="relative"
      pb={10}
      pl={9}
      _before={{
        content: "''",
        position: "absolute",
        left: "-10px",
        top: 0,
        bg: current ? "text.accent" : "text.secondary",
        w: 5,
        h: 5,
        borderRadius: 10,
      }}
    >
      <Text fontSize="sm" color={current ? "text.accent" : "text.secondary"}>
        {period}
      </Text>

      <Text fontSize="md" color="text.primary" mt={6}>
        {position}
      </Text>

      <Text fontSize="sm" color="text.secondary" mt={2}>
        {company}
      </Text>
    </Box>
  );
}
