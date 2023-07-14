import { ScreenContainer } from "@/components/ScreenContainer";
import { SectionTitle } from "@/components/SectionTitle";
import { AppData } from "@/types/AppData";
import { HStack, Text, VStack } from "@chakra-ui/react";
import { Home2 } from "iconsax-react";

export function HomeScreen({ pad, info }: { pad: number; info: AppData["basicInfo"] }) {
  return (
    <ScreenContainer h="100vh" p={`${pad}px`}>
      <SectionTitle title="INTRODUCE" Icon={Home2} />

      <VStack alignItems="flex-start" paddingTop="20px" gap={0}>
        <Text fontSize="5xl" color="#FFF" lineHeight={1.2} data-aos="fade-up" data-aos-delay="200">
          Hello, I am{" "}
          <Text as="span" color="#EEFC57">
            Hossein
          </Text>
          ,
        </Text>
        <Text fontSize="5xl" color="#FFF" lineHeight={1.2} data-aos="fade-up" data-aos-delay="400">
          a Software Engineer
        </Text>
      </VStack>

      <Text
        fontSize="0.9rem"
        marginTop="30px"
        color="#999999"
        data-aos="zoom-out"
        data-aos-delay="800"
      >
        {info.description}
      </Text>

      <HStack
        spacing={100}
        justifyContent="center"
        marginTop={10}
        data-aos="zoom-out"
        data-aos-delay="1000"
      >
        <VStack maxW="74px">
          <Text fontSize="3.7rem" color="#EEFC57">
            7+
          </Text>
          <Text fontSize="1rem" color="#999" align="center">
            YEARS OF EXPRIENCE
          </Text>
        </VStack>

        <VStack maxW="74px">
          <Text fontSize="3.7rem" color="#EEFC57">
            5+
          </Text>
          <Text fontSize="1rem" color="#999" align="center">
            PROJECTS COMPLETED
          </Text>
        </VStack>
      </HStack>
    </ScreenContainer>
  );
}
