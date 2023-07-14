import { ScreenContainer } from "@/components/ScreenContainer";
import { SectionTitle } from "@/components/SectionTitle";
import { Button, Grid, GridItem, Input, Text, Textarea } from "@chakra-ui/react";
import { Sms } from "iconsax-react";

export function ContactScreen() {
  return (
    <ScreenContainer mt="100px">
      <SectionTitle title="CONTACT ME" Icon={Sms} />

      <Text
        fontSize={{ base: "3xl", lg: "4xl" }}
        color="text.primary"
        mt={7}
        mb={7}
        data-aos="fade-left"
      >
        Contact{" "}
        <Text as="span" color="text.accent">
          me!
        </Text>
      </Text>

      <Text fontSize="xl" color="text.primary" mt={7} mb={7} data-aos="fade-left">
        <a href="mailto:hossein.sadeghir@gmail.com">hossein.sadeghir@gmail.com</a>
      </Text>

      <Grid
        gap="15px"
        templateAreas={{
          base: "'.' '.' 'row2' 'row3'",
          lg: "'. .' 'row2 row2' 'row3 row3'",
        }}
        mb="50px"
        data-aos="zoom-out"
      >
        <GridItem>
          <Input
            type="text"
            name="name"
            placeholder="Full name"
            border="1px solid"
            borderColor="stroke"
            borderRadius="12px"
            h="45px"
          />
        </GridItem>
        <GridItem>
          <Input
            type="text"
            name="email"
            placeholder="Email"
            border="1px solid"
            borderColor="stroke"
            borderRadius="12px"
            h="45px"
          />
        </GridItem>
        <GridItem area="row2">
          <Textarea
            name="message"
            placeholder="Message"
            rows={6}
            border="1px solid"
            borderColor="stroke"
            borderRadius="12px"
          />
        </GridItem>
        <GridItem area="row3">
          <Button
            bg="bg.yellow"
            colorScheme="yellow"
            fontSize="md"
            fontWeight="bold"
            w="100%"
            h="45px"
          >
            Send message
          </Button>
        </GridItem>
      </Grid>
    </ScreenContainer>
  );
}
