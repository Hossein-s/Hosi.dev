import { Box, Text } from "@chakra-ui/react";
import { Icon } from "iconsax-react";

export function SectionTitle({ title, Icon }: { title: string; Icon: Icon }) {
  return (
    <Box
      display="inline-flex"
      border="1px solid #666666"
      borderRadius={16}
      alignItems="center"
      padding="10px 15px"
      gap="10px"
      data-aos="fade-left"
    >
      <Icon size="20" color="#E2E2E2" />
      <Text fontSize="0.9rem" color="#E2E2E2">
        {title}
      </Text>
    </Box>
  );
}
