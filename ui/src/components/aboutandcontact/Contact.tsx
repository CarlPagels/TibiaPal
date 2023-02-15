import React from "react";
import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Highlight,
    Link,
    Text
} from "@chakra-ui/react";

export const Contact: React.FC = () => {
    return (
        <AccordionItem>
            <h2>
                <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                        Contact information
                    </Box>
                    <AccordionIcon/>
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <Text as="b">
                    In case of any issues, questions, comments or suggestions, please feel free to reach out to me
                    using any
                    of the methods below.
                </Text>
                <br/>
                <br/>
                <Highlight query="Kusnierr" styles={{ px: "2", rounded: "full", bg: "red.100" }}>
                    You can find me in Tibia on Olima on character Kusnierr
                </Highlight>
                <br/>
                <Highlight query="tibiapalcontact@gmail.com" styles={{ px: "2", rounded: "full", bg: "red.100" }}>
                    You can email me at tibiapalcontact@gmail.com
                </Highlight>
                <br/>
                <Highlight query="@Kusnier#4979" styles={{ px: "2", rounded: "full", bg: "red.100" }}>
                    You can find me on Discord, @Kusnier#4979
                </Highlight>
                <br/>
                <Highlight query="discord.gg/f2hESCbgvz" styles={{ px: "2", rounded: "full", bg: "red.100" }}>
                    You can join TibiaPal Discord server,discord.gg/f2hESCbgvz
                </Highlight>
                <br/>
                <Highlight query="twitch.tv/Kusnierr" styles={{ px: "2", rounded: "full", bg: "red.100" }}>
                    You can also find me on Twitch, twitch.tv/Kusnierr
                </Highlight>

            </AccordionPanel>
        </AccordionItem>);
};
