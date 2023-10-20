import { ScreenContainer } from "@/components/ScreenContainer";
import { SectionTitle } from "@/components/SectionTitle";
import { useAppData } from "@/hooks/useAppData";
import { Flex, HStack, Icon, Link, Text, VStack } from "@chakra-ui/react";
import { Home2 } from "iconsax-react";
import Image from "next/image";
import * as icons from "react-icons/fa6";

export function HomeScreen({ pad }: { pad: number }) {
  const { description, socials } = useAppData();

  return (
    <ScreenContainer h={{ base: "auto", lg: "100vh" }} pt={`${pad}px`} mb={12} id="home">
      <SectionTitle title="INTRODUCE" Icon={Home2} />

      <VStack alignItems="flex-start" paddingTop="20px" gap={0}>
        <Text
          fontSize={{ base: "3xl", lg: "5xl" }}
          color="#FFF"
          lineHeight={1.2}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Hello, I am{" "}
          <Text as="span" color="#EEFC57" fontWeight="bold">
            Hossein
          </Text>
          ,
        </Text>
        <Text
          fontSize={{ base: "3xl", lg: "5xl" }}
          color="#FFF"
          lineHeight={1.2}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          a Software Engineer
        </Text>
      </VStack>

      <Flex
        display={{ base: "flex", lg: "none" }}
        justifyContent="center"
        mt={6}
        data-aos="zoom-out"
        data-aos-delay="500"
      >
        <Image
          src="/images/avatar.jpg"
          width={200}
          height={200}
          alt="Hossein Sadeghi"
          style={{ borderRadius: "16px" }}
        />
      </Flex>

      <Text
        fontSize="0.9rem"
        marginTop="30px"
        color="#999999"
        data-aos="zoom-out"
        data-aos-delay="800"
      >
        {description}
      </Text>

      <HStack
        display={{ base: "flex", lg: "none" }}
        justifyContent="center"
        data-aos="zoom-out"
        data-aos-delay="900"
        gap={5}
        marginTop={5}
      >
        {socials.map(({ url, icon, name }, idx) => (
          <Link
            key={idx}
            title={name}
            w={12}
            h={12}
            href={url}
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
            <Icon as={icons[icon as keyof typeof icons]} color="#1F1F21" width={7} height={7} />
          </Link>
        ))}
      </HStack>

      <HStack
        justifyContent="space-around"
        marginTop={10}
        data-aos="zoom-out"
        data-aos-delay="1000"
      >
        <VStack maxW="74px">
          <Text fontSize={{ base: "5xl", lg: "6xl" }} color="#EEFC57">
            7+
          </Text>
          <Text fontSize={{ base: "sm", lg: "md" }} color="#999" align="center">
            YEARS OF EXPRIENCE
          </Text>
        </VStack>

        <VStack maxW="74px">
          <Text fontSize={{ base: "5xl", lg: "6xl" }} color="#EEFC57">
            5+
          </Text>
          <Text fontSize={{ base: "sm", lg: "md" }} color="#999" align="center">
            PROJECTS COMPLETED
          </Text>
        </VStack>
      </HStack>
    </ScreenContainer>
  );
}
