import { ScreenContainer } from "@/components/ScreenContainer";
import { SectionTitle } from "@/components/SectionTitle";
import { AppData } from "@/types/AppData";
import { Box, Flex, Grid, GridItem, HStack, Image, Text, VStack } from "@chakra-ui/react";
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
            <Grid
              gridTemplateColumns={{
                base: "repeat(2, 1fr)",
                sm: "repeat(3, 1fr)",
                md: "repeat(4, 1fr)",
              }}
              gridTemplate={{ base: "repeat(4, 1fr)" }}
              gap="18px"
            >
              {items.map((skill, idx) => (
                <GridItem key={idx}>
                  <VStack
                    key={idx}
                    height="100%"
                    p="20px"
                    border="1px solid"
                    borderColor="stroke"
                    borderRadius="16px"
                  >
                    <Flex w="80px" h="80px" alignItems="center">
                      <Image src={skill.image} w="80px" h="80px" />
                    </Flex>
                    <Text
                      fontSize="md"
                      align="center"
                      mt="25px"
                      flexGrow="1"
                      display="flex"
                      alignItems="center"
                    >
                      {skill.name}
                    </Text>
                  </VStack>
                </GridItem>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
    </ScreenContainer>
  );
}
