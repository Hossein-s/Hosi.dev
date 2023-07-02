import { Box, Container, HStack, Text, VStack } from "@chakra-ui/react";
import { Home2 } from "iconsax-react";
import { ProfileBox } from "../ProfileBox";
import { SectionTitle } from "../SectionTitle";

export function Hero() {
  return (
    <Box height="100vh" display="flex" flexDirection="row">
      <Container width="850px" marginX="auto" display="flex" flexDirection="row">
        <ProfileBox />

        <Box marginLeft="300px" paddingTop="40px">
          <SectionTitle title="INTRODUCE" Icon={Home2} />

          <VStack alignItems="flex-start" paddingTop="20px">
            <Text fontSize="2.7rem" color="#FFF">
              Hello, I am{" "}
              <Text as="span" color="#EEFC57">
                Hossein
              </Text>
              ,
            </Text>
            <Text fontSize="2.7rem" color="#FFF">
              a Software Engineer
            </Text>
          </VStack>

          <Text fontSize="0.9rem" marginTop="30px" color="#999999">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </Text>

          <HStack spacing={100} justifyContent="center" marginTop="70px">
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
        </Box>
      </Container>
    </Box>
  );
}
