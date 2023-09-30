import { useCenter } from "@/hooks/useCenter";
import { Box, Flex, HStack, Icon, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useMemo } from "react";
import { FaEnvelope, FaGithubAlt, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

export function ProfileBox({ onPadUpdate }: { onPadUpdate: (p: number) => void }) {
  const elementRef = useCenter(onPadUpdate);

  const socials = useMemo(
    () => [
      { icon: FaLinkedinIn, link: "https://www.linkedin.com/in/hossein-sadeghiam/" },
      { icon: FaGithubAlt, link: "https://github.com/Hossein-s" },
      { icon: FaInstagram, link: "https://www.instagram.com/hossein.sadeghiam/" },
    ],
    []
  );

  return (
    <Box
      ref={elementRef as any}
      display={{ base: "none", lg: "block" }}
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

      <HStack justifyContent="center" gap={5} marginTop={5}>
        {socials.map((social, idx) => (
          <Link
            key={idx}
            w={10}
            h={10}
            href={social.link}
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
            <Icon as={social.icon} color="#1F1F21" width={5} height={5} />
          </Link>
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
        href="mailto:mail@hosi.dev"
      >
        <Icon as={FaEnvelope} color="#1F1F21" />
        <Text fontSize="0.9rem" fontWeight="700" color="#1F1F21">
          Contact Me
        </Text>
      </Link>
    </Box>
  );
}
