import { AppData } from "@/types/AppData";
import { HStack, Icon, Link } from "@chakra-ui/react";
import Image from "next/image";

export function Socials({ items }: { items: AppData["socials"] }) {
  return (
    <HStack justifyContent="center" gap={5} marginTop={5}>
      {items.map(({ url, icon, name }, idx) => (
        <Link
          key={idx}
          title={name}
          w={10}
          h={10}
          href={url}
          color="#1F1F21"
          target="_blank"
          display="flex"
          borderRadius="11px"
          backgroundColor="bg.secondary"
          justifyContent="center"
          alignItems="center"
          _hover={{
            backgroundColor: "gray.500",
          }}
        >
          <Image width={20} height={20} src={icon} alt={name} />
        </Link>
      ))}
    </HStack>
  );
}
