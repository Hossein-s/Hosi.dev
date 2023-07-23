import { ScreenContainer } from "@/components/ScreenContainer";
import { SectionTitle } from "@/components/SectionTitle";
import { AppData } from "@/types/AppData";
import { Box, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { MainComponent } from "iconsax-react";

export function SkillsScreen({ skillCategories }: { skillCategories: AppData["skillCategories"] }) {
  return (
    <ScreenContainer id="skills">
      <SectionTitle title="DIGITAL SKILLS" Icon={MainComponent} />

      <Text
        fontSize={{ base: "3xl", lg: "4xl" }}
        color="text.primary"
        mt={7}
        mb={7}
        data-aos="fade-left"
      >
        Digital{" "}
        <Text as="span" color="text.accent">
          Skills
        </Text>
      </Text>

      <Box>
        {skillCategories.map(({ name, items }, idx) => (
          <Box key={idx} data-aos="zoom-out">
            <Text fontSize="xl" mb="20px" mt="40px" color="text.accent">
              {name}
            </Text>
            <HStack gap="18px" flexWrap="wrap">
              {items.map((skill, idx) => (
                <VStack
                  key={idx}
                  width="134px"
                  p="20px"
                  border="1px solid"
                  borderColor="stroke"
                  borderRadius="16px"
                >
                  <Flex w="80px" h="80px" alignItems="center">
                    <Image src={skill.image} w="80px" h="80px" />
                  </Flex>
                  <Text fontSize="md" mt="25px">
                    {skill.name}
                  </Text>
                </VStack>
              ))}
            </HStack>
          </Box>
        ))}
      </Box>
    </ScreenContainer>
  );
}
