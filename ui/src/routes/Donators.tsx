import React from "react";
import { Box, Card, CardBody, CardHeader, Center, Heading, ListItem, OrderedList, Stack, Text } from "@chakra-ui/react";

export const Donators: React.FC = () => {
    return (
        <Center>
            <Card w={"80%"} my={5}>
                <CardHeader>
                    <Center>
                        <Heading>
                            Donators
                        </Heading>
                    </Center>
                </CardHeader>
                <CardBody>
                    <Stack rowGap={2}>
                        <Text align={"center"}>
                            If you'd like to donate some Tibia Coins to support the site, please transfer them to my
                            character 'Kusnierr'.
                        </Text>
                        <Text align={"center"}>
                            <Text as={"b"}>
                                THANK YOU very much to everybody who donated, this really helps out the site and allows me to
                                continue supporting it and working on new features!
                            </Text>
                            <Text>
                                Below you can find the list of all donators:
                            </Text>
                        </Text>
                        <OrderedList px={10}>
                            <ListItem>Veerin - 1125 TC</ListItem>
                            <ListItem>Czubos Smifos - 500 TC</ListItem>
                            <ListItem>Mexican Lover - 350 TC</ListItem>
                            <ListItem>Huzky - 275 TC</ListItem>
                            <ListItem>Puzolente - 250 TC</ListItem>
                            <ListItem>Omen of Nature - 250 TC</ListItem>
                            <ListItem>J.M Larry - 175 TC</ListItem>
                            <ListItem>Bandak Starkiller - 150 TC</ListItem>
                            <ListItem>Iron Raiden - 100 TC</ListItem>
                            <ListItem>Zekusin - 100 TC</ListItem>
                            <ListItem>Aqual Il - 100 TC</ListItem>
                            <ListItem>Roxxsan - 75 TC</ListItem>
                            <ListItem>Gancat - 50 TC</ListItem>
                            <ListItem>Damon Aesir - 50 TC</ListItem>
                            <ListItem>Fu'Jin - 50 TC</ListItem>
                            <ListItem>Sir Casey - 50 TC</ListItem>
                            <ListItem>Mutik - 50 TC</ListItem>
                            <ListItem>Muhrip - 50 TC</ListItem>
                            <ListItem>Royal Dragon - 50 TC</ListItem>
                            <ListItem>Marciela - 50 TC</ListItem>
                            <ListItem>Siro Wymon - 25 TC</ListItem>
                            <ListItem>Tonny Eo Peste - 25 TC</ListItem>
                            <ListItem>Fabacae Dipsacace Hyacinthae - 25 TC</ListItem>
                            <ListItem>Perlas Cultivadas - 25 TC</ListItem>
                            <ListItem>Edo End - 25 TC</ListItem>
                            <ListItem>Joha Ther - 25 TC</ListItem>
                        </OrderedList>
                    </Stack>
                </CardBody>

            </Card>
        </Center>
    );
};
