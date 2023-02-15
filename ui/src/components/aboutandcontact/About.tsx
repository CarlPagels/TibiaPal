import React from "react";
import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading, Stack, Text } from "@chakra-ui/react";

export const About: React.FC = () => {
    return (
        <AccordionItem>
            <h2>
                <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                        About TibiaPal.com
                    </Box>
                    <AccordionIcon/>
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <Stack rowGap={5}>
                <Heading as="h4" size="md">
                    Welcome to TibiaPal.com everyone! :)
                </Heading>
                <Text>
                    TibiaPal was originally started as 'TibiaLootSplit.com', which most of you know and love.
                </Text>
                <Text>
                    I created TibiaLootSplit because I was tired of always manually splitting the teamhunt loot - and so
                    TibiaLootSplit.com was born. TibiaLootSplit's popularity spread like wildfire through the community
                    thanks
                    to word of mouth and quickly had tens of thousands of uses a month (thank you!). After a few months of
                    working on TibiaLootSplit.com, I decided that the tool was mature enough and most features I could
                    think of I already implemented.
                    That's when I decided to branch out and built TibiaPal.com!
                </Text>
                <Text>
                    TibiaPal.com is an
                    extension of TibiaLootSplit and has many more tools for the community to use to enhance their Tibia
                    experience! I continue working on a number of tools and requests (keep them coming!), so please stay
                    tuned
                    for future Tibia tool updates :)
                    Much love and see you in Tibia!
                </Text>
                <Text as="b">
                    Yours,
                    Kusnier
                </Text>
                </Stack>


            </AccordionPanel>
        </AccordionItem>);
};
