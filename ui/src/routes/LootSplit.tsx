import {
    Card, CardBody, CardHeader,
    Center,
    Heading,
} from "@chakra-ui/react";
import React from "react";
import { LootSplitForm } from "../components/lootsplit/LootSplitForm";
import { Instructions } from "../components/lootsplit/Instructions";

export const LootSplit: React.FC = () => {

  return (
      <Center>
          <Card w={"80%"} my={5} p={5}>
              <CardHeader>
                  <Center>
                      <Heading>
                          Split your loot!
                      </Heading>
                  </Center>
              </CardHeader>
              <CardBody>
                  <Instructions />
                  <LootSplitForm />
              </CardBody>
          </Card>
      </Center>

  );
};
