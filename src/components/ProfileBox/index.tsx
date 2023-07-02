import { Box, Flex, Icon, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FaEnvelope, FaGithubAlt, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

export function ProfileBox() {
  return (
    <Box
      position="absolute"
      top="50%"
      transform="translateY(-50%)"
      border="1px solid #666666"
      borderRadius="16px"
      padding="1.5rem 1rem"
    >
      <Text fontSize="1.3rem" fontWeight="700" color="#fff" align="center" marginBottom="1rem">
        Hossein Sadeghi
      </Text>

      <Image
        src="/images/avatar.jpg"
        width={230}
        height={230}
        alt="Hossein Sadeghi"
        style={{ borderRadius: "16px" }}
      />

      <Text fontSize="0.9rem" fontWeight="400" align="center" marginY="0.5rem">
        hossein.sadeghir@gmail.com
      </Text>
      <Text fontSize="0.9rem" fontWeight="400" align="center">
        Based in Austria
      </Text>

      <Flex justifyContent="center" gap={10} marginTop={20}>
        {[FaLinkedinIn, FaWhatsapp, FaGithubAlt].map((icon) => (
          <Flex
            width="35px"
            height="35px"
            borderRadius="11px"
            backgroundColor="#666666"
            justifyContent="center"
            alignItems="center"
          >
            <Icon as={icon} color="#1F1F21" width={20} height={20} />
          </Flex>
        ))}
      </Flex>

      <Link
        display="flex"
        gap="10px"
        marginTop="15px"
        justifyContent="center"
        padding="10px"
        background="#EEFC57"
        borderRadius="12px"
        alignItems="center"
      >
        <Icon as={FaEnvelope} color="#1F1F21" />
        <Text fontSize="0.9rem" color="#1F1F21">
          HIRE ME!
        </Text>
      </Link>
    </Box>
  );
}
