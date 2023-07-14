import { useCenter } from "@/hooks/useCenter";
import { Box, Flex, HStack, Icon, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FaEnvelope, FaGithubAlt, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

export function ProfileBox({ onPadUpdate }: { onPadUpdate: (p: number) => void }) {
  const elementRef = useCenter(onPadUpdate);

  return (
    <Box
      ref={elementRef as any}
      display={{ base: "none", lg: "inline-flex" }}
      position="absolute"
      borderWidth={1}
      borderColor="stroke"
      borderRadius="16px"
      px={3}
      py={5}
      data-aos="fade-right"
      data-aos-delay="500"
    >
      <Text fontSize="xl" fontWeight="700" color="#fff" align="center" marginBottom="1rem">
        Hossein Sadeghi
      </Text>

      <Image
        src="/images/avatar.jpg"
        width={230}
        height={230}
        alt="Hossein Sadeghi"
        style={{ borderRadius: "16px" }}
      />

      <Text fontSize="sm" fontWeight="400" align="center" my={3}>
        hossein.sadeghir@gmail.com
      </Text>
      <Text fontSize="sm" fontWeight="400" align="center">
        Based in Austria
      </Text>

      <HStack justifyContent="center" gap={5} marginTop={5}>
        {[FaLinkedinIn, FaWhatsapp, FaGithubAlt].map((icon, idx) => (
          <Flex
            key={idx}
            w={10}
            h={10}
            borderRadius="11px"
            backgroundColor="bg.secondary"
            justifyContent="center"
            alignItems="center"
          >
            <Icon as={icon} color="#1F1F21" width={5} height={5} />
          </Flex>
        ))}
      </HStack>

      <Link
        display="flex"
        gap="10px"
        marginTop="15px"
        justifyContent="center"
        padding="10px"
        background="bg.yellow"
        borderRadius="12px"
        alignItems="center"
      >
        <Icon as={FaEnvelope} color="#1F1F21" />
        <Text fontSize="0.9rem" fontWeight="700" color="#1F1F21">
          HIRE ME!
        </Text>
      </Link>
    </Box>
  );
}
